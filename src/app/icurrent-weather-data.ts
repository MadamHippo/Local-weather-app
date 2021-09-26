export interface ICurrentWeatherData {
  name: string,
  sys: {
    country: string
  },
  dt: number,
  main: {
    temp: number
  },
  weather [
    {
      description: string,
      icon: string
    }
  ]
}
