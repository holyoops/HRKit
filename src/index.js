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
            tab: true
        },{
            path: '/testPage',
            component: require('./pages/testPage').default,
            tab: true
        },{
            path: '/testPage/testPageSub',
            component: require('./pages/testPageSub').default,
            tab: false
        },{
            path: '/more',
            component: require('./pages/more').default,
            tab: true
        },{
            path: '/more/moreSub',
            component: require('./pages/moreSub').default,
            tab: false
        },{
            path: '/setting',
            component: require('./pages/setting').default,
            tab: true
        },{
            path: '/setting/settingSub',
            component: require('./pages/settingSub').default
        }
    ]
}

 render(
    (
        <BrowserRouter basename = { window.location.host.indexOf('localhost') === -1 ? '/others/HRKit' : '/' }>
            <HRKitWindow routers = { config.routers }/>
        </BrowserRouter>
    ), document.getElementById('root')
 )
