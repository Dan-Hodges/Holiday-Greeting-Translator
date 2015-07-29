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