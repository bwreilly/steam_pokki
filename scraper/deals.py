import scraperwiki           
html = scraperwiki.scrape("http://store.steampowered.com/en")
print html


import lxml.html           
root = lxml.html.fromstring(html)
discounts = root.cssselect("div#tab_Discounts_items.v5")[0].iterchildren()
for x in discounts:
    title = x.cssselect("h4")[0].text_content()
    price = x.cssselect("div.tab_price")[0].text_content()
    discount = x.cssselect("div.tab_discount.discount_pct")[0].text_content()
    genre_release = x.cssselect("div.genre_release")[0].text_content()
    print title + " | " + price + " | " + discount + " | " +  genre_release
