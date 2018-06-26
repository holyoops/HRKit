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

	SHRKit.initAjax('mock');

	var initInfo = [{
		 tabTitle: 'UI组件'
		,initPage: {
			 url: './pages/UI/pay/pay.html'
		}
	},{
		 tabTitle: 'AJAX封装'
		,initPage: {
			url: './pages/second/second.html'
		}
	},{
		 tabTitle: '其他'
		,initPage: {
			url: './pages/third/third.html'
		}
	},{
		 tabTitle: '其他'
		,initPage: {
			url: './pages/third/third.html'
		}
	}];

	/*
	// 方法说明：初始化UI
	// 入参：
		param1: 各tab信息
		param2: 完成初始化的回调
		param3: 是否显示tabbar
`	*/
	SHRKit.initUI(initInfo,function(){},true);

});

var p = function(dir){
	console.log(dir);
}
