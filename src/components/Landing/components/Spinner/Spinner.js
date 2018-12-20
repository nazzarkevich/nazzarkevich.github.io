import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Spinner = props => {
  const { fetching } = props;

  return (
    <PropagateLoader
      color={'#ffff'}
      loading={fetching}
    />
  );
};

export default Spinner;