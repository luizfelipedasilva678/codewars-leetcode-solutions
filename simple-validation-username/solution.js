function validateUsr(username) {
  const pattern = new RegExp(/^[a-z_0-9]{4,16}$/, "g");

  return pattern.test(username);
}
