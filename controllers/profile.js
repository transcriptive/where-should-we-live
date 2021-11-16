const Profile = require('../models/profile');

/** Company Profile CRUD functions */

// create a new profile
function create(req, res) {  
  // identify user creating the profile   
  req.body.byUser = req.user._id 
  Profile.create(req.body)                              
    .then(profile => {res.json(profile)})              
    .catch(err => {res.json(err)});
}

function indexCurrentUser(req, res) {                   
  Profile.findOne({byUser: req.params.userid})
    .then(profiles => res.json(profiles))
    .catch(err => {res.json(err)})
}

// return profile created by the current user
function getCurrentProfile(req, res) { 
  Profile.findOne({byUser: req.params.userid})
    .then(profiles => res.json(profiles))
    .catch(err => {res.json(err)})
}

// return one profile by document id
function getOneProfile(req, res) {  
  Profile.findOne({byUser: req.params.id})
    .then(profile => res.json(profile)
    .catch(err => res.json(err)))
}

function update(req, res) {  
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
  indexCurrentUser, 
  getCurrentProfile,
  getOneProfile,     
  update,                                                                      
  delete: deleteOne                                                                     
}