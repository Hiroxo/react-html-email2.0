import React from 'react'

const ConditionalClose = condition => (
	<React.Fragment>
		&#60;&#33;&#45;&#45;&#91;if {condition}&#93;&#62;
					&#60;/td&#62;
				&#60;/tr&#62;
			&#60;/table&#62;
		&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
	</React.Fragment>
);


export default ConditionalClose;
