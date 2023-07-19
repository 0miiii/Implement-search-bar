interface CacheItem<T> {
  data: T;
  timestamp: number;
}

export interface Cache<T> {
  get: (key: string) => T | null;
  set: (key: string, data: T) => void;
}

export const createCache = <T>(): Cache<T> => {
  const cache: Map<string, CacheItem<T>> = new Map<string, CacheItem<T>>();

  const get = (key: string): T | null => {
    const cacheItem = cache.get(key);

    if (cacheItem && isCacheValid(cacheItem)) {
      return cacheItem.data;
    }

    return null;
  };

  const set = (key: string, data: T): void => {
    const cacheItem: CacheItem<T> = {
      data: data,
      timestamp: Date.now(),
    };
    cache.set(key, cacheItem);
  };

  const isCacheValid = (cacheItem: CacheItem<T>): boolean => {
    const CACHE_EXPIRY_MS = 60000;
    return Date.now() - cacheItem.timestamp < CACHE_EXPIRY_MS;
  };

  return { get, set };
};
