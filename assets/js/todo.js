$("input").css("display", "none");
$(".add_button").click(function () {
  if ($("input").css("display") === "none") {
    $(this).addClass("cancel");
  } else if ($("input").css("display") !== "none") {
    $(this).removeClass("cancel");
  }
  $("input").slideToggle(200);
});
$("input").keypress(function (e) {
  if (e.keyCode === 13 && $(this).val() !== "") {
    $("ul").prepend(`<li><span class='trash'><i class='fas fa-trash-alt'></i></span><span class='todo_text'>${$(this).val()}</span></li>`);
    $(this).val("");
  }
});
$("ul").on("click", ".todo_text", function () {
  $(this).toggleClass("done");
});
$("ul").on("click", ".trash", function () {
  $(this).parent().slideUp(150, function () {
    $(this).remove();
  });
});