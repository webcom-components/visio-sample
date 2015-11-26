import {expect} from 'chai';
import participants from '../src/js/reducers/participants';

describe('participants reducer', () => {
	it('should add a participant', () => {
		expect(participants(undefined, {
			type: 'ADD_PARTICIPANT',
			data: {
				username: 'user',
				info: {
					foo: 'bar'
				}
			}
		})).to.deep.equal([{
			username: 'user',
			info: {
				foo: 'bar'
			}
		}]);
	});

	it('should update participant information', () => {
		expect(participants([
			{ username: 'user' }
		], {
			type: 'UPDATE_PARTICIPANT',
			data: {
				username: 'user',
				info: {
					foo: 'bar'
				}
			}
		})).to.deep.equal([{
			username: 'user',
			info: {
				foo: 'bar'
			}
		}]);

		expect(participants([
			{ username: 'user2' }
		], {
			type: 'UPDATE_PARTICIPANT',
			data: {
				username: 'user',
				info: {
					foo: 'bar'
				}
			}
		})).to.deep.equal([{
			username: 'user2'
		}]);
	});

	it('should update participant room', () => {
		expect(participants([
			{ username: 'user', foo: 'bar' }
		], {
			type: 'UPDATE_PARTICIPANT_ROOM',
			data: {
				username: 'user',
				roomname: 'room1'
			}
		})).to.deep.equal([{
			username: 'user',
			room: 'room1',
			foo: 'bar'
		}]);

		expect(participants([
			{ username: 'user2', foo: 'bar' }
		], {
			type: 'UPDATE_PARTICIPANT_ROOM',
			data: {
				username: 'user',
				roomname: 'room1'
			}
		})).to.deep.equal([{
			username: 'user2',
			foo: 'bar'
		}]);
	});

	it('should send invitation', () => {
		expect(participants([{
			username: 'user'
		}], {
			type: 'INVITATION_SENT',
			data: 'user'
		})).to.deep.equal([{
			username: 'user',
			invitSent: true
		}]);

		expect(participants([{
			username: 'user2'
		}], {
			type: 'INVITATION_SENT',
			data: 'user'
		})).to.deep.equal([{
			username: 'user2'
		}]);
	});

	it('should answer to an invitation', () => {
		expect(participants([{
			username: 'user',
			invitSent: true
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				username: 'user'
			}
		})).to.deep.equal([{
			username: 'user'
		}]);

		expect(participants([{
			username: 'user'
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				username: 'user'
			}
		})).to.deep.equal([{
			username: 'user'
		}]);

		expect(participants([{
			username: 'user2',
			invitSent: true
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				username: 'user'
			}
		})).to.deep.equal([{
			username: 'user2',
			invitSent: true
		}]);
	});

	it('should logout', () => {
		expect(participants([
			{username: 'user1'},
			{username: 'user2'}
		], {
			type: 'LOGOUT'
		})).to.deep.equal([]);
	});
});