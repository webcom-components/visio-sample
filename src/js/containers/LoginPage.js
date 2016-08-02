import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import * as userActions from '../actions/user';
import {reduxForm} from 'redux-form';

const _form = reduxForm({
	form: 'login',            // the name of your form and the key to where your form's state will be mounted
	fields: ['email', 'password', 'username'] // a list of all your fields in your form
})(LoginForm);


function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(_form);
