import React, { Component, PropTypes } from 'react';
import history from '../history';

import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

const _stopEvent = event => {
	const e = event || window.event;
	//IE9 & Other Browsers
	if(e.stopPropagation) {
		e.stopPropagation();
	}
	//IE8 and Lower
	else {
		e.cancelBubble = true;
	}
}

export default class UserList extends Component {

	static propTypes = {
		users: PropTypes.array.isRequired,
		rooms: PropTypes.array.isRequired,
		current: PropTypes.string.isRequired,
		send: PropTypes.func.isRequired,
		joinRoom: PropTypes.func.isRequired,
		createRoom: PropTypes.func.isRequired,
		removeRoom: PropTypes.func.isRequired,
		removeAllRooms: PropTypes.func.isRequired,
		archive: PropTypes.func.isRequired,
		logout: PropTypes.func.isRequired
	};

	logout() {
		this.props.logout();
	}

	archive() {
		this.props.archive();
	}

	create() {
		history.replace('/users/create');
	}

	join(p) {
		this.props.joinRoom(p);
	}

	remove(room, e) {
		_stopEvent(e);
		this.props.removeRoom(room);
	}

	inviteOrJoin(p, e) {
		_stopEvent(e);
		if (p.room) {
			this.props.joinRoom(p.room);
		} else {
			this.props.send(p);
		}
	}

	render() {
		const connectedUsers = this.props.users.filter(p => p.status === 'CONNECTED' && p.uid !== this.props.current);
		const usersList = !connectedUsers.length ? (<div>No participants registered</div>) : (
			<ListGroup
				style={{maxHeight:'288px', overflow:'auto'}}>
				{connectedUsers.map(p => {
					return (
						<ListGroupItem
							key={`u_list_${p.uid}`}
							disabled={p.status !== 'CONNECTED'}
							onClick={this.inviteOrJoin.bind(this, p)}
							header={p.name}>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);

		const openedRooms = this.props.rooms.filter(p => p.status === 'OPENED');
		const roomsList = !openedRooms.length ? (<div>No opened rooms</div>) : (
			<ListGroup
				style={{maxHeight:'288px', overflow:'auto'}}>
				{openedRooms.map(p => {
					const remove = p.owner !== this.props.current ? '' : (
						<a style={{float: 'right'}} onClick={this.remove.bind(this, p)} title="Close room">
							<i className="material-icons">close</i>
						</a>
					);
					return (
						<div className="list-group-item" key={`r_list_${p.uid}`}>
							<Row className="list-group-item-heading">
								<Col xs={10} sm={10} md={10} onClick={this.join.bind(this, p)}>{p.name}</Col>
								<Col xs={2} sm={2} md={2}>{remove}</Col>
							</Row>
						</div>
					);
				})}
			</ListGroup>
		);

		return (
			<Grid>
				<Row>
					<Col className='logout'>
						<Button
							bsClass="btn btn-info btn-fab btn-fab-mini"
							onClick={this.create.bind(this)}
							title="Create a public room">
							<i className="material-icons">add</i>
						</Button>
						<Button
							bsClass='btn btn-warning btn-fab btn-fab-mini'
							title="Remove pending invites"
							onClick={this.archive.bind(this)}>
							<i className="material-icons">delete_sweep</i>
						</Button>
						<Button
							bsClass='btn btn-primary btn-fab btn-fab-mini'
							onClick={this.logout.bind(this)}>
							<i className="material-icons">power_settings_new</i>
						</Button>
					</Col>
				</Row>
				<Row>
					{
						this.props.children &&
						React.cloneElement(this.props.children, {createRoom: this.props.createRoom})
					}
					<Col md={6}>
						<Panel
							header={<h4>Public Rooms</h4>}
							className="rooms">
							{roomsList}
						</Panel>
					</Col>
					<Col md={6}>
						<Panel
							header={<h4>Connected users</h4>}
							className="users">
							{usersList}
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}
