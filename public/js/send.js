
$(document).ready(function () {
    var data;
    $( "#form" ).submit(function( event ) {
      data = $('#form').serialize()
      console.log(data);
      event.preventDefault();
    });
    console.log('hola');

});
