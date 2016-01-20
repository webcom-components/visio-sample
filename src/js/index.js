/* global Reach, $ */

require('../style.less');

import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';
import history from './history';

ReactDom.render(
	<Root history={history} />,
	document.getElementById('root')
);
