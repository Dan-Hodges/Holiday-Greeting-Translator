# Holiday Translation App
#### This is a holiday greeting translation app created as part of a NSS group project by Dan-Hodges, SethDorris, and Austinscott3573.
####Functionality:
* Accepts user input
* Accepts user language of choice
* Handles click event on submit button
  * Uses jQuery to collect input 
  * Determine correct language 
  * Place translated text in the DOM
  * Show hidden DOM element with the text
  
####Future Functionality
* Aditional supported languages (currently Spanish, Italian, and French are supported)
* Extend the realm of vocabulary beyond the holiday basics
* Uses new HTML5 text to speech to read the translation in an accent of that language

#Instructions

Represent a small bilingual lexicon as a Javascript object (see example below) and use it to translate a holiday card message from English into another language. Each member of the team will build a JavaScript module that will convert text entered into an input field to the language that they choose.

{"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}

This is Swedish, so please choose two other languages. You can add as many words/translations as you wish so that the user can write more complex holiday cards.

One team member creates a Github project and adds the other as a collaborator.

Each team member picks a language.

Your project should have one HTML file that has a textarea, a select element with an option for each language, a button with a label of "Translate", and an empty DOM element into which the translated text will be inserted.

The team must discuss and choose a single variable name that will hold all of the logic that the team creates (i.e. see the Sedan example above).

Each team member will create one JavaScript file that contains one IIFE. One teammate's IIFE will augment the other teammate's IIFE.

The lexicon should be a private variable that cannot be accessed by the other team member's module except through an accessor (getter) method.

Each IIFE should expose, in its public interface, a method named translateTo{Language} (e.g. translateToSpanish or translateToFinnish) that accepts a single argument. That argument's value should be the text entered in by the user.

The team should create a 3rd JavaScript file that handles interacting with the form elements and determining which method should be called. Optional Bonus 1

Find a way to write your IIFEs so that it doesn't matter whose module gets created first. Optional Bonus 2

In addition to inserting the translated text into the HTML document, have the browser read the translated text to the user.
