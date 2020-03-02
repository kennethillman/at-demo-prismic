
const Twitter = require('twitter')
const Prismic = require('prismic-javascript')
const fse = require('fs-extra')
const dotenv = require('dotenv')
dotenv.config()

const client = Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

const getTweets = 'statuses/user_timeline'
const getParams = {
    screen_name: 'kennethillman',
    include_rts: false
}
const getCallback = (error, tweets, response) => {
	
	let _tweets = []

	if (!error)

		tweets.forEach(function(tweet,i) { 
			let cleanTweets = {}
			cleanTweets["text"] = tweet.text;
			_tweets.push(cleanTweets);
		});

		fse.outputJSON('./_data/tweets.json', _tweets.slice(0, 5), { spaces: 4 })

}

export default function twitterFeed(config) {
	console.log('- - - > module -> twitter-feed')
	this.nuxt.hook('build:before', generator => {
		client.get(getTweets, getParams, getCallback)
	})
}