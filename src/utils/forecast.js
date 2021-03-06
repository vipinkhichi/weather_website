const request = require('request');

const forecast= (latitude, longitude, callback) => {

    const url= 'https://api.darksky.net/forecast/fc0409c1187c673648ebbba14d0a1c5a/' +encodeURIComponent(latitude)+ ','+ encodeURIComponent(longitude)+'?units=si';
    
    request({url, json: true}, (error, { body } = {}) => {

    if(error){
        callback('Unable to connect to weather service', undefined);
    }
    else if(body.error){
        callback('Unable to find location', undefined);
    }
    else{
        callback(undefined, body.daily.data[0].summary +' It is currently '+ body.currently.temperature +' degree celsius out. This high temprature today is '+body.daily.data[0].temperatureHigh +' with a low temprature ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + ' % chance of rain.');
    }

    }) 
}


module.exports = forecast;