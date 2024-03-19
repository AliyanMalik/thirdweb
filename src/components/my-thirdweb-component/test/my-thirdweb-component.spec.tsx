import { newSpecPage } from '@stencil/core/testing';
import { MyThirdwebComponent } from '../my-thirdweb-component';

describe('my-thirdweb-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MyThirdwebComponent],
      html: `<my-thirdweb-component></my-thirdweb-component>`,
    });
    expect(page.root).toEqualHtml(`
      <my-thirdweb-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </my-thirdweb-component>
    `);
  });
});
