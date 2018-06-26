(function(){

	//SHRKit.showLoadingView();

	$('#push').on('HRKitTap',function(e){

		SHRKit.push({
			// 要push的页面信息
			page: {
				 url: './pages/UI/bindCard/bindCard.html'
			}
			,didLoad: function(){
			}
		});

	});

	/*
	// 方法说明：AJAX请求
	// 入参：
		js对象:{
			name: 请求名称，对应ajax.js内的一个ajax请求定义,
			data: 请求request参数,
			checkDone: 检查返回结果,
			success: 请求成功的回调

		}
	
	SHRKit.requestAjax({
		 name: 'approveDev'
		,data: {
			 MD5sign: '31010019000101000x'
			,randomNumber: '6666'
			,appID: '222'
		}
		,checkDone: function(result){
			console.log(result);
			if(!result.passed){

				SHRKit.hideLoadingView();
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
					text:'数据传输错误',
					buttons:[buttonCancle, buttonConfirm]
				};

				SHRKit.showAlert(alertViewConfig);

			}
		}
		,success: function(data){

		}
	});
	*/

}());
