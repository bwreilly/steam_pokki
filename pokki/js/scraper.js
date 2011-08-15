$(function() {
	// http://store.steampowered.com
	$.get('testpage.html', function(data) {
		$(data).find("div#tab_Discounts_items")
			.children().each(function(i, game){
				localStorage[i] = "{"+
					"\"title\": \"" + $(game).find("h4").text().trim() + "\"," +
					"\"link\": \"" + $(game).find("a").attr("href") + "\"," +
					"\"oldprice\": \"$" + $(game).find("div.tab_price").text().trim().split("$")[1]+ "\"," +
					"\"newprice\": \"$" + $(game).find("div.tab_price").text().trim().split("$")[2]+ "\"," +
					"\"discount\":\"" + $(game).find("div.tab_discount.discount_pct").text().trim()+ "\"," +
					"\"genre\":\""+ $(game).find("div.genre_release").text().split("-")[0].trim()+ "\"," +
					"\"release\":\""+ ($(game).find("div.genre_release").text().split("-")[1] || "").trim()+ "\"}";
			});
	});	
});