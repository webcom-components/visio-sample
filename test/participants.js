import {expect} from 'chai';
import participants from '../src/js/reducers/participants';

describe('participants reducer', () => {
	it('should add a participant', () => {
		const action = {
			type: 'ADD_PARTICIPANT',
			data: {
				username: 'user',
				info: {
					foo: 'bar'
				}
			}
		};

		expect(participants(undefined, action)).to.deep.equal([{
			username: 'user',
			info: {
				foo: 'bar'
			}
		}]);
	});
});