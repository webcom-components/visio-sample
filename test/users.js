import {expect} from 'chai';
import users from '../src/js/reducers/users';

describe('users reducer', () => {
	it('should add a user', () => {
		expect(users(undefined, {
			type: 'ADD_USER',
			data: {
				uid: 'user',
				foo: 'bar',
				bar: 'baz'
			}
		})).to.deep.equal([{
			uid: 'user',
			foo: 'bar',
			bar: 'baz'
		}]);
	});

	it('should update user information', () => {
		expect(users([
			{ uid: 'user' }
		], {
			type: 'UPDATE_USER',
			data: {
				uid: 'user',
				foo: 'bar',
				bar: 'baz'
			}
		})).to.deep.equal([{
			uid: 'user',
			foo: 'bar',
			bar: 'baz'
		}]);

		expect(users([
			{ uid: 'user2' }
		], {
			type: 'UPDATE_USER',
			data: {
				uid: 'user',
				foo: 'bar',
				bar: 'baz'
			}
		})).to.deep.equal([{
			uid: 'user2'
		}]);
	});

	it('should update participant room', () => {
		expect(users([
			{ uid: 'user', foo: 'bar' }
		], {
			type: 'UPDATE_USER_ROOM',
			data: {
				uid: 'user',
				room: 'room1'
			}
		})).to.deep.equal([{
			uid: 'user',
			room: 'room1',
			foo: 'bar'
		}]);

		expect(users([
			{ uid: 'user2', foo: 'bar' }
		], {
			type: 'UPDATE_USER_ROOM',
			data: {
				uid: 'user',
				room: 'room1'
			}
		})).to.deep.equal([{
			uid: 'user2',
			foo: 'bar'
		}]);
	});

	it('should send invitation', () => {
		expect(users([{
			uid: 'user'
		}], {
			type: 'INVITATION_SENT',
			data: {
				invitee: {uid: 'user'}
			}
		})).to.deep.equal([{
			uid: 'user',
			invitSent: true
		}]);

		expect(users([{
			username: 'user2'
		}], {
			type: 'INVITATION_SENT',
			data: {
				invitee: {uid: 'user'}
			}
		})).to.deep.equal([{
			username: 'user2'
		}]);
	});

	it('should answer to an invitation', () => {
		expect(users([{
			uid: 'user',
			invitSent: true
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				invitee: {uid: 'user'}
			}
		})).to.deep.equal([{
			uid: 'user'
		}]);

		expect(users([{
			uid: 'user'
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				invitee: {uid: 'user'}
			}
		})).to.deep.equal([{
			uid: 'user'
		}]);

		expect(users([{
			uid: 'user2',
			invitSent: true
		}], {
			type: 'INVITATION_ANSWERED',
			data: {
				invitee: {uid: 'user'}
			}
		})).to.deep.equal([{
			uid: 'user2',
			invitSent: true
		}]);
	});

	it('should logout', () => {
		expect(users([
			{uid: 'user1'},
			{uid: 'user2'}
		], {
			type: 'LOGOUT'
		})).to.deep.equal([]);
	});
});
