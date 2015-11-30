function View () {

	View.prototype.appendDiv = function(target, name) {
		$(target).append('<div id="' + name + '"></div>')
	};

	View.prototype.displayVineVideos = function(vine_res) {
		for (var i = vine_res.data.records.length - 1; i >= 0; i--) {
			var video_url = vine_res.data.records[i].videoUrl
			$('#vine_section').append('<video controls class="vine_video"><source src="' + video_url + '" type="video/webm"></video>')
		};
	};

	View.prototype.displayRedditVideos = function(reddit_res) {
		console.log(reddit_res.data)
		for (var i = reddit_res.data.children.length - 1; i >= 0; i--) {
			var video_url = reddit_res.data.children[i].data.url
			var video_url = video_url.replace("watch?v=", "v/");
			$('#reddit_section').append('<iframe class="reddit_video youtubeapi_video" src="' + video_url + '"></iframe>')
		};
	};

}