import React, { Component, PropTypes } from 'react';
import history from '../history';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';


export default class TopButtons extends Component {
	static propTypes = {
		current: PropTypes.object.isRequired,
		room: PropTypes.object,
		quitRoom : PropTypes.func.isRequired
	};

	addParticipantToRoom() {
		history.replace('/visio/add');
	}

	exit() {
		this.props.quitRoom(
			this.props.current,
			this.props.room);
	}

	render() {
		const popoverHoverFocus = (id, title) => (
			<Popover id={id}>
				<strong>{title}</strong>
			</Popover>
		);

		return (
			<ButtonGroup className='topButtons' vertical>
				<OverlayTrigger 
					trigger={['hover', 'focus']} 
					placement="left" 
					overlay={popoverHoverFocus('pop_quit', 'Quit room')}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.exit.bind(this)}>
						<i className="material-icons">clear</i>
					</Button>
				</OverlayTrigger>
				<OverlayTrigger 
					trigger={['hover', 'focus']} 
					placement="left" 
					overlay={popoverHoverFocus('pop_add', 'Add participant')}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.addParticipantToRoom.bind(this)}>
						<i className="material-icons">add</i>
					</Button>
				</OverlayTrigger>
			</ButtonGroup>
		);
	}
}
