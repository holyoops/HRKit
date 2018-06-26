class HRKitTools {

    static staticProperties = {
    }

    constructor() {
    }

    static isPC() {

        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
        var flag = true;

        for (var v = 0; v < Agents.length; v++) {

            if (userAgentInfo.indexOf(Agents[v]) > 0) {

                flag = false;
                break;

            }

        }
        return flag;

    }

    static getAbPosition(obj){

        let pos = {"top":0, "left":0};

        if (obj.offsetParent){

            while (obj.offsetParent){

                pos.top += obj.offsetTop;
                pos.left += obj.offsetLeft;
                obj = obj.offsetParent;

            }

        }else if( obj.x ){

            pos.left += obj.x;

        }else if( obj.x ){

            pos.top += obj.y;

        }

        return {
            x:pos.left,
            y:pos.top
        };

    }

    static _op(sample, object){

        for (let name in sample) {

            if (object.hasOwnProperty(name)){

                if ( typeof(object[name]) === 'object' ) {

                    this._op(sample[name], object[name]);

                }

            }else{

                object[name] = sample[name];

            }

        }

    }

    static objectPatcher(sample, object){

        this._op(sample, object);
        return object;

    }

    static ajax(optionsOverride) {

        let ajaxOptions = {
            url: '#',
            method: 'GET',
            async: true,
            timeout: 0,
            data: null,
            dataType: 'text',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            onprogress: function () { },
            onuploadprogress: function () { },
            xhr: null
        }

        let options = {};

        for (let k in ajaxOptions) {

            options[k] = optionsOverride[k] || ajaxOptions[k];

        }

        options.async = options.async === false ? false : true;
        let xhr = options.xhr = options.xhr || new XMLHttpRequest();

        return new Promise(function (resolve, reject) {

            xhr.open(options.method, options.url, options.async);
            xhr.timeout = options.timeout;

            //设置请求头
            for (let k in options.headers) {

                xhr.setRequestHeader(k, options.headers[k]);

            }

            // 注册xhr对象事件
            xhr.onprogress = options.onprogress;
            xhr.upload.onprogress = options.onuploadprogress;
            xhr.responseType = options.dataType;

            xhr.onabort = function () {

                reject(new Error({
                    errorType: 'abort_error',
                    xhr: xhr
                }));

            }

            xhr.ontimeout = function () {

                reject({
                    errorType: 'timeout_error',
                    xhr: xhr
                });

            }

            xhr.onerror = function (e) {

                reject({
                    errorType: 'onerror',
                    xhr: xhr
                })

            }

            xhr.onloadend = function () {

                if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){

                    resolve(xhr);

                }else{

                    reject({
                        errorType: xhr.status,
                        xhr: xhr
                    })

                }

            }

            try {

                xhr.send(options.data);

            }catch (e) {

                reject({
                    errorType: 'send_error',
                    error: e
                });

            }

        })

    }

}

export default HRKitTools;
