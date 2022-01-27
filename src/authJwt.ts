import jwt, { VerifyOptions } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        res.sendStatus(401);
    }
    else {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, 'Acc3ssT0k3nS3cr3t', function(err, decoded) {
            if (err) {
                return res.sendStatus(403);
            }
            console.log(decoded);
            next();
        })
    }
}