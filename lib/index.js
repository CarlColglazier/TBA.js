var request = require('request'), // Git: https://github.com/request/request
    apiURL = "http://www.thebluealliance.com/api/v2/" // Base URL used in each query.

init = function(obj) {

    this.id = obj.id + ":" + obj.description + ":" + obj.version;

    /*** Reused functions to send queries. ***/
    
    // Create a header object including the application id.
    var getHeader = function(id) {
        var header = {};
        header["X-TBA-App-Id"] = id;
        return header;
    }

    // Pass the application id into the header.
    var header = getHeader(this.id);

    // Send a request to the given url and pass the response into the callback function.
    var sendRequest = function (url,callback) {
        if (typeof callback !== 'function') {
            throw new Error('Invalid callback.'); 
        }
        var options = {}
        options.headers = header;
        options.url = url;
        request(options, function(error, response, body) {
            if (!error) {
                if (response.statusCode == 200) {
                    var data = JSON.parse(body);
                    callback(error,data);
                } else {
                    callback( new Error('Not found.'), null);
                }
            } else {
                callback(error,null)
            }
        })
    }

    // Convert team numbers into The Blue Alliance keys.
    var teamKey = function(team) {
        team = team.toString();
        if (team.indexOf('frc') < 0) {
            team = 'frc' + team;
        }
        return team;
    }

    // Handle team requests where the year is optional.
    var optionalYear = function(obj) {
        var team = obj[0],
            res = {};
        if (obj.length > 2) {
            res.url = apiURL + ["team",teamKey(team),obj[1]].join("/");
            res.callback = obj[2];
        } else if (obj.length == 2) {
            res.callback = obj[1];
            if (typeof obj[0] != "object") {
                res.url = apiURL + ["team",teamKey(team)].join("/");
            }
        }
        return res;
    }
    
    /*** Query functions. ***/

    /**
     * Get a list of teams on page "num".
     * http://www.thebluealliance.com/apidocs#team-list-request
     */
    this.getTeams = function(num,callback) {
        var url = apiURL + "teams/" + num.toString();
        sendRequest(url,callback);
    }

    /**
     * Get team information by number.
     * http://www.thebluealliance.com/apidocs#team-request
     */
    this.getTeam = function(team,callback) {
        var url = apiURL + "team/" + teamKey(team);
        sendRequest(url,callback);
    };

    /**
     * Get information about events that a team is attending. 
     * Specifying the year is optional and "optionalYear" function handles both cases.
     * http://www.thebluealliance.com/apidocs#team-events-request
     */ 
    this.getTeamEvents = function() {
        var obj = optionalYear(arguments),
            url = obj.url + "/events",
            callback = obj.callback;
        sendRequest(url,callback);
    }

    /**
     * Get the awards a team won at a given event.
     * http://www.thebluealliance.com/apidocs#team-event-awards-request
     */
    this.getTeamEventAwards = function(team,event,callback) {
        var url = apiURL + ["team",teamKey(team),"event",event,"awards"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get all matches played by a team at a given event.
     * http://www.thebluealliance.com/apidocs#team-event-matches-request
     */
    this.getTeamEventMatches = function(team,event,callback) {
        var url = apiURL + ["team",teamKey(team),"event",event,"matches"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get a list of that years when a team participated.
     * http://www.thebluealliance.com/apidocs#team-years-participated-request
     */
    this.getTeamYearsParticipated = function(team,callback) {
        var url = apiURL + ["team",teamKey(team),"years_participated"].join("/");
        sendRequest(url,callback);
    }
    
    /**
     * Get a team's media information.
     * Specifying the year is optional and "optionalYear" function handles both cases.
     * http://www.thebluealliance.com/apidocs#team-media-request
     */ 
    this.getTeamMedia = function () {
        var obj = optionalYear(arguments),
            url = obj.url + "/media",
            callback = obj.callback;
        sendRequest(url,callback);
    }

    /**
     * Get a list of events by year.
     * Specifying the year is optional.
     * http://www.thebluealliance.com/apidocs#event-list-request
     */ 
    this.getEvents = function() {
        var url,
            callback;
        if (arguments.length > 1) {
            url = apiURL + ["events",arguments[0]].join("/");
            callback = arguments[1];
        } else {
            url = apiURL + "events/";
            callback = arguments[0];
        }
        sendRequest(url,callback);
    }

    /**
     * Get information about a given event.
     * http://www.thebluealliance.com/apidocs#event-request
     */
    this.getEvent = function(event,callback) {
        var url = apiURL + ["event",event].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about the teams at a given event.
     * http://www.thebluealliance.com/apidocs#event-teams-request
     */
    this.getEventTeams = function(event,callback) {
        var url = apiURL + ["event",event,"teams"].join("/");
        sendRequest(url,callback);
    }
    
    /**
     * Get information about the matches at a given event.
     * http://www.thebluealliance.com/apidocs#event-matches-request
     */
    this.getEventMatches = function(event,callback) {
        var url = apiURL + ["event",event,"matches"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about the stats at a given event.
     * http://www.thebluealliance.com/apidocs#event-stats-request
     */
    this.getEventStats = function(event,callback) {
        var url = apiURL + ["event",event,"stats"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about the rankings at a given event.
     * http://www.thebluealliance.com/apidocs#event-rankings-request
     */
    this.getEventRankings = function(event,callback) {
        var url = apiURL + ["event",event,"rankings"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about the awards at a given event.
     * http://www.thebluealliance.com/apidocs#event-awards-request
     */
    this.getEventAwards = function(event,callback) {
        var url = apiURL + ["event",event,"awards"].join("/");
        sendRequest(url,callback);
    }
    /**
     * Get information about the district points allotted at a given event.
     * http://www.thebluealliance.com/apidocs#event-points-request
     */
    this.getEventDistrictPoints = function(event,callback) {
        var url = apiURL + ["event",event,"district_points"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about a given match.
     * http://www.thebluealliance.com/apidocs#match-request
     */
    this.getMatch = function(match,callback) {
        var url = apiURL + ["match",match].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get a list of districts by year.
     * Specifying the year is optional.
     * http://www.thebluealliance.com/apidocs#district-list-request
     */ 
    this.getDistricts = function() {
        var url,
            callback;
        if (arguments.length > 1) {
            url = apiURL + ["districts",arguments[0]].join("/");
            callback = arguments[1];
        } else {
            url = apiURL + "districts/";
            callback = arguments[0];
        }
        sendRequest(url,callback);
    }

    /**
     * Get information about the events at a given district for a given year.
     * http://www.thebluealliance.com/apidocs#district-list-request
     */ 
    this.getDistrictEvents = function(district,year,callback) {
        var url = apiURL + ["district",district,year,"events"].join("/");
        sendRequest(url,callback);
    }

    /**
     * Get information about the rankings a given district for a given year.
     * http://www.thebluealliance.com/apidocs#district-rankings-request
     */ 
    this.getDistrictRankings = function(district,year,callback) {
        var url = apiURL + ["district",district,year,"rankings"].join("/");
        sendRequest(url,callback);
    }

}

module.exports = init;