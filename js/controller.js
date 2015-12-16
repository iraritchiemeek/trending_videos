$(document).ready(function(){
	
	var youtube_page_count = 0
	var youtube_player

	var view = new View
	var videoList = new VideoList
	var videoPlayer = new VideoPlayer
	var vineFrame = new VineFrame
	var youtubeFrame = new YoutubeFrame
	var redditFrame = new RedditFrame(videoList)

	var youtube_key = 'AIzaSyBIXrRzt0wuxO-pm8H89RhPJrZ3AWySFos'
	var youtube_url = 'https://www.googleapis.com/youtube/v3/videos'
	var youtube_params = {chart: 'mostPopular', regionCode: 'nz', part: 'contentDetails, snippet, statistics', key: youtube_key}
	
	var vine_url = 'http://cors.io/?u=https://api.vineapp.com/timelines/popular' 
	var reddit_url = 'https://www.reddit.com/r/videos/top.json?sort=top&t=day&limit=15'

	videoList.addFrameType('vine')
	videoList.addFrameType('reddit')
	videoList.addFrameType('youtube')
	
	view.setupFrames(videoList.frame_types)
	
	view.addFrameInfoDiv()

	view.setupPlayer('vine_player')
	view.setupPlayer('youtube_player')
	view.addDimOverlay()

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
		 		vineFrame.setVineLink(res, videoList)
		 		vineFrame.setupVineFrame(res)
		 		vineFrame.setLoops(res)
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
		 		redditFrame.filterYoutube(res)
		 		redditFrame.getRedditPoster(videoList)
		 		redditFrame.getVideoId(videoList)
		 		redditFrame.setRedditLink(videoList)
		 		redditFrame.setUpvotes()
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
			 		youtubeFrame.pushYoutubeVideos(res)
			 		youtubeFrame.setYoutubeLink(res, videoList)
			 		addNextPageToken(res.nextPageToken)
			 		youtubeFrame.setUpYoutubeFrame(res, videoList)
			 		youtubeFrame.setLikes(res)
			 	},
			 	error: function(){
			 		alert('Something went Wrong')
			 	}
			})
		}
	}

	//

	function addNextPageToken(next_page_token) {
		$.extend(youtube_params, {pageToken: next_page_token})
		getYoutubeRes()
	}

	$('.vine_frame').on('click', function(e){
		videoPlayer.popoutVinePlayer(e.target.attributes[1].value)
	})

	$('.youtube_frame, .reddit_frame').on('click', function(e){
		videoPlayer.popoutYoutubePlayer(e.target.dataset.video_url)
	})

	$('.frame').on('click', function(){
		view.dimLights()
	})
	
	$('.vine_frame').on({
		mouseenter: function(e){
			vineFrame.playVine(e)
	},
		mouseleave: function(e){
			vineFrame.pauseVine(e)
	}
	})

	$('#dim_overlay').on('click', function(){
		videoPlayer.stopVideo()
		videoPlayer.hideVideo()
		view.hideDimOverlay()
	})

	$('.logo').on('click', function(e) {
		view.openVideoLink(e)
	})

	$('.votes').on({
		mouseenter: function(e){
			view.displayVotes(e)
	},
		mouseleave: function(e){
			view.hideVotes(e)
	}
	})

})