exports.stringToColor = function(str) {
	// str to hash
	if (!str) {
		debugger;
		return "#f00";
	}
	for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
	// int/hash to hex
	for (var i = 0, color = "#"; i < 3; color += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
	return color;
}

exports.shortenText = function(text, count) {
	if (text.length > count) {
		return text.substring(0, count - 3) + "...";
	}
	return text;
} 