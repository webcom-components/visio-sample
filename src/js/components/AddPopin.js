import React, { Component, PropTypes } from 'react';
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import history from '../history';

export default class AddPopin extends Component {

	static propTypes = {
		user: PropTypes.object,
		users: PropTypes.array,
		room: PropTypes.object,
		inviteParticipant: PropTypes.func
	};

	_setModalState(showModal) {
		if(!this.state || this.state.showModal !== showModal) {
			this.setState({showModal});
		}
		if(this.state && !this.state.showModal) {
			history.replace('/visio');
		}
		this.hide = !showModal;
	}

	componentDidMount() {
		this._setModalState(true);
	}

	componentDidUpdate() {
		this._setModalState(!this.hide);
	}

	close() {
		this._setModalState(false);
	}

	invite(user) {
		this.props.inviteParticipant(user);
		this.hide = true;
	}

	render() {
		const showModal = this.state && this.state.showModal;
		const _inRoom = p => this.props.room.participants.find(u => u.uid === p.uid && u.status === 'CONNECTED');
		const list = this.props.users.filter(p => p.status === 'CONNECTED' && !_inRoom(p));
		const modalContent = !list.length ? (<div>No participants registered</div>) : (
			<ListGroup
				style={{maxHeight:'288px', overflow:'auto'}}>
				{list.map(p => {
					return (
						<ListGroupItem
							key={`add_u_${p.uid}`}
							disabled={p.status !== 'CONNECTED'}
							onClick={this.invite.bind(this, p)}
							header={p.name}>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);

		return (
			<Modal show={showModal}>
				<Header>
					<Title>Invite someone</Title>
				</Header>
				<Body>
					{modalContent}
				</Body>
				<Footer>
					<Button onClick={this.close.bind(this)}>close</Button>
				</Footer>
			</Modal>
		);
	}
}
