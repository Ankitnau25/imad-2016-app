var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
     'article-one':{
       title:'article-one|ankit nautiyal',
        heading:'article-one',
       date:'8/10/2016',
       content:`<p>
                This is content for my first article.This is content for my first article.This is content for my first article.
                This is content for my first article.This is content for my first article.This is content for my first article.
                This is content for my first article.This is content for my first article.This is content for my first article.
               </p>
               <p>
               This is content for my first article.This is content for my first article.This is content for my first article.
               This is content for my first article.This is content for my first article.This is content for my first article.
               This is content for my first article.This is content for my first article.This is content for my first article.
               </p>
               <p>
               This is content for my first article.This is content for my first article.This is content for my first article.
               This is content for my first article.This is content for my first article.This is content for my first article.
               This is content for my first article.This is content for my first article.This is content for my first article.
              </p>
    `
},
     'article-two':{title:'article-two|ankit nautiyal',
        heading:'article-two',
       date:'7/10/2016',
       content:`<p>
                This is content for my second article.
              </p> `
              },
     'article-three':{title:'article-three|ankit nautiyal',
        heading:'article-three',
       date:'8/10/2016',
       content:`<p>
                This is content for my 3rd article.
              </p>`},
};

function createTemplate(data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`<html>
    <head>
        <title>
             ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <div>
        <a href="/">Home</a>
        </div>
        <hr/>
        <h3> ${heading}</h3>
        <div>
            ${date}
        </div>
           ${content}
          </div> 
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

var names=[];
app.get('/submit-name', function (req, res) {//url://sumit-name?name=something
    //get the name from request object
    var name=req.query.name;
    
    names.push(name);
    //JSON
    
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function(req,res){
    //article name=article-one
    //articles{articleName}={} content object for article one
    var articleName =req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
