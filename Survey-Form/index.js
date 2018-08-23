/*This code controls the visibility of the input for the number of passenger seats that the user's vehicle can provide IF he volunteers as a driver by selecting YES to the input.*/

$("#dropdown").change(function(){
  if($(this).val() == 'yes'){
    $('#seatNo').removeClass('hidden');
    $('#seatNo input[type="number"]').prop('required', true);
  }
  else if($(this).val() =='no'){
    $('#seatNo input[type="number"]').prop('required', false);
    $('#seatNo input[type="number"]').val('');
    $('#seatNo').addClass('hidden');
  }
});

/*This code makes it so that at least one hike preference checkbox is required to be checked before the user is successfully able to submit the form*/
$("#submit").on('click', function(){
  var $cbxgroup = $("input:checkbox[id^='check-']");
  $cbxgroup.prop('required', true);
  if($cbxgroup.is(':checked')){
     $cbxgroup.prop('required', false);
     }
});
