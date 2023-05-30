<script>
  document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('autoAddress');
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

        switch (componentType) {
          case 'street_number':
            street_number = components[i].long_name;
            break;
          case 'route':
            route = components[i].long_name;
            break;
          case 'postal_code':
            document.getElementById('zip').value = components[i].long_name;
            document.getElementById('zip').blur();
            break;
          case 'administrative_area_level_1':
            document.getElementById('province').value = components[i].long_name;
            document.getElementById('province').blur();
            break;
          case 'locality':
            document.getElementById('suburb').value = components[i].long_name;
            document.getElementById('suburb').blur();
            break;
          case 'country':
            document.getElementById('country').value = components[i].long_name;
            document.getElementById('country').blur();
            break;
        }
      }

      // combine street_number and route into address field
      if (street_number && route) {
        input.value = `${street_number} ${route}`;
      } else if (route) {
        input.value = route;
      }
      
      input.blur();
    });
  });
</script>
