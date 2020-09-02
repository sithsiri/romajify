function romajify(input, output) {
	let out = input.value;
	for (let i = 0; i < hiragana.length; i++) {
		out.replaceAll(hiragana[i][0], hiragana[i][1]);
	}
	output.innerHTML = out;
}

// https://stackoverflow.com/questions/2116558/fastest-method-to-replace-all-instances-of-a-character-in-a-string
String.prototype.replaceAll = function(str1, str2, ignore) 
{
	return this.replace(
		new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),
		(ignore?"gi":"g")),
		(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2
	);
} 
