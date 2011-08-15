$(function() {
	var games = [];
	for (index in localStorage) {
		games.push($.parseJSON(localStorage[index]));
	}
	$("#gameTemplate").tmpl(games).appendTo("#deals");
});