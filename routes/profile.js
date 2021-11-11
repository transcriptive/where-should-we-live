const router = require('express').Router();
const profileCtrl = require('../controllers/profile');

/*---------- Public Routes ----------*/
// router.get('/', profilesCtrl.index); awaiting clarification 
router.get('/:id', profileCtrl.getOneProfile);
router.get('/user/:userid', profileCtrl.indexCurrentUser)

/*---------- Protected Routes ----------*/
router.use(require('../config/auth'));
router.post('/', checkAuth, profileCtrl.create);
router.put('/:id', checkAuth, profileCtrl.update);
router.delete('/:id', checkAuth, profileCtrl.delete);


/*--- HELPER FUNCTIONS  ---*/
function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router;