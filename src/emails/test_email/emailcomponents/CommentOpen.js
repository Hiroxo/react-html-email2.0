import React from 'react'

const CommentOpen = condition => {
	return(
		<React.Fragment>
			&#60;&#33;&#45;&#45;&#91;{condition}&#93;&#62;
		</React.Fragment>
	)
}
export default CommentOpen;
