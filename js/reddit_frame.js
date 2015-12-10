function RedditFrame (videoList) {
	this.videoList = videoList
	this.valid_youtube_urls = []
}

RedditFrame.prototype.filterYoutube = function(reddit_res) {
	for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
		if (reddit_res.data.children[i].data.media) {
			this.valid_youtube_urls.push(reddit_res.data.children[i])
		};
	};
};

RedditFrame.prototype.getRedditPoster = function() {
	for (var i = 0; i <= 10 - 1; i++) {
		this.videoList.setVideoPoster($('.reddit_frame')[i], this.valid_youtube_urls[i].data.media.oembed.thumbnail_url)
	};
};

RedditFrame.prototype.getYoutubeId = function() {
	for (var i = 0; i <= 10 - 1; i++) {
		var url = this.valid_youtube_urls[i].data.url
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    var id = (match&&match[7].length==11)? match[7] : false;
	   	this.videoList.setVideoUrlData($('.reddit_frame')[i], id)
	};
};