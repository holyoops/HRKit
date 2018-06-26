(function(){

	var ajax = {
		approveDev:{
	  		 type: 'POST'
	  		,method: 'sdk/system/approveDev'
	  		,inputCheck: {
	  			 MD5sign: {
	  			 	 isNotEmpty: ''
	  			 }
	  			,appID: {
	  				 isNotEmpty: ''
	  			}
	  			,randomNumber: {
	  				 isNotEmpty: ''
	  			}
	  		}
	   	}
	   	,checkAppID:{
	   		 type: 'POST'
	  		,method: 'sdk/system/checkAppID'
	  		,inputCheck: {
	  			 appAccessToken: {
	  				 isNotEmpty: ''
	  			 }
	  			,appID: {
	  				 isNotEmpty: ''
	  			}
	  		}
	   	}
	   	,getUserIDs:{
	   		 type: 'POST'
	  		,method: 'sdk/user/getUserIDs'
	  		,inputCheck: {
	  			 appAccessToken: {
	  				 isNotEmpty: ''
	  			 }
	  			,appID: {
	  				 isNotEmpty: ''
	  			}
	  			,appUserToken: {
	  				 isNotEmpty: ''
	  			}
	  			,channelID: {
	  				 isNotEmpty: ''
	  			}
	  		}
	   	}
	   	,getUserIDs:{
	   		 type: 'POST'
	  		,method: 'sdk/user/getUserCardList'
	  		,inputCheck: {
	  			 appAccessToken: {
	  				 isNotEmpty: ''
	  			 }
	  			,appID: {
	  				 isNotEmpty: ''
	  			}
	  			,openID: {
	  				 isNotEmpty: ''
	  			}
	  		}
	   	}
	   	,getSMSMsgCode:{
	   		 type: 'POST'
	  		,method: 'sdk/user/getUserCardList'
	  		,inputCheck: {
	  			 appAccessToken: {
	  				 isNotEmpty: ''
	  			 }
	  			,appID: {
	  				 isNotEmpty: ''
	  			}
	  			,openID: {
	  				 isNotEmpty: ''
	  			}
	  			,mobile: {
	  				 isNotEmpty: ''
	  				,isMobileNum: ''
	  			}
	  		}
	   	}
	}

	// 生产环境中应只包含release的请求路径
	var rootURL = 'https://hop.hulubank.com.cn:1443/mock/';

	SHRKit.registAjax(ajax, rootURL);

}());
