function VideoPlayer () {
}

VideoPlayer.prototype.popoutYoutubePlayer = function(videoID) {
	$('#youtube_player').show()
	youtube_player.loadVideoById({videoId: videoID})
}

VideoPlayer.prototype.stopVideo = function() {
	youtube_player.stopVideo()
};

VideoPlayer.prototype.hideVideo = function() {
	$('#youtube_player').hide()
	$('#vine_player').hide()
};