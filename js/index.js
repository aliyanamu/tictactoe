$(document).ready(function() {
  var x = "x"
  var o = "o"
  var count = 0
  var o_win = 0
  var x_win = 0
  var board = [
    ["#one", "#two", "#three"],
    ["#four", "#five", "#six"],
    ["#seven", "#eight", "#nine"]
  ]
  $('#game li').click(function(){
    if ($(this).hasClass('disable')) {
      alert('Already selected')
    } else {
      if (count % 2 == 0) {
        count++
        $(this).text(o).addClass('disable o btn-primary')
        let next = checkWinner(board, o)
        if (next) {
          o_win++
          $('#o_win').text(o_win)
          count = 0
        }
      } else {
        count++
        $(this).text(x).addClass('disable x btn-info')
        let next = checkWinner(board, x)
        if (next) {
          x_win++
          $('#x_win').text(x_win)
          count = 0
        }  
      }
    }

    if(count == 9) {
      let onext = checkWinner(board, o)
      let xnext = checkWinner(board, x)
      if (!onext && !xnext) {
        alert('Its a tie. It will restart.')
        clearBoard()
        count = 0
      }
    }
  })
  $("#reset").click(function () {
    clearBoard()
    count = 0
  })
})

function clearBoard() {
  $("#game li").text("+")
  $("#game li").removeClass('disable')
  $("#game li").removeClass('o')
  $("#game li").removeClass('x')
  $("#game li").removeClass('btn-primary')
  $("#game li").removeClass('btn-info')
}

function checkWinner(board, player) {
  for (let i = 0; i < 3; i++) {
    if ($(board[i][0]).hasClass(player) && $(board[i][1]).hasClass(player) && $(board[i][2]).hasClass(player)) {
      showWinner(player)
      return player
    }
  }
  for (let j = 0; j < 3; j++) {
    if ($(board[0][j]).hasClass(player) && $(board[1][j]).hasClass(player) && $(board[2][j]).hasClass(player)) {
      showWinner(player)
      return player
    }
  }
  if ($(board[0][0]).hasClass(player) && $(board[1][1]).hasClass(player) && $(board[2][2]).hasClass(player) ||
    $(board[0][2]).hasClass(player) && $(board[1][1]).hasClass(player) && $(board[2][0]).hasClass(player)) {
      showWinner(player)
      return player
  }
}

function showWinner(input) {
  alert(`${input} has won the game. Start a new game`)
  clearBoard()
}