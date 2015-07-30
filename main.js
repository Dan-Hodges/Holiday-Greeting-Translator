var translator = (function() {
  var inputArray = [], inputString, translatedString, hungarianArray = [], hungarianString, outputSelected;

  $('#submitBtn').click(function() {
    inputString = $("#translateField").val();
    inputString = inputString.toLowerCase();
    inputArray = inputString.split(" ");
    //console.log("inputArray", inputArray);
    outputSelected = $('option:selected').attr('id');

    for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === "have") {
        hungarianArray.push("van");
      }
      if (inputArray[i] === "a") {
        hungarianArray.push("egy");
      }
      if (inputArray[i] === "merry") {
        hungarianArray.push("vidám");
      }
      if (inputArray[i] === "christmas") {
        hungarianArray.push("Karácsony");
      }
      if (inputArray[i] === "and") {
        hungarianArray.push("és");
      }
      if (inputArray[i] === "happy") {
        hungarianArray.push("boldog");
      }
      if (inputArray[i] === "new") {
        hungarianArray.push("új");
      }
      if (inputArray[i] === "year") {
        hungarianArray.push("év");
      }
    };

    hungarianString = hungarianArray.join(" ");
    
    if (outputSelected === 'german') {
      $("#translation").text(translator.german());
      console.log("german selected translation");
    }
    if (outputSelected === 'spanish') {
      $("#translation").text(translator.spanish());
      console.log("spanish selected translation");
    }
    if (outputSelected === 'hungarian') {
      $("#translation").text(hungarianString);
      console.log("hungarian selected translation");
    }

  });

  return {

    getOutputSelected: function() {
      return outputSelected;
    },
    getInputString: function() {
      return inputString;
    },
    getArray: function() {
      return inputArray;
    },
    getTranslatedString: function() {
      return translatedString;
    },
    setTranslatedString: function() {
      return translatedString;
    } 

  };

})();