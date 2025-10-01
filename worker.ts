import { Hono } from 'hono/tiny';
import apiApp from './api/index';
import { cors } from 'hono/cors';

const worker = new Hono();

worker.use(cors());

// Root redirect to /api
worker.get('/', (c) => c.redirect('/api', 302));

// Mount API app (has basePath('/api'))
worker.route('/', apiApp);

export default { fetch: worker.fetch };