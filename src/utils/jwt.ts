import jwt, { SignOptions } from 'jsonwebtoken';
import config from 'config';

// Sign JWT
export const signJwt = (payload: Object, options: SignOptions = {}) => {  
  return jwt.sign(payload, config.get<string>('secretKey'), {
    ...(options && options),    
  });
};
// This will verify the token and return the payload.
export const verifyJwt = <T>(token: string): T | null => {
  try {    
    return jwt.verify(token, config.get<string>('secretKey')) as T;
  } catch (error) {
    return null;
  }
};
