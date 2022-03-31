
$(document).ready(function () {
    var data;
    $( "#form" ).submit(function( event ) {




      data = $('#form').serialize()


      
      console.log(data);

      fetch('../app.js', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
  })

      event.preventDefault();



    });

});
