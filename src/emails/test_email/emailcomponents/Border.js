import React from 'react'
import { Item } from 'react-html-email'

const Border = props => {
	const style = {backgroundColor:props.bgcolor,borderCollapse:'collapse',  msoLineHeightRule: 'exactly', lineHeight:'1px' }

	return(
			<Item height='1' style={style} valign='top' width='600'>
			&#60;&#33;&#45;&#45;&#91;if gte mso 15&#93;&#62;
		{'&nbsp;'}
		&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
	</Item>
	);
};

export default Border;
