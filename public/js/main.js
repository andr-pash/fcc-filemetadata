$('document').ready(function () {
  $('#btn-submit').on('click', function (ev) {

    var data = new FormData(document.getElementById('fileinfo'));
    console.log(data);

    $.ajax({
      type: "POST",
      url: '/api/upload',
      data: data,
      processData: false,
      contentType: false,
      success: success
    });

    function success(data) {
      console.log(data);
      $('#name').text(data.filename);
      $('#size').text(data.size);
      $('#comment').text(data.comment);
    }
    ev.preventDefault();
  });
});
