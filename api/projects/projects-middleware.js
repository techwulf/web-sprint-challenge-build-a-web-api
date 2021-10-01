const Projects = require('./projects-model');

async function validateProjectId(req, res, next) {
  const projects = await Projects.get(req.params.id);
  if (projects) {
    req.projects = projects;
    next();
  } else {
    next({status: 404, message: 'project id not found'});
  }
}

async function validateProject(req, res, next) {
  const project = req.body;
  if(project.name && project.description && project.completed) {
    req.project = project;
    next();
  } else {
    next(
      {status: 400, message: `project doesn't contain all necessary fields`}
    );
  }
}

module.exports = {
  validateProjectId,
  validateProject
}