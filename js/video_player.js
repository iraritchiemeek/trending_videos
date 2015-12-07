function VideoPlayer () {
}

VideoPlayer.prototype.popoutVinePlayer = function(video_url) {
	$('#vine_player').empty()
	$('#vine_player').show()	
	$('.video_player').append('<div class="video_player" id="vine_video"><video autoplay loop><source src="' + video_url + '" type=video/mp4/> </video></div>')
}

VideoPlayer.prototype.popoutYoutubePlayer = function(videoID) {
	console.log('yes')
	$('#youtube_player').show()
	youtube_player.loadVideoById({videoId: videoID})
}