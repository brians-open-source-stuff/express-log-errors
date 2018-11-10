# express-log-errors
ExpressJS middleware for logging errors from route operations.

## Install
```
npm install express-log-errors
```

## Usage
```
const app = require('express')();
const logErors = require('express-log-errors');

app.use(logErrors({}));
```

## Options
