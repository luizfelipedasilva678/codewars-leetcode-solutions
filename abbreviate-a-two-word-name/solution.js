function abbrevName(name) {
  const names = name.split(" ");
  const firstName = names[0];
  const lastName = names[1];

  return (firstName[0] + "." + lastName[0]).toUpperCase();
}
