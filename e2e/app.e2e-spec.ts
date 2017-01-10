import { Angular2ChatFirebasePage } from './app.po';

describe('angular2-chat-firebase App', function() {
  let page: Angular2ChatFirebasePage;

  beforeEach(() => {
    page = new Angular2ChatFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
