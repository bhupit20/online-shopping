export function getLocalStorage(key: string) {
  const localStorageValue = localStorage.getItem(key);

  return (
    localStorageValue !== null &&
    localStorageValue !== "undefined" &&
    JSON.parse(localStorageValue)
  );
}

export function setLocalStorageValue<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function initializeLocalStorageValue<T>(key: string, defaultValue: T) {
  if (localStorage.getItem(key) === null) {
    setLocalStorageValue(key, defaultValue);
  }
}
