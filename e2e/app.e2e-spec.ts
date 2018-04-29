import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('jasmine-protractor-karma App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!');
  // });

  it('should navigate home page', () => {
    page.navigateTo();
  });
});
