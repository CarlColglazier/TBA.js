var request = require('request'), // Git: https://github.com/request/request
    apiURL = "http://www.thebluealliance.com/api/v2/" // Base URL used in each query.
	
init = function(obj) {

    this.id = obj.id + ":" + obj.description + ":" + obj.version;
	
	var getHeader = function(id) {
	    var header = {};
		header["X-TBA-App-Id"] = id;
	    return header;
    }
	
	var header = getHeader(this.id);
	
	var checkCallback = function (callback) {
	    if (typeof callback === 'function') {
	    	return true;
	    }
	    return false;
    }

    var sendRequest = function (url,callback) {
	    if (! checkCallback(callback)) {
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
	
	var teamKey = function(team) {
	    team = team.toString();
		if (team.indexOf('frc') < 0) {
		    team = 'frc' + team;
		}
		return team;
	}
	
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
	
	this.getTeams = function(num,callback) {
	    var url = apiURL + "teams/" + num.toString();
		sendRequest(url,callback);
	}

	this.getTeam = function(team,callback) {
		var url = apiURL + "team/" + teamKey(team);
		sendRequest(url,callback);
    };
	
	this.getTeamEvents = function() {
	    var obj = optionalYear(arguments),
		    url = obj.url + "/events",
			callback = obj.callback;
		sendRequest(url,callback);
	}
	
	this.getTeamEventAwards = function(team,event,callback) {
		var url = apiURL + ["team",teamKey(team),"event",event,"awards"].join("/");
		sendRequest(url,callback);
	}
	
	this.getTeamEventMatches = function(team,event,callback) {
		var url = apiURL + ["team",teamKey(team),"event",event,"matches"].join("/");
		sendRequest(url,callback);
	}
	
	this.getTeamYearsParticipated = function(team,callback) {
	    var url = apiURL + ["team",teamKey(team),"years_participated"].join("/");
		sendRequest(url,callback);
	}
	
	this.getTeamMedia = function () {
	    var obj = optionalYear(arguments),
		    url = obj.url + "/media",
			callback = obj.callback;
		sendRequest(url,callback);
	}
	
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
	
	this.getEvent = function(event,callback) {
	    var url = apiURL + ["event",event].join("/");
		sendRequest(url,callback);
	}
	
	this.getEventMatches = function(event,callback) {
	    var url = apiURL + ["event",event,"matches"].join("/");
		sendRequest(url,callback);
	}
	
	this.getEventStats = function(event,callback) {
	    var url = apiURL + ["event",event,"stats"].join("/");
		sendRequest(url,callback);
	}
	
	this.getEventRankings = function(event,callback) {
	    var url = apiURL + ["event",event,"rankings"].join("/");
		sendRequest(url,callback);
	}
	
	this.getEventAwards = function(event,callback) {
	    var url = apiURL + ["event",event,"awards"].join("/");
		sendRequest(url,callback);
	}
	
	this.getEventDistrictPoints = function(event,callback) {
	    var url = apiURL + ["event",event,"district_points"].join("/");
		sendRequest(url,callback);
	}
	
	this.getMatch = function(match,callback) {
	    var url = apiURL + ["match",match].join("/");
		sendRequest(url,callback);
	}
	
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
	
	this.getDistrictEvents = function(district,year,callback) {
	    var url = apiURL + ["district",district,year,"events"].join("/");
		sendRequest(url,callback);
	}
	
	this.getDistrictRankings = function(district,year,callback) {
	    var url = apiURL + ["district",district,year,"rankings"].join("/");
		sendRequest(url,callback);
	}
	
}
	
module.exports = init;