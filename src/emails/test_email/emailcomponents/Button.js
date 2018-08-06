import React from "react";
import { Email, Box, Item, Span, A, renderEmail, Image , Td, Tr} from "./lib";

const Button = ({textDecoration, href, download, color, align, className, bgcolor, valign, height, width, style, children}) => (
	<A textDecoration={textDecoration} href={href}
		download={download} color={color}>
		<Box>
			<Item align={align} className={className}
				bgcolor={bgcolor} valign={valign}
				height={height} width={width}
				style={style}>
				{children}
			</Item>
		</Box>
	</A>
)


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
