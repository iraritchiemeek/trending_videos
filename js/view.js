function View () {

	this.frame_types = ['vine_frame', 'reddit_frame', 'youtube_frame', 'facebook_frame']

}

View.prototype.appendDiv = function(target, name) {
	$(target).append('<div id="' + name + '"></div>')
};

View.prototype.setupFrames = function() {
	var index = 0, n = 0
	for (var i = 40 - 1; i >= 0; i--) {
		n++
		$('#container').append('<div class="frame ' + this.frame_types[index] + '"></div>')
		if (n === 10) {
			index += 1
			n = 0
		}
	};
};

