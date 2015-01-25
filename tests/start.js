var tba = require('../')({id:"Tester",description:"Node.js wrapper test application",version:"1.0.0"});

tba.getTeams(1, function(err,body) {
    if (!err) {
	    if (body) {
		    console.log("getTeams : "+JSON.stringify(body).length);
		} else {
		    console.log("getTeams : Failed");
		}
	} else {
	    console.log("getTeams : "+err);
	}
})

tba.getTeam(2059, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeam : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeam : Failed");
		}
	} else {
	    console.log("getTeam : "+err);
	}
})

tba.getTeamEvents(2059, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamEvents (without year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeam (without year) : Failed");
		}
	} else {
	    console.log("getTeamEvents (without year) : "+err);
	}
})

tba.getTeamEvents(2059, 2015, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamEvents (with year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamEvents (with year) : Failed");
		}
	} else {
	    console.log("getTeamEvents (with year) : "+err);
	}
})

tba.getTeamEventAwards(2059, "2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamEventAwards : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamEventAwards : Failed");
		}
	} else {
	    console.log("getTeamEventAwards : "+err);
	}
})

tba.getTeamEventMatches(2059, "2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamEventMatches : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamEventMatches : Failed");
		}
	} else {
	    console.log("getTeamEventMatches : "+err);
	}
})

tba.getTeamYearsParticipated(2059, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamYearsParticipated : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamYearsParticipated : Failed");
		}
	} else {
	    console.log("getTeamYearsParticipated : "+err);
	}
})

tba.getTeamMedia(2059, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamMedia (without year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamMedia (without year) : Failed");
		}
	} else {
	    console.log("getTeamMedia (without year) : "+err);
	}
})

tba.getTeamMedia(2059, 2015, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getTeamMedia (with year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getTeamMedia (with year) : Failed");
		}
	} else {
	    console.log("getTeamMedia (with year) : "+err);
	}
})

tba.getEvents(function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEvents (without year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getEvents (without year) : Failed");
		}
	} else {
	    console.log("getEvents (without year) : "+err);
	}
})

tba.getEvents(2015, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEvents (with year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getEvents (with year) : Failed");
		}
	} else {
	    console.log("getEvents (with year) : "+err);
	}
})

tba.getEventTeams("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventTeams : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventTeams : Failed");
		}
	} else {
	    console.log("getEventTeams : "+err);
	}
})

tba.getEventMatches("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventMatches : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventMatches : Failed");
		}
	} else {
	    console.log("getEventMatches : "+err);
	}
})

tba.getEventStats("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventStats : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventStats : Failed");
		}
	} else {
	    console.log("getEventStats : "+err);
	}
})

tba.getEventRankings("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventRankings : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventRankings : Failed");
		}
	} else {
	    console.log("getEventRankings : "+err);
	}
})

tba.getEventAwards("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventAwards : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventAwards : Failed");
		}
	} else {
	    console.log("getEventAwards : "+err);
	}
})

tba.getEventDistrictPoints("2014ncre", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getEventDistrictPoints : " + JSON.stringify(body).length);
		} else {
		    console.log("getEventDistrictPoints : Failed");
		}
	} else {
	    console.log("getEventDistrictPoints : "+err);
	}
})

tba.getMatch("2012sc_f1m2", function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getMatch : " + JSON.stringify(body).length);
		} else {
		    console.log("getMatch : Failed");
		}
	} else {
	    console.log("getMatch : "+err);
	}
})

tba.getDistricts(function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getDistricts (without year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getDistricts (without year) : Failed");
		}
	} else {
	    console.log("getDistricts (without year) : "+err);
	}
})

tba.getDistricts(2015, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getDistricts (with year) : " + JSON.stringify(body).length);
		} else {
		    console.log("getDistricts (with year) : Failed");
		}
	} else {
	    console.log("getDistricts (with year) : "+err);
	}
})

tba.getDistrictEvents("ne", 2014, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getDistrictEvents : " + JSON.stringify(body).length);
		} else {
		    console.log("getDistrictEvents : Failed");
		}
	} else {
	    console.log("getDistrictEvents : "+err);
	}
})

tba.getDistrictRankings("ne", 2014, function(err,body) {
    if (!err) {
	    if (body) {
            console.log("getDistrictRankings : " + JSON.stringify(body).length);
		} else {
		    console.log("getDistrictRankings : Failed");
		}
	} else {
	    console.log("getDistrictRankings : "+err);
	}
})