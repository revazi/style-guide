import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from './subcomponents/MenuItem';

export const SIZE = {
  SMALL: 'small',
  NORMAL: 'normal',
  LARGE: 'large'
};

const MenuList = ({items = [], size = SIZE.NORMAL, className, ...props}) => {
  const listClass = classNames('sg-menu-list', {
    [`sg-menu-list--${size}`]: size !== SIZE.NORMAL
  }, className);

  return (
    <ul {...props} className={listClass}>
      {items.map(({...elementProps}, index) =>
        <MenuItem key={index} {...elementProps} />
      )}
    </ul>
  );
};

MenuList.propTypes = {
  size: PropTypes.oneOf(Object.values(SIZE)),
  items: PropTypes.array.isRequired,
  className: PropTypes.string
};

export default MenuList;
export {MenuItem};
