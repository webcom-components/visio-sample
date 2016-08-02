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


export default class LoginForm extends Component {
	static propTypes = {
		login: PropTypes.func.isRequired,
		resume: PropTypes.func.isRequired,
		fields: PropTypes.object.isRequired
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

		return (
			<Grid>
				<Row>
					<Col md={6} mdPush={3}>
						<Panel className="login">
							<Form>
								<FormGroup controlId="email" bsClass="form-group label-floating">
									<ControlLabel>email</ControlLabel>
									<FormControl
										type="text"
										{...email}
									/>
								</FormGroup>
								<FormGroup controlId="password" bsClass="form-group label-floating">
									<ControlLabel>password</ControlLabel>
									<FormControl
										type="password"
										{...password}
									/>
								</FormGroup>
								<FormGroup controlId="username" bsClass="form-group label-floating">
									<ControlLabel>username</ControlLabel>
									<FormControl
										type="text"
										{...username}
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
