$(function() {
	var games = [];
	for (var game in localStorage) {
		games.push(JSON.parse(localStorage.getItem(game)));
	}
	$("#gameTemplate").tmpl(games).appendTo("#deals");
});