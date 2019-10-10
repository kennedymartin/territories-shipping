// Business (or back-end) logic:

var add = function(number1, number2, number3) {
  return number1 + number2 + number3;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function(){
  $("form#territory-orders").submit(function() {
    event.preventDefault();
  var value = parseInt($("#order-value").val());
  var isolates = parseInt($("#isolates").val());
  var carts = parseInt($("#cartridges").val());
  var bottleSize = parseInt($("#bottles").val());

  if (value >= 100 && value < 1500 && isolates === 2 && carts === 2) {
    $('#over100Under1500').show(); 
    $('#under100Small').hide();
    $('#over1500').hide();
    $('#under100Large').hide();
    $('#cartsIsolates').hide();
  } else if (value >= 1500 && isolates === 2 && carts === 2) {
    $('#over1500').show();
    $('#over100Under1500').hide(); 
    $('#under100Small').hide();
    $('#under100Large').hide();
    $('#cartsIsolates').hide();
  } else if (value < 100 && isolates === 2 && carts === 2 && bottleSize === 1) {
    $('#under100Small').show();
    $('#over1500').hide();
    $('#over100Under1500').hide();
    $('#under100Large').hide();
    $('#cartsIsolates').hide();
  } else if (value < 100 && isolates === 2 && carts === 2 && bottleSize === 2) {
    $('#under100Large').show();
    $('#over1500').hide();
    $('#over100Under1500').hide(); 
    $('#under100Small').hide();
    $('#cartsIsolates').hide();
  } else if (isolates === 1 && carts === 1) {
    $('#cartsIsolates').show();
    $('#under100Large').hide();
    $('#over1500').hide();
    $('#over100Under1500').hide(); 
    $('#under100Small').hide();
  } else if (isolates === 2 && carts === 1) {
    $('#cartsIsolates').show();
    $('#under100Large').hide();
    $('#over1500').hide();
    $('#over100Under1500').hide(); 
    $('#under100Small').hide();
  } else if (isolates === 1 && carts === 2) {
    $('#cartsIsolates').show();
    $('#under100Large').hide();
    $('#over1500').hide();
    $('#over100Under1500').hide(); 
    $('#under100Small').hide();
  }

});
});