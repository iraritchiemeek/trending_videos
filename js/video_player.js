function VideoPlayer () {
	
}

VideoPlayer.prototype.setupVinePlayer = function(video_url) {
	$('.video_player').empty()
	$('.video_player').append('<video autoplay loop><source src="' + video_url + '" type=video/mp4/> </video>')
};