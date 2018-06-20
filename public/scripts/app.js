/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
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
  }

$(document).ready(function() {

    
    function createTweetElement(tweetObj) {
        let HTMLObj = `        
        <article class="tweets">
            <header>
            <img class="user-avatar" src=${tweetObj.user.avatars.small}>
            <h2 name="userName">${tweetObj.user.name} </h2>
            <h4 name="userHandle">${tweetObj.user.handle}</h4>
            </header>
        
            <p>${tweetObj.content.text}</p>
        
            <footer>
            <p name="timestamp">${tweetObj.created_at}</p>
            <spam class=hidden-icon> 
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i></span>
            </footer>
        </article> `
        
        return HTMLObj;
    }

    var $tweet = createTweetElement(tweetData);

    // // Test / driver code (temporary)
    // console.log($tweet); // to see what it looks like
    $('.tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
