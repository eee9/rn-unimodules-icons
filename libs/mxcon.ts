//==================================================================================================
//  Some constants of common use (L46)
//==================================================================================================

export const _none_ = <T>(_?: T) => {};
export const cc = console.log;
export const ccc = (t: string) => cc(T() + ': ' + t);
export const EOL = '\n';
export const LL = '\n';
export const TAB = '\t';
export const TT = '\t';
export const Q = "'";
export const QQ = '"';
export const BR = '<br/>';
export const T = () => getTimeMx(new Date());

const getTimeMx = (objDate: Date): string => {
  let res = '';
  res += _add2(objDate.getHours()) + ':';
  res += _add2(objDate.getMinutes()) + ':';
  res += _add2(objDate.getSeconds());
  res += '.' + _add3(objDate.getMilliseconds());
  return res;
};
const _add3 = (n: number): string => pref0(n, 3);
const _add2 = (n: number): string => pref0(n, 2);
const pref0 = (n: number, len: number): string => ('0'.repeat(len) + n).slice(-1 * len);

export const J = <U>(obj: U): string => JSON.stringify(obj, null, '  ');
