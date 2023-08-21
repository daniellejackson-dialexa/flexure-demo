import { startApp } from "flexure";
import { RegisterRoutes } from './generated/routes';
import * as swaggerJson from './generated/swagger.json';

startApp(RegisterRoutes, swaggerJson);
