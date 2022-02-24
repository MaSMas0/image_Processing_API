import { Router } from 'express';
import processedRoutes from './api/processedPicApi';
import originalRoutes from './api/originalPicApi';

const routes = Router();

routes.use('/images', processedRoutes, originalRoutes);
// second path in the end point magic/images/original or processing
export default routes;
