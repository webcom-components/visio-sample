import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import FormControl from 'react-bootstrap/lib/FormControl';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

require('!style!css!less!./styles/chat.less');

export default class Chat extends Component {
	static propTypes = {
		current: PropTypes.object.isRequired,
		room: PropTypes.object.isRequired,
		fields: PropTypes.object.isRequired,
		sendMessage: PropTypes.func.isRequired,
		messages: PropTypes.array.isRequired,
		toggleChat: PropTypes.func.isRequired,
		minimized: PropTypes.bool.isRequired
	};

	send(e) {
		if (e.which === 13) {
			this.props.sendMessage(
				this.props.room,
				this.props.current,
				this.props.fields.message.value);
		}
	}

	componentDidUpdate() {
		const node = ReactDom.findDOMNode(this.refs.messages).parentNode;
		node.scrollTop = node.scrollHeight;
	}

	// getMessages() {
	// 	return (
	// 		<ul id='messages' ref='messages'>
	// 			{this.props.messages.map(m => {
	// 				return <li key={m._created}><span className='username'>{m.name}</span>{m.text}</li>;
	// 			})}
	// 		</ul>
	// 	);
	// }

	toggle() {
		this.props.toggleChat();
	}

	render() {
		const { fields : { message } } = this.props;
		const _header = (
			<Button block onClick={this.toggle.bind(this)}>
				Chat ! {this.props.messages.length ? `(${this.props.messages.length})` : '' }
			</Button>
		);
		const _footer = (
			<FormControl
				type="text"
				placeholder="type a message..."
				{...message}
				onKeyPress={this.send.bind(this)}
			/>
		);
		return (
			<Panel header={_header} footer={_footer} className={`chat ${this.props.minimized ? 'minimized' : ''}`}>
				<ListGroup id='messages' ref='messages'>
					{
						this.props.messages.map(
							m => <ListGroupItem header={m.name} key={m._created}>{m.text}</ListGroupItem>
						)
					}
				</ListGroup>
			</Panel>
		);
	}
}
