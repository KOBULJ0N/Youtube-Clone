import React from 'react';
import Movie from './movie';
import Siedbar from './siedbar';

export const Context = ({ children }) => {
  return <Movie>
    <Siedbar>
    {children}
    </Siedbar>
  </Movie>;
};
export default Context