$(document).ready(function () {
  // tabbed submenus
  $(".item2-1, .item3-1").hide();
  $(".item1").mouseover(function () {
    $(".item2-1, .item3-1").hide();
    $(".item1-1").show();
  });
  $(".item2").mouseover(function () {
    $(".item1-1, .item3-1").hide();
    $(".item2-1").show();
  });
  $(".item3").mouseover(function () {
    $(".item1-1, .item2-1").hide();
    $(".item3-1").show();
  });

  // list images
  $(".list-image").hide();
  $(".c1").mouseover(function () {
    $(".list-image").hide();
    $(".img1").show();
  });
  $(".c2").mouseover(function () {
    $(".list-image").hide();
    $(".img2").show();
  });
  $(".c3").mouseover(function () {
    $(".list-image").hide();
    $(".img3").show();
  });
  $(".c4").mouseover(function () {
    $(".list-image").hide();
    $(".img4").show();
  });
  $(".c5").mouseover(function () {
    $(".list-image").hide();
    $(".img5").show();
  });
});
