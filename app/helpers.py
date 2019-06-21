def filterTextTweets(mixTweets, filterTweets=True):
    tweets = []
    for tweet in mixTweets:
        if len(tweet.entities['urls']) + len(tweet.entities['user_mentions']) + len(tweet.entities.get('media', [])) == 0:
            tweets.append(tweet._json)
    return tweets
