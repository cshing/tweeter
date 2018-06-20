/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  $(document).ready(function() {

    function renderTweets(tweets) {
        // loops through tweets
          // calls createTweetElement for each tweet
          // takes return value and appends it to the tweets container

        for (let atweet in tweets) {
            let newTweetObj = {
                name: tweets[atweet].user.name,
                avatar: tweets[atweet].user.avatars.small,
                handle: tweets[atweet].user.handle,
                content: tweets[atweet].content.text,
                created_at: Math.round(((tweets[atweet].created_at) / 86400000000))
            }

            let result = createTweetElement(newTweetObj)
            $('.tweets-container').append(result)
        }
        return; 
    }

    //call renderTweets function, passing in tweetData
    renderTweets(tweetData);

    function createTweetElement(tweet) {
        let $HTMLObj = `
            <article class="tweets">
                <header>
                    <img class="user-avatar" src=${tweet.avatar}>
                    <h2 name="userName">${tweet.name} </h2>
                    <h4 name="userHandle">${tweet.handle}</h4>
                </header>

                <p>${tweet.content}</p>

                <footer>
                    <p name="timestamp">${tweet.created_at} days ago</p>
                    <spam class=hidden-icon> 
                    <i class="fas fa-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i></span>
                </footer>
            </article> `

        return $HTMLObj;
    }
})
