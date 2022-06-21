export const useFathom = () => {
  if (process.client && window) {
    return window["fathom"];
  }
};
