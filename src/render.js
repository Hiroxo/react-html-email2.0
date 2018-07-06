const { ACTIVE_EMAIL_ID } = process.env;

console.info("ACTIVE_EMAIL_ID: ", ACTIVE_EMAIL_ID);

const path = true ? `emailRender` : "foo";

// const { emailRender } = require(`./${path}`);

const { emailRender } = require(`./emails/${ACTIVE_EMAIL_ID}/index.js`);
//
// const emailRender = async () => {
// 	console.info("emailRender: ");
//
// 	return "Hi";
// };

const render = async () => {
	console.info("render: ", emailRender);
	const email = await emailRender();
	console.info("email: ", email);
};

render().then(() => console.info("Done."));
