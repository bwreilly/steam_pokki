var loadGames = function() {
	var refreshid;
	var games = [];
	var addGame = function(i, gamediv) {
		var fmt = function(val) {
			return val.text().trim().split("$");
		};
		var title = $(gamediv).find("h4").text().trim();
		var game = {
			title: title,
			link: $(gamediv).find("a").attr("href"),
			oldprice: fmt($(gamediv).find("div.tab_price"))[1],
			newprice: fmt($(gamediv).find("div.tab_price"))[2],
			discount: fmt($(gamediv).find("div.tab_discount.discount_pct"))[0],
			genre: $(gamediv).find("div.genre_release").text().split("-")[0].trim(),
			release: ($(gamediv).find("div.genre_release").text().split("-")[1] || "").trim(),
			isnew: !(localStorage.hasOwnProperty(title)),
			id: refreshid
		};
		games.push(game);
	};
	var refreshGames = function() {
		var num = 0;
		$.get('http://store.steampowered.com', function(data) { // http://store.steampowered.com
			if (data != undefined && data != null) {
				refreshid = (((1+Math.random())*0x10000)|0).toString(16);
				$(data).find("div#tab_Discounts_items").children().each(addGame);
				var update = function() {
					for (var i = games.length - 1; i >= 0; i--) {
						var game = games.pop();
						if (game.isnew) { 
							num++; 
						};
						localStorage.setItem(game.title, JSON.stringify(game));;
					};
					pokki.setIconBadge(num);
				}();
				var removeOld = function() {
					for (var x in localStorage) {
						var game = JSON.parse(localStorage.getItem(x));
						if (game.id !== refreshid) {
							localStorage.removeItem(x);
						}
					};
				}();
			}
		});
		setTimeout(refreshGames, 1000*10); //daily 1000*60*60*24
	};
	localStorage.clear()
	refreshGames();
	pokki.addEventListener('popup_hidden', function() {
		pokki.removeIconBadge();
	});
};