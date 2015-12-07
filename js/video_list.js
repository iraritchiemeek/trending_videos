function VideoList () {

	this.youtube_frame_num = 0
	this.frame_types = []

}

VideoList.prototype.addFrameType = function(type) {
	for (var i = 10 -1; i >= 0; i--) {
		this.frame_types.push(type + '_frame')
	};
};

VideoList.prototype.setupVineFrame = function(vine_res) {
	for (var i = 10 - 1; i >= 0; i--) {
		this.createVineIframe($('.vine_frame')[i], vine_res.data.records[i].thumbnailUrl, vine_res.data.records[i].videoUrl)
	};
};

VideoList.prototype.getRedditPoster = function(reddit_res) {
	for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
		this.setVideoPoster($('.reddit_frame')[i],reddit_res.data.children[i].data.media.oembed.thumbnail_url)
	};
};

VideoList.prototype.setupYoutubeFrame = function(youtube_res) {
	for (var i = youtube_res.items.length - 1; i >= 0; i--) {
		var $target = $('.youtube_frame')[this.youtube_frame_num]
		this.setVideoPoster($target, youtube_res.items[i].snippet.thumbnails.high.url)
		this.youtube_frame_num ++
		this.setVideoUrlData($target, youtube_res.items[i].id)
	};
};

VideoList.prototype.playVine = function(event_res) {
	$(event_res.target)[0].play()
};

VideoList.prototype.pauseVine = function(event_res) {
	$(event_res.target)[0].pause()
};

VideoList.prototype.createVineIframe = function(target, img_url, vid_url) {
	$(target).append('<video loop poster="' + img_url + '" class="vine_iframe"><source src="' + vid_url + '" type="video/mp4"></video>')
};

VideoList.prototype.setVideoPoster = function(target, poster) {
	$(target).css({'background-image':'url(' + poster + ')'})
};

VideoList.prototype.setVideoUrlData = function(target, url) {
	$(target).attr('data-video_url', url)
};
