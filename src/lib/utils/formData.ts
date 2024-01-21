export const upload = async ({ request }) => {
	try {
		const myHeaders = new Headers();
		myHeaders.append(
			'Authorization',
			'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ4YTYzYmM0NzY3Zjg1NTBhNTMyZGM2MzBjZjdlYjQ5ZmYzOTdlN2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwNDMyMjUzNjAzODM1MTc3MTk3IiwiZW1haWwiOiJjb3JlbnRpbi5nb2Jib0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjhTSjd5WkV6ZW92V3FLY0g3ckEyUkEiLCJuYmYiOjE3MDU4MzIyMzUsImlhdCI6MTcwNTgzMjUzNSwiZXhwIjoxNzA1ODM2MTM1LCJqdGkiOiJjMDE2MWY4NTU5NjE1YjZlN2E5YzVjMjVjZmYzZjhhOWU2M2Q5ZTMyIn0.O6XYSNTl7EE7wYt-XSHM3G-6udS1u65ZPFilYONn_wJDpDZDIGH7FEL8krrqVWNjjsXWVTSr9GviYWzXpQWiOTawMJuafQJYpUcOmrqtFvbIZxYURpLm62r0YCjPem9j8hmiOkEXtrOLOsWGzUPDX9YtoFiiTF5HM4GDaFPszKhdTVxN2vYQbQGE97IFQi1nA5ajeeqdyc-MMq9yPDD-KhsenRHWoBRWrEx_VajGk5mGYWr1wo21Q4bowkNpnmxGx2nvFP-rk3S9umpsC6LtSTVbdeq2t_-0tK-aXgBI6m0GWfYQM7hRsuMY3shX_1qWWpJTG2N5OQTDtrpJuHABVQ'
		);

		const formData = await request.formData();

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: formData,
			redirect: 'follow'
		};

		const res = await fetch('https://mailer-6s7hvevdhq-uc.a.run.app', requestOptions);

		const responseText = await res.text();
		console.log(responseText);

		// ---------------------------------------
		// const data = await request.formData();

		// const formData = new FormData();

		// formData.append('nom', data.get('nom'));
		// formData.append('prenom', data.get('prenom'));
		// formData.append('email', data.get('email'));
		// formData.append('message', data.get('message'));
		// formData.append('messageType', data.get('messageType'));

		// // send a post request to https://mailer-6s7hvevdhq-uc.a.run.app
		// // with the form data and content type form data

		// await fetch('https://mailer-6s7hvevdhq-uc.a.run.app', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${baererToken}` },
		// 	body: formData
		// });

		return {
			status: 200,
			message: 'Message envoyé'
		};
	} catch (error) {
		console.log(error);
		return {
			status: 500,
			message: "Erreur lors de l'envoi du message"
		};
	}
};
