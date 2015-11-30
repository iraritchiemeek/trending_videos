function YoutubeAPI () {
	
}

YoutubeAPI.prototype.onYouTubeIframeAPIReady = function() {
	player = new YT.Player('youtubeapi_video', {
		height: '390',
	    width: '640',
	    videoId: 'M7lc1UVf-VE',
	    events: {
	      'onReady': onPlayerReady,
	      'onStateChange': onPlayerStateChange
	    }
	  });
};