function vacancy(COMMON) {
  setContainerHeight($('.vacancy-page'));
  backButtonHandler();
  inputFileHandler();

  COMMON.init();
}

function backButtonHandler() {
  $('.link-back-career').on('click', function(e) {
    e.preventDefault();
    $('.vacancy-page').animate({
      left: '100%'
    }, 600);

    setTimeout(function () {
      window.location = '#/career';
      setTimeout(function(){
        $swiperMain.slideTo(3, 0);
      }, 10);
    }, 600);
  });
}

function inputFileHandler() {
  $cvFile = $('.vacancy-cv');

  $('.file-cv').on('click', function(e) {
    if($cvFile[0].value) {
      e.preventDefault();
    } else {
      $cvFile.click();
    }
  });
  $('.vacancy-cv-icon').on('click', function(e) {
    if($cvFile[0].value) {
      e.preventDefault();
      $cvFile[0].value = '';
      $('.file-cv').html('submit your cv');
      $('.vacancy-cv-icon').attr('src', './images/Career/form-plus.svg');
    } else {
      $cvFile.click();
    }
  });

  $cvFile.on('click', function(e) {
    if($(this)[0].value) {
      e.preventDefault();
    } else {
      return;
    }
  });

  $cvFile.on('change', function(e) {
    $value = $(this)[0].value;
    $lastslashindex = $value.lastIndexOf('\\');
    $result= $value.substring($lastslashindex  + 1);
    if ($result != '') {
      $('.file-cv').html($result);
      $('.vacancy-cv-icon').attr('src', './images/Career/form-close.svg');
    } 
    // else {
    //   $('.file-cv').html('submit your cv');
    //   $('.vacancy-cv-icon').attr('src', './images/Career/form-plus.svg');
    // }
  });
}

// TODO: refactor control of container height
$(window).on('resize', function() {
  setContainerHeight($('.vacancy-page'));
});