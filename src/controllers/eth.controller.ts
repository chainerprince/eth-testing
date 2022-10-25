import { NextFunction, Request, Response } from 'express';
import { ethData } from '../services/eth.service';

interface RequestAddress {
  address: string;
}
export const ethHandler = async (
  req: Request<{}, {}, {}, RequestAddress>,
  res: Response,
  next: NextFunction
) => {
  try {    
    
    const {address} = req.query;
    const data = await ethData(address);
    res.status(200).json({
      status: 'success',
      data: {
        data
      },
    });
  } catch (err: any) {
    next(err);
  }
};

