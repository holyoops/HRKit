(function(){
	console.log(1);
	$('#pup').on('HRKitTap', function(){
		console.log(1111);
		SHRKit.pop({
			 skipPageCount: 1
			,beforeBack: function(){}
		});
	});
}());