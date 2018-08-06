import React from 'react'
import { Email, Box, Item, Span, A, renderEmail, Image , Td, Tr} from "./lib";



const ThreeColumn = ({ style, width, maxWidth, tablestyle, cellPadding, cellSpacing, align, valign, bgcolor, children })  => {
	if (style != undefined ){
		style.display='inline-block'
	}

	return(
		<Tr>
			<Td align='center' maxWidth={maxWidth} style={tablestyle}>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					<table width={width} cellPadding={cellPadding} cellSpacing={cellSpacing}
						align={align} style={{width:width, maxWidth:maxWidth}}>
					<tr>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={bgcolor}
					align={align}
					valign={valign}
					style={style}>
					{children[0]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={bgcolor}
					align={align}
					valign={valign}
					style={style}>
					{children[1]}
				</div>
					&#60;&#33;&#45;&#45;&#91;if (gte mso 9)|(IE)&#93;&#62;
					</td>
					<td width="33%" valign="top">
					&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
				<div bgcolor={bgcolor}
					align={align}
					valign={valign}
					style={style}>
					{children[2]}
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
