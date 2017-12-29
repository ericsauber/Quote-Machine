
var forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

$(document).ready(function() {
      $('#newQuote').on("click", function() {
          $.getJSON(forismaticAPI, function(data) {

              if (data.quoteAuthor === '')
                data.quoteAuthor = 'Unknown';

              $("#quotearea").hide(0).fadeIn(600);
              $("#author").hide(0).fadeIn(600);
              $('#quotearea').empty();           
              $('#quotearea').append('\"' + data.quoteText + '\"');
              $('#author').empty();           
              $('#author').append(' - ' + data.quoteAuthor);
          });
      });  
});
