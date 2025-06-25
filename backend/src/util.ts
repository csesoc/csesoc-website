// These are NOT thread-safe functions
export function filterInPlace<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => boolean
): T[] {
  let write = 0;
  for (let read = 0; read < arr.length; read++) {
    const val = arr[read];
    if (predicate(val, read, arr)) {
      arr[write++] = val;
    }
  }
  arr.length = write;
  return arr;
}

export function replaceInPlace<T>(
  arr: T[],
  predicate: (value: T, index: number, array: T[]) => boolean,
  replacement: T
): number {
  const idx = arr.findIndex(predicate);
  if (idx !== -1) arr[idx] = replacement;
  return idx;
}

export interface FacebookError {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode?: number;
    fbtrace_id?: string;
  }
}

export enum ResultType {
  Ok = "ok",
  Err = "error",
}

export interface Ok<T> {
  type: ResultType.Ok;
  value: T;
}

export interface Err<E> {
  type: ResultType.Err;
  error: E;
}

export type Result<T, E> = Ok<T> | Err<E>;
