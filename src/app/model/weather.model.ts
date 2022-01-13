export interface WeatherModel{
    coord: {
        lon: string,
        lat: number
    },
    weather: Array<
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    >,
    base: string,
    main: {
        temp: string,
        feels_like: string,
        temp_min : string,
        temp_max: string,
        pressure: number,
        humidity: number
    },
    visibility: number,
    wind: {
        speed: string,
        deg: number
    },
    clouds: {
        all: number
    },
    dt: number,
    sys: {
        type: number,
        id: number,
        country: string,
        sunrise: string,
        sunset: string
    },
    timezone: string,
    id: number,
    name: string,
    cod: number
}