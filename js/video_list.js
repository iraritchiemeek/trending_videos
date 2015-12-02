function VideoList () {

}

VideoList.prototype.getVinePoster = function(vine_res) {
		console.log(vine_res)
	for (var i = 10 - 1; i >= 0; i--) {
		this.setVideoPoster($('.vine_frame')[i], vine_res.data.records[i].thumbnailUrl)
	};
};

VideoList.prototype.setVideoPoster = function(target, poster) {
	$(target).css({'background-image':'url(' + poster + ')'})
};
