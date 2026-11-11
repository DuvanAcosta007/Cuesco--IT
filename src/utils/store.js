export const sesion = {
  get: () => sessionStorage.getItem('cuescoit:usuario'),
  set: (u) => sessionStorage.setItem('cuescoit:usuario', u),
  clear: () => sessionStorage.removeItem('cuescoit:usuario')
};

export const Store = {
  get(key, seed) {
    try {
      return JSON.parse(localStorage.getItem('cuescoit:' + key)) || structuredClone(seed);
    } catch {
      return structuredClone(seed);
    }
  },
  set(key, value) {
    localStorage.setItem('cuescoit:' + key, JSON.stringify(value));
  }
};