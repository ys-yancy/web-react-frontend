const delay = (time: number = 1 * 1000): Promise<unknown> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export {
  delay,
}
