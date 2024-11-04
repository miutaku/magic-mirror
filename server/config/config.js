let config = {
	address: "0.0.0.0",
	port: 8080,
	basePath: "/",
	ipWhitelist: [],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "ja",
	locale: "ja-JP",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat: 24,
				dateFormat: "YYYY/MM/DD dddd"
			}
		},
		{
			module: "weather",
			position: "top_left",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				weatherEndpoint: '/weather',
				showHumidity: true,
				showFeelsLike: true,
				units: "metric",
				degreeLabel: true,
				lang: "ja",
				location: "${OPEN_WEATHER_MAP_LOCATION}",
				locationID: "${OPEN_WEATHER_MAP_LOCATION_ID}", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file
				apiKey: "${OPEN_WEATHER_MAP_API_KEY}"
			}
		},
		{
                        module: "calendar",
                        header: "Next event is...",
                        position: "top_left",
                        config: {
			    fetchInterval: 100000,
			    displaySymbol: false,
			    maxTitleLength: 10,
			    maximumEntries: 3,
			    timeClass: true,
			    fade: true,
			    fadePoint: 0.15,
			    tableClass: "small",
			    timeFormat: "absolute",
                            flipDateHeaderTitle: true,
			    limitDaysNeverSkip: true,
                            calendars: [
                                {
				    url: "${CALENDAR_ICS_URL_PATH}",
                                }
                        ]
                    }
                },
		{
                        module: "calendar",
                        header: "EVENT LIST",
                        position: "top_right",
                        config: {
			    fetchInterval: 100000,
			    displaySymbol: false,
			    maxTitleLength: 50,
			    maximumEntries: 19,
			    timeClass: true,
			    fade: false,
			    tableClass: "xsmall",
			    timeFormat: "absolute",
                            flipDateHeaderTitle: true,
			    limitDaysNeverSkip: true,
                            calendars: [
                                {
				    url: "${CALENDAR_ICS_URL_PATH}",
                                }
                        ]
                    }
                }
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
