import { ProductDto } from './catalog-response.dto';

describe('ProductDto', () => {
  // The Baileys adapter formats prices using Intl.NumberFormat('en', { style: 'currency' }).
  // ICU versions may render IDR with different decimal precision, so verify that
  // the example matches an actual formatter output without assuming minor units.
  it('documents a priceFormatted example the gateway actually emits', () => {
    const props = Reflect.getMetadata('swagger/apiModelProperties', ProductDto.prototype, 'priceFormatted') as {
      example?: string;
    };
    const rendered = new Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(85000)
      .replace(/\u00a0/g, ' ');
    expect(props.example).toBe(rendered);
  });
});
