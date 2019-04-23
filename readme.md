


GET ALL ARTICLES
fetch('http://localhost:5000/articles/', {
            method: 'GET',
        }).then(res => res.json()).then(json => console.log(json))


CREATE ARTICLE
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