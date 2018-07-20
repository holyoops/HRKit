import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HRKitWindow from 'HRKit/HRKitWindow';
import 'index.less';

let config = {
    routers: [
        {
            path: '/others/HRKit',
            component: require('./pages/home').default,
            tab: true,
            text: 'Home'
        },{
            path: '/others/HRKit/testPage',
            component: require('./pages/testPage').default,
            tab: true,
            text: 'Test'
        },{
            path: '/others/HRKit/testPage/testPageSub',
            component: require('./pages/testPageSub').default,
            tab: false
        },{
            path: '/others/HRKit/more',
            component: require('./pages/more').default,
            tab: true,
            text: 'More'
        },{
            path: '/others/HRKit/more/moreSub',
            component: require('./pages/moreSub').default,
            tab: false
        },{
            path: '/others/HRKit/setting',
            component: require('./pages/setting').default,
            tab: true,
            text: 'Setting'
        },{
            path: '/others/HRKit/setting/settingSub',
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
