import { Ng2HelloWorldPage } from './app.po';

describe('ng2-hello-world App', function() {
  let page: Ng2HelloWorldPage;

  beforeEach(() => {
    page = new Ng2HelloWorldPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
