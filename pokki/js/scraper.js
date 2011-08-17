$(function() {
	// http://store.steampowered.com
	$.get('testpage.html', function(data) {
		$(data).find("div#tab_Discounts_items")
			.children().each(function(i, game) {
				var fmt = function(val) {
					return val.text().trim().split("$");
				};
				localStorage[i] = JSON.stringify({
					title: $(game).find("h4").text().trim(),
					link: $(game).find("a").attr("href"),
					oldprice: fmt($(game).find("div.tab_price"))[1],
					newprice: fmt($(game).find("div.tab_price"))[2],
					discount: fmt($(game).find("div.tab_discount.discount_pct"))[0],
					genre: $(game).find("div.genre_release").text().split("-")[0].trim(),
					release: ($(game).find("div.genre_release").text().split("-")[1] || "").trim() 
				});
			});
		//compare changes to localstorage, for each new deal, add to count of desktop icon
	});	
});