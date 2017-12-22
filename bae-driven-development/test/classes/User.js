import User from 'classes/User';

describe('User', () => {
  let firstName, lastName, user, fullName;

  beforeEach(() => {
    firstName = 'Pablo';
    lastName = 'Ledesma';
    user = new User(firstName, lastName);
    fullName = `${firstName} ${lastName}`;
  });

  describe('constructor', () => {
    it('should create a User object', () => {
      expect(user).toEqual(jasmine.any(User));
    });

    it('should create an object with a first name', () => {
      expect(user.firstName).toEqual(firstName);
    });

    it('should create an object with a last name', () => {
      expect(user.lastName).toEqual(lastName);
    });
  });

  describe('fullName', () => {
    it('should return a full name', () => {
      expect(user.fullName()).toEqual(fullName);
    });
  });
});
