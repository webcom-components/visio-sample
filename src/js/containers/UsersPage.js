import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Users from '../components/Users';
import * as userActions from '../actions/user';
import * as inviteActions from '../actions/invite';
import * as roomActions from '../actions/room';

function mapStateToProps(state) {
	return {
		current: state.current.uid,
		users: state.users
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		archive: inviteActions.archive,
		send: inviteActions.send,
		joinRoom: roomActions.join,
		logout: userActions.logout
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
