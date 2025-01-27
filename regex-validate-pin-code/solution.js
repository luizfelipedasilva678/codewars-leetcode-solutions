function validatePIN(pin) {
  return !!pin.match(/^([0-9]{4}|[0-9]{6})$/g);
}
