 document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('address');
    const options = {
      types: ['address']
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.setFields(['address_component']);

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
      const place = autocomplete.getPlace();
      const components = place.address_components;
      let street_number, route;

      for (let i = 0; i < components.length; i++) {
        const componentType = components[i].types[0];
        let inputField;

        switch (componentType) {
          case 'street_number':
            street_number = components[i].long_name;
            break;
          case 'route':
            route = components[i].long_name;
            break;
          case 'postal_code':
            inputField = document.getElementById('zip');
            inputField.value = components[i].long_name;
            inputField.focus();
            inputField.blur();
            break;
          case 'administrative_area_level_1':
            inputField = document.getElementById('province');
            inputField.value = components[i].long_name;
            inputField.focus();
            inputField.blur();
            break;
          case 'locality':
            inputField = document.getElementById('suburb');
            inputField.value = components[i].long_name;
            inputField.focus();
            inputField.blur();
            break;
          case 'country':
            inputField = document.getElementById('country');
            inputField.value = components[i].long_name;
            inputField.focus();
            inputField.blur();
            break;
        }
      }

      // combine street_number and route into address field
      if (street_number && route) {
        input.value = `${street_number} ${route}`;
      } else if (route) {
        input.value = route;
      }

      input.focus();
      input.blur();
    });
  });

