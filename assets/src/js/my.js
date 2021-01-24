$( function() {
  var dateNow = new Date();
  var dateFormat = "dd.mm.yy",
    from = $( "#from" )
      .datepicker({
        defaultDate: dateNow,
        changeMonth: true,
        minDate: dateNow,
        setDate: dateNow
      })
      .on( "change", function() {
        to.datepicker( "option", "minDate", getDate( this ) );
      }),
    to = $( "#to" ).datepicker({
      defaultDate: dateNow,
      changeMonth: true,
      minDate: dateNow,
      setDate: dateNow
    })
    .on( "change", function() {
      from.datepicker( "option", "maxDate", getDate( this ) );
    });

  function getDate( element ) {
    var date;
    try {
      date = $.datepicker.parseDate( dateFormat, element.value );
    } catch( error ) {
      date = null;
    }
    console.log(element.value);
    console.log(date);

    return date;
  }
  from.datepicker( "setDate", dateNow );
  to.datepicker( "setDate", dateNow );
  $.datepicker.regional['ru'];
} );

$(document).ready(function(){
  $(".booking__form").submit(function(){
    var submitCheck = true;
    $(this).find('input').each(function(){
      if($(this).val() === ''){
        $(this).parent().parent().addClass('error');
        submitCheck = false;
      }
      else $(this).parent().parent().removeClass('error');
    })
    if(!submitCheck) return false;
    $.magnificPopup.open({
      items: {
        src: '<div class="white-popup">Благодарим за заявку! <span>В ближайшее время наш менеджер свяжется с вами!</span></div>',
        type: 'inline'
      }
    });
    return false;
  });
  $(document).on("click",".popup-close",function(){
    $.magnificPopup.close();
    return false;
  })
  if ($(window).width() < 776){
    $('.deer').insertBefore('.main__info');
    $(".mobile-burger").click(function(){
      if($(".mobile-menu").hasClass("active")){
          $(".mobile-menu").removeClass("active");
      } else{
          $(".mobile-menu").addClass("active");
      }
    })
    $(".mobile-menu li a").click(function(){
      if($(this).parent().has('ul')){
        if($(this).parent().find('ul').css('display') === 'block'){
          $(this).parent().find('ul').slideUp();
          $(this).removeClass('active');
        } else {
          $(this).parent().find('ul').slideDown();
          $(this).addClass('active');
        }
        return false;
      }
    })
  }
});