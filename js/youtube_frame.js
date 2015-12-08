function YoutubeFrame () {
	
	this.youtube_frame_num = 0

}


YoutubeFrame.prototype.setupYoutubeFrame = function(youtube_res) {
	for (var i = youtube_res.items.length - 1; i >= 0; i--) {
		var $target = $('.youtube_frame')[this.youtube_frame_num]
		VideoList.setVideoPoster($target, youtube_res.items[i].snippet.thumbnails.high.url)
		this.youtube_frame_num ++
		VideoList.setVideoUrlData($target, youtube_res.items[i].id)
	};
};