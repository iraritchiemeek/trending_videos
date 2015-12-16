function YoutubeFrame () {
	
	this.youtube_videos = []

}

YoutubeFrame.prototype.pushYoutubeVideos = function(res) {
	for (var i = res.items.length - 1; i >= 0; i--) {
		this.youtube_videos.push(res.items[i])
	}
};


YoutubeFrame.prototype.setUpYoutubeFrame = function(res, VideoList) {
	for (var i = 0; i <= this.youtube_videos.length - 1; i++) {
		var $target = $('.youtube_frame')[i]
		VideoList.setVideoPoster($target, this.youtube_videos[i].snippet.thumbnails.high.url)
		VideoList.setVideoData($target, 'url', this.youtube_videos[i].id)
	}
};

YoutubeFrame.prototype.setYoutubeLink = function(res, VideoList) {
	for (var i = 0; i <= this.youtube_videos.length - 1; i++) {
		VideoList.setVideoData($('.youtube_frame')[i], 'link', 'https://www.youtube.com/watch?v=' + this.youtube_videos[i].id)
	}	
};

YoutubeFrame.prototype.setLikes = function(res) {
	console.log(this.youtube_videos)
	for (var i = 0; i <= this.youtube_videos.length - 1; i++) {
		$($($('.youtube_frame')[i])[0].children[0].children[2]).text(this.youtube_videos[i].statistics.likeCount)
	}
};