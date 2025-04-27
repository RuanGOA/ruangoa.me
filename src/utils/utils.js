export function encodeString(str) {
  return window.btoa(str);
}

export function decodeString(str) {
  return window.atob(str);
}
