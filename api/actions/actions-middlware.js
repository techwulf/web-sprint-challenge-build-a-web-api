const Actions = require('./actions-model');

async function validateActionId(req, res, next) {
  const actions = await Actions.get(req.params.id);
  if (actions) {
    req.actions = actions;
    next();
  } else {
    next({status: 404, message: 'actions id not found'});
  }
}

async function validateAction(req, res, next) {
  const action = req.body;
  if (action.description && action.notes && action.completed !== undefined) {
    req.action = action;
    next();
  } else {
    next(
      {status: 400, message: `actions doesn't contain all necessary fields`}
    );
  }
}

module.exports = {
  validateActionId,
  validateAction
}
