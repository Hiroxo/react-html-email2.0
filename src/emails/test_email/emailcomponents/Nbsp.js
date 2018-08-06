

const Nbsp = number => {
	let spaces = ''
	let space = '&zwnj;&nbsp;'
	for (let i=0;i<number;i++) {
		spaces.concat(space)
	}
	console.log(spaces)
	return (spaces);
}

export default Nbsp;
