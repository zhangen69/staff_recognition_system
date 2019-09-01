import { IAuth } from '../middlewares/checkAuth';

export interface IController {
  create(model: any, auth: IAuth): Promise<any>;
  fetch(id: string): Promise<any>;
  fetchAll(queryModel: any): Promise<any>;
  update(model: any, auth: IAuth): Promise<any>;
  delete(id: string): Promise<any>;
}
