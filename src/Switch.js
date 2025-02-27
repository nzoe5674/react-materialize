import React from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

const Switch = ({
  id = `Switch-${idgen()}`,
  offLabel,
  onLabel,
  onChange = () => {},
  ...props
}) => (
  <div className="switch">
    <label htmlFor={id}>
      {offLabel}
      <input id={id} type="checkbox" {...props} />
      <span className="lever" />
      {onLabel}
    </label>
  </div>
);

Switch.propTypes = {
  /**
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * label for off
   */
  offLabel: PropTypes.string.isRequired,
  /**
   * label for on
   */
  onLabel: PropTypes.string.isRequired,
  /**
   * onChange callback
   */
  onChange: PropTypes.func,
  /**
   * disabled input
   */
  disabled: PropTypes.bool,
  /**
   * initialise checkbox checked
   */
  checked: PropTypes.bool
};

export default Switch;
