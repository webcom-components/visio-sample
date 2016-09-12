import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import FormControl from 'react-bootstrap/lib/FormControl';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import omit from 'lodash/omit';

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

	toggle() {
		this.props.toggleChat();
	}

	render() {
		const { fields : { message } } = this.props;
		const unknownProps = [
			'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid',
			'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled'
		];
		const _header = (
			<Button block onClick={this.toggle.bind(this)}>
				Chat ! {this.props.messages.length ? `(${this.props.messages.length})` : '' }
			</Button>
		);
		const _footer = (
			<FormControl
				type="text"
				placeholder="type a message..."
				{...omit(message, unknownProps)}
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
