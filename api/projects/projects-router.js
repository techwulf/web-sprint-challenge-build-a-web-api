const express = require('express');

const {
  validateProjectId,
  validateProject
} = require('./projects-middleware');
const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get('/:id', validateProjectId, (req, res, next) => {
  if (req.projects) {
    res.status(200).json(req.projects);
  } else {
    next();
  }
});

router.post('/', validateProject, (req, res, next) => {
  Projects.insert(req.project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
