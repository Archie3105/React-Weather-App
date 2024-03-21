const baseURL = "https://api.weatherapi.com/v1/current.json?key=dc8d99fa30ab48eb8fe62422240703";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`,{
        method:"GET"
    });

    return await response.json();
};

export const getWeatherDataForLocation = async (lat,lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`,{
        method:"GET"
    });

    return await response.json();
};
