const ACCU_RESPONSE = {
  Headline: {
    EffectiveDate: "2020-07-03T20:00:00+03:00",
    EffectiveEpochDate: 1593795600,
    Severity: 7,
    Text: "Humid Friday night",
    Category: "humidity",
    EndDate: "2020-07-04T08:00:00+03:00",
    EndEpochDate: 1593838800,
    MobileLink:
      "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
    Link:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
  },
  DailyForecasts: [
    {
      Date: "2020-06-30T07:00:00+03:00",
      EpochDate: 1593489600,
      Temperature: {
        Minimum: { Value: 22.9, Unit: "C", UnitType: 17 },
        Maximum: { Value: 29.5, Unit: "C", UnitType: 17 },
      },
      Day: { Icon: 2, IconPhrase: "Mostly sunny", HasPrecipitation: false },
      Night: { Icon: 34, IconPhrase: "Mostly clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    },
    {
      Date: "2020-07-01T07:00:00+03:00",
      EpochDate: 1593576000,
      Temperature: {
        Minimum: { Value: 21.7, Unit: "C", UnitType: 17 },
        Maximum: { Value: 29.2, Unit: "C", UnitType: 17 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    },
    {
      Date: "2020-07-02T07:00:00+03:00",
      EpochDate: 1593662400,
      Temperature: {
        Minimum: { Value: 22.9, Unit: "C", UnitType: 17 },
        Maximum: { Value: 31.0, Unit: "C", UnitType: 17 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    },
    {
      Date: "2020-07-03T07:00:00+03:00",
      EpochDate: 1593748800,
      Temperature: {
        Minimum: { Value: 23.7, Unit: "C", UnitType: 17 },
        Maximum: { Value: 31.4, Unit: "C", UnitType: 17 },
      },
      Day: { Icon: 1, IconPhrase: "Sunny", HasPrecipitation: false },
      Night: { Icon: 33, IconPhrase: "Clear", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    },
    {
      Date: "2020-07-04T07:00:00+03:00",
      EpochDate: 1593835200,
      Temperature: {
        Minimum: { Value: 24.3, Unit: "C", UnitType: 17 },
        Maximum: { Value: 30.9, Unit: "C", UnitType: 17 },
      },
      Day: { Icon: 2, IconPhrase: "Mostly sunny", HasPrecipitation: false },
      Night: { Icon: 35, IconPhrase: "Partly cloudy", HasPrecipitation: false },
      Sources: ["AccuWeather"],
      MobileLink:
        "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
      Link:
        "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    },
  ],
};

const ACCU_AUTO = [
  {
    Version: 1,
    Key: "213225",
    Type: "City",
    Rank: 30,
    LocalizedName: "Jerusalem",
    Country: {
      ID: "IL",
      LocalizedName: "Israel",
    },
    AdministrativeArea: {
      ID: "JM",
      LocalizedName: "Jerusalem",
    },
  },
  {
    Version: 1,
    Key: "306735",
    Type: "City",
    Rank: 42,
    LocalizedName: "Jerez de la Frontera",
    Country: {
      ID: "ES",
      LocalizedName: "Spain",
    },
    AdministrativeArea: {
      ID: "AN",
      LocalizedName: "Andalusia",
    },
  },
  {
    Version: 1,
    Key: "329548",
    Type: "City",
    Rank: 45,
    LocalizedName: "Jersey City",
    Country: {
      ID: "US",
      LocalizedName: "United States",
    },
    AdministrativeArea: {
      ID: "NJ",
      LocalizedName: "New Jersey",
    },
  },
  {
    Version: 1,
    Key: "465",
    Type: "City",
    Rank: 51,
    LocalizedName: "Jeremie",
    Country: {
      ID: "HT",
      LocalizedName: "Haiti",
    },
    AdministrativeArea: {
      ID: "GA",
      LocalizedName: "Grande Anse",
    },
  },
  {
    Version: 1,
    Key: "224190",
    Type: "City",
    Rank: 51,
    LocalizedName: "Jerash",
    Country: {
      ID: "JO",
      LocalizedName: "Jordan",
    },
    AdministrativeArea: {
      ID: "JA",
      LocalizedName: "Jerash",
    },
  },
  {
    Version: 1,
    Key: "244895",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerada",
    Country: {
      ID: "MA",
      LocalizedName: "Morocco",
    },
    AdministrativeArea: {
      ID: "02",
      LocalizedName: "l'Oriental",
    },
  },
  {
    Version: 1,
    Key: "232887",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerécuaro",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "GUA",
      LocalizedName: "Guanajuato",
    },
  },
  {
    Version: 1,
    Key: "3558846",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerez",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "ZAC",
      LocalizedName: "Zacatecas",
    },
  },
  {
    Version: 1,
    Key: "236610",
    Type: "City",
    Rank: 55,
    LocalizedName: "Jerez de García Salinas",
    Country: {
      ID: "MX",
      LocalizedName: "Mexico",
    },
    AdministrativeArea: {
      ID: "ZAC",
      LocalizedName: "Zacatecas",
    },
  },
  {
    Version: 1,
    Key: "313422",
    Type: "City",
    Rank: 65,
    LocalizedName: "Jerablus",
    Country: {
      ID: "SY",
      LocalizedName: "Syria",
    },
    AdministrativeArea: {
      ID: "HL",
      LocalizedName: "Aleppo",
    },
  },
];

const SELECTED = {
  Version: 1,
  Key: "213225",
  Type: "City",
  Rank: 30,
  LocalizedName: "Jerusalem",
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
  },
  AdministrativeArea: {
    ID: "JM",
    LocalizedName: "Jerusalem",
  },
};

export { ACCU_RESPONSE, ACCU_AUTO, SELECTED };
