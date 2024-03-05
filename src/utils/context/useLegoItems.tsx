import { FC, createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

import { databaseURL } from '../constants';
import { LegoItem } from '../types/LegoItem';

export const LegoItemsContext = createContext<LegoItem[]>([]);

export const LegoItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [legoItems, setLegoItems] = useState<LegoItem[]>([]);

  useEffect(() => {
    axios.get(`${databaseURL}`).then((response) => {
      setLegoItems(response.data);
    });
  }, []);

  return (
    <LegoItemsContext.Provider value={legoItems}>
      {children}
    </LegoItemsContext.Provider>
  );
};