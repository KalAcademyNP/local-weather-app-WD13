export interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }],
  main: {
    temp: number
  },
  dt: number,
  sys:{
    country: string
  },
  name: string
}
