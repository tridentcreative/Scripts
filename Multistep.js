var total_steps, current_step;

// Describe this function...
function show_submit_btn() {
  if (current_step == total_steps) {
    $("[kilr_multistep='submit']").show();
  } else {
    $("[kilr_multistep='submit']").hide();
  }
}

// Describe this function...
function show_next_btn() {
  if (current_step == total_steps) {
    $("[kilr_multistep='next']").hide();
  } else {
    $("[kilr_multistep='next']").show();
  }
}

// Describe this function...
function show_back_btn() {
  if (current_step > 1) {
    $("[kilr_multistep='back']").show();
  } else {
    $("[kilr_multistep='back']").hide();
    $("[kilr_multistep='next']").css({
      'margin-left':'auto'+' ',
    });
  }
}

// Describe this function...
function is_inactive() {
  $("[kilr_multistep='steps']").find("[kilr_multistep='step']").eq(current_step - 1).addClass('is-inactive');
  setTimeout(function(){
          $("[kilr_multistep='steps']").find("[kilr_multistep='step']").eq(current_step - 1).addClass('hidden');
   }, 350);
}

// Describe this function...
function is_active() {
  $("[kilr_multistep='steps']").find("[kilr_multistep='step']").eq(current_step - 1).removeClass('hidden');
  setTimeout(function(){
          $("[kilr_multistep='steps']").find("[kilr_multistep='step']").eq(current_step - 1).removeClass('is-inactive');
    $("[kilr_multistep='progressIndicator']").removeClass('is-active');
    $("[kilr_multistep='progressIndicators']").find("[kilr_multistep='progressIndicator']").eq(current_step - 1).addClass('is-active');
    $("[kilr_multistep='currentStep']").text(current_step);
   }, 100);
}


total_steps = $("[kilr_multistep='steps']").find("[kilr_multistep='step']").length;
current_step = 1;
is_active();
show_back_btn();
show_next_btn();
show_submit_btn();

$("[kilr_multistep='next']").on('click',function() {
  is_inactive();
  setTimeout(function(){
          current_step = current_step + 1;
    is_active();
    show_back_btn();
    show_next_btn();
    show_submit_btn();
   }, 350);
});

$("[kilr_multistep='back']").on('click',function() {
  is_inactive();
  setTimeout(function(){
          current_step = current_step - 1;
    console.log(current_step);
    is_active();
    show_next_btn();
    show_back_btn();
    show_submit_btn();
   }, 350);
});
