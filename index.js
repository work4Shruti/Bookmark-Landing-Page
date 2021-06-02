function ddMenu(abc) {
  var x = $("." + abc).html();
  var patt = new RegExp("open");
  console.log(patt.test(x));
  if (patt.test(x)) {
    $("." + abc).prop("src", "images/icon-arrow.svg");
  } else {
    $("." + abc).prop("src", "images/icon-open-arrow.svg");
  }
}

function emailVerification() {
  var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var inputEmail = $(".email-input").val();
  if (pattern.test(inputEmail)) {
    $(".email-input").removeClass("invalid-email");
    $(".registration-status").html("You are resgistered.").css("background-color", "");
  } else {
    $(".registration-status").html("Whoops, make sure it's an email.").css("background-color", "hsl(0, 94%, 66%)");
    $(".email-input").addClass("invalid-email");
  }
}

$("#feature a").click(function(e) {
  e.preventDefault();
  $(this).tab('show');
});

// -----------Mobile Version--------------

$(".hamburger").on("click", function() {
  var width = $(window).width();
  if (width <= 375) {
    $(".navbar").css("position", "absolute");
    $(".navbar").css("zIndex", "1")
    $(".hamburger").css("display", "none");
    $(".cross").css("display", "block");
    $(".navbar").css("background-color", "rgba(36, 39, 53,0.9)");
    $(".navbar-brand").css("display", "none");
    $(".navbar-brand-mb").css("display", "block");
    $(".nav-login-btn").addClass("login-btn");
    $(".hr-line").css("display", "block");
    $(".social-media").css("display", "inline-block");
    $(".feature-heading").css("padding-top", "850px");
  }
});
$(".cross").on("click", function() {
  var width = $(window).width();
  if (width <= 375) {
    $(".navbar").css("position", "relative");
    $(".cross").css("display", "none");
    $(".navbar-brand-mb").css("display", "none");
    $(".hamburger").css("display", "block");
    $(".navbar-brand").css("display", "block");
    $(".navbar").css("background-color", "#fff");
    $(".feature-heading").css("padding-top", "850px");
  }
});
