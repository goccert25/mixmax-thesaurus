# Giphy Slash Command for Mixmax

This is an open source Mixmax Slash Command. Tool was developed by following <http://developer.mixmax.com/docs/overview-slash-commands#tutorial-building-mygiphy>.

## Running locally

1. Install using `npm install`
2. Grab an API key from https://words.bighugelabs.com/api.php and insert into util/key.js
3. Run using `npm start`
4. Go to your Mixmax Dashboard and 'Add Slash Command'
5. Enter the following inputs:

Name: 'Thesaurus'
Command: 'thes'
Parameter placeholder: '[term]'
Typeahead API URL: 'https://localhost:9145/typeahead'
Resolver API URL: 'https://localhost:9145/resolver'

## Improvements for the future

Unfortunately I was unable to find a way to select an option from the
slash command dropdown and not make a new line. Preventing the new line
creation would make using this tool much smoother.
