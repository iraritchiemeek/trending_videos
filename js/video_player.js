function VideoPlayer () {
	
}

VideoPlayer.prototype.setupVinePlayer = function(video_url) {
	$('.video_player').empty()
	$('.video_player').append('<div id="vine_video"><video autoplay loop><source src="' + video_url + '" type=video/mp4/> </video></div>')
};