$(document).ready(function() {
  let selectedCategory = '';
  let selectedProductTypes = new Set();
  let originalSubheaderText = '';

  // Category button click
  $('[filter2-value1-set]').on('click', function() {
    selectedCategory = $(this).attr('filter2-value1-set');
    originalSubheaderText = $('[filter-subheader2=true]').text();

    // Hide/Show product types based on category selection
    $('[filter2-value2-set]').each(function() {
      const relatedCategory = $(this).find('[filter2-value1-match]').attr('filter2-value1-match');
      if (relatedCategory === selectedCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    // Hide/Show products based on category selection
    $('[filter-products=list] [filter-category]').each(function() {
      if ($(this).attr('filter-category') === selectedCategory) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

    $('[filter-subheader2=true]').text('Select a product type');
  });

  // Product type button click
  $('[filter2-value2-set]').on('click', function() {
    const productType = $(this).attr('filter2-value2-set');
    const button = $(this).find('.product-filter_button');

    if (selectedProductTypes.has(productType)) {
      selectedProductTypes.delete(productType);
      button.removeClass('filter-is-active');
    } else {
      selectedProductTypes.add(productType);
      button.addClass('filter-is-active');
    }

    // Filter products based on selected product types and category
    $('[filter-products=list] [filter-category]').each(function() {
      const categoryMatches = $(this).attr('filter-category') === selectedCategory;
      const productTypeMatches = selectedProductTypes.size === 0 || selectedProductTypes.has($(this).attr('filter-product-type'));

      if (categoryMatches && productTypeMatches) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // Back button click
  $('[filter-back=true]').on('click', function() {
    selectedProductTypes.clear();
    $('[filter2-value2-set]').find('.product-filter_button').removeClass('filter-is-active');
    $('[filter-subheader2=true]').text(originalSubheaderText);
  });
});





// top filter

$(document).ready(function() {
      const filterButtons = $('[filter1-value1-set]');
      const listElements = $('[filter1-value1-match]');
      const backButton = $('[filter-back="filter1"]');
      const textElement = $('[filter-subheader="true"]');
      const initialText = textElement.text();

      filterButtons.on('click', function() {
        const filterValue = $(this).attr('filter1-value1-set');
        listElements.hide().filter(`[filter1-value1-match="${filterValue}"]`).show();

        textElement.css('opacity', 0);
        setTimeout(() => {
          textElement.text('Select a project type').css('opacity', 1);
        }, 200);
      });

      backButton.on('click', function() {
  console.log('Back button clicked'); // Debugging line

  setTimeout(() => {
    listElements.hide();
  }, 500);

  textElement.css('opacity', 0);
  setTimeout(() => {
      textElement.text(initialText).css('opacity', 1);
  }, 200);
});
    });