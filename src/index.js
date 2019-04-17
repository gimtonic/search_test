import 'bootstrap';
import './scss/app.scss';

$(document).ready(function () {


    $('#button_submit').on('click', function (e) {
        e.preventDefault();
        let input_search = $('#input_search').val();
       axios.get('/php/google.php', {
           params: {
               'q': input_search
           }
       })
           .then(function (response) {
               let response_data = response.data;
               let app = $('#app');

               //empty exists data
               app.empty();

               response_data.forEach(function (item) {
                   let post ='<div class="media position-relative">\n' +
                       '  <img src="' + item.thumbnail + '" class="mr-3" alt="...">\n' +
                       '  <div class="media-body">\n' +
                       '    <h5 class="mt-0">' + item.title + '</h5>\n' +
                       '    <p>' + item.snippet + '</p>\n' +
                       '    <a href="' + item.link + '" class="stretched-link">Go somewhere</a>\n' +
                       '  </div>\n' +
                       '</div>';
                   //render data
                   app.append(post);
               })
           })
           .catch(function (error) {
               console.log(error.response.data);
           });
    });
});