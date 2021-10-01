const express = require('express');

const {
  validateActionId,
  validateAction
} = require('./actions-middlware');
const Actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res, next) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(next);
});

router.get('/:id', validateActionId, (req, res, next) => {
  if (req.actions) {
    res.status(200).json(req.actions);
  } else {
    next();
  }
});

router.post('/', validateAction, (req, res, next) => {
  Actions.insert(req.action)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(next);
});

router.put('/:id', [validateActionId, validateAction], (req, res, next) => {
  Actions.update(req.params.id, req.action)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(next);
});

router.delete('/:id', validateActionId, (req, res, next) => {
  Actions.remove(req.params.id)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(next);
});

module.exports = router;
