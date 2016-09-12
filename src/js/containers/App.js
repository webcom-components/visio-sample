import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InvitationDialog from '../components/InvitationDialog';
import * as inviteActions from '../actions/invite';
import * as bootstrapUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';


bootstrapUtils.addStyle(Button, 'clear');
bootstrapUtils.bsSizes(['fab', 'fab-mini'], Button);
bootstrapUtils.addStyle(Panel, 'clear');

let ConnectedInvitation = connect(state => {
	return {
		invitation: state.invite.received
	};
}, dispatch => {
	return bindActionCreators({respondToInvitation: inviteActions.answer}, dispatch);
})(InvitationDialog);

export default class Main extends Component {
	static contextTypes = {
		store: PropTypes.object
	};


	render() {
		return (
			<div className='fullScreen'>
				<a href="https://github.com/webcom-components/visio-sample">
					<img
						style={{position: 'absolute', top: 0, left: 0, border: 0}}
						alt="Fork me on GitHub"
						src="https://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png"
					/>
				</a>
				{/* this will render the child routes */}
				{this.props.children}
				<ConnectedInvitation />
			</div>
		);
	}
}
