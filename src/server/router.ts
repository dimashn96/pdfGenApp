import * as express from 'express';
import { User } from './models/UserModel';
import { DataBaseService } from './services/DataBaseService';
import { Response } from './models/ResponseModel';
import { GenPdfService } from './services/GenPdfService';

// Router
const router = express.Router();

// Error handling
const sendError = (res, err, status = 501, mes?) => {
  const message = mes || (typeof err === 'object' ? err.message : err);
  const response = new Response(status, message);
  res.status(status).json(response);
};

// Response handling
const sendResponse = (res, status = 200, mes = 'ok', data?) => {
  const response = new Response(status, mes, data);
  res.status(status).json(response);
};

// Get users
router.get('/users', (req, res) => {
  DataBaseService.getUsers()
    .then((users: [any]) => {
      const data = users.map((user) => new User(user, true));
      sendResponse(res, undefined, undefined, data);
    })
    .catch((err) => {
      sendError(res, err);
    });
});

// Gen pdf
router.get('/user/:firstName', (req, res) => {
  GenPdfService.getPdf(req.params.firstName)
    .then((result) => {
      sendResponse(res, undefined, undefined, result);
    })
    .catch((err) => {
      sendError(res, err);
    });
});

module.exports = router;
