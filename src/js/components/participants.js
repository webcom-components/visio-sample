import React, { Component, PropTypes } from 'react';
import history from '../history';

export default class Participants extends Component {

	static propTypes = {
		participants: PropTypes.array.isRequired,
		username: PropTypes.string.isRequired,
		logged: PropTypes.bool.isRequired,
		invitSent: PropTypes.bool.isRequired,
		sendInvitation: PropTypes.func.isRequired,
		enterRoom: PropTypes.func.isRequired
	};

	logout() {
		this.props.logout();
	}

	archiveInvitation() {
		this.props.archiveInvitations();
	}

	componentDidMount() {
	}

	clickOnParticipant(p) {
		if (p.info.room) {
			this.props.enterRoom(p.info.room, p.username, this.props.username)
		} else {
			this.props.sendInvitation(
				this.props.username,
				p.username, undefined);
		}
	}

	render() {

		const createParticipant = (p) => {
			//const status = p.info.connectedList ? 'list-group-item-success' : 'list-group-item-danger';
			const status = 'list-group-item-success';

			if (this.props.username === p.username) {
				return;
			}

			return <button type="button"
				disabled={!p.info.connectedList}
				className={`list-group-item ${status}`}
				key={`user_${p.username}`}
				onClick={this.clickOnParticipant.bind(this, p)}>
				{p.username +
				(p.info.room ? ` - click to join his room` : '' ) +
				(p.invitSent ? ' (invit sent)' : '') }
			</button>;
		}

		const getArchiveInvitationBtn = () => {
			return <input 	className="btn btn-default"
							type="button"
							value="Archive invitation"
							style={{marginBottom:'1em'}}
							onClick={this.archiveInvitation.bind(this)}/>;
		}

		const getContent = () => {
			const list = this.props.participants.filter(p => p.info.connectedList);

			if (list.length <= 1) {
				return (
					<div>No participants registered</div>
				);
			} else {
				return (
					<div id="partipantsBox">
						<h2>Available participants</h2>
						{getArchiveInvitationBtn.bind(this)()}
						<div className="list-group" id="participantList" style={{maxHeight:'288px', overflow:'auto'}}>
							{list.map((p) => {
								return createParticipant.bind(this)(p);
							})}
						</div>
					</div>
				);
			}
		}

		return (
			<div className="container">
				<div className='logout'>
					<button type='button' className='btn btn-default' onClick={this.logout.bind(this)}>
						<span className='glyphicon glyphicon-log-out' aria-hidden='true'></span>
					</button>
				</div>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-default partipantsPanel">
							<div className="panel-body">
								{getContent()}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}