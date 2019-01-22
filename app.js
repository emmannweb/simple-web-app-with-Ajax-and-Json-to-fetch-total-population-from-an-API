document.getElementById('search').addEventListener('click', search_function);


function search_function(e){

  const country = document.querySelector('.country').value;
  const date = document.querySelector('.date').value;

  // form validation
  function validationcountry(){
      const output = `
                      <h3>   Country field cannot be empty!</h3>
                    `;
      document.getElementById('result').innerHTML = output;
      return false;
  }

  function validationdate(){
      const output = `
                      <h3>   Date field cannot be empty!</h3>
                    `;
      document.getElementById('result').innerHTML = output;
      return false;
  }

    if (country == "") {
    setInterval(validationcountry(), 1000);
    }if (date  == "") {
    setInterval(validationdate(), 1000);
    }



    // Instanciate XMLHttpRequest
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.population.io:80/1.0/population/${country}/${date}/`, true);

    xhr.onload = function(){
      if (xhr.status ===200 ) {

        const answer = JSON.parse(this.responseText);

            // retrieve the JSON response to output on the screen
        const output = `
                        <h3>  The population is  <b>${answer.total_population.population.toLocaleString()} </b>for your search query parameters in ${answer.total_population.date}</h3>
                      `;

        document.getElementById('result').innerHTML = output;

      }else if (xhr.status ===400 )  {

        const output = `
                        <h3>   We have no result for this search query</h3>
                      `;

        document.getElementById('result').innerHTML = output;
      }

    }
    xhr.send();

    e.preventDefault();

}
