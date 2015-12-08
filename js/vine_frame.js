function VineFrame () {
	
}

VineFrame.prototype.setupVineFrame = function(vine_res) {
	for (var i = 10 - 1; i >= 0; i--) {
		this.createVineIframe($('.vine_frame')[i], vine_res.data.records[i].thumbnailUrl, vine_res.data.records[i].videoUrl)
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