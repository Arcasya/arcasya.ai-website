import express from 'express';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import { router as authRoutes } from './api/auth';
import { router as agentRoutes } from './api/agents';

dotenv.config();
const app = express();
app.use(json());

app.use('/api/auth', authRoutes);
app.use('/api/agents', agentRoutes);

export default app;
