import React, { Component, PropTypes } from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Alert from 'react-bootstrap/lib/Alert';

import omit from 'lodash/omit';

export default class LoginForm extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		resume: PropTypes.func.isRequired,
		fields: PropTypes.object.isRequired,
		current: PropTypes.object
	};

	handleSubmit(e) {
		e.preventDefault();
		this.props.login(
			this.props.fields.email.value,
			this.props.fields.password.value,
			this.props.fields.username.value
		);
	}

	componentWillMount() {
		this.props.resume();
	}

	render() {
		const { fields : { email, password, username } } = this.props;
		// ReduxFrom field props unknown to FormControl (causes warning since React 0.15.2)
		const unknownProps = [
			'initialValue', 'autofill', 'onUpdate', 'valid', 'invalid',
			'dirty', 'pristine', 'active', 'touched', 'visited', 'autofilled'
		];
		const error = this.props.current.error ? (
			<Alert bsStyle="danger"><strong>{this.props.current.error}</strong></Alert>
		) : '';
		return (
			<Grid>
				<Row>
					<Col md={6} mdPush={3}>
						<Panel className="login">
							{error}
							<Form>
								<FormGroup controlId="email" bsClass="form-group label-floating">
									<ControlLabel>email</ControlLabel>
									<FormControl
										type="text"
										{...omit(email, unknownProps)}
									/>
								</FormGroup>
								<FormGroup controlId="password" bsClass="form-group label-floating">
									<ControlLabel>password</ControlLabel>
									<FormControl
										type="password"
										{...omit(password, unknownProps)}
									/>
								</FormGroup>
								<FormGroup controlId="username" bsClass="form-group label-floating">
									<ControlLabel>username</ControlLabel>
									<FormControl
										type="text"
										{...omit(username, unknownProps)}
									/>
								</FormGroup>
								<Button
									bsStyle="primary"
									type="submit"
									onClick={this.handleSubmit.bind(this)}>login</Button>
							</Form>
						</Panel>
					</Col>
				</Row>
			</Grid>
		);
	}
}
