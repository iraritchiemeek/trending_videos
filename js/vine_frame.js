function VineFrame () {
	
}

VineFrame.prototype.setupVineFrame = function(res) {
	for (var i = 10 - 1; i >= 0; i--) {
		this.createVineIframe($('.vine_frame')[i], res.data.records[i].thumbnailUrl, res.data.records[i].videoUrl)
	};
};

VineFrame.prototype.playVine = function(event_res) {
	$(event_res.target)[0].play()
};

VineFrame.prototype.pauseVine = function(event_res) {
	$(event_res.target)[0].pause()
};

VineFrame.prototype.createVineIframe = function(target, img_url, vid_url) {
	$(target).append('<video loop poster="' + img_url + '" class="vine_iframe"><source src="' + vid_url + '" type="video/mp4"></video>')
};

VineFrame.prototype.setVineLink = function(res, VideoList) {
	for (var i = 0; i <= 10 - 1; i++) {
		VideoList.setVideoData($('.vine_frame')[i], 'link', res.data.records[i].permalinkUrl)
	};
};

VineFrame.prototype.setLoops = function(res) {
	for (var i = 0; i <= 10 - 1; i++) {
		$($($('.vine_frame')[i])[0].children[0].children[2]).text(numberWithCommas(res.data.records[i].loops.count))
	};
};

VineFrame.prototype.pauseAll = function() {
	for (var i = $('video').length - 1; i >= 0; i--) {
		$('video')[i].pause()
	};
};