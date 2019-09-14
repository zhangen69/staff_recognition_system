import { IAuth } from '../middlewares/checkAuth';
import mongoose from 'mongoose';

export interface IController {
  modelName: string;
  model: mongoose.Model<mongoose.Document>;
  create(model: any, data: any, auth: IAuth): Promise<any>;
  fetch(id: string, query: any): Promise<any>;
  fetchAll(queryModel: any): Promise<any>;
  update(model: any, data: any, auth: IAuth): Promise<any>;
  delete(id: string): Promise<any>;
}
