import axios from "axios";

export default function sendBets(bet, stake) {
  var bets = [];
  bet.forEach((bet) => {
    bets.push({ number: bet, stake: stake });
  });
  var bets = { bets: bets };
  console.log(bets);

  axios
    .post("http://virtual-bets.herokuapp.com/api/bet/placebet/", bets)
    .then((response) => console.log(response));
}
