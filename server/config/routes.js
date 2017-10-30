let polls = require('../controllers/polls.js')
var path = require('path');

module.exports = function(app) {
  //**** 2. create routes ********

  //get all the polls info
  app.get('/polls', function(req,res) {
    console.log("GET request")
    polls.showAll(req,res)
  });


  //create polls
  app.post('/polls', function (req, res){
    console.log("POST Request")
    polls.createPoll(req,res)
  });


  // show one specific note info
  app.get('/polls/:id', function(req, res) {
    console.log(" im in the routes", req.params.id)
    polls.showPoll(req, res)
  });

  //Delete a poll
  app.delete('/polls/:id', function(req, res) {
    console.log("DELETE Request")
    polls.deletePoll(req, res)
  });

  //Update a Poll!!!
  app.put('/polls/:id', function(req, res) {
    console.log(" from routes ID", req.params.id);
    polls.updatePoll(req, res)
  });


  // if none of these do not match we go to Angular routes
  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/index.html"))
  });

}
