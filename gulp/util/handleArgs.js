import minimist	from 'minimist';
import _ from 'lodash';

module.exports = function(knownOptions){
	return minimist(_.slice(process.argv, 2), knownOptions);
};