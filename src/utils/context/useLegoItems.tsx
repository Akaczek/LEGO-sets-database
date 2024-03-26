import { FC, createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

import { databaseURL } from '../constants';
import { LegoItem } from '../types/LegoItem';

export const LegoItemsContext = createContext<{
  legoItems: LegoItem[];
  refetchLegoItems: (limit: number, offset: number) => void;
}>({ legoItems: [], refetchLegoItems: () => {} });

export const LegoItemsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [legoItems, setLegoItems] = useState<LegoItem[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') || '1');
    axios.get(`${databaseURL}sets`, {
      params: {
        limit: 10 * page,
        offset: 10 * (page - 1),
      },
    }).then((response) => {
      setLegoItems(response.data);
    });
  }, []);

  const refetchLegoItems = (limit: number, offset: number) => {
    axios
      .get(`${databaseURL}sets`, {
        params: {
          limit,
          offset: offset * limit,
        },
      })
      .then((response) => {
        setLegoItems(response.data);
      });
  };

  return (
    <LegoItemsContext.Provider value={{ legoItems, refetchLegoItems }}>
      {children}
    </LegoItemsContext.Provider>
  );
};
