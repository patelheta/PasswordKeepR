const showHiddenPassword = function(id) {
  let element = document.getElementById(id);
  let elementType = element.getAttribute("type");
  if (elementType === "password") {
    element.setAttribute("type", "text");
  } else {
    element.setAttribute("type", "password");
  }
};

const copyToClipboard = function(id) {
  let copyText = document.getElementById(id).value;
  navigator.clipboard.writeText(copyText);
};

$(() => {

  const createPasswordElement = function(record) {
    const passwordCard = $(`
  <div class="card">
  <div class="card-body">
    <div>
      <p class="name">${record.name}</p>
      <span class="userpass">
        <input
          type="text"
          class="form-control mb-2"
          id="username_${record.id}"
          value="${record.account_name}"
          disabled="true"
        />
        <i
          class="fa-regular fa-copy ml-2"
          onclick="copyToClipboard('username_${record.id}')"
        ></i>
      </span>
      <span class="userpass">
        <input
          type="password"
          class="form-control"
          id="password_${record.id}"
          value="${record.password}"
          disabled="true"
        />
        <i
          class="fa-regular fa-copy ml-2"
          onclick="copyToClipboard('password_${record.id}')"
        ></i>
      </span>
    </div>
    <div class="action-button">
      <span
        onclick="showHiddenPassword('password_${record.id}')"
      >
        <i class="fa-solid fa-eye mr-1"></i>Show
      </span>
      <span> <i class="fa-solid fa-pen-to-square mr-1"></i>Edit</span>
      <span><i class="fa-solid fa-trash"></i></span>
    </div>
  </div>
</div>`);
    return passwordCard;
  };

  const renderAllRecords = function(records) {
    $("#allRecords").empty();

    for (let record of records) {
      let $record = createPasswordElement(record);
      $('#allRecords').append($record);
    }
  };

  const loadRecords = function() {
    $.get("/api/passwords", function(data) {
      renderAllRecords(data.passwords);
    });
  };
  loadRecords();

  const renderAllCategories = function(categories) {
    $("#categoriesList").empty();

    for (let category of categories) {
      let $item = `<li id="${category.id}">
      ${category.name}</li>`;
      $('#categoriesList').append($item);
    }

    $('ul#categoriesList li').click(function() {
      $('li').removeClass('active');
      $(this).addClass('active');
      let categoryId = $(this).attr('id');
      let data = {
        categoryId: categoryId
      };
      $.get("/api/passwords", data, function(data) {
        renderAllRecords(data.passwords);
      });
    });

    $('#clearFilterBtn').click(function() {
      $('li').removeClass('active');
      loadRecords();
    });
  };

  const loadCategories = function() {
    $.get("/api/passwords/categories", function(data) {
      renderAllCategories(data.categories);
    });
  };
  loadCategories();

});
