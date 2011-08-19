$(function() {
	var games = [];
	for (var game in localStorage) {
		games.push(JSON.parse(localStorage.getItem(game)));
	}
	$("#gameTemplate").tmpl(games).appendTo("#deals");
	$("span, h4").click( function(e) {
		pokki.openURLInDefaultBrowser('http://store.steampowered.com/');
		pokki.closePopup();
	});
	$(".close").click( function(e) {
		pokki.closePopup();
	});
});