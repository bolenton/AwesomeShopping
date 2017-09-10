import { AwesomeShoppingPage } from './app.po';

describe('awesome-shopping App', () => {
  let page: AwesomeShoppingPage;

  beforeEach(() => {
    page = new AwesomeShoppingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
