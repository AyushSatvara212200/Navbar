$(document).ready(function() {
    $("#menuIcon").click(function() {
      $("#dropdownMenu").slideToggle()
    });
  });
  $(document).ready(function(){
    $("#inputSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#container span").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });