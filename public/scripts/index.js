const showHiddenPassword = function(id) {
  let elementType = $(id).attr("type");
  if (elementType === "password") {

    $(id).attr("type", "text");
  } else {
    $(id).attr("type", "password");
  }
};
