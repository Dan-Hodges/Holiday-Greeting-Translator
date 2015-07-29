<<<<<<< HEAD
var translator = (function(inputValue) {
  var inputText =[];
  var myArray = [];
  
  return {
    lastLandedOn: new Date(),
    addSpacecraft: function(spacecraft) {
      activeSpacecraft.push(spacecraft)
    },
    getSpacecraft: function() {
      return activeSpacecraft;
    },
    setPlanetsLandedOn: function(count) {
      planetsLandedOn = count;
    },
    getPlanetsLandedOn: function() {
      return planetsLandedOn;
    },
    getPlanets: function() {
      return planets;
    }
  
  };

})();
=======
<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Nashville Software School</title>
</head>

<body>
  <nav></nav>

  <header></header>

  <article>
    <header></header>
    <section>
    <select>
  <option value="hungarian">Hungarian</option>
  <option value="spanish">Spanish</option>
  <option value="german">German</option>
  <form action="demo_form.asp">
  Translate: <input type="text" name="Translate"><br>
  <input type="submit" value="Submit">
</form>
</select></section>
    <footer></footer>
  </article>

  <footer></footer>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
<script src="main.js"></script>
<script src="hungarian.js"></script>
<script src="spanish.js"></script>
<script src="garman.js"></script>
</body>
</html>
>>>>>>> d16756cf12e97780c4056119f1f70735de7d430d
