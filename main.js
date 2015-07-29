var translator = (function() {
  var inputArray = [], inputString, translatedString;

  $('#submitBtn').click(function() {
    inputString = $("#translateField").val()
    inputArray = inputString.split(" ");
    console.log(inputArray);
  });

  return {
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