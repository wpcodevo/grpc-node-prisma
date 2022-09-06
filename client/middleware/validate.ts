import { z } from 'zod';
import {Request, Response, NextFunction} from "express"

const validate =
  (schema: z.AnyZodObject) =>
  async (req: Request,res: Response, next: NextFunction): Promise<any> => {
    try {
      schema.parse({
        params:req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          status: "fail",
          message: err.errors
        })
    
      }
      return res.status(500).json({
          status: "error",
          message: err.message
        })
    }
  };
export default validate;
