const WaitFor = (second) => {
  return new Promise((resolve) => setTimeout(resolve, second));
};

export default WaitFor;
