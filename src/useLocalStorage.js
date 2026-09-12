import { useCallback, useState } from 'react';

// useState persisted to localStorage, JSON-serialized
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  const set = useCallback((next) => {
    setValue((prev) => {
      const v = typeof next === 'function' ? next(prev) : next;
      try {
        window.localStorage.setItem(key, JSON.stringify(v));
      } catch {
        // storage full or unavailable: keep state only
      }
      return v;
    });
  }, [key]);

  return [value, set];
}
