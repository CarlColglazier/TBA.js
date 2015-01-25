#TBA.js
####A Node.js Wrapper for [The Blue Alliance](http://www.thebluealliance.com/) API
---
##Overview
TBA.js offers a simple means of accessing The Blue Alliance [API](http://www.thebluealliance.com/apidocs) through Node.js. Methods are included for every API request type and are returned in JSON using a callback function.

##Getting Started
###Installation
The easiest way to install TBA is using npm

`npm install tba`

###Initialization
TBA.js can be called by

`var tba = require('tba')('team/person id','app description','version');`

Or alternatively using an object

`var tba = require('tba')({id:"team/person id", description:"app description", version:"version"});`

**Important note**: ids, descriptions, and version numbers are [required by The Blue Alliance API](http://www.thebluealliance.com/apidocs#overview) and thus are required to initialize TBA.js.
