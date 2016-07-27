/* global $ */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as roomActions from '../actions/room';
import * as streamActions from '../actions/stream';
import * as inviteActions from '../actions/invite';
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import TopButtons from '../components/TopButtons';
import CmdButtons from '../components/CmdButtons';
import Chat from '../components/Chat';
import {reduxForm} from 'redux-form';
import Panel from 'react-bootstrap/lib/Panel';

const ChatForm = reduxForm({
	form: 'chat',            // the name of your form and the key to where your form's state will be mounted
	fields: ['message'] // a list of all your fields in your form
})(Chat);

class Visio extends Component {
	static propTypes = {
		current: PropTypes.object.isRequired,
		room: PropTypes.object,
		users: PropTypes.array.isRequired,
		publishStream: PropTypes.func.isRequired,
		listenToStreams: PropTypes.func.isRequired,
		subscribeStream: PropTypes.func.isRequired,
		sendInvitation: PropTypes.func.isRequired,
		focusVideo: PropTypes.func.isRequired,
		quitRoom: PropTypes.func.isRequired,
		toggleVideo: PropTypes.func.isRequired,
		toggleAudio: PropTypes.func.isRequired,
		sendMessage: PropTypes.func.isRequired,
		toggleChat: PropTypes.func.isRequired
	};

	componentDidMount() {
		if (!this.props.room) {
			return;
		}

		this.props.publishStream(this.props.current, this.props.room.info, this.refs.localVideo);

		this.props.listenToStreams(this.props.room.info);
	}

	componentDidUpdate() {
		const users = this.props.room.participants.filter(u => u.stream && u.uid !== this.props.current.uid);

		const videos = $(ReactDom.findDOMNode(this.refs.otherVideos));
		// Add or update published streams
		users.forEach(u => {
			const streamId = u.stream.uid;
			const video = videos.find(`#${streamId}`);
			const videoClass = this.getVideoClass(streamId);
			if (!video.hasClass(videoClass)) {
				video.removeClass().addClass(videoClass);
			}
			const videoTag = videos.find(`#video-${streamId}`)[0];
			if (!u.subscribed) {
				this.props.subscribeStream(u.stream, videoTag);
			}
		}, this);
	}

	inviteParticipant(userToInvite) {
		this.props.sendInvitation(
			userToInvite,
			this.props.room.info);
	}

	focus(ref) {
		this.props.focusVideo(ref);
	}

	getVideoClass(ref) {
		if (this.props.room.focus === ref) {
			return ref === 'localVideo' ? 'bigLocalVideo' : 'bigRemoteVideo';
		}
		return ref === 'localVideo' ? 'smallLocalVideo' : 'smallRemoteVideo';
	}

	getOtherVideos2(){
		const users = this.props.room.participants.filter(u => u.stream && u.uid !== this.props.current.uid);
		return users.map(u => {
			const videoStatus = u.stream.muted.video ? 'muteVideo' : '';
			const audioStatus = u.stream.muted.audio ? 'muteAudio' : '';
			return (
				<Panel
					bsStyle="primary"
					className={this.getVideoClass(u.stream.uid)}
					id={u.stream.uid}
					key={u.stream.uid}
					header={u.name}
					onClick={this.focus.bind(this, u.stream.uid)}>
					<div id={`video-${u.stream.uid}`}></div>
					<div className={`remoteStatus ${videoStatus} ${audioStatus}`}>
						<i className="material-icons">videocam_off</i>
						<i className="material-icons">mic_off</i>
					</div>
				</Panel>
			);
		});
	}

	render() {
		return (
			<div>
				{this.props.children &&
				React.cloneElement(this.props.children, {
					users: this.props.users,
					current: this.props.current,
					room: this.props.room,
					inviteParticipant: this.inviteParticipant.bind(this)
				})}
				<TopButtons
					current={this.props.current}
					room={this.props.room.info}
					quitRoom={this.props.quitRoom} />
				<CmdButtons
					stream={this.props.room.stream}
					toggleVideo={this.props.toggleVideo}
					toggleAudio={this.props.toggleAudio} />
				<Panel
					bsStyle="warning"
					className={this.getVideoClass('localVideo')}
					header="Local"
					onClick={this.focus.bind(this, 'localVideo')}>
					<div ref="localVideo"></div>
				</Panel>
				<div className='videoContainer' ref='otherVideos'>
					{this.getOtherVideos2()}
				</div>
				<ChatForm
					current={this.props.current}
					room={this.props.room.info}
					sendMessage={this.props.sendMessage}
					toggleChat={this.props.toggleChat}
					minimized={this.props.room.chatMinimized}
					messages={this.props.room.messages} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		current: state.current,
		room: state.room,
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		sendMessage: roomActions.sendMessage,
		toggleChat: roomActions.toggleChat,
		quitRoom: roomActions.leave,
		toggleAudio: streamActions.toggleAudio,
		toggleVideo: streamActions.toggleVideo,
		focusVideo: streamActions.focusVideo,
		subscribeStream: streamActions.subscribe,
		publishStream: streamActions.publish,
		listenToStreams: streamActions.listen,
		sendInvitation: inviteActions.send
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Visio);
