import React from 'react'
import { Email, Box, Item, Span, A, renderEmail, Image , Td, Tr} from "react-html-email";



const ThreeColumn = props => {
	if (props.style != undefined ){
		props.style.display='inline-block'
	}
	if (props.maxWidth!= undefined){

	}

	return(
		<Tr>
			<Td align='center' maxWidth={props.maxWidth} style={props.tablestyle}>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					<table width={props.width} cellPadding={props.cellPadding} cellSpacing={props.cellSpacing}
						align={props.align} style={{width:props.width, maxWidth:props.maxWidth}}>
					<tr>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={props.bgcolor}
					align={props.align}
					valign={props.valign}
					style={props.style}>
					{props.children[0]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={props.bgcolor}
					align={props.align}
					valign={props.valign}
					style={props.style}>
					{props.children[1]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={props.bgcolor}
					align={props.align}
					valign={props.valign}
					style={props.style}>
					{props.children[2]}
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

export default ThreeColumn;

ThreeColumn.defaultProps = {
	className: undefined,
	bgcolor: undefined,
	align: 'center',
	valign: 'top',
	style: {},
	children: undefined,
	tablestyle:{},
	cellPadding:0,
	cellSpacing:0
};
