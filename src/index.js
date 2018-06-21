import { render } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Grid from 'pages/Grid';
import 'index.less';
render(
    (
        <BrowserRouter basename = { window.location.host.indexOf('localhost') === -1 ? '/others/HRKit' : '/' }>
            <Grid />
        </BrowserRouter>
    ), document.getElementById('root')
)
