import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Barney Stinson Login should be successful', () => {
    expect(service.logInRequest("dingsbums@awesome.de" ,  "BarneyStinson") ).toEqual(true);
  });
  
  it('Login with wrong password should be unsuccessful', () => {
    expect(service.logInRequest("dingsbums@awesome.de" ,  "Barney781951Stinson") ).toEqual(false);
  });

  it('Login with wrong email should be unsuccessful', () => {
    expect(service.logInRequest("dingsbums321@awesome.de" ,  "BarneyStinson") ).toEqual(false);
  });
  
  it('Login with empty data should be unsuccessful', () => {
    expect(service.logInRequest("" ,  "") ).toEqual(false);
  });
});
