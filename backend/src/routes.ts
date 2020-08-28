import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './configs/upload';

import Controllers from './controllers';

const upload = multer(uploadConfig);
const routes = Router();

routes.get('/profile', Controllers.Profile.index);
routes.post('/profile', upload.single('photo'), Controllers.Profile.store);

routes.get('/cases', Controllers.Cases.index);
routes.post('/cases', upload.single('coverImage'), Controllers.Cases.store);

routes.get('/social-network', Controllers.SocialNetwork.index);
routes.post('/social-network', Controllers.SocialNetwork.store);

routes.get('/skills', Controllers.Skills.index);
routes.post('/skills', upload.single('logo'), Controllers.Skills.store);

routes.get('/career', Controllers.Career.index);
routes.post('/career', upload.single('logo'), Controllers.Career.store);

export default routes;
