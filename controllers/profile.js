const Profile = require('../models/profile');

/** Company Profile CRUD functions */

// create a new profile
function create(req, res) {  
  // identify user creating the profile   
  console.log('create function')                        
  req.body.byUser = req.user._id;  
  console.log(req.body.byUser, req.user._id, 'byuser, _id')                    
  Profile.create(req.body)                              
    .then(profile => {res.json(profile)})              
    .catch(err => {res.json(err)});
}

// return profile created by the current user
function getCurrentProfile(req, res) {                   
  Profile.findOne({byUser: req.params.userid})
    .then(profiles => res.json(profiles))
    .catch(err => {res.json(err)})
}

// return one profile by document id
function getOneProfile(req, res) {                        
  Profile.findById(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.json(err))
}

function update(req, res) {  
  console.log(req.body, 'req body')                            
  Profile.findByIdAndUpdate(req.params.id, req.body)
    .then(profile => {res.json(profile)})
    .catch(err => res.json(err))
}



function deleteOne(req, res) {
  Profile.findByIdAndDelete(req.params.id)
    .then(profile => res.json(profile))
    .catch(err => res.json(err));
}

module.exports = {
  create,                                                                       
  // index, awaiting further clarification
  getCurrentProfile,
  getOneProfile,     
  update,                                                                      
  delete: deleteOne                                                                     
}