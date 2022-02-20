import $ from 'jquery';

$(document).ready(function() {
  
  $('#btn').click(function() {
    $.get('https://jsonplaceholder.typicode.com/todos',function(data, status, xhr) {
      let d = JSON.stringify(data)
      $("#info").text(d)
    })
  })
  
  $("#ld").click(function () {
    $("#info").load("https://jsonplaceholder.typicode.com/todos")
  })
  
})




