import { Login } from './login';

describe('Login', () => {
  it('should create an instance', () => {
    expect(new Login()).toBeTruthy();
  });

  it('should create an instance', () => {
      const login = new Login();
      expect(login).toBeTruthy();
      expect(login.username).toBeUndefined();
      expect(login.password).toBeUndefined();
  });
  
  it('testeUser', () => {
      const login = new Login();
      login.username = 'testuser';
      login.password = 'testpassword';
  
      expect(login.username).toEqual('testuser');
      expect(login.password).toEqual('testpassword');
  });
});

