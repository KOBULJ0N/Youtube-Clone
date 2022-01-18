import React, { createContext, useContext } from 'react';
import Data from '.././Mock/movies.js';

export const MovieContext = createContext();

const Movie = ({ children }) => {
  const [Movie, setMovie] = useContext(Data);

return  <MovieContext.Provider value={Movie}>
        {children}
     </MovieContext.Provider>;
};
export default Movie;
