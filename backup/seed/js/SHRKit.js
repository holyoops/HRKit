/*
    SHRKit_v_alpha.
    Created by Zhao Chenjun on 160701.
*/

(function() {

    var addLoadingView = (function(){
        var loadingView = document.createElement('div');
        $(loadingView).addClass('SHRKit-loading-view').attr('id', 'SHRKitLoadingView').attr('flex','main:center cross:center');
        var laodingViewHtml = '<div id="SHRKitLoadingContent" class="SHRKit-loading-content">'
            + '<img id="SHRKitloadingImg" class="SHRKit-loading-img" src="./resource/image/spinner.gif">'
            + '<div id="SHRKitLoadingText" class="SHRKit-loading-text">请稍等</div>'
        + '</div>';
        $(loadingView).html(laodingViewHtml);
        $('body').append(loadingView);

        $('#SHRKitLoadingView').css('visibility', 'visible').css('opacity', 1);

        window.onload = function(){
            $('#SHRKitLoadingView').css('opacity', 0).css('visibility', 'hidden');
        }

    })();

    var _SHRKit_Data = (function() {
        var data = {
             'cw': 0
            ,'ch': 0
            ,'currentPageContainer': null
            ,'ispop': false
            ,'tab': null
            ,'ismoving': false
            ,'ajax': {}
            ,hasInitUI: false
            ,popSkipPageCount: 0
            ,ajaxCommonData:{
                appID: '',
                deviceID: ''
            }
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

    var ShanghaiHuaruiBankKit = (function() {

        function z(){

            _zBindButtonEvent();
            _zDeclareTapEvent();

            _SHRKit_Data('ajax').checkFunctionList = {
                 isNotEmpty: {
                     func: _zIsNotEmpty
                    ,description: _zCheckDes.isNotEmpty
                 }
                ,length: {
                    func: _zLength
                    ,description: _zCheckDes.length
                }
                ,maxLength: {
                    func: _zMaxLength
                    ,description: _zCheckDes.maxLength
                }
                ,minLength: {
                    func: _zMinLength
                    ,description: _zCheckDes.minLength
                }
                ,isNum: {
                     func: _zIsNum
                    ,description: _zCheckDes.isNum
                }
                ,isMobileNum: {
                     func: _zIsMobileNum
                    ,description: _zCheckDes.isMobileNum
                }
                ,isEngNum: {
                     func: _zIsEngNum
                    ,description: _zCheckDes.isEngNum
                }
                ,isIdNum: {
                    func: _zIsIdNum
                    ,description: _zCheckDes.isIdNum
                }
            }
        };

        z.prototype.initUI = function(tabs,callback,showTabbar){            

            var cw = $(window).width();
            var ch = $(window).height();
            _SHRKit_Data('cw', cw);
            _SHRKit_Data('ch', ch);

            var tipView = document.createElement('div');
            $(tipView).attr('id','SHRKitTipView').attr('flex','main:center').addClass('SHRKit-tip-view').html('<div class="SHRKit-tip-content" id="SHRKitTipContent"></div>');
            $('body').append(tipView);

            var tab = document.createElement('div');
            $(tab).addClass('SHRKit-tab');
            $('body').append(tab);
            _SHRKit_Data('tab',$(tab));

            var tabbar = document.createElement('div');
            $(tabbar).addClass('SHRKit-tabbar').addClass('SHRKit-top-line').attr('flex','box:mean');
            $(tab).append(tabbar);

            if (!showTabbar){
                $(tabbar).addClass('SHRKit-hide')
            }

            for (var i = 0; i < tabs.length; i++) {
                var nv = document.createElement('div');
                $(nv).addClass('SHRKit-nv');
        
                _SHRKit_Data('tab').append(nv);

                var pageContainer = document.createElement('div');
                $(pageContainer).addClass('SHRKit-page-container').addClass('SHRKit-page-container-transition').attr('id','SHRKitPageContainer-'+i).attr('flex','');
                $(nv).append(pageContainer);

                $(pageContainer).on('webkitTransitionEnd', function () {
                    _SHRKit_Data('ismoving',false);
                    if(_SHRKit_Data('ispop')){
                        resourcePageContainer = _SHRKit_Data('currentPageContainer');
                        
                        for (var i = 0; i < _SHRKit_Data('popSkipPageCount') + 1; i++) {
                            resourcePageContainer.children().last().remove();
                        }
                        
                        var w = _SHRKit_Data('cw')*(resourcePageContainer.children().length);
                        resourcePageContainer.width(w);
                    }
                });

                var tabItem = document.createElement('div');
                $(tabItem).addClass('SHRKit-tab-item').attr('id','SHRKitTabItem-'+i).attr('flex','dir:top').on('touchend',function(){
                    _SHRKit_Data('currentTabItem').removeClass('SHRKit-tab-item-selected');
                    _SHRKit_Data('currentTabItem').children('.SHRKit-tab-title').removeClass('SHRKit-tab-title-selected');
                    $(this).addClass('SHRKit-tab-item-selected');
                    $(this).children('.SHRKit-tab-title').addClass('SHRKit-tab-title-selected');
                    _SHRKit_Data('currentTabItem',$(this));
                    _SHRKit_Data('currentPageContainer').parent().removeClass('SHRKit-show');
                    $($('#SHRKitPageContainer-' + $(this).attr('id').split('-')[1]).parent()).addClass('SHRKit-show');
                    _SHRKit_Data('currentPageContainer',$($('#SHRKitPageContainer-' + $(this).attr('id').split('-')[1])));
                });
                $(tabbar).append(tabItem);

                var tabTitle = document.createElement('div');
                $(tabTitle).addClass('SHRKit-tab-title').html(tabs[i].tabTitle).attr('flex-box','1');
                $(tabItem).append(tabTitle);

                if (i === 0) {
                    $(nv).addClass('SHRKit-show');
                    _SHRKit_Data('currentPageContainer',$(pageContainer));
                    _SHRKit_Data('currentTabItem',$(tabItem));
                    $(tabItem).addClass('SHRKit-tab-item-selected');
                    $(tabTitle).addClass('SHRKit-tab-title-selected');
                }

                _zAddPage(tabs[i].initPage, callback, $(pageContainer));
            }

            _SHRKit_Data('hasInitUI',true);
        }

        z.prototype.push = function(obj){
            
            if (!_SHRKit_Data('hasInitUI')){
                console.error('SHRKit:在使用push方法前，请先调用initUI方法');
                return;
            }

            if (!_SHRKit_Data('ismoving')){
                _zAddPage(obj.page, obj.didLoad, undefined);
                _SHRKit_Data('ispop',false);
            }
            
        }

        z.prototype.pop = function(obj){

            if (!_SHRKit_Data('hasInitUI')){
                console.error('SHRKit:在使用pop方法前，请先调用initUI方法');
                return;
            }

            if (!_SHRKit_Data('ismoving')){
                _SHRKit_Data('ispop',true);
                var skipPageCount = obj.skipPageCount?obj.skipPageCount:0;
                _SHRKit_Data('popSkipPageCount',skipPageCount);
                _SHRKit_Data('currentPageContainer').css('transform', 'translateX('+(-_SHRKit_Data('cw')*(_SHRKit_Data('currentPageContainer').children().length-(2+skipPageCount))) + 'px)');
                _SHRKit_Data('ismoving',true);
                obj.beforeBack();
            }

        }

        z.prototype.showLoadingView = function() {
            _zShowLoadingView();
        }

        z.prototype.hideLoadingView = function() {
            _zHideLoadingView();
        }

        z.prototype.hideAlert = function(obj){
            $('#SHRKitAlertContent').css('opacity', 0).css('visibility', 'hidden').on("webkitTransitionEnd", function(){

                $('#SHRKitAlertView').css('opacity', 0).css('visibility', 'hidden');
                $('#SHRKitAlertContent').off("webkitTransitionEnd");
                $('#SHRKitAlertView').remove();
            });
        }

        z.prototype.showAlert = function(obj){

            $('body').append('<div id="SHRKitAlertView" class="SHRKit-alert-view" flex="main:center cross:center"><div id="SHRKitAlertContent" class="SHRKit-alert-content"><p id="SHRKitAlertText" class="SHRKit-alert-text"></p><div id="SHRKitAlertButtons" class="SHRKit-alert-buttons"></div></div></div>');
            
            $('#SHRKitAlertView').css('visibility', 'visible').css('opacity', 1);
            $('#SHRKitAlertContent').css('visibility', 'visible').css('opacity', 1);
            $('#SHRKitAlertText').html(obj.text);

            var domHtml = '';

            $('#SHRKitAlertButtons').html('');

            for (var i = 0; i < obj.buttons.length; i++) {

                domHtml = '<div id="SHRKit-alert-button' + i + '" class="SHRKit-alert-button SHRKit-button-bg">' + obj.buttons[i].text + '</div>';

                $('#SHRKitAlertButtons').append(domHtml);

                $('#SHRKit-alert-button' + i).width(240 / obj.buttons.length).on('HRKitTap', obj.buttons[i].callback);

            };

        }

        z.prototype.showTipView = function(content) {

            $('#SHRKitTipContent').html(content);

            $('#SHRKitTipView').css('transition-delay', '0s').css('visibility', 'visible').css('opacity', 1);

            $('body').on('webkitTransitionEnd', '#SHRKitTipView', function(){

                $('#SHRKitTipView').css('transition-delay', '3s').css('opacity', 0).css('visibility', 'hidden').off("webkitTransitionEnd");
            
            });
        }

        z.prototype.registAjax = function(reqs, rootURL){
            _SHRKit_Data('ajax').registedAjax = reqs;
            _SHRKit_Data('ajax').rootURL = rootURL;
        }

        z.prototype.initAjax = function(commonData){
            //_SHRKit_Data('ajax').environment = env;

            if (_zIsNotEmpty(commonData.appID) && _zIsNotEmpty(commonData.deviceID)){

                _SHRKit_Data('ajaxCommonData').appID = commonData.appID;
                _SHRKit_Data('ajaxCommonData').deviceID = commonData.deviceID;

            }else{

                console.warn('SHRKit: 请传入appID和deviceID');

            }
        }

        z.prototype.requestAjax = function(req){

            _zShowLoadingView();

            //var evn = _SHRKit_Data('ajax').environment;

            //_SHRKit_Data('ajax').rootURL = _SHRKit_Data('ajax').rootURL;

            var inputCheck = _SHRKit_Data('ajax').registedAjax[req.name].inputCheck;

            var r = _zCheckAjaxInputData(req.data, inputCheck);

            req.checkDone({
                passed: r.passed
                ,detail: r.r
            });

            if (!r.passed) {
                _zHideLoadingView();
                return;
            }else{
                _zAjax(req.Content_Type,_SHRKit_Data('ajax').registedAjax[req.name].type, _SHRKit_Data('ajax').rootURL+_SHRKit_Data('ajax').registedAjax[req.name].method, req.data, req.dataType, req.success, function(status){
                    _zAjaxError();
                    req.error(status);
                });
            }
        }

        z.prototype.checkInput = function(data, type, param){

            var result = _zCheckInput(data, type, param);
            if (result === null) {
                return;
            }
            
            return result;
        }

        z.prototype.checkInputHelp = function(){

            var checkInfo = {};

            for (var key in _SHRKit_Data('ajax').checkFunctionList){
                checkInfo[key] = _SHRKit_Data('ajax').checkFunctionList[key].description;
            }

            //console.info(checkInfo);
            
        }

        var _zCheckAjaxInputData = function(data, inputCheck){

            // var r = {};
            // var obj = {};

            // return {passed: passed, r: r};
            var r = {};
            var passed = [true];
            _zGetChildrenObj(data, r, inputCheck, passed);
            return {passed: passed[0], r: r};
        }

        var _zGetChildrenObj = function(data, r, obj, passed){

            for (var key in obj){
                r[key] = {};
                if (typeof(obj[key]) === 'object'){
                    if (Object.prototype.toString.call(obj[key]) === '[object Array]'){
                        for (var i = 0; i < data[key].length; i++){
                            r[key][i] = {};
                            _zGetChildrenObj(data[key][i], r[key][i], obj[key][0], passed);
                        }
                    }else{
                        _zGetChildrenObj(data[key], r[key], obj[key], passed);
                    }
                    
                }else{

                    r[key] = _zCheckInput(data, key, obj[key]);

                    if (!r[key]){
                        passed[0] = false;
                    }
                }
            }

            return passed[0];
        }

        var _zAddPage = function(page, callback, resourcePageContainer){

            if (!resourcePageContainer) {
                resourcePageContainer = _SHRKit_Data('currentPageContainer');
            }

            _zLoadLocal(page.url, function(res){
                _SHRKit_Data('ismoving',true);
                var w = _SHRKit_Data('cw')*(resourcePageContainer.children().length+1);
                resourcePageContainer.width(w);
                var p=document.createElement('div');
                $(p).addClass('SHRKit-page').attr('id',page.id).html('<link href="'+page.url.split('.html')[0]+'.css" rel="stylesheet" type="text/css">'+res+'<script src="'+page.url.split('.html')[0]+'.js"></script>').width(_SHRKit_Data('cw'));
                resourcePageContainer.append(p).css('transform', 'translateX('+(-_SHRKit_Data('cw')*(resourcePageContainer.children().length-1)) + 'px)');
                callback();
            }, function(e){});
        }

        var _zLoadLocal = function(url, onsuccess, onfail){
            var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4) {
                    if (xmlHttp.status == 0 || xmlHttp.status == 200) {
                        onsuccess(xmlHttp.responseText);
                    }
                    else {
                        onfail(xmlHttp.status);
                    }
                }
            }
            xmlHttp.open('GET', url, true);
            xmlHttp.send();
        }

        var _zAjax = function(content,type, url, data, dataType, onsuccess, onfail) {

            if (_zIsNotEmpty(_SHRKit_Data('ajaxCommonData').appID) && _zIsNotEmpty(_SHRKit_Data('ajaxCommonData').deviceID)){

                data.appID = _SHRKit_Data('ajaxCommonData').appID;
                data.deviceID = _SHRKit_Data('ajaxCommonData').deviceID;

            }else{

                console.warn('SHRKit: 未设置appID或deviceID');
                //return;
            }

            var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
            var timeout = false;//是否超时
            var timer = setTimeout(function(){
                _zAjaxError();
                timeout = true;
                xmlHttp.abort();//请求中止
            },60000);
            xmlHttp.open(type, url, true);
            if(content!=""&&content!=undefined&&content!=null){
                xmlHttp.setRequestHeader('Content-Type', content);
            }else{
                xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

            }
            if (dataType === "string"){
                xmlHttp.send(JSON.stringify(data));
            }else{
                xmlHttp.send(data);
            }
            xmlHttp.onreadystatechange = function () {
                _zHideLoadingView();
                if (xmlHttp.readyState == 4) {
                    if(timeout){
                        return;
                    }
                    clearTimeout(timer);
                    if (xmlHttp.status == 200) {
                        onsuccess(JSON.parse(xmlHttp.responseText));
                    }
                    else {
                        onfail(xmlHttp.status);
                    }
                }
            }
            
        }

        var _zAjaxError = function(){
            _zShowTipView('网络错误，请稍候重试');
            _zHideLoadingView();
        }

        _zShowTipView = function(content) {

            $('#SHRKitTipContent').html(content);

            $('#SHRKitTipView').css('transition-delay', '0s').css('visibility', 'visible').css('opacity', 1);

            $('body').on('webkitTransitionEnd', '#SHRKitTipView', function(){

                $('#SHRKitTipView').css('transition-delay', '3s').css('opacity', 0).css('visibility', 'hidden').off("webkitTransitionEnd");
            
            });
        }

        var _zBindButtonEvent = function(){

            $('body').on('touchstart', '.SHRKit-button',function(){

                $(this).css('color',_zDarkColor($(this).css("color"),60));

            });

            $('body').on('touchcancel', '.SHRKit-button', function(){
                
                $(this).css('color',_zLightColor($(this).css("color"),60));

            });

            $('body').on('touchend', '.SHRKit-button', function(){
                
                $(this).css('color',_zLightColor($(this).css("color"),60));

            });


            $('body').on('touchstart', '.SHRKit-button-bg', function(){
                
                $(this).css('background-color',_zDarkColor($(this).css("background-color"),30));

            });

            $('body').on('touchcancel', '.SHRKit-button-bg', function(){

                $(this).css('background-color',_zLightColor($(this).css("background-color"),30));

            });

            $('body').on('touchend', '.SHRKit-button-bg', function(){

                $(this).css('background-color',_zLightColor($(this).css("background-color"),30));

            });


        }



        var _zDarkColor = function(rgb, number) {

            var bgR = rgb.split('(')[1].split(',')[0];
            
            var bgG = rgb.split('(')[1].split(',')[1];
            
            var bgB;

            if (rgb.split('rgba').length > 1) {

                bgB = rgb.split('(')[1].split(',')[2];
                var a = rgb.split('(')[1].split(',')[3].split(')')[0];
                //console.log(bgR,bgG,bgB,a)
                if (parseInt(bgR) === 0 && parseInt(bgG) === 0 && parseInt(bgB) === 0 && parseFloat(a) === parseFloat(0)) {
                    a = 1/5;
                }else{
                    bgR -= number;
                    bgG -= number;
                    bgB -= number;
                }
                //console.log(bgR,bgG,bgB,a)
                return 'rgba(' + bgR + ',' + bgG + ',' + bgB + ',' + a + ')';

            }else{
                bgB = rgb.split('(')[1].split(',')[2].split(')')[0];
                //console.log(bgR,bgG,bgB)
                bgR -= number;
                bgG -= number;
                bgB -= number;
                //console.log(bgR,bgG,bgB)
                return 'rgb(' + bgR+',' + bgG + ',' + bgB + ')';
            }

        }

        var _zLightColor = function(rgb, number) {

            var bgR = rgb.split('(')[1].split(',')[0];
            
            var bgG = rgb.split('(')[1].split(',')[1];
            
            var bgB;

            if (rgb.split('rgba').length > 1) {

                bgB = rgb.split('(')[1].split(',')[2];
                var a = rgb.split('(')[1].split(',')[3].split(')')[0];
                //console.log(bgR,bgG,bgB,a)
                if (parseInt(bgR) === 0 && parseInt(bgG) === 0 && parseInt(bgB) === 0 && parseFloat(a) === parseFloat(1/5)){
                    a = 0;
                }else{
                    bgR = parseInt(bgR) + number;
                    bgG = parseInt(bgG) + number;
                    bgB = parseInt(bgB) + number;
                }
                //console.log(bgR,bgG,bgB,a)
                return 'rgba(' + bgR + ',' + bgG + ',' + bgB + ',' + a + ')';

            }else{
                bgB = rgb.split('(')[1].split(',')[2].split(')')[0];
                //console.log(bgR,bgG,bgB)
                bgR = parseInt(bgR) + number;
                bgG = parseInt(bgG) + number;
                bgB = parseInt(bgB) + number;
                //console.log(bgR,bgG,bgB)
                return 'rgb(' + bgR+',' + bgG + ',' + bgB + ')';
            }

        }

        var _zDeclareTapEvent = function(){
            $(document).on("touchstart", function(e) {
                $(e.target).data("isMoved", 0);
            });

            $(document).on("touchmove", function(e) {
                $(e.target).data("isMoved", 1);
            });

            $(document).on("touchend", function(e) {
                if($(e.target).data("isMoved") === 0){
                    $(e.target).trigger("HRKitTap");
                }
            });
        }

        var _zIsNum = function(data){

            if(!_zIsNotEmpty(data)){
                return true;
            }

            data = data + '';

            var regu = '^[0-9]+$';
            var re = new RegExp(regu);
            if (data.search(re) != - 1) {
                return true;
            }
            else {
                return false;
            }
        };

        var _zIsNotEmpty = function(data){
            if (data === undefined || data === '' || data === null) {
                return false;
            }else{
                return true;
            }
        }

        var _zIsMobileNum = function(data){

            if(!_zIsNotEmpty(data)){
                return true;
            }

            data = data + '';

            var regu = '^[1][3][0-9]{9}$';
            var re = new RegExp(regu);
            if (re.test(data)) {
                return true;
            }
            else {
                return false;
            }
        }

        var _zIsEngNum = function(data){
            if(!_zIsNotEmpty(data)){
                return true;
            }

            var regu = '^[0-9a-zA-Z]+$';
            var re = new RegExp(regu);
            if (re.test(s)) {
                return true;
            }
            else {
                return false;
            }
        }

        var _zIsIdNum = function(data) {
            if(!_zIsNotEmpty(data)){
                return true;
            }

            data = data + '';

            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  
            if(reg.test(data) === false)  {   
               return  false;  
            }else{
                return true;
            }
        }

        var _zLength = function(data, len) {
            if(!_zIsNotEmpty(data)){
                return true;
            }
            if (data.length === len) {
                return true;
            }else{
                return false;
            }
        }

        var _zMaxLength = function(data, len) {
            if(!_zIsNotEmpty(data)){
                return true;
            }
            if (data.length <= len) {
                return true;
            }else{
                return false;
            }
        }

        var _zMinLength = function(data, len) {
            if(!_zIsNotEmpty(data)){
                return true;
            }
            if (data.length >= len) {
                return true;
            }else{
                return false;
            }
        }

        var _zCheckInput = function(data, type, param){
            
            if (_SHRKit_Data('ajax').checkFunctionList[type] === undefined){
                console.error('没有'+type+'这个检查方法');
                return null;
            }

            if (param){
                return _SHRKit_Data('ajax').checkFunctionList[type].func(data, param);
            }else{
                return _SHRKit_Data('ajax').checkFunctionList[type].func(data);
            }
            
        }

        var _zShowLoadingView = function(){
            $('#SHRKitLoadingView').css('visibility', 'visible').css('opacity', 1);
        }

        var _zHideLoadingView = function(){
            $('#SHRKitLoadingView').css('opacity', 0).css('visibility', 'hidden');
        }

        var _zCheckDes = {
             isNotEmpty: '判断是否为非空，非空返回true，空返回false，undefined/null/""返回为false'
            ,length: '长度是否等于传入数，等于返回true，不等于返回false，undefined/null/""不作检查并返回为true'
            ,maxLength: '长度是否小于等于传入数，小于等于返回true，大于返回false，undefined/null/""不作检查并返回为true'
            ,minLength: '长度是否大于传入数，大于返回true，小于等于返回false，否则返回为false，undefined/null/""不作检查并返回为true'
            ,isNum: '判断是否为正整数，正整数返回为true，否则返回为false，undefined/null/""不作检查并返回为true'
            ,isMobileNum: '判断是否为手机号，手机号返回为true，否则返回为false，undefined/null/""不作检查并返回为true'
            ,isEngNum: '判断是否仅包含英数，仅包含英数返回为true，否则返回为false，undefined/null/""不作检查并返回为true'
            ,isIdNum: '判断是为身份证号码，是返回为true，否则返回为false，undefined/null/""不作检查并返回为true'
        }

        return new z();
      
    })();

    window.SHRKit = ShanghaiHuaruiBankKit;
     
}());
