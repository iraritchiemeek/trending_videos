function VideoList () {

}

VideoList.prototype.getVinePoster = function(vine_res) {
	console.log(vine_res)
	for (var i = 10 - 1; i >= 0; i--) {
		this.setVideoPoster($('.vine_frame')[i], vine_res.data.records[i].thumbnailUrl)
		this.setVideoUrlData($('.vine_frame')[i], vine_res.data.records[i].videoUrl)
	};
};

VideoList.prototype.getRedditPoster = function(reddit_res) {
	console.log(reddit_res.data.children)
	for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
		this.setVideoPoster($('.reddit_frame')[i],reddit_res.data.children[i].data.media.oembed.thumbnail_url)
	};
};

VideoList.prototype.setVideoPoster = function(target, poster) {
	$(target).css({'background-image':'url(' + poster + ')'})
};

VideoList.prototype.setVideoUrlData = function(target, url) {
	$(target).attr('data-video_url', url)
};
