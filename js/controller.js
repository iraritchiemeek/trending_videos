$(document).ready(function(){

	var view = new View
	var videoList = new VideoList
	var videoPlayer = new VideoPlayer

	var vine_url = 'http://cors.io/?u=https://api.vineapp.com/timelines/popular' 
	var reddit_url = 'https://www.reddit.com/r/videos/top.json?sort=top&t=day&limit=10'

	view.setupFrames()
	view.setupPlayer('vine_player')

	//

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

	$('#container').on('click', function(e){
		videoPlayer.setupVinePlayer(e.target.attributes[1].value)
	})

})