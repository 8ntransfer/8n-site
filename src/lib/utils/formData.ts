import fs, { writeFileSync } from 'fs';
import nodemailer from 'nodemailer';
import path from 'path';

const messageTypes = {
	'probleme-chantier': 'Problème de chantiers',
	sinistre: "Expertise d'assuré lors de sinistre",
	'reception-travaux': 'Assistance à réception de travaux',
	'conseils-techniques': 'Assistance et conseils techniques',
	judiciaire: "Assistance d'expertise judiciaire",
	'trouble-voisinage': 'Trouble anormal de voisinage',
	autres: 'Autres questions'
};

type MailOptions = {
	from: string;
	to: string;
	subject: string;
	text: string;
	html: string;
	attachments?: any[];
};

export const upload = async ({ request }) => {
	const data = await request.formData();
	const attachments = data.getAll('attachments');

	const prenom: string = data.get('prenom');
	const nom: string = data.get('nom');
	const email: string = data.get('email');
	const message: string = data.get('message');
	const messageType: string = data.get('messageType');

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: '8nmailer@gmail.com',
			pass: 'tmrdipzztwntsfux'
		},
		secure: true
	});

	let mailOptionsForCorentin: MailOptions = {
		from: 'hello@example.com',
		to: 'corentin.gobbo@gmail.com',
		subject: 'Nouveau message du site 8N',
		text: `
			Type de contact: ${messageTypes[messageType]}
			Email: ${email}
			Message: ${message}`,
		html: `
			<ul>
			<li>Nom: <b>${nom}</b></li>
			<li>Prénom: <b>${prenom}</b></li>
			<li>Type de contact: <b>${messageTypes[messageType]}</b></li>
			<li>Email: <b>${email}</b></li>
			</ul>

			<hr />
			<p>Message: <em>${message}</em></p>`
	};

	if (attachments.length !== 0 && attachments[0].size !== 0) {
		const attachmentsToSend = [];
		for (const attachment of attachments) {
			attachmentsToSend.push({
				filename: attachment.name,
				content: Buffer.from(await attachment.arrayBuffer()),
				encoding: 'base64'
			});
		}
		mailOptionsForCorentin = {
			...mailOptionsForCorentin,
			attachments: attachmentsToSend
		};
	}

	const info = await transporter.sendMail(mailOptionsForCorentin);

	return {
		success: true,
		info
	};
};
