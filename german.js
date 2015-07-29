var germanTranslator = function(translator) {
    
   translator.german = function() {
   	var output = translator.getOutputSelected();
   	console.log(output);
   }

  return translator;
    

}(translator);

