import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

module.exports = createDevTools(
	<DockMonitor toggleVisibilityKey="alt-h"
		defaultPosition="left"
		changePositionKey="alt-w">
		<LogMonitor />
	</DockMonitor>
);
