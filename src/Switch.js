import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';

const Switch = ({
  id,
  offLabel,
  onLabel,
  onChange = () => {},
  checked,
  ...props
}) => {
  const finalIdRef = useRef(id || `Switch-${idgen()}`);
  const finalId = finalIdRef.current;

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <div className="switch">
      <label htmlFor={finalId}>
        {offLabel}
        <input
          id={finalId}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          {...props}
        />
        <span className="lever" />
        {onLabel}
      </label>
    </div>
  );
};

Switch.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  offLabel: PropTypes.string.isRequired,
  onLabel: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};

export default Switch;
