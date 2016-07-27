import React, { Component, PropTypes } from 'react';
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

export default class InvitationDialog extends Component {

	static propTypes = {
		invitation: PropTypes.object,
		respondToInvitation: PropTypes.func
	};

	_setModalState() {
		const showModal = this.props.invitation != null;
		if(!this.state || this.state.showModal !== showModal) {
			this.setState({showModal});
		}
	}

	componentDidMount() {
		this._setModalState();
	}
	componentDidUpdate() {
		this._setModalState();
	}

	acceptInvitation() {
		this.props.respondToInvitation(true, this.props.invitation);
	}

	rejectInvitation() {
		this.props.respondToInvitation(false, this.props.invitation, 'don\'t know ...');
	}

	render() {
		let invite, sender = '', showModal = this.state && this.state.showModal;

		if (this.props.invitation) {
			invite = this.props.invitation.topic;
			sender = this.props.invitation.from;
		}

		return (
			<Modal show={showModal}>
				<Header>
					<Title>Invitation received</Title>
				</Header>
				<Body>
					<p>You received an invitation from {sender}:</p>
					<blockquote>{invite}</blockquote>
				</Body>
				<Footer>
					<Button onClick={this.acceptInvitation.bind(this)}>accept</Button>
					<Button onClick={this.rejectInvitation.bind(this)}>decline</Button>
				</Footer>
			</Modal>
		);
	}
}
