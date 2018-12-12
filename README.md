# express-log-errors
[Contribute](./CONTRIBUTE.md) | [Changelog](./CHANGELOG.md) | [License](./LICENSE)

ExpressJS middleware for logging errors from route operations.

## Install
```
npm install express-log-errors
```

## Usage
```javascript
const app = require('express')();
const logErrors = require('express-log-errors');

app.get('/test', (req, res, next) => {
	next(new Error('Test error message'));
});

app.use(logErrors());

app.listen(3000);
```

## Maintainer
* [Brian Emilius](https://github.com/BrianEmilius)

## Contributors
*