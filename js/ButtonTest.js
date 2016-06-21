/* eslint-env mocha */
import React, {
  Text,
} from 'react-native';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const text = "Hello";
  const onPress = () => {};
  const wrapper = shallow(
    <Button onPress={onPress}>{text}</Button>
  );

  it('renders a text', () => {
    wrapper.find(Text).children().should.have.text(text);
  });
});