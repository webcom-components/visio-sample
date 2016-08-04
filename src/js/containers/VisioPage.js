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
import {throttle} from '../utils';

const ChatForm = reduxForm({
	form: 'chat',            // the name of your form and the key to where your form's state will be mounted
	fields: ['message'] // a list of all your fields in your form
})(Chat);

const setVideoOrientation = (container, selector) => {
	container.find('video').each((i, videoElt) => {
		const portrait = videoElt.videoWidth < videoElt.videoHeight;
		$(videoElt)
			.parents(selector)
			.toggleClass('portrait', portrait)
			.toggleClass('landscape', !portrait);
	});
};

class Visio extends Component {
	static propTypes = {
		children: PropTypes.object,
		current: PropTypes.object.isRequired,
		room: PropTypes.object,
		users: PropTypes.array.isRequired,
		publishStream: PropTypes.func.isRequired,
		listenToStreams: PropTypes.func.isRequired,
		subscribeStream: PropTypes.func.isRequired,
		sendInvitation: PropTypes.func.isRequired,
		focusVideo: PropTypes.func.isRequired,
		quitRoom: PropTypes.func.isRequired,
		switchVideo: PropTypes.func.isRequired,
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

		const remoteVideos = $(ReactDom.findDOMNode(this.refs.remoteVideos));
		// Add or update published streams
		users.forEach(u => {
			const streamId = u.stream.uid;
			const video = remoteVideos.find(`#${streamId}`);
			const videoClass = `video remote ${this.props.room.focus === streamId ? 'big' : 'small'}`;
			if (!video.hasClass(videoClass)) {
				video.removeClass().addClass(videoClass);
			}
			const videoTag = remoteVideos.find(`#video-${streamId}`)[0];
			if (!u.subscribed) {
				this.props.subscribeStream(u.stream, videoTag);
			}
		}, this);

		const remoteFocused = remoteVideos.find('.video.big').attr('id');
		const remotes = remoteVideos.find('.video');
		let focus = this.props.room.focus;
		if(remotes.length === 0 && focus && focus !== 'localVideo') {
			focus = 'localVideo';
		} else if(remotes.length > 0 && focus !== 'localVideo' && !remoteFocused) {
			focus = remotes.attr('id');
		}
		if(focus !== this.props.room.focus) {
			this.focus(focus);
		}

		throttle(setVideoOrientation)(remoteVideos, '.video.remote', 500);
		throttle(setVideoOrientation)($(ReactDom.findDOMNode(this.refs.localVideo)), '.video.local');
	}

	inviteParticipant(userToInvite) {
		this.props.sendInvitation(
			userToInvite,
			this.props.room.info);
	}

	focus(ref) {
		this.props.focusVideo(ref);
	}

	remoteVideos(){
		const users = this.props.room.participants.filter(u => u.stream && u.uid !== this.props.current.uid);
		return users.map(u => {
			const videoStatus = u.stream.muted.video ? 'muteVideo' : '';
			const audioStatus = u.stream.muted.audio ? 'muteAudio' : '';
			const size = this.props.room.focus === u.stream.uid ? 'big' : 'small';
			return (
				<Panel
					bsStyle="clear"
					className={`video remote ${size}`}
					id={u.stream.uid}
					key={u.stream.uid}
					header={u.name}
					onClick={this.focus.bind(this, u.stream.uid)}>
					<div id={`video-${u.stream.uid}`} className="videoContainer"></div>
					<div className={`status ${videoStatus} ${audioStatus}`}>
						<i className="material-icons">videocam_off</i>
						<i className="material-icons">mic_off</i>
					</div>
				</Panel>
			);
		});
	}

	render() {
		const size = !this.props.room.focus || this.props.room.focus === 'localVideo' ? 'big' : 'small';
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
					devices={this.props.current.devices}
					stream={this.props.room.stream}
					switchVideo={this.props.switchVideo}
					toggleVideo={this.props.toggleVideo}
					toggleAudio={this.props.toggleAudio} />
				<Panel
					bsStyle="clear"
					className={`video local ${size}`}
					header="Local"
					onClick={this.focus.bind(this, 'localVideo')}>
					<div ref="localVideo" className="videoContainer"></div>
				</Panel>
				<div className='remoteVideos' ref='remoteVideos'>
					{this.remoteVideos()}
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

const mapStateToProps = state => ({
	current: state.current,
	room: state.room,
	users: state.users
});

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		sendMessage: roomActions.sendMessage,
		toggleChat: roomActions.toggleChat,
		quitRoom: roomActions.leave,
		toggleAudio: streamActions.toggleAudio,
		toggleVideo: streamActions.toggleVideo,
		switchVideo: streamActions.switchVideo,
		focusVideo: streamActions.focusVideo,
		subscribeStream: streamActions.subscribe,
		publishStream: streamActions.publish,
		listenToStreams: streamActions.listen,
		sendInvitation: inviteActions.send
	},
	dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Visio);
