import { Router } from 'express';
import IndexController from '@controllers/index.controller';
import Route from '@interfaces/routes.interface';

class IndexRoute implements Route {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() { //객체를 생성하고 초기화. super()메서드를 사용하면 상위클래스 생성자를 호출할 수 있음.
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;