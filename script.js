function romajify(input, output) {
	let out = input.value;
	for (let i = 0; i < hiragana.length, i++) {
		out.replace(hiragana[i][0], hiragana[i][1]);
	}
	output.innerHTML = out;
}
