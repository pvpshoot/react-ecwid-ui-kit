import React, { PropTypes } from 'react';
import {
  or,
  F,
} from 'ramda';
import Radio, { propTypes } from '../Radio';

const getRandomId = () => Math.random().toString(36).substring(7);

function RadioGroup(props) {
  const {
    dataList,
    onChange,
  } = props;

  const randomName = getRandomId();
  const getRadioButton = (data, key) => (
    <Radio
      key={key}
      {...data}
      onChange={onChange}
      name={or(data.name, randomName)}
    >
      {or(data.label, data.value)}
    </Radio>
  );

  const getRadioButtonsList = arr => arr.map(getRadioButton);
  return (
    <div>{getRadioButtonsList(dataList)}</div>
  );
}

RadioGroup.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.shape({
    ...propTypes,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string,
      PropTypes.number,
    ]),
  })),
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  dataList: null,
  onChange: F,
};

export default RadioGroup;
