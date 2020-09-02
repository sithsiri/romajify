function romajify(input, output) {
	let out = input.value;
	for (let char in hiragana) {
		out.replace(char, hiragana[char]);
	}
	output.innerHTML = out;
}
