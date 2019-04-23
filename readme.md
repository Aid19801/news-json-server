news-json-server just reads the pre-scraped news from Mongo
and serves it as JSON.
It gives an option to create articles too:


GET ALL ARTICLES
// https://the-panda-riot-news-server.herokuapp.com/articles
local:
fetch('http://localhost:5000/articles/', {
            method: 'GET',
        }).then(res => res.json()).then(json => console.log(json))


CREATE ARTICLE
// https://the-panda-riot-news-server.herokuapp.com/articles/create
local:
fetch('http://localhost:5000/articles/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                headline: 'silly HL',
                blurb: 'blurb goes here',
				link: 'http',
				img: 'image goes here',
				src: 'The Panda Riot',
            })
        })