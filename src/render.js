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
var pretty = require('pretty');
const render = async () => {
	let start = Date.now();
	console.info("render: ", emailRender);
	let email = await emailRender();
	//email = email.replace(new RegExp("&lt;", 'g'), "<").replace(new RegExp("&gt;", 'g'), ">");
	email = email.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&amp;/g, "&");
	console.info(pretty(email));//for development or debugging, comment out for shorter code
	console.info(typeof email);
	//console.info("email: ", email);
	console.info(Date.now()-start);
};

render().then(() => console.info("Done."));
