function RedditFrame (videoList) {
	this.videoList = videoList
}

RedditFrame.prototype.getRedditPoster = function(reddit_res) {
	for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
		this.videoList.setVideoPoster($('.reddit_frame')[i],reddit_res.data.children[i].data.media.oembed.thumbnail_url)
	};
};

RedditFrame.prototype.getYoutubeId = function(reddit_res) {
	for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
		var url = reddit_res.data.children[i].data.url
		var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	    var match = url.match(regExp);
	    var id = (match&&match[7].length==11)? match[7] : false;
	   	this.videoList.setVideoUrlData($('.reddit_frame')[i], id)
	};
};