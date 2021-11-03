const router = require('express').Router();
const profilesCtrl = require('../controllers/profiles');

/*---------- Public Routes ----------*/
// router.get('/', profilesCtrl.index); awaiting clarification 
router.get('/:id', profilesCtrl.getOneProfile);
router.get('/user/:userid', profilesCtrl.getCurrentProfile)

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, profilesCtrl.create);
router.put('/:id', checkAuth, profilesCtrl.update);
router.delete('/:id', checkAuth, profilesCtrl.delete);


/*--- HELPER FUNCTIONS  ---*/
function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;