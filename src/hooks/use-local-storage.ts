import React, { useEffect, useState } from 'react';

function useLocalStorage<T>(
  key: string,
  initialValue: T
): readonly [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(() =>
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

export { useLocalStorage };

