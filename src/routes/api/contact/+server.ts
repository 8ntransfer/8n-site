import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import multer from 'multer';
import { writeFileSync } from 'fs';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
	// const emailContent = await request.json();
	const formData = await request.formData();

	// console.log(formData);

	// console.log(emailContent);

	// console.log(emailContent.attachments[0]);

	// const fileToUpload = emailContent.attachments;
	// writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

	// const transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	port: 465,
	// 	host: 'smtp.gmail.com',
	// 	auth: {
	// 		user: '8nmailer@gmail.com',
	// 		pass: 'tmrdipzztwntsfux'
	// 	},
	// 	secure: true
	// });

	// const mailOptionsForCorentin = {
	// 	from: 'hello@example.com',
	// 	to: 'corentin.gobbo@gmail.com',
	// 	subject: 'Nouveau message du site 8N',
	// 	text: `
	// 		Type de contact: ${emailContent.messageType}
	// 		Email: ${emailContent.email}
	// 		Message: ${emailContent.message}`,
	// 	html: `
	// 		<ul>
	// 		<li>Nom: <b>${emailContent.nom}</b></li>
	// 		<li>Prénom: <b>${emailContent.prenom}</b></li>
	// 		<li>Type de contact: <b>${emailContent.messageType}</b></li>
	// 		<li>Email: <b>${emailContent.email}</b></li>
	// 		</ul>

	// 		<hr />
	// 		<p>Message: <em>${emailContent.message}</em></p>`
	// };

	// const info = await transporter.sendMail(mailOptionsForCorentin);

	return json({ message: 'ok' });
}
