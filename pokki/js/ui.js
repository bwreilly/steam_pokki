$(function() {
	var games = [];
	for (index in localStorage) {
		games.push(JSON.parse(localStorage[index]));
	}
	$("#gameTemplate").tmpl(games).appendTo("#deals");
});