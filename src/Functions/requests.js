import axios from "axios";

export default function sendBets(bet, stake) {
  var bets = [];
  bet.forEach((bet) => {
    bets.push({ number: bet, stake: stake });
  });

  axios
    .post("http://virtual-bet-frontend.herokuapp.com/api/bet/placebet/", bets)
    .then((response) => console.log(response));
}
