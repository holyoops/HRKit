import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HRKitWindow from 'HRKit/HRKitWindow';
import 'index.less';

let config = {
    routers: [
        {
            path: '/',
            component: require('./pages/home').default
        },{
            path: '/testPage',
            component: require('./pages/testPage').default
        },{
            path: '/testPage/testPageSub',
            component: require('./pages/testPageSub').default
        },{
            path: '/more',
            component: require('./pages/more').default
        },{
            path: '/more/moreSub',
            component: require('./pages/moreSub').default
        },{
            path: '/setting',
            component: require('./pages/setting').default
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
