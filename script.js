fetch('http://api.openweathermap.org/data/2.5/weather?id=501175&lang=ru&appid=0ff0d258ccd100fb54da8e71f93e3141')
.then(
    function(resp) {
        return resp.json() 
    })

.then(
    function (data) {
        document.querySelector('.weather__city').textContent = data.name;
        document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
        document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })

.catch(function () {
    });

    fetch('http://api.openweathermap.org/data/2.5/weather?id=501175&lang=ru&appid=0ff0d258ccd100fb54da8e71f93e3141')
    .then(
        function(resp) {
            return resp.json() 
        })
    
    .then(
        function (data) {
            document.querySelector('.weather__city').textContent = data.name;
            document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
            document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        
    .catch(function () {
        });

        fetch('http://api.openweathermap.org/data/2.5/weather?id=501175&lang=ru&appid=0ff0d258ccd100fb54da8e71f93e3141')
        .then(
            function(resp) {
                return resp.json() 
            })
        
        .then(
            function (data) {
                document.querySelector('.weather__city').textContent = data.name;
                document.querySelector('.weather__forecast').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.weather__desc').textContent = data.weather[0]['description'];
                document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
            })
            
        .catch(function () {
            });