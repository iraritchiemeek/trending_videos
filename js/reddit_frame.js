function RedditFrame (videoList) {
	this.videoList = videoList
	this.valid_youtube_objects = []
}

RedditFrame.prototype.filterYoutube = function(res) {
	for (var i = res.data.children.length - 1; i >= 0; i--) {
		if (res.data.children[i].data.media) {
			this.valid_youtube_objects.push(res.data.children[i])
		};
	};
};

RedditFrame.prototype.getRedditPoster = function() {
	for (var i = 0; i <= 10 - 1; i++) {
		this.videoList.setVideoPoster($('.reddit_frame')[i], this.valid_youtube_objects[i].data.media.oembed.thumbnail_url)
	};
};

RedditFrame.prototype.getVideoId = function() {
	for (var i = 0; i <= 10 - 1; i++) {
		var url = this.valid_youtube_objects[i].data.url
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    var id = (match&&match[7].length==11)? match[7] : false;
	   	this.videoList.setVideoData($('.reddit_frame')[i], 'url', id)
	};
};

RedditFrame.prototype.getRedditLink = function() {
	for (var i = 0; i <= 10 - 1; i++) {
		// console.log($('.reddit_frame')[i].children[0].firstChild)
		$($('.reddit_frame')[i].children[0].firstChild).attr('href', this.valid_youtube_objects[i].data.permalink)
		// this.videoList.setVideoData($logo_div, 'link', this.valid_youtube_objects[i].data.permalink)
	}
};

// RedditFrame.prototype.getUpvotes = function(res) {
// 	for (var i = .length - 1; i >= 0; i--) {
// 		[i]
// 	};
// };