export const isDefined = (value: any) =>
  value !== null && value !== undefined;

export const isEmpty = (value: any[]) => !isDefined(value) || value.length === 0;
