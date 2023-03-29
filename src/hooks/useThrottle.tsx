export const useThrottle = (fn: Function, time: number) => {
  let timer: number | null = null;
  return (...args: any[]) => {
    if (timer) {
      return;
    } else {
      fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, time);
    }
  };
};
