import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';

require('!style!css!./styles/chat.css');

export default class Chat extends Component {
	static propTypes = {
		username: PropTypes.string.isRequired,
		roomname: PropTypes.string.isRequired,
		fields: PropTypes.object.isRequired,
		sendMessage: PropTypes.func.isRequired,
		messages: PropTypes.array.isRequired,
		toggleChat: PropTypes.func.isRequired,
		minimized: PropTypes.bool.isRequired
	}

	send(e) {
		if (e.which === 13) {
			this.props.sendMessage(
				this.props.username,
				this.props.roomname,
				this.props.fields.message.value);
		}
	}

	componentDidUpdate() {
		const node = ReactDom.findDOMNode(this.refs.messages);
		node.scrollTop = node.scrollHeight;
	}

	getMessages() {
		return (
			<ul id='messages' ref='messages'>
				{this.props.messages.map(m => {
					return <li key={m.ts}><span className='username'>{m.username}</span>{m.message}</li>;
				})}
			</ul>
		);
	}

	toggle() {
		this.props.toggleChat();
	}

	render() {
		const { fields : { message } } = this.props;

		function getChatClass() {
			return 'chat' + (this.props.minimized ? ' minimized' : '');
		}

		return (
			<div className={getChatClass.bind(this)()}>
				<header>
					<a className='btn btn-default' onClick={this.toggle.bind(this)}>
						Chat ! {this.props.messages.length ? `(${this.props.messages.length})` : '' }
					</a>
				</header>
				<div className='content'>
					{this.getMessages.bind(this)()}
					<footer>
						<input type='text' placeholder='type a message ...' {...message} onKeyPress={this.send.bind(this)} />
					</footer>
				</div>
			</div>
		);
	}
}