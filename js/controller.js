$(document).ready(function(){
	
	var youtube_page_count = 0

	var view = new View
	var videoList = new VideoList
	var videoPlayer = new VideoPlayer

	var youtube_key = 'AIzaSyBIXrRzt0wuxO-pm8H89RhPJrZ3AWySFos'
	var youtube_url = 'https://www.googleapis.com/youtube/v3/videos'
	var youtube_params = {chart: 'mostPopular', regionCode: 'nz', part: 'contentDetails, snippet', key: youtube_key}
	
	var vine_url = 'http://cors.io/?u=https://api.vineapp.com/timelines/popular' 
	var reddit_url = 'https://www.reddit.com/r/videos/top.json?sort=top&t=day&limit=10'

	videoList.addFrameType('vine')
	videoList.addFrameType('reddit')
	videoList.addFrameType('youtube')
	view.setupFrames(videoList.frame_types)

	view.setupPlayer('vine_player')

	getVineRes()
	getRedditRes()
	getYoutubeRes()

	//

	function getVineRes() {
		$.ajax({
		 	type: "GET",
		 	url: vine_url,
		 	dataType: "json",
		 	crossDomain: true,
		 	success: function(res){
		 		videoList.getVinePoster(res)
		 	},
		 	error: function(){
		 		alert('Something went Wrong')
		 	}
		})
	}

	function getRedditRes() {
		$.ajax({
		 	type: "GET",
		 	url: reddit_url,
		 	success: function(res){
		 		videoList.getRedditPoster(res)
		 	},
		 	error: function(){
		 		alert('Something went Wrong')
		 	}
		})
	}


	function getYoutubeRes() {
		youtube_page_count += 1
		if (youtube_page_count <= 2) {
			$.ajax({
			 	type: "GET",
			 	url: youtube_url,
			 	data: youtube_params,
			 	success: function(res){
			 		addNextPageToken(res.nextPageToken)
			 		videoList.getYoutubePoster(res)
			 	},
			 	error: function(){
			 		alert('Something went Wrong')
			 	}
			})
		}
	}

	function addNextPageToken (next_page_token) {
		$.extend(youtube_params, {pageToken: next_page_token})
		getYoutubeRes()
	}

	$('#container').on('click', function(e){
		videoPlayer.setupVinePlayer(e.target.attributes[1].value)
	})

})