
function numPointsScored(playerName) {
  let game = gameObject();
  let requestedPoints
  for (let gameKey in game) {
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      if(teamKey === 'players'){
        let playerObj = teamObj[teamKey]
        for (let player in playerObj){
        if (player === playerName){
          requestedPoints = playerObj[player].points
          }
        }
      }
    }
  }
  return requestedPoints
}