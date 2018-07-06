import React from "react";
import axios from "axios";
import { Email, Item, Span, A, renderEmail } from "react-html-email";

const accessToken =  "e51266821001c524bf56280a483b8f37b9003c2da39b044e27ce2955fb15cd0c";
const spaceId = "raisos7rtptw";
const entryId = "5h825UTWacgaIqwGcEgqoU";

export const emailRender = async () => {
	console.info("emailRender: ");

	const { data: { fields: { header } } } = await axios.get(`https://cdn.contentful.com/spaces/${spaceId}/entries/${entryId}?access_token=${accessToken}`)

	const emailHtml = renderEmail(
		<Email
			title="Hello, Email!"
		>
			<Span>{header}</Span>
			<Span>This is an example email.</Span>
		</Email>
	);

	return emailHtml;
};
