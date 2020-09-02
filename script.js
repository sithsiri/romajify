function romajify(input, output) {
	let out = input.value;
	for (let i = 0; i < hiragana.length; i++) {
		out = out.replaceAll(hiragana[i][0], hiragana[i][1]);
	}
	output.innerHTML = out;
}

// https://stackoverflow.com/a/6714233/5155509
String.prototype.replaceAll = function(str1, str2, ignore)
{
	return this.replace(
		new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),
		(ignore?"gi":"g")),
		(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2
	);
}
