function RedditFrame () {
	this.valid_youtube_objects = []
}

RedditFrame.prototype.filterYoutube = function(res) {
	for (var i = res.data.children.length - 1; i >= 0; i--) {
		if (res.data.children[i].data.media) {
			this.valid_youtube_objects.push(res.data.children[i])
		};
	};
};

RedditFrame.prototype.getRedditPoster = function(VideoList) {
	for (var i = 0; i <= 10 - 1; i++) {
		VideoList.setVideoPoster($('.reddit_frame')[i], this.valid_youtube_objects[i].data.media.oembed.thumbnail_url)
	};
};

RedditFrame.prototype.getVideoId = function(VideoList) {
	for (var i = 0; i <= 10 - 1; i++) {
		var url = this.valid_youtube_objects[i].data.url
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    var id = (match&&match[7].length==11)? match[7] : false;
	   	VideoList.setVideoData($('.reddit_frame')[i], 'url', id)
	};
};

RedditFrame.prototype.setRedditLink = function(VideoList) {
	for (var i = 0; i <= 10 - 1; i++) {
		VideoList.setVideoData($('.reddit_frame')[i], 'link', 'http://www.reddit.com' + this.valid_youtube_objects[i].data.permalink)
	}
};

RedditFrame.prototype.setUpvotes = function(VideoList) {
	for (var i = 0; i <= 10 - 1; i++) {
		$($($('.reddit_frame')[i])[0].children[0].children[2]).text(this.valid_youtube_objects[i].data.ups)
	}
};




