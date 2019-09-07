import jwt from 'jsonwebtoken';
import config from '@/config';

export default async function authenticate(req, res, next) {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];
  if (!token) {
    return res.status(403).json('No token provided');
  }
  const { secretKey } = config.jwt;
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).json('Unauthorized');
  }
  next();
}
