import React, { Component } from "react";

const Image = props => {
		const { imageUrl } = props.src;
		return (
			<img src={imageUrl} />
		);
}
export default Image;
