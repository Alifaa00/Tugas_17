import LoginPage from './LoginPage';

describe('Orange Login', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.fillUsername('Admin');
    loginPage.fillPassword('admin123');
    loginPage.clickLoginButton();

    loginPage.getDashboardHeader().should('have.text', 'Dashboard');
  });

  it('should display an error for invalid credentials', () => {
    loginPage.fillUsername('User');
    loginPage.fillPassword('user123');
    loginPage.clickLoginButton();

    loginPage.getErrorMessage().should('have.text', 'Invalid credentials');
  });

  it('should display an error for empty username', () => {
    loginPage.fillPassword('admin123');
    loginPage.clickLoginButton();
    loginPage.getErrorMessageEmpty().should('have.text', 'Required');
  });

  it('should display an error for empty password', () => {
    loginPage.fillUsername('Admin');
    loginPage.clickLoginButton();

    loginPage.getErrorMessageEmpty().should('have.text', 'Required');
  });
});
