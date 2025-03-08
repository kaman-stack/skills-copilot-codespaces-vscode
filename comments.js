// Create web server
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var comments = [];

// Create server
http.createServer(function(req, res) {
  // Get method
  if (req.method == 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function() {
      var post = qs.parse(body);
      comments.push(post.comment);
      res.end('Success');
    });
  } else {
    var html = fs.readFileSync('./index.html');
    html = html.toString().replace('<!-- comments -->', comments.join('<br>'));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
  }
}).listen(3000, '