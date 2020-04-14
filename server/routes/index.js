let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */

/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(res);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(res);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(res);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(res);
});

/* GET projects page */
router.get('/projects', (req, res, next) =>
  {
    controllers.displayProducts(res);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(res);
});


//Added routes for login, register and logout pages

/* GET display login page */	
router.get('/login', (req, res, next) =>	
{	
    controllers.displayLogin(req, res, next);	
});	
/* POST process the login page */	
router.post('/login', (req, res, next) =>	
{	
  controllers.processLoginPage(req, res, next);	
});	
/* GET display register page */	
router.get('/register', (req, res, next) => {	
  controllers.displayRegisterPage(req, res, next);	
});	
/* POST process the register page */	
router.post('/register', (req, res, next) => {	
  controllers.processRegisterPage(req, res, next);	
});	
/* GET perform logout */	
router.get('/logout', (req, res, next) => {	
  controllers.performLogout(req, res, next);	
});


module.exports = router;
