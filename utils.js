// web scraper
const rp = require('request-promise');
const cheerio = require('cheerio');
let arrayOfNewsStoryObjects = [];

const optionsChortle = {
    uri: `https://www.chortle.co.uk/news`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

const getChortle = () => {

    return new Promise((resolve, reject) => {
        rp(optionsChortle)
            .then(($) => {
                let chortleNewsArray = [];

                // capture the shared element that all useful bits feed-up into
                const articleElement = $('.article.container').find('.twelvecol');

                $(articleElement).each((index, element) => {
                    let chortleNewsObject = {};

                    const org = 'Chortle';
                    let headline = $(element).find('h3').find('a').text();
                    // let blurb = $(element).find('div').find('.short').text();
                    // let url = $(element).find('div').find('h1').find('a').attr('href');
                    // let imgUrl = $(element).find('a').find('picture').find('img').attr('src');

                    // if image isnt there, put a placeholder in.
                    // if (!imgUrl) {
                    //     imgUrl = 'https://nyuad.nyu.edu/en/academics/divisions/arts-and-humanities/faculty/salem-al-qassimi/_jcr_content/bio-info/image.adaptive.m1510292743173/394.jpg';
                    // }

                    // if headline or URL are missing, abort adding this story to the feed.
                    // if (!headline || !url) {
                    //     console.log(' ======== url or headline missing =======')
                    //     console.log(' ======== URL:', url)
                    //     console.log(' ======== headline:', headline);
                    //     return;
                    // }

                    // create an object that assigns all the elements of a news story into one
                    // happy object 😎
                    // Object.assign(chortleNewsObject, { org, headline, blurb, url, imgUrl });

                    // push it to main array of news stories
                    chortleNewsArray.push(bbcNewsObject);

                    // return for next scrape to use/add to
                    resolve(chortleNewsArray);
                });
                // log out the array.
                // console.log('arrayOfNewsStoryObjects: ', arrayOfNewsStoryObjects);
            })
            .catch((err) => {
                console.log('Chortle News Scraping Error ====>> ', err);
                reject(err);
            });
    })
}


const shuffleStories = (arr) => {
    let shuffled = arr.map((each) => ({
            sort: Math.random(), value: each,
        })
    ).sort((a, b) => a.sort - b.sort)
        .map((each) => {
            return each.value;
        });
    return shuffled;
};

module.exports = {
    getChortle,
    shuffleStories,
}