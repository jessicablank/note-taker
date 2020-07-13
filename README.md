# Express Note Taker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description:  
[Link to Heroku Deployed App](https://dry-crag-42001.herokuapp.com/)

 Given starter code with front-end styling through HTML and CSS and back-end jQuery, I built an application utilizing npm express to link the two together. The end result is an application that can be used to write, save, and delete notes. 

    
## Table of Contents:
* [Installation](#installation-instructions)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license-info)

## Installation Instructions
Requires NodeJS 10+. First, install dependencies with `npm install`. Then run `node server.js` or `nodemon` to start the app. 

## Usage
![Homepage](https://github.com/jessicablank/note-taker/blob/master/homepage.PNG)

From the home screen, press "Get Started" to see your notes. Enter a note title and note text in the correct fields and hit the "save" icon to move those notes to the left of the page. You can click the previous note titles to see note text from previously saved notes. Click the trash bin icon to delete completed notes. 

## Contributing
Create a pull request. 

## Tests
* `/notes` should display the notes page: [https://dry-crag-42001.herokuapp.com/notes](https://dry-crag-42001.herokuapp.com/notes)
* `/*` any text besides notes should display the home page [https://dry-crag-42001.herokuapp.com/](https://dry-crag-42001.herokuapp.com/)
* `/api notes` should display the Json file with saved notes
![JSON](https://github.com/jessicablank/note-taker/blob/master/JSON.PNG)

* WHEN the user creates a new note, THEN the note is saved.
* WHEN the user clicks on a previously saved note, THEN the note text is displayed. 
* WHEN The user deletes a note, THEN the note is no longer visible. 

## Questions
You can reach the author, Jessica Blankemeier,  via [github](http://github.com/jessicablank) and [email](mailto:jessicablankemeier@gmail.com)
![GitHub](https://img.shields.io/github/followers/jessicablank?label=follow&style=social)

## License
Copyright 2020 - present Jessica Blankemeier.
This project is licensed under the terms of the MIT license. 
More information is available at [opensource.org/licenses](https://opensource.org/licenses/MIT)
