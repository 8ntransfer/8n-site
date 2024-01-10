export const upload = async ({ request }) => {
	const data = await request.formData();
	const attachments = data.get('attachments');

	console.log(data.get('prenom'));
	console.log(data.get('nom'));
	console.log(data.get('email'));
	console.log(data.get('message'));
	console.log(data.get('messageType'));
	console.log(data.get('attachments'));

	console.log(attachments);

	return {
		success: true
	};
};
