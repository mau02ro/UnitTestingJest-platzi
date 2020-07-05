import actions from '../../actions/index';
import ProductMock from '../../__mock__/productMock';

describe('Actions', () => {
  test('addToCard Actions', () => {
    const payload = ProductMock;
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });
});
