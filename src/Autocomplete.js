import React, { cloneElement, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import constants from './constants';
import idgen from './idgen';

const Autocomplete = ({
  className,
  title,
  icon,
  s,
  m,
  l,
  xl,
  id,
  options = {
    data: {},
    limit: Infinity,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: null
  },
  ...rest
}) => {
  const autocompleteRef = useRef(null);
  const sizes = { s, m, l, xl };

  let classes = { col: true };

  constants.SIZES.forEach(size => {
    classes[size + sizes[size]] = sizes[size];
  });

  useEffect(() => {
    M.updateTextFields();
    const instance = M.Autocomplete.init(autocompleteRef.current, options);

    return () => instance.destroy();
  }, [options]);

  return (
    <div className={cx('input-field', className, classes)}>
      {icon && cloneElement(icon, { className: 'prefix' })}
      <input
        className="autocomplete"
        type="text"
        ref={autocompleteRef}
        id={id || `Autocomplete-${idgen()}`}
        {...rest}
      />
      <label htmlFor={id || `Autocomplete-${idgen()}`}>{title}</label>
    </div>
  );
};

export const autocompleteOptions = PropTypes.shape({
  /**
   * Data object defining autocomplete options with optional icon strings.
   */
  data: PropTypes.objectOf(PropTypes.string),
  /**
   * Limit of results the autocomplete shows.
   */
  limit: PropTypes.number,
  /**
   * Callback for when autocompleted.
   */
  onAutocomplete: PropTypes.func,
  /**
   * 	Minimum number of characters before autocomplete starts.
   */
  minLength: PropTypes.number,
  /**
   * Sort function that defines the order of the list of autocomplete options.
   */
  sortFunction: PropTypes.func
});

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   * @default idgen()
   */
  id: PropTypes.string,
  className: PropTypes.string,
  /**
   * The title of the autocomplete component.
   */
  title: PropTypes.string,
  /**
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: PropTypes.node,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  /**
   * Placeholder for input element
   * */
  placeholder: PropTypes.string,
  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: PropTypes.func,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * Options for the autocomplete
   * <a target="_blank" rel="external" href="https://materializecss.com/autocomplete.html#options</a>
   */
  options: autocompleteOptions
};

export default Autocomplete;
