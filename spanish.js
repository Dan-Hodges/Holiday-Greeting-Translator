var spanishTranslator = function(translator) {
    
   translator.spanish = function() {
   	var inputString = translator.getInputString();
   	var inputArray = [];
   	var $dom = $('#translation');
   	var spanishArray = [];
    inputstring = inputstring.toLowerCase();
    inputArray = inputString.split(" ");
   }



	for (var i = 0; i < inputArray.length; i++) {
      if (inputArray[i] === "have") {
        spanishArray.push("Tengan");
      }
      if (inputArray[i] === "a") {
        spanishArray.push("una");
      }
      if (inputArray[i] === "merry") {
        spanishArray.push("feliz");
      }
      if (inputArray[i] === "christmas") {
        spanishArray.push("Navidad");
      }
      if (inputArray[i] === "and") {
        spanishnArray.push("y");
      }
      if (inputArray[i] === "happy") {
        spanishArray.push("feliz");
      }
      if (inputArray[i] === "new") {
        spanishArray.push("año");
      }
      if (inputArray[i] === "year") {
        spanishArray.push("nuevo");
      }

		}

spanishString = spanishArray.join(" ");
return spanishString;

	}
  return translator;
    
}(translator);