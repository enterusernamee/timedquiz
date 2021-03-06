<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Timed Coding Quiz</title>
  <link rel="stylesheet" href="./styles.css"/>
</head>
<body>
  <h1>TIMED CODING QUIZ</h1>
  <span class ="timer" id = "timer">Time: 90</span>
<div id= "score"></div>

<nav>  
  <div>View Highscores</div>
</nav>

  <main class="questions" id = "questions">
    <div>
      <h2>Coding Quiz Challenge</h2>
      <p1>
        Welcome to our coding quiz. The timer has been set to 90 seconds. Thank you and good luck!
      </p1>

      <div id="buttons"></div>
      <button id="startBtn">Start Quiz</button>
    </div>
  </main>
  <script src="./js/script.js"></script>
</body>
</html>