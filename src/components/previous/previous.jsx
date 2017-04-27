import React from 'react';
import PropTypes from 'prop-types';

import classes from '../../util/classes';

const Previous = ({ previous, id, children, attributes }) => (
  <button className={classes.PREVIOUS} onClick={() => previous(id)} {...attributes}>
    {children}
  </button>
);

Previous.propTypes = {
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  previous: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default Previous;
