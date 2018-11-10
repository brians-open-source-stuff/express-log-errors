const fs = require('fs');
const path = require('path');

module.exports = function (options = {
	'path': 'logs',
	'logName': 'errors.log'
}) {
	if (!fs.existsSync(path.join(__dirname, options.path)))
		fs.mkdirSync(path.join(__dirname, options.path));
	return function (err, req, res, next) {
		if (err) {
			const fullPath = path.join(__dirname, options.path, options.logName);
			if (!fs.existsSync(fullPath))
				fs.writeFileSync(fullPath, '');
			const oldLog = fs.readFileSync(fullPath);
			const data = `[${new Date().toISOString()}]\t${err}\r\n${oldLog}`;
			fs.writeFileSync(fullPath, data, { 'flag': 'w' });
		}
		next();
	}
};
