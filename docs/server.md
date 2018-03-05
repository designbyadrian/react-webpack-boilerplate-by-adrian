# Server

Both development and production are driven by Node Express. You'll find the setup in:


```
📁 server
    📄 index.js
```

This is where you'd work in server-side authentication etc.

## Run

### Development

`$ npm run start`

You can continue editing JavaScript and CSS files without restarting the server.

### Production

You first need to build the application before running the server. This gives you the opportunity to split build and boot times for example when using Docker with AWS.

Commands:

`$ npm run build`

`$ npm run start:prod`
