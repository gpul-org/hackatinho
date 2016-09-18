$('#visitor-type-association').on('click', function() {
  $('#associations-content').show();
  $('#developers-content').hide();
  $('#select-type-content').hide();
});

$('#visitor-type-developer').on('click', function() {
  $('#associations-content').hide();
  $('#developers-content').show();
  $('#select-type-content').hide();
});
