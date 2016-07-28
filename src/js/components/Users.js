import React, { Component, PropTypes } from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

export default class UserList extends Component {

	static propTypes = {
		users: PropTypes.array.isRequired,
		current: PropTypes.string.isRequired,
		send: PropTypes.func.isRequired,
		joinRoom: PropTypes.func.isRequired,
		archive: PropTypes.func.isRequired,
		logout: PropTypes.func.isRequired
	};

	logout() {
		this.props.logout();
	}

	archive() {
		this.props.archive();
	}

	inviteOrJoin(p) {
		if (p.room) {
			this.props.joinRoom(p.room);
		} else {
			this.props.send(p);
		}
	}

	render() {
		const list = this.props.users.filter(p => p.status === 'CONNECTED' && p.uid !== this.props.current);

		const panelContent = !list.length ? (<div>No participants registered</div>) : (
			<ListGroup
				style={{maxHeight:'288px', overflow:'auto'}}>
				{list.map(p => {
					return (
						<ListGroupItem
							key={`plist_${p.uid}`}
							disabled={p.status !== 'CONNECTED'}
							onClick={this.inviteOrJoin.bind(this, p)}
							header={p.name}>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);

		const panelHeader = (
			<Row>
				<Col xs={9} sm={10}>
					<h4>Participants</h4>
				</Col>
				<Col xs={3} sm={2}>
					<Button
						bsClass="btn btn-primary btn-fab btn-fab-mini"
						onClick={this.archive.bind(this)}
						title="Clear invitations">
						<i className="material-icons">delete_forever</i>
					</Button>
				</Col>
			</Row>
		);

		return (
			<Grid>
				<div className='logout'>
					<Button
						bsClass='btn btn-primary btn-fab btn-fab-mini'
						onClick={this.logout.bind(this)}>
						<i className="material-icons">power_settings_new</i>
					</Button>
				</div>
				<Row>
					<Col xs={10} xsPush={1} sm={8} smPush={2} md={6} mdPush={3}>
						<Panel
							header={panelHeader}
							className="users">
							{panelContent}
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}
