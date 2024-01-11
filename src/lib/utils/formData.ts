import fs, { writeFileSync } from 'fs';
import nodemailer from 'nodemailer';

const messageTypes = {
	'probleme-chantier': 'Problème de chantiers',
	sinistre: "Expertise d'assuré lors de sinistre",
	'reception-travaux': 'Assistance à réception de travaux',
	'conseils-techniques': 'Assistance et conseils techniques',
	judiciaire: "Assistance d'expertise judiciaire",
	'trouble-voisinage': 'Trouble anormal de voisinage',
	autres: 'Autres questions'
};

export const upload = async ({ request }) => {
	const data = await request.formData();
	const attachments = data.getAll('attachments');

	const prenom: string = data.get('prenom');
	const nom: string = data.get('nom');
	const email: string = data.get('email');
	const message: string = data.get('message');
	const messageType: string = data.get('messageType');

	for (const attachment of attachments) {
		writeFileSync(`static/temp/${attachment.name}`, Buffer.from(await attachment.arrayBuffer()));
	}

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

	const mailOptionsForCorentin = {
		from: 'hello@example.com',
		to: '8n.expertisebatiment@gmail.com',
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
			<p>Message: <em>${message}</em></p>`,
		attachments: attachments.map((attachment: File) => ({
			filename: attachment.name,
			path: `static/temp/${attachment.name}`
		}))
	};

	const info = await transporter.sendMail(mailOptionsForCorentin);

	// delete all files in /static/temp
	const directory = 'static/temp';
	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(`${directory}/${file}`, (err) => {
				if (err) throw err;
			});
		}
	});

	return {
		success: true,
		info
	};
};
