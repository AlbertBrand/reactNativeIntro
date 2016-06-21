/* eslint-env mocha */
import React, {
  Text,
  TouchableHighlight,
} from 'react-native';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  const text = "Hello";
  const onPress = () => {};
  const style = {};
  const wrapper = shallow(
    <Button onPress={onPress} style={style}>{text}</Button>
  );

  it('renders a text', () => {
    wrapper.find(Text).children().should.have.text(text);
  });

  it('returns a button', () => {
    wrapper.find(TouchableHighlight).should.exist;
  });

  it('passes the onPress function', () => {
    wrapper.find(TouchableHighlight).props().onPress.should.equal(onPress);
  });

  it('contains the styles provided', () => {
    wrapper.props().style.should.contain(style);
  });
});