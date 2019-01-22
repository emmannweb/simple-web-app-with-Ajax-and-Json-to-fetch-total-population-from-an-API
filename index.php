<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Total Population App</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
    <link rel="stylesheet" href="style/style.css">
  </head>
  <body>

    <div class="container-fluid container_wrapper" style="position:relative">
      <div class="overlay" style=" background-image: url('images/app_img.jpg');">
        <div class="gradient" style="">

        </div>
      </div>

      <div class="container container_box" style="">

          <div class="container_search">
            <form class="" >
              <div class="">
                   <input type="text" name="" value="" placeholder="Type a country" class="country" >
                   <input type="text" name="" value="" pattern="\d{4}-\d{1,2}-\d{1,2}"  placeholder="yyyy-mm-dd" class="date"  >
                   <button  id="search">search</button>
              </div>

            </form>
          </div>

      </div>

    </div>

    <div class="" id="result">

    </div>
    <div class="remark">
      <p>* All country name should begin with a capital letter for example: " United States" and the date format should be respected as well.</p>

    </div>
    <script src="app.js"> </script>
  </body>
</html>
