var germanTranslator = function(translator) {
   		

   translator.german = function() {
   	  var inputString = translator.getInputString();
   	  var inputArray = [];
      var $dom = $('#translation');
      var germanArray = [];
      var germanString;
      inputString = inputString.toLowerCase();
      inputArray = inputString.split(" ");

      
      for (var i = 0; i < inputArray.length; i++) {
			if (inputArray[i] === "have") {
				germanArray.push("haben");
			}
			
			if (inputArray[i] === "a") {
				germanArray.push("ein");
			}
			
			if (inputArray[i] === "merry") {
				germanArray.push("frohes");
			}
			
			if (inputArray[i] === "christmas") {
				germanArray.push("Weihnachtsfest");
			}
			
			if (inputArray[i] === "and") {
				germanArray.push("und");
			}
			
			if (inputArray[i] === "happy") {
				germanArray.push("glückliches");
			}
			
			if (inputArray[i] === "new") {
				germanArray.push("neues");
			}
			
			if (inputArray[i] === "year") {
				germanArray.push("Jahr");
			}

      }
      	germanString = germanArray.join(" ");
      	return germanString;

    }




  return translator;
    

}(translator);
// haben ein frohes Weihnachtsfest und ein glückliches neues Jahr