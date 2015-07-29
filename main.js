var translator = (function() {
  var inputArray = [], inputString, translatedString, outputSelected;

  $('#submitBtn').click(function() {
    inputString = $("#translateField").val()
    inputArray = inputString.split(" ");
    console.log(inputArray);
    outputSelected = $('option:selected').attr('id');
    console.log(outputSelected);
  });

  return {

    getOutputSelected: function() {
      return outputSelected;
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



