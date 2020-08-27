import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './configs/upload';

import ProfileController from './controllers/ProfileController';

const upload = multer(uploadConfig);

const routes = Router();

routes.get('/profile', ProfileController.index);
routes.post('/profile', upload.single('photo'), ProfileController.store);

export default routes;
