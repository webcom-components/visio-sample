import minimist	from 'minimist';
import _ from 'lodash';

export default function(knownOptions){
	return minimist(_.slice(process.argv, 2), knownOptions);
};