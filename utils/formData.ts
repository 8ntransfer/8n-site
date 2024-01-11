export const upload = async ({ request }) => {
	const data = await request.formData();
	const attachments = data.get('attachments');

	return {
		success: true
	};
};
