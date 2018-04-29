import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('jasmine-protractor-karma App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  //1
  // it('should navigate home page', () => {
  //   page.navigateTo();
  // });


  //2
  //  it('should display about button', () => {
  //   page.navigateTo();
  //   expect(page.getAboutButton()).toEqual('About');

  // });


  //3
  it('should route to  about page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    browser.pause();
  });

});
