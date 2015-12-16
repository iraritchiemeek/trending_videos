function View () {

}

View.prototype.setupPlayer = function(player_id) {
	$('#container').append('<div id="' + player_id + '" class=" video_player' + '"></div>')
};

View.prototype.setupFrames = function(frames_array) {
	var index = 0
	for (var i = 30 - 1; i >= 0; i--) {
		var index = randomBetween(0, frames_array.length - 1)
		var frame_type = frames_array[index]
		frames_array.splice(index, 1)
		$('#container').append('<div class="frame ' + frame_type + '"></div>')
	};
};

View.prototype.addFrameInfoDiv = function() {
	for (var i = $('.frame').length - 1; i >= 0; i--) {
		var frame_type = $('.frame')[i].className.split(/\s+/)[1]
		$($('.frame')[i]).append('<div class="frame_info ' + frame_type + '_info"><div class="logo ' + frame_type + '_logo"></div><div class="votes ' + frame_type + '_votes"></div><div class="vote_count"></div></div>')
	};
};

View.prototype.addDimOverlay = function() {
	$('#container').append('<div id="dim_overlay"></div>')
};

View.prototype.dimLights = function() {
	$('#dim_overlay').fadeIn('slow')
};

View.prototype.hideDimOverlay = function() {
	$('#dim_overlay').fadeOut('slow')
};

View.prototype.openVideoLink = function(e) {
	window.open(e.target.parentElement.parentElement.dataset.video_link, '_blank')
};

View.prototype.displayVotes = function(e) {
	$(e.target.nextSibling).show()
};

View.prototype.hideVotes = function(e) {
	$(e.target.nextSibling).hide()
};

