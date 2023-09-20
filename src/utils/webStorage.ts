export interface Storage {
  save: (token: string) => void;
  get: () => string | null;
  delete: () => void;
}

class WebStorage implements Storage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  save(token: string) {
    localStorage.setItem(this.key, token);
  }

  get() {
    return localStorage.getItem(this.key);
  }

  delete() {
    return localStorage.removeItem(this.key);
  }
}

export default WebStorage;
