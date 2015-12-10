function VideoList () {

	this.frame_types = []

}

VideoList.prototype.addFrameType = function(type) {
	for (var i = 10 -1; i >= 0; i--) {
		this.frame_types.push(type + '_frame')
	};
};

VideoList.prototype.setVideoPoster = function(target, poster) {
	$(target).css({'background-image':'url(' + poster + ')'})
};

VideoList.prototype.setVideoUrlData = function(target, url) {
	$(target).attr('data-video_url', url)
};
