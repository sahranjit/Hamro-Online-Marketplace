export let setLocalStorage = (tokenName, tokenValue) => {
  localStorage.setItem(tokenName, tokenValue);
};

export let getLocalStorage = (tokenName) => {
  let data = localStorage.getItem(tokenName);
  return data;
};
export let clearLocalStorage = (tokenName) => {
  localStorage.removeItem(tokenName);
};
