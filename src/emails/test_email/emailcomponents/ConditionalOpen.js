import React from 'react'

const ConditionalOpen = (condition, width) => (
	<React.Fragment>
		&#60;&#33;&#45;&#45;&#91;if {condition}&#93;&#62;
			&#60;table border="0" cellpadding="0" cellspacing="0" width="{width}" style="width:{width}px;margin:0 auto;"&#62;
				&#60;tr&#62;
					&#60;td align="center"&#62;
		&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
	</React.Fragment>
);


export default ConditionalOpen;
