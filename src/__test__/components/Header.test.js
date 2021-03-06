import React from 'react';
import { mount, shallow } from 'enzyme';
/*
shallow: nos permite traer elementos y probarlos como una unidad, en este caso algo
particular del componente y no toda la extructura ni los elementos del DOM de este mismo.
*/
import ProviderMock from '../../__mock__/providerMock';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';

describe('<Header/>', () => {
  test('Render del componente header', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header SnapShot', () => {
  test('Comprobar el Sanpshot de Header', () => {
    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.toJSON()).toMatchSnapshot();
  });
});
