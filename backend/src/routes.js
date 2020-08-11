const { Router } = require('express');

const routes = Router();
const multer = require('multer');
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const ProfileController = require('./controllers/ProfileController');
const SkillsController = require('./controllers/SkillsController');
const CasesController = require('./controllers/CasesController');
const ExperienceController = require('./controllers/ExperienceController');
const EducationController = require('./controllers/EducationController');
const ContactsController = require('./controllers/ContactsController');

// Routes Perfil
routes.get('/profile', ProfileController.index);
routes.post('/add-profile', upload.single('image'), ProfileController.store);

// Routes Skills
routes.get('/skills', SkillsController.index);
routes.post('/add-skills', SkillsController.store);

// Routes Works
routes.get('/cases', CasesController.index);
routes.post('/add-cases', upload.single('image'), CasesController.store);

// Routes Experience
routes.get('/experiences', ExperienceController.index);
routes.post('/add-experience', ExperienceController.store);

// Routes Education
routes.get('/educations', EducationController.index);
routes.post('/add-education', EducationController.store);

// Routes Contacts
routes.get('/contacts', ContactsController.index);
routes.post('/add-contacts', ContactsController.store);

module.exports = routes;
