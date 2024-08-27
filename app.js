import express from 'express';
import debug from 'debug';
import * as server from './config/server.js';
import { homeRouter } from './routes/home.js';

// Setup debug module to spit out all messages
// Do `npn start` to see the debug messages
export const codeTrace = debug('comp3028:server');

// Start the app
export const app = express();
server.setup(app)

// Register any middleware here

// Register routers here
app.use('/', homeRouter);



// ####################################### No need to modify below this line #######################################
// Start the server
server.errorHandling(app);
app.listen(server.port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${server.port}`);
  debug('testing');
});
