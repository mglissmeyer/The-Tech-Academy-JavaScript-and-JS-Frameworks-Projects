$(document).ready(function() {
  var apiKey = 'c39b54bfbefbc725ca87425e0977f0b7';
  var apiUrl = 'https://api.openweathermap.org/data/2.5/air_pollution?lat=40.5640&lon=-111.9780&appid=' + apiKey;

  $.ajax({
      url: apiUrl,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
          var pollution = data.list[0].components;
          var html = 'Air Quality Index (AQI): ' + pollution.aqi + '<br>';
          html += 'Carbon Monoxide (CO): ' + pollution.co + ' μg/m³<br>';
          html += 'Nitrogen Monoxide (NO): ' + pollution.no + ' μg/m³<br>';
          html += 'Nitrogen Dioxide (NO₂): ' + pollution.no2 + ' μg/m³<br>';
          html += 'Ozone (O₃): ' + pollution.o3 + ' μg/m³<br>';
          html += 'Sulfur Dioxide (SO₂): ' + pollution.so2 + ' μg/m³<br>';
          html += 'Fine Particles Matter (PM₂.₅): ' + pollution.pm2_5 + ' μg/m³<br>';
          html += 'Coarse Particles Matter (PM₁₀): ' + pollution.pm10 + ' μg/m³';

          $('#pollution-info').html(html);
      },
      error: function(xhr, status, error) {
          console.log('Error:', error);
      }
  });
});
