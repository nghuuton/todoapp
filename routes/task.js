const express = require('express');


const router = express.Router();

const Task = require('../model/Task');

// Get All

router.get("/tasks", (req, res) => {
   Task.findAll().then(tasks => {
      res.json(tasks);
   }).catch(err => {
      res.send('err: ' + err);
   })
})

// Add Task
router.post("/task", (req, res) => {
   if (!req.body.task_name) {
      res.status(400)
      res.json({
         error: "Bad Data"
      })
   } else {
      Task.create(req.body).then(() => {
         res.send("Task Added!");
      }).catch(err => {
         res.send('Error: ' + err);
      })
   }
})

//Delete Task
router.delete("/task/:id", (req, res) => {
   Task.destroy({
      where: {
         id: req.params.id
      }
   }).then(() => {
      res.send("Task Delete!");
   }).catch(err => {
      res.send('Error: ' + err);
   })
})
// Update Task
router.put("/task/:id", (req, res) => {
   if (!req.body.task_name) {
      res.status(400);
      res.json({
         error: "Bad Data"
      })
   } else {
      Task.update({
         task_name: req.body.task_name
      }, {
         where: {
            id: req.params.id
         }
      }).then(() => {
         res.send("Task Update!");
      }).catch(err => {
         res.send('Error: ' + err);
      })
   }
})

module.exports = router