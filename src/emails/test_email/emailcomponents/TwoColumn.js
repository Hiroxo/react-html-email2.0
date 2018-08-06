import React from 'react'
import { Email, Box, Item, Span, A, renderEmail, Image , Td, Tr} from "react-html-email";



const TwoColumn = props => {
	let style = props.style;
		props.style.display='inline-block'
	return(
		<Tr>
			<Td align='center' maxWidth={props.width} style={props.tablestyle}>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					<table width={props.width} cellPadding={props.cellPadding} cellSpacing={props.cellSpacing}
						align={props.align} style={props.tablestyle}>
					<tr>
					<td width="50%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={props.bgcolor}
					align={props.align}
					valign={props.valign}
					style={props.style}>
					{props.children[0]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					<td width="50%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={props.bgcolor}
					align={props.align}
					valign={props.valign}
					style={props.style}>
					{props.children[1]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					</tr>
					</table>
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
			</Td>
		</Tr>
	)
}

export default TwoColumn;

TwoColumn.defaultProps = {
	className: undefined,
	bgcolor: undefined,
	align: 'center',
	valign: 'top',
	style: {},
	children: undefined,
	tablestyle:{ width:'600px'},
	cellPadding:0,
	cellSpacing:0
};
