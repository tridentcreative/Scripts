$(document).ready(function() {
  // Set the hero-image to the first gallery-image by default
  var firstGalleryImage = $('[element="gallery-item"]:first [element="gallery-image"]');
  $('[element="hero-image"]').attr('src', firstGalleryImage.attr('src'));
  $('[element="hero-image"]').attr('srcset', firstGalleryImage.attr('srcset'));

  // Set the first gallery-item to have the active state
  $('[element="gallery-item"]:first').addClass('image-is-active');

  // When a gallery-item is clicked
  $('[element="gallery-item"]').on('click', function() {
    // Get the src of the clicked gallery-image
    var galleryImageSrc = $(this).find('[element="gallery-image"]').attr('src');
    var galleryImageSrcset = $(this).find('[element="gallery-image"]').attr('srcset');
    
    // Update the hero-image attributes with a fade effect
    var heroImage = $('[element="hero-image"]');
    heroImage.fadeOut(400, function() {
      heroImage.attr('src', galleryImageSrc);
      heroImage.attr('srcset', galleryImageSrcset);
      heroImage.fadeIn(400);
    });
    
    // Remove the 'image-is-active' class from all gallery-items
    $('[element="gallery-item"]').removeClass('image-is-active');
    
    // Add the 'image-is-active' class to the clicked gallery-item
    $(this).addClass('image-is-active');
  });

  // When the mouse is over a gallery-item
  $('[element="gallery-item"]').on('mouseover', function() {
    // Add the 'mouse-is-over' class
    $(this).addClass('mouse-is-over');
  });

  // When the mouse is out of a gallery-item
  $('[element="gallery-item"]').on('mouseout', function() {
    // Remove the 'mouse-is-over' class
    $(this).removeClass('mouse-is-over');
  });

  // Hide the comma in the last item of the applications list
  $('[element="applications"] [element="application"]:last-child [element="comma"]').css('display', 'none');
});
