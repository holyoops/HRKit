import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import HRKitWindow from 'HRKit/HRKitWindow';
import 'index.less';
render(
    (
        <BrowserRouter basename = { window.location.host.indexOf('localhost') === -1 ? '/others/HRKit' : '/' }>
            <HRKitWindow />
        </BrowserRouter>
    ), document.getElementById('root')
)
