export const useThrottle = <T extends (...args: any[]) => any>(
  fn: T,
  time: number
) => {
  let timer: number | null = null;
  let result: ReturnType<T>;
  return (...args: Parameters<T>) => {
    if (timer) {
      return result;
    } else {
      result = fn(...args);
      timer = setTimeout(() => {
        timer = null;
      }, time);
      return result;
    }
  };
};
