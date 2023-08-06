import { newE2EPage } from '@stencil/core/testing';

describe('message-me', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<message-me></message-me>');

    const element = await page.find('message-me');
    expect(element).toHaveClass('hydrated');
  });
});
