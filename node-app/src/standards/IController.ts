import { IAuth } from '../middlewares/checkAuth';
import mongoose from 'mongoose';

export interface IController {
  modelName: string;
  model: mongoose.Model<mongoose.Document>;
  create(model: mongoose.Model<mongoose.Document>, data: any, auth: IAuth): Promise<any>;
  fetch(id: string): Promise<any>;
  fetchAll(queryModel: any): Promise<any>;
  update(model: any, auth: IAuth): Promise<any>;
  delete(id: string): Promise<any>;
}
