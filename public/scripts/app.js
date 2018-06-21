/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

    // loadTweets first to fetch the original 3 tweets from database
    loadTweets();

    $('.new-tweet').slideToggle();

    function escape(str) {
        let div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

    function createTweetElement(tweet) {
    let $HTMLObj = `
        <article class="tweets">
            <header>
                <img class="user-avatar" src=${escape(tweet.avatar)}>
                <h2 name="userName">${escape(tweet.name)} </h2>
                <h4 name="userHandle">${escape(tweet.handle)}</h4>
            </header>

            <p>${escape(tweet.content)}</p>

            <footer>
                <p name="timestamp">${escape(tweet.created_at)} days ago</p>
                <span class=hidden-icon> 
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i></span>
            </footer>
        </article> `

    return $HTMLObj;
    }

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
                created_at: Math.round(((tweets[atweet].created_at) / 86400000000))  //use moment library:)
            }
    
            let result = createTweetElement(newTweetObj)
            $('.tweets-container').prepend(result)
        }
        return; 
        }
    
    function loadTweets() {
        $.ajax('/tweets').done(function(data) {
            $('.tweets-container').html('');
            renderTweets(data);
        })
    }

    function validateData(data) {
        if (data === "" || data === null) {
            return false;
        }
        return true;
    }

    function validateDataLength(data) {
        if (data > 140) {
            return false;
        }
        return true;
    }
    

    $('form').on('submit', function(e) {
        e.preventDefault();

        // 1. Get the data from the form
        let data = $('form').serialize();

        // 1.1. validate data before sending data to server
        let dataValue = $('textarea').val();
        let dataLength = dataValue.length;
        let validData = validateData(dataValue);
        let validDataLength = validateDataLength(dataLength);

        if (validData && validDataLength) {
            // 2. Make a AJAX request using that data
            $.ajax('/tweets', {
            method: 'POST',
            data: data
            }).done(function(data) {

                // 3. Make the new tweet show up
                loadTweets();

                // 4. Clear the form
                $('form textarea').val("");
            })
            return;
        }
        if (!validData) {
            alert("Empty message!");
            return;
        }
        if (!validDataLength) {
            alert("Message exceeds maximum length!");
            return;
        }
    });
    $('.compose-btn').click(function() {
        $(".new-tweet").slideToggle();
    })
});
