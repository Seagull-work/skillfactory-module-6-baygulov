function init() {
}
let currentProgress = 0;
$('#plus1').click(function() {
    currentProgress = currentProgress + 1;
    $('#Progress').attr("style", "width: " + currentProgress + "%");
});
$('#plus3').click(function() {
  currentProgress = currentProgress + 3;
  $('#Progress').attr("style", "width: " + currentProgress + "%");
});
$('#plus7').click(function() {
  currentProgress = currentProgress + 7;
  $('#Progress').attr("style", "width: " + currentProgress + "%");
});
$(document).ready(init);