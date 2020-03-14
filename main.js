// Wait until the page is completely loaded.
$(document).ready(function() {
  var storage = window.localStorage;
  // Iterating over all checkboxes on page.
  $("input:checkbox").each(function() {
    // Getting checkboxes id.
    var id = $(this).attr("id");

    // Checking session storage saved flag - if any.
    if (storage.getItem(id) === 'true') {
      // Updating checkbox state.
      $(this).prop("checked", true);
    }

    // On change write new selection to storage.
    $(this).change(function() {
      storage.setItem(id, $(this).is(":checked"));
    });
  });
});
