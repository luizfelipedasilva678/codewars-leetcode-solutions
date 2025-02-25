function getRow(n) {
  const sequence = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "BBCDEFGHIJKLMNOPQRSTUVWXYZ",
    "CCCDEFGHIJKLMNOPQRSTUVWXYZ",
    "DDDDEFGHIJKLMNOPQRSTUVWXYZ",
    "EEEEEFGHIJKLMNOPQRSTUVWXYZ",
    "FFFFFFGHIJKLMNOPQRSTUVWXYZ",
    "GGGGGGGHIJKLMNOPQRSTUVWXYZ",
    "HHHHHHHHIJKLMNOPQRSTUVWXYZ",
    "IIIIIIIIIJKLMNOPQRSTUVWXYZ",
    "JJJJJJJJJJKLMNOPQRSTUVWXYZ",
    "KKKKKKKKKKKLMNOPQRSTUVWXYZ",
    "LLLLLLLLLLLLMNOPQRSTUVWXYZ",
    "MMMMMMMMMMMMMNOPQRSTUVWXYZ",
    "NNNNNNNNNNNNNNOPQRSTUVWXYZ",
    "OOOOOOOOOOOOOOOPQRSTUVWXYZ",
    "PPPPPPPPPPPPPPPPQRSTUVWXYZ",
    "QQQQQQQQQQQQQQQQQRSTUVWXYZ",
    "RRRRRRRRRRRRRRRRRRSTUVWXYZ",
    "SSSSSSSSSSSSSSSSSSSTUVWXYZ",
    "TTTTTTTTTTTTTTTTTTTTUVWXYZ",
    "UUUUUUUUUUUUUUUUUUUUUVWXYZ",
    "VVVVVVVVVVVVVVVVVVVVVVWXYZ",
    "WWWWWWWWWWWWWWWWWWWWWWWXYZ",
    "XXXXXXXXXXXXXXXXXXXXXXXXYZ",
    "YYYYYYYYYYYYYYYYYYYYYYYYYZ",
    "ZZZZZZZZZZZZZZZZZZZZZZZZZZ",
  ];

  let idx = 0,
    aux = 0;

  while (aux < n) {
    aux++;
    if (idx > sequence.length - 1) idx = 0;
    idx++;
  }

  return sequence[idx - 1];
}
