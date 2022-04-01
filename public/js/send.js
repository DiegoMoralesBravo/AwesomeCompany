function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}

$(document).ready(function () {
    var data;
    var $form = $("#form");
    $( "#form" ).submit(function( event ) {
        data = JSON.stringify(getFormData($form));
        console.log(data);
        fetch('/api',{
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: data,
        })
        .then(response => {
            console.log(response.status);
        })
        .cath(error => {
            console.log(error);
        })
        event.preventDefault();
    });
});
