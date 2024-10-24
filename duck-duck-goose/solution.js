class Player {
  constructor(name) {
    this.name = name;
  }
}

let ex_names = ["a", "b", "c", "d"];
let players = ex_names.map((n) => new Player(n));

function duckDuckGoose(players, goose) {
  let idx = 0,
    aux = 0;

  while (aux < goose) {
    aux++;
    if (idx > players.length - 1) idx = 0;
    idx++;
  }

  return players[idx - 1].name;
}
