function View () {

	View.prototype.appendVineSection = function() {
		$('#container').append('<div id="vine_section"></div>')
	};

	View.prototype.displayVineVideos = function(vine_res) {
		for (var i = vine_res.data.records.length - 1; i >= 0; i--) {
			var video_url = vine_res.data.records[i].videoUrl
			$('#vine_section').append('<video controls class="vine_video"><source src="' + video_url + '" type="video/webm"></video>')
		};
	};

}