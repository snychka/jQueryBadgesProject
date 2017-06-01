$(function() {
    $.ajax({
      url: 'https://www.codeschool.com/users/lraulin.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        console.log(JSON.stringify(response.courses.completed));
        for (var i = 0; i < response.courses.completed.length; i++) {
          var title = response.courses.completed[i].title;
          var url = response.courses.completed[i].url;
          var badge = response.courses.completed[i].badge;
          $("#badges").append('<div class="course"><h3>' + title + '</h3><img src="' + badge + '"><a href="' + url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
        }
      }
    });

  /*
  $.ajax({
      url: 'https://www.codeschool.com/users/lraulin.json',
      dataType: 'jsonp',
      success: function(response) {
          for (var i = 0; i < response.courses.completed.length; i++) {
          var title = response.courses.completed[i].title;
          var url = response.courses.completed[i].url;
          var badge = response.courses.completed[i].badge;
          $("#badges").append('<div class="course"><h3>' + title + '</h3><img src="' + badge + '"><a href="' + url + '" target="_blank" class="btn btn-primary">See Course</a></div>');
        }
      }
    });
  */

  /*
  $.ajax({
    url: 'https://www.codeschool.com/users/sergiocruz.json',
    dataType: 'jsonp',
    success: function(data) {
      populateWithCourses(data.courses.completed)
    }
  });
  */

  function populateWithCourses(courses) {

    var $badges = $('#badges');

    courses.forEach(function(course) {

      $div = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($div);

      $('<img />', {
        src: course.badge
      }).appendTo($div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo($div);

    });

  }

});
