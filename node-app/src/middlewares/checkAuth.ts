import jwt from 'jsonwebtoken';
import { NextFunction, Response, Request } from 'express';

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, 'secret this should be longer');
    req['auth'] = { isAuth: true, user: decodedToken };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Access Denied!' });
  }
};

interface IAuth {
  isAuth: boolean;
  user: string;
}

export { checkAuth, IAuth };
