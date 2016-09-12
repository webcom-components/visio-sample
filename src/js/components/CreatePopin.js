import React, { Component, PropTypes } from 'react';
import Modal, { Header, Title, Body, Footer } from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import omit from 'lodash/omit';
import {reduxForm} from 'redux-form';

import history from '../history';

class CreatePopin extends Component {

	static propTypes = {
		createRoom: PropTypes.func,
		fields: PropTypes.object.isRequired
	};

	_setModalState(showModal) {
		if(!this.state || this.state.showModal !== showModal) {
			this.setState({showModal});
		}
		if(this.state && !this.state.showModal) {
			history.replace('/users');
		}
		this.hide = !showModal;
	}

	componentDidMount() {
		this._setModalState(true);
	}

	componentDidUpdate() {
		this._setModalState(!this.hide);
	}

	handleSubmit(join, e) {
		e.preventDefault();
		this.props.createRoom(this.props.fields.roomName.value, join);
		this._setModalState(false);
	}

	close() {
		this._setModalState(false);
	}

	create(user) {
		this.props.createRoom(user);
		this.hide = true;
	}

	render() {
		const showModal = this.state && this.state.showModal;
		const { fields : { roomName } } = this.props;
		// ReduxFrom field props unknown to FormControl (causes warning since React 0.15.2)
		const unknownProps = [
			'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid',
			'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled'
		];
		return (
			<Modal show={showModal}>
				<Header>
					<Title>Create a public room</Title>
				</Header>
				<Body>
				<Form>
					<FormGroup controlId="roomName" bsClass="form-group label-floating">
						<ControlLabel>name</ControlLabel>
						<FormControl
							type="text"
							{...omit(roomName, unknownProps)}
						/>
					</FormGroup>
				</Form>
				</Body>
				<Footer>
					<Button onClick={this.handleSubmit.bind(this, false)}>create</Button>
					<Button onClick={this.handleSubmit.bind(this, true)}>create & join</Button>
					<Button onClick={this.close.bind(this)}>close</Button>
				</Footer>
			</Modal>
		);
	}
}

CreatePopin = reduxForm({// eslint-disable-line
	form: 'createRoom',            // the name of your form and the key to where your form's state will be mounted
	fields: ['roomName'] // a list of all your fields in your form
})(CreatePopin);

export default CreatePopin;
