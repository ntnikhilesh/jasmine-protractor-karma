import { Injectable } from '@angular/core';

@Injectable()
export class TestService {

  constructor() { }

  addTwoNum(a,b){
    return a+b;
  }

}
