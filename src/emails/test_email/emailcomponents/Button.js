import React from "react";
import { Email, Box, Item, Span, A, renderEmail, Image , Td, Tr} from "react-html-email";

const Button = props => {
	return(
		<A textDecoration={props.textDecoration} href={props.href}
			download={props.download} color={props.color}>
			<Box>
				<Item align={props.align} className={props.className}
					bgcolor={props.bgcolor} valign={props.valign}
					height={props.height} width={props.width}
					style={props.style}>
					{props.children}
				</Item>
			</Box>
		</A>
	)
}

export default Button;

Button.defaultProps = {
	className: undefined,
	bgcolor: undefined,
	align: 'center',
	valign: 'top',
	style: undefined,
	children: undefined,
	textDecoration: 'underline',
	href: undefined,
	download: undefined,
	color: undefined,
};
