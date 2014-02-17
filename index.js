var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send("                      -     =    .--._
                - - ~_=  =~_- = - `.  `-.
              ==~_ = =_  ~ -   =  .-'    `.
            --=~_ - ~  == - =   .'      _..:._
           ---=~ _~  = =-  =   `.  .--.'      `.
          --=_-=- ~= _ - =  -  _.'  `.      .--.:
            -=_~ -- = =  ~-  .'      :     :    :
             -=-_ ~=  = - _-`--.     :  .--:    D
               -=~ _=  =  -~_=  `;  .'.:   ,`---'@
             --=_= = ~-   -=   .'  .'  `._ `-.__.'
            --== ~_ - =  =-  .'  .'     _.`---'
           --=~_= = - = ~  .'--''   .   `-..__.--.
          jgs--==~ _= - ~-=  =-~_-   `-..___(  ===;
          --==~_==- =__ ~-=  - -    .'       `---'
          gotta go fast");
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});