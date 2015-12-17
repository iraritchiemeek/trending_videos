var youtube_player

function randomBetween (lowest, highest) {
	return Math.floor((Math.random() * highest) + lowest)
}

function onYouTubeIframeAPIReady() {
	youtube_player = new YT.Player('youtube_player', {
		height: '390',
		width: '640'
	})
}

function numberWithCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}