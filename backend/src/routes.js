const { Router } = require('express');

const routes = Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const ProfileController = require('./controllers/ProfileController');
const SkillsController = require('./controllers/SkillsController');
const WorksController = require('./controllers/WorksController');
const ExperienceController = require('./controllers/ExperienceController');
const EducationController = require('./controllers/EducationController');
const ContactsController = require('./controllers/ContactsController');

// Routes Perfil
routes.get('/get-profile', ProfileController.index);
routes.post('/create-profile', upload.single('image'), ProfileController.store);

// Routes Skills
routes.get('/get-skills', SkillsController.index);
routes.post('/create-skills', SkillsController.store);

// Routes Works
routes.get('/get-works', WorksController.index);
routes.post('/create-work', upload.single('image'), WorksController.store);

// Routes Experience
routes.get('/get-experiences', ExperienceController.index);
routes.post('/create-experience', ExperienceController.store);

// Routes Education
routes.get('/get-educations', EducationController.index);
routes.post('/create-education', EducationController.store);

// Routes Contacts
routes.get('/get-contacts', ContactsController.index);
routes.post('/create-contacts', ContactsController.store);

module.exports = routes;
