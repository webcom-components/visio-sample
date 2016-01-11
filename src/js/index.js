/* global Reach, $ */

require('babel/polyfill');
require('!style!css!bootstrap.css')
require('bootstrap');
require('!style!css!../style.css');
require('script!webcom');
require('script!webcom-reach');

import React from 'react';
import ReactDom from 'react-dom';
import Root from './containers/Root';
import history from './history';

ReactDom.render(
	<Root history={history} />,
	document.getElementById('root')
);
