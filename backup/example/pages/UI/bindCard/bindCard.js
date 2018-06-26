(function(){

	var t = 3;
	var int;

	$('#next').on('HRKitTap',function(e){

		SHRKit.push({
			// 要push的页面信息
			page: {
				 url: './pages/third/third.html'
			}
			,didLoad: function(){
			}
		});

	});

	$('#pop').on('HRKitTap', function(){
		SHRKit.pop({
			beforeBack: function(){}
		});
	});

	$('#loading').on('HRKitTap', function(){
		SHRKit.showLoadingView();
		$('#loadingCountDown').html('&nbsp;('+t+'秒)');
		int = setInterval(loadingCountDown,1000);
	});

	$('#tip').on('HRKitTap', function(){
		SHRKit.showTipView('提示信息');
	});

	// alert按钮配置
	var buttonCancle = {
		text:'取消',
		callback:function(){
			SHRKit.hideAlert();
		}
	}

	var buttonConfirm = {
		text:'确定',
		callback:function(){
			console.log('确定');
			SHRKit.hideAlert();
		}
	}

	// alert配置
	var alertViewConfig = {
		text:'提示内容',
		buttons:[buttonCancle, buttonConfirm]
	};

	$('#alert').on('HRKitTap', function(){
		SHRKit.showAlert(alertViewConfig);
	});

	var loadingCountDown = function(){
		t--;
		$('#loadingCountDown').html('&nbsp;('+t+'秒)');
		if(t===0){
			t = 3;
			$('#loadingCountDown').html('');
			SHRKit.hideLoadingView();
			int=window.clearInterval(int)
		}
	}
	

}());

