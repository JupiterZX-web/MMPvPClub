function buyGame(game) {
  // Go to buy page and pass game name
  window.location.href = "buy.html?game=" + encodeURIComponent(game);
}
