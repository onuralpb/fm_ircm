const waitFor = (second) => {
  return new Promise((resolve) => setTimeout(resolve, second));
};

export default waitFor;
