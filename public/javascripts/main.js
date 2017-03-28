$(document).ready(function() {
  $('.field textarea').keyup(function() {

    var empty = false;
    $('.field textarea').each(function() {
        if ($(this).val().length == 0) {
            empty = true;
        }
    });

    if (empty) {
        $('.actions input').attr('disabled', 'disabled');
    } else {
        $('.actions input').removeAttr('disabled');
    }
  });
});
