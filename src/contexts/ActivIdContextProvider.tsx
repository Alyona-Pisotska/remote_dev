import React, { createContext, useContext } from 'react';
import { useActiveId } from '../hooks/hooks.ts';

type ActiveIdContextProviderProps = {
  children: React.ReactNode;
};

type ActiveIdContext = {
  activeId: number | null;
};

const ActiveIdContext = createContext<ActiveIdContext | null>(null);

function ActiveIdContextProvider({ children }: ActiveIdContextProviderProps) {
  const activeId = useActiveId();

  return (
    <ActiveIdContext.Provider
      value={{
        activeId,
      }}
    >
      {children}
    </ActiveIdContext.Provider>);
}

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);

  if (!context) {
    throw new Error(
      'useActiveIdContext must be used within a ActiveIdContextProvider'
    );
  }

  return context;
}

export default ActiveIdContextProvider;
