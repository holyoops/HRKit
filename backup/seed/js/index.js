var _GLOBE_DATA = (function() {
	var data = {
		
	};
	return function(key, val) {
		if (val === undefined) { 
			return data[key];
		}
		else { 
			return data[key] = val;
		}
	}
})();

$(document).ready(function() {

	//SHRKit.checkInputHelp();

	SHRKit.initAjax({appID:'33334444',deviceID:''});

	var initInfo = [{
		 tabTitle: 'UI组件'
		,initPage: {
			 url: './pages/purchase/index.html'
		}
	}];

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

	/*
	// 方法说明：初始化UI
	// 入参：
		param1: 各tab信息
		param2: 完成初始化的回调
		param3: 是否显示tabbar
`	*/
	SHRKit.initUI(initInfo,function(){},false);

});

