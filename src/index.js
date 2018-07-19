import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HRKitWindow from 'HRKit/HRKitWindow';
import 'index.less';

let config = {
    routers: [
        {
            path: '/',
            component: require('./pages/home').default,
            tab: true,
            text: 'Home'
        },{
            path: '/testPage',
            component: require('./pages/testPage').default,
            tab: true,
            text: 'Test'
        },{
            path: '/testPage/testPageSub',
            component: require('./pages/testPageSub').default,
            tab: false
        },{
            path: '/more',
            component: require('./pages/more').default,
            tab: true,
            text: 'More'
        },{
            path: '/more/moreSub',
            component: require('./pages/moreSub').default,
            tab: false
        },{
            path: '/setting',
            component: require('./pages/setting').default,
            tab: true,
            text: 'Setting'
        },{
            path: '/setting/settingSub',
            component: require('./pages/settingSub').default
        }
    ]
}

onerror=handleErr
var txt=""

function handleErr(msg,url,l)
{
txt="There was an error on this page.\n\n"
txt+="Error: " + msg + "\n"
txt+="URL: " + url + "\n"
txt+="Line: " + l + "\n\n"
txt+="Click OK to continue.\n\n"
alert(txt)
return true
}

 render(
    (
        <BrowserRouter basename = { window.location.host.indexOf('localhost') === -1 ? '/others/HRKit' : '/' }>
            <HRKitWindow routers = { config.routers }/>
        </BrowserRouter>
    ), document.getElementById('root')
 )
