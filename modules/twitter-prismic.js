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

const postTweets = 'statuses/update'


export default async function asyncModule (context, error, req) {

	try{

		// STORAGE - For clean data 
		const _tweets_prismic = []
	    const _tweets_twitter = []
	    const _tweets_auto_post = [];
	    let clearToPostTweet = false

		// GET
	    const api = await Prismic.getApi(process.env.PRISMIC_API, {req})
	    const prismicTweets = await api.query([
	        Prismic.Predicates.at('document.type', 'content') , Prismic.Predicates.at('my.content.tweet_me', 'Yes')
	    ])
	    const twitterTweets = await client.get(getTweets, getParams)



	    const prismicRoutesRes = await api.query([
	        Prismic.Predicates.at('document.type', 'content')
	    ])

	    const prismicRoutesRoutes = prismicRoutesRes.results.map((cont) => {
		    return {
		      route: `/content/${cont.id}`
		    }
		 })

	    // console.log('prismicRoutesRoutes -> ' , prismicRoutesRoutes)



		// TWITTER - Clean the reference data
	   	twitterTweets.forEach(function(tweet,i) { 
			let cleanTweets = {}
			cleanTweets["text"] = tweet.text;
			_tweets_twitter.push(cleanTweets);
		});


	   	// LOOP - Prismic "content" 
		prismicTweets.results.forEach(function(tweet,i) { 

			let cleanTweets = {}
			cleanTweets["text"] = tweet.data.tweet_text[0].text;
			cleanTweets["url"] =  process.env.SITE_URL + tweet.type +'/'+ tweet.slugs[0];
			cleanTweets["tweet"] = 'Published - ' +cleanTweets["text"] + ' - ' + cleanTweets["url"];
			_tweets_prismic.push(cleanTweets);

			let prismicTweet = cleanTweets["tweet"]
			let postTweet = true
			let postToTweets = {}
			
				// LOOP - Compare with posted tweets
				_tweets_twitter.forEach(function(twiTweet,i) { 
					let twitterTweet = twiTweet.text
		   			if (prismicTweet === twitterTweet) {			    		
			    		postTweet = false
			    		return false
		   			}
				});
			if (postTweet === true){
   				postToTweets["tweet_me"] = cleanTweets["tweet"];
   				_tweets_auto_post.push(postToTweets);
   				clearToPostTweet = true
   			}
		});

		if (_tweets_auto_post.length >= 0 && clearToPostTweet === true) {
			_tweets_auto_post.forEach(function(autotweet_me,i) { 
				//console.log('autotweet_me ->' + autotweet_me.tweet_me )
				client.post(postTweets, {status: autotweet_me.tweet_me})
				  .then(function (tweet) {
				    // console.log(tweet);
				  })
				  .catch(function (error) {
				    throw error;
				  })
			});
			
		}

		this.nuxt.hook('build:before', generator => {
	  		fse.outputJSON('./tweets/prismic-routes.json', prismicRoutesRoutes, { spaces: 4 })
	  		
		})

	  	//this.nuxt.hook('build:before', generator => {
	  		//fse.outputJSON('./tweets/prismic-tweet-me.json', _tweets_prismic, { spaces: 4 })
	  		//fse.outputJSON('./tweets/Prismic-tweet-ref.json', _tweets_twitter, { spaces: 4 })
	  		//fse.outputJSON('./tweets/Prismic-tweet-auto-post.json', _tweets_auto_post, { spaces: 4 })
		//})

    } catch (e) {
      console.log(e)
    }

}