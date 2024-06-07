<!DOCTYPE html>
<html>

<head>
  <title>Player Database</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body>

  <header class="bg-light">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand fw-medium" href="index.html">Cricket Player Database</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="player.html">Players</a></li>
            <li class="nav-item"><a class="nav-link" href="">Report</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </header>


  <section class="container mt-4">
    <h1>PLayers Report</h1>
    <hr>
    <div class="row" id="playersReport"></div>
  </section>


  <script>

    function generatePlayersReport() {
      const topScorer = {name: "Raja", totalRuns: 12500}
      const bestBowler = {name: "Akash", totalWickets: 550}

      const playerReportDiv = document.querySelector('#playersReport')

      function createCard(cardObj) {
        const col = document.createElement('div')
        col.className = "col-md-6"

        const card = document.createElement('div')
        card.className = "card mb-3 p-0"

        const cardHeader = document.createElement('div')
        cardHeader.className = "card-header"

        const h2 = document.createElement('h2')
        h2.textContent = cardObj === topScorer ? "Top Scorer" : "Best Bowler"

        cardHeader.appendChild(h2)

        const cardBody = document.createElement('div')
        cardBody.className = "card-body"

        const playerName = document.createElement('p')
        playerName.className = "card-text"
        playerName.innerHTML = `<strong>Name: </strong>${cardObj.name}`

        const playerStats = document.createElement('p')
        playerStats.className = "card-text"
        playerStats.innerHTML = cardObj === topScorer ? `<strong>Total Runs: </strong>${cardObj.totalRuns}` : `<strong>Total Wickets: </strong>${cardObj.totalWickets}`

        cardBody.appendChild(playerName)
        cardBody.appendChild(playerStats)
        card.appendChild(cardHeader)
        card.appendChild(cardBody)
        playerReportDiv.appendChild(card)

      }

      createCard(topScorer)
      createCard(bestBowler)



    }

    generatePlayersReport()

  </script>

</body>

</html>
