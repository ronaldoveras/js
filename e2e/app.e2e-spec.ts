import { RacingAppPage } from './app.po';

describe('racing-app App', function() {
  let page: RacingAppPage;

  beforeEach(() => {
    page = new RacingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
