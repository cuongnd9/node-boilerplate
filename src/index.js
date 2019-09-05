import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import signale from 'signale';
import apiRoute from './routes';
import schema from './graphql';

// Port.
const port = process.env.PORT || 9000;

// Initialize app.
const app = express();

// Body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enable cors.
app.use(cors());

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));
app.use('/api', logger('dev'), apiRoute);

// Initialize apollo server.
const server = new ApolloServer({ schema });

// Apply middleware.
server.applyMiddleware({ app, cors: true });

// Start server.
app.listen(port, () =>
  signale.debug(`Server started on http://localhost:${port}${server.graphqlPath}`),
);
