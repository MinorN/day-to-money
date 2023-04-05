interface FData {
  [key: string]: string | number | null | undefined | FData;
}
type Rule<T> = {
  key: keyof T;
  message: string;
} & ({ type: 'required' } | { type: 'pattern'; regexp: RegExp });
type Rules<T> = Rule<T>[];
export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  type Errors = {
    [k in keyof T]?: string[];
  };
  const errors: Errors = {};
  rules.forEach((rule, index) => {
    const { key, message, type } = rule;
    const value = formData[key];
    if (type === 'required' && !value) {
      errors[key] = errors[key] ?? [];
      errors[key]?.push(message);
    } else if (
      type === 'pattern' &&
      value &&
      !rule.regexp.test(value.toString())
    ) {
      errors[key] = errors[key] ?? [];
      errors[key]?.push(message);
    }
  });
  return errors;
};

export type { Rules, Rule, FData };
