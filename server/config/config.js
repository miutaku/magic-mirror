let config = {
	address: "0.0.0.0",
	port: 8080,
	basePath: "/",
	ipWhitelist: [
        "103.21.244.0/22",
        "103.22.200.0/22",
        "103.31.4.0/22",
        "104.16.0.0/13",
        "104.24.0.0/14",
        "108.162.192.0/18",
        "131.0.72.0/22",
        "141.101.64.0/18",
        "162.158.0.0/15",
        "172.64.0.0/13",
        "173.245.48.0/20",
        "188.114.96.0/20",
        "190.93.240.0/20",
        "197.234.240.0/22",
        "198.41.128.0/17",
        "2400:cb00::/32",
        "2606:4700::/32",
        "2803:f800::/32",
        "2405:b500::/32",
        "2405:8100::/32",
        "2a06:98c0::/29",
        "2c0f:f248::/32"
	],
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
