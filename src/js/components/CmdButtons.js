import React, { Component, PropTypes } from 'react';
import { toggleFullscreen as fullscreen } from '../utils';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Collapse from 'react-bootstrap/lib/Collapse';


export default class CmdButtons extends Component {

	constructor(...args) {
		super(...args);
		this.state = {};
	}

	static propTypes = {
		devices: PropTypes.object,
		stream: PropTypes.object,
		toggleVideo: PropTypes.func.isRequired,
		toggleAudio: PropTypes.func.isRequired,
		switchVideo: PropTypes.func.isRequired
	};

	toggleVideo() {
		this.props.toggleVideo(this.props.stream);
	}

	toggleAudio() {
		this.props.toggleAudio(this.props.stream);
	}

	switchVideo() {
		this.props.switchVideo(this.props.stream);
	}

	toggleFullScreen() {
		fullscreen();
	}

	render() {
		let audioIcon = 'mic_on', videoIcon = 'videocam';
		if (this.props.stream && this.props.stream.muted) {
			audioIcon = this.props.stream.muted.audio ? 'mic_off' : 'mic_on';
			videoIcon = this.props.stream.muted.video ? 'videocam_off' : 'videocam';
		}

		const
			audioTitle = audioIcon === 'mic_on' ? 'Mute local audio' : 'UnMute local audio',
			videoTitle = videoIcon === 'videocam' ? 'Mute local video' : 'UnMute local video';

		const popoverHoverFocus = (id, title) => (
			<Popover id={id}>
				<strong>{title}</strong>
			</Popover>
		);

		const switchCamera = this.props.devices && this.props.devices.video && this.props.devices.video.length > 1 ?
			(
				<OverlayTrigger
					trigger={['hover', 'focus']}
					placement="left"
					overlay={popoverHoverFocus('pop_device_switch', 'Switch camera')}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.switchVideo.bind(this)}>
						<i className="material-icons">swap_horiz</i>
					</Button>
				</OverlayTrigger>
			) : '';
		return (
			<ButtonGroup className="cmdButtons" bsSize="sm" vertical>
				{switchCamera}
				<OverlayTrigger
					trigger={['hover', 'focus']}
					placement="left"
					overlay={popoverHoverFocus('pop_video_toggle', videoTitle)}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.toggleVideo.bind(this)}>
						<i className="material-icons">{videoIcon}</i>
					</Button>
				</OverlayTrigger>
				<OverlayTrigger
					trigger={['hover', 'focus']}
					placement="left"
					overlay={popoverHoverFocus('pop_audio_toggle', audioTitle)}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.toggleAudio.bind(this)}>
						<i className="material-icons">{audioIcon}</i>
					</Button>
				</OverlayTrigger>
				<OverlayTrigger
					trigger={['hover', 'focus']}
					placement="left"
					overlay={popoverHoverFocus('pop_fullscreen_toggle', 'Toggle Fullscreen')}>
					<Button bsStyle="clear" bsSize="fab" onClick={this.toggleFullScreen.bind(this)}>
						<i className="material-icons">zoom_out_map</i>
					</Button>
				</OverlayTrigger>
			</ButtonGroup>
		);
	}
}
