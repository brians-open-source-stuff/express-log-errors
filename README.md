# express-log-errors
ExpressJS middleware for logging errors from route operations.

## Install
```
npm install express-log-errors
```

## Usage
```javascript
const app = require('express')();
const logErrors = require('express-log-errors');

app.use(logErrors({}));
```

## Options
| Option | Default setting | 
|---|---|
| path | `'logs'` |
| logName | `'errors.log'` |