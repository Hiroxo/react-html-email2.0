import React from 'react'

const HeaderExtra = () => {
	const extrastyle=`@media only screen and (max-width:480px) {
				@-ms-viewport {
						width: 320px;
				}
				@viewport {
						width: 320px;
				}
			}`.trim()
	return(
		<React.Fragment>
		&#60;&#33;&#45;&#45;&#91;if !mso&#93;&#62;
			<style type="text/css">
				{extrastyle}
			</style>
			&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
			&#60;&#33;&#45;&#45;&#91;if gte mso 9&#93;&#62;
			<xml>
			&#60;o:OfficeDocumentSettings&#62;
			&#60;o:AllowPNG/&#62;
			&#60;o:PixelsPerInch&#62;96&#60;/o:PixelsPerInch&#62;
			&#60;/o:OfficeDocumentSettings&#62;
			</xml>
			&#60;&#33;&#91;endif&#93;&#45;&#45;&#62;
		</React.Fragment>
	);
}
export default HeaderExtra;
