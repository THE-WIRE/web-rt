import { WebCodeCollabPage } from './app.po';

describe('web-code-collab App', () => {
  let page: WebCodeCollabPage;

  beforeEach(() => {
    page = new WebCodeCollabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
