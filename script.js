(function() {
  var updateButton = document.getElementById('imageSelector');
  var cancelButton = document.getElementById('cancel');
  var favDialog = document.getElementById('favDialog');

  // Update button opens a modal dialog
  updateButton.addEventListener('click', function() {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelButton.addEventListener('click', function() {
    favDialog.close();
  });
})();

function setImage() {
    var img = document.getElementById("image");
    img.src = this.value;
    return false;
}
document.getElementById("ImagesList").onchange = setImage;