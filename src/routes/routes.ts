import express from 'express';
import processedRoutes from './api/processedPicApi';
import originalRoutes from './api/originalPicApi';

const routes = express.Router();

routes.use('/images', processedRoutes, originalRoutes);

export default routes;
