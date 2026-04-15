let _isAuthenticated = false;

export function setAuthenticated(value: boolean) {
  _isAuthenticated = value;
}

export function getAuthenticated() {
  return _isAuthenticated;
}
