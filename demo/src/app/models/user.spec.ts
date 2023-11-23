import { User } from './user';

describe('User', () => {
  it('should create', () => {
    expect(new User()).toBeTruthy();
  });
  it('should create an instance', () => {
    const user = new User();
    expect(user).toBeTruthy();
    expect(user.id).toBeUndefined();
    expect(user.username).toBeUndefined();
    expect(user.password).toBeUndefined();
    expect(user.role).toBeUndefined();
    expect(user.token).toBeUndefined();
  });

  it('should set properties correctly', () => {
    const user = new User();
    user.id = 1;
    user.username = 'testuser';
    user.password = 'testpassword';
    user.role = 'USER';
    user.token = 'testtoken';

    expect(user.id).toEqual(1);
    expect(user.username).toEqual('testuser');
    expect(user.password).toEqual('testpassword');
    expect(user.role).toEqual('USER');
    expect(user.token).toEqual('testtoken');
  });
});
