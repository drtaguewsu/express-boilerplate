import express from 'express';
import debug from 'debug';
import * as server from './config/server.js';
import { homeRouter } from './routes/home.js';

// Setup debug module to spit out all requests
// Do npn start to see the debug messages
debug('comp3028:server');

// Start the app
export const app = express();
server.setup(app)

// Register any middleware here

// Register routers here
app.get('/', homeRouter);

// Not encouraged, but this is a simple example of how to register a route without a router.
app.get('/test', (req, res) => {
  res.send('Test');
});

// ####################################### No need to modify below this line #######################################
// Start the server
server.errorHandling(app);
app.listen(server.port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${server.port}`);
  debug('testing');
});