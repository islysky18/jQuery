var json = (function () {
  var jsonTemp = null;
  $.ajax({
    async: false,
    url: "jqueryassignmentdummydata.json",
    success: function (data) {
      jsonTemp = data;
    },
  });
  return jsonTemp;
})();

$(document).ready(function () {
  // localStorage.setItem('student', JSON.stringify(json));
  // var storedStudent = JSON.parse(localStorage.getItem("student"));
  // console.log('retrieve student: ', storedStudent);
  window.localStorage.clear();
  var list = [];
  for (var i = 0; i < 10; i++) {
    localStorage.setItem(i, JSON.stringify(json));
    var storedStudent = JSON.parse(localStorage.getItem(i));
    list.push(storedStudent);
  }

  //   Storage.removeItem("41");
  //   Storage.removeItem(storedStudent[0]);
  console.log(storedStudent.length);
  //   console.log(storedStudent[0]);

  for (var i = 0; i < json.length; i++) {
    $("#tdata").append(
      "<tr>" +
        "<td>" +
        storedStudent[i].firstname +
        "</td>" +
        "<td>" +
        storedStudent[i].lastname +
        "</td>" +
        "<td>" +
        storedStudent[i].email +
        "</td>" +
        "<td>" +
        storedStudent[i].location +
        "</td>" +
        "<td>" +
        storedStudent[i].phone +
        "</td>" +
        "<td>" +
        "</td>" +
        "<td>" +
        storedStudent[i].address.communication +
        "</td>" +
        "<td>" +
        storedStudent[i].address.permanent +
        "</td>" +
        "<td>" +
        "</td>" +
        "<td class='toggleColumns'>" +
        storedStudent[i].marks.english +
        "</td>" +
        "<td class='toggleColumns'>" +
        storedStudent[i].marks.science +
        "</td>" +
        "<td class='toggleColumns'>" +
        storedStudent[i].marks.computers +
        "</td>" +
        "<td class='toggleColumns'>" +
        storedStudent[i].marks.hardware +
        "</td>" +
        "<td>" +
        "<button class='btn-info'>Edit</button>" +
        "<button class='btn-danger' id=" +
        i +
        ">DELETE</button>" +
        "</td>" +
        "</tr>"
    );
  }

  $("#dropdown").change(function () {
    $("#student_table tbody").empty();
    if ($("#dropdown").val() == "20") {
      for (var i = 0; i < 20; i++) {
        $("#tdata").append(
          "<tr>" +
            "<td>" +
            storedStudent[i].firstname +
            "</td>" +
            "<td>" +
            storedStudent[i].lastname +
            "</td>" +
            "<td>" +
            storedStudent[i].email +
            "</td>" +
            "<td>" +
            storedStudent[i].location +
            "</td>" +
            "<td>" +
            storedStudent[i].phone +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td>" +
            storedStudent[i].address.communication +
            "</td>" +
            "<td>" +
            storedStudent[i].address.permanent +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.english +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.science +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.computers +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.hardware +
            "</td>" +
            "<td>" +
            "<button class='btn-info'>Edit</button>" +
            "<button class='btn-danger'>Delete</button>" +
            "</td>" +
            "</tr>"
        );
      }
    }
    if ($("#dropdown").val() == "50") {
      for (var i = 0; i < 50; i++) {
        $("#tdata").append(
          "<tr>" +
            "<td>" +
            storedStudent[i].firstname +
            "</td>" +
            "<td>" +
            storedStudent[i].lastname +
            "</td>" +
            "<td>" +
            storedStudent[i].email +
            "</td>" +
            "<td>" +
            storedStudent[i].location +
            "</td>" +
            "<td>" +
            storedStudent[i].phone +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td>" +
            storedStudent[i].address.communication +
            "</td>" +
            "<td>" +
            storedStudent[i].address.permanent +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.english +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.science +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.computers +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.hardware +
            "</td>" +
            "<td>" +
            "<button class='btn-info'>Edit</button>" +
            "<button class='btn-danger'>Delete</button>" +
            "</td>" +
            "</tr>"
        );
      }
    }
    if ($("#dropdown").val() == "100") {
      for (var i = 0; i < 100; i++) {
        $("#tdata").append(
          "<tr>" +
            "<td>" +
            storedStudent[i].firstname +
            "</td>" +
            "<td>" +
            storedStudent[i].lastname +
            "</td>" +
            "<td>" +
            storedStudent[i].email +
            "</td>" +
            "<td>" +
            storedStudent[i].location +
            "</td>" +
            "<td>" +
            storedStudent[i].phone +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td>" +
            storedStudent[i].address.communication +
            "</td>" +
            "<td>" +
            storedStudent[i].address.permanent +
            "</td>" +
            "<td>" +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.english +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.science +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.computers +
            "</td>" +
            "<td class='toggleColumns'>" +
            storedStudent[i].marks.hardware +
            "</td>" +
            "<td>" +
            "<button class='btn-info'>Edit</button>" +
            "<button class='btn-danger'>Delete</button>" +
            "</td>" +
            "</tr>"
        );
      }
    }
    $(".toggleColumns").hide();
  });
  $(".toggleColumns").hide();
  $("#moreDetails").click(function () {
    $(".toggleColumns").toggle();
  });

  //Delete
  $("#student_table").on("click", ".btn-danger", function () {
    $(this).closest("tr").remove();
    console.log($(this).attr("id"));
    localStorage.removeItem("$(this).attr('id')");
    //console.log($(this).attr("id"));
    console.log(storedStudent.length);
  });

  //Search
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#tdata tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  //scroll
  $(window).scroll(function () {
    if (document.body.scrollHeight - $(this).scrollTop() <= $(this).height()) {
      alert("No more records!");
    }
  });
});
