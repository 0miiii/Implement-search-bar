import { useState, useEffect } from "react";

type CacheData = Record<string, { value: any; expirationTime: number }>;

const useCache = () => {
  const [cache, setCache] = useState<CacheData>({});

  const getFromCache = <T>(key: string): T | null => {
    const cachedItem = cache[key];
    if (cachedItem && cachedItem.expirationTime > Date.now()) {
      return cachedItem.value;
    }
    return null;
  };

  const setToCache = <T>(key: string, value: T, expirationTimeMs: number = 60000) => {
    const expirationTime = Date.now() + expirationTimeMs;
    setCache((prevCache) => ({
      ...prevCache,
      [key]: { value, expirationTime },
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCache((prevCache) => {
        const updatedCache = { ...prevCache };
        for (const key in updatedCache) {
          if (updatedCache[key].expirationTime <= Date.now()) {
            delete updatedCache[key];
          }
        }
        return updatedCache;
      });
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return { getFromCache, setToCache };
};

export default useCache;
