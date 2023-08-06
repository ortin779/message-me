import { newSpecPage } from '@stencil/core/testing';
import { MessageMe } from '../message-me';

describe('message-me', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MessageMe],
      html: `<message-me></message-me>`,
    });
    expect(page.root).toEqualHtml(`
      <message-me>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </message-me>
    `);
  });
});
