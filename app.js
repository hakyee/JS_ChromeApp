const player = {
  name: "Mjay",
  points: 10,
  fat: true,
};

console.log(player);

player.fat = false;

console.log(player);

player.lastName = "potato";

console.log(player);

player.points += 10;

console.log(player);

console.log(player["name"]);
