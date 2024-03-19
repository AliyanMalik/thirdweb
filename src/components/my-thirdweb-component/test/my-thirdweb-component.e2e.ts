import { newE2EPage } from '@stencil/core/testing';

describe('my-thirdweb-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<my-thirdweb-component></my-thirdweb-component>');

    const element = await page.find('my-thirdweb-component');
    expect(element).toHaveClass('hydrated');
  });
});
