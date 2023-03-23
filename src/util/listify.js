export function listify(data){
    const arr= [
        {
            title: "Coordinate",
            data: [
                ['Latitude', data.coord.lat], 
                ["Longtude", data.coord.lon]
            ]
        },
        {
            title: "Weather",
            data: [
                ['Tempreture', data.main.temp], 
                ['Minmum tempreture', data.main.temp_min], 
                ['Maximum tempreture', data.main.temp_max],
                ["Pressure", data.main.pressure],
                ['Humidity', data.main.humidity]
            ],
        },
        {
            title: 'Wind',
            data: [
                ['Speed', data.wind.speed],
                ['Degree', data.wind.deg],
                ['Cloud count', data.clouds.all]
            ]
        }
    ]
    return arr
}