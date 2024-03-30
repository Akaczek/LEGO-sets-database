import { FC, createContext, useEffect, useState, ReactNode } from 'react';
import axios from 'axios';

import { databaseURL } from '../constants';
import { LegoItem } from '../types/LegoItem';

export const LegoItemsContext = createContext<{
  legoItems: LegoItem[];
  refetchLegoItems: () => void;
  deleteLegoItem: (id: string) => void;
  addLegoItem: (legoItem: LegoItem) => void;
  editLegoItem: (legoItem: LegoItem) => void;
}>({
  legoItems: [],
  refetchLegoItems: () => {},
  deleteLegoItem: () => {},
  addLegoItem: () => {},
  editLegoItem: () => {},
});

export const LegoItemsProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [legoItems, setLegoItems] = useState<LegoItem[]>([]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') || '1');
    const name = searchParams.get('name') || '';
    axios
      .get(`${databaseURL}sets`, {
        params: {
          limit: 10 * page,
          offset: 10 * (page - 1),
          name: name,
        },
      })
      .then((response) => {
        setLegoItems(response.data);
      });
  }, []);

  const refetchLegoItems = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const page = parseInt(searchParams.get('page') || '1');
    const name = searchParams.get('name') || '';
    axios
      .get(`${databaseURL}sets`, {
        params: {
          limit: 10 * page,
          offset: 10 * (page - 1),
          name: name,
        },
      })
      .then((response) => {
        setLegoItems(response.data);
      });
  };

  const deleteLegoItem = (id: string) => {
    axios.delete(`${databaseURL}sets/${id}`).then(() => {
      refetchLegoItems();
    });
  };

  const addLegoItem = (legoItem: LegoItem) => {
    axios.post(`${databaseURL}sets`, { ...legoItem }).then(() => {
      refetchLegoItems();
    });
  };

  const editLegoItem = (legoItem: LegoItem) => {
    axios.put(`${databaseURL}sets/${legoItem.id}`, { ...legoItem }).then(() => {
      refetchLegoItems();
    });
  }

  return (
    <LegoItemsContext.Provider
      value={{ 
        legoItems, 
        refetchLegoItems, 
        deleteLegoItem, 
        addLegoItem,
        editLegoItem,
      }}
    >
      {children}
    </LegoItemsContext.Provider>
  );
};
