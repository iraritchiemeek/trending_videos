function YoutubeFrame () {
	
	this.youtube_frame_num = 0

}


YoutubeFrame.prototype.setUpYoutubeFrame = function(res, VideoList) {
	for (var i = res.items.length - 1; i >= 0; i--) {
		var $target = $('.youtube_frame')[this.youtube_frame_num]
		VideoList.setVideoPoster($target, res.items[i].snippet.thumbnails.high.url)
		this.youtube_frame_num ++
		VideoList.setVideoData($target, 'url', res.items[i].id)
	}
};

YoutubeFrame.prototype.setYoutubeLink = function(res, VideoList) {
	for (var i = 0; i <= 5 - 1; i++) {
		VideoList.setVideoData($('.youtube_frame')[i], 'link', 'https://www.youtube.com/watch?v=' + res.items[i].id)
	}	
};