// passport.authenticate middleware is used here to authenticate the request
import express from 'express';
import jwt from 'jsonwebtoken';

import { sendUnauthorizedErrorResponse, sendApiSuccessResponse } from '../../services/response.service'

const authRouter = ({passport}) => {
    // Inject Passport to secure routes
    let router = express.Router();

    

    return router;
}

export default authRouter;