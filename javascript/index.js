function quote(){
    var quoteName=["--Oscar Wilde" , "--Marilyn Monroe" , "--Albert Einstein" , "--Frank Zappa"];
    var quoteText=["“Be yourself; everyone else is already taken.”", "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring" , "“Be yourself; everyone else is already taken.”"  ,"Let yourself be drawn by the stronger pull of that which you truly love."];
    
    var number = Math.floor(Math.random() * quoteName.length );
    var number = Math.floor(Math.random() * quoteText.length );
    
    document.getElementById("quote-text").innerHTML=quoteText[number];
    document.getElementById("own-quote").innerHTML=quoteName[number];
    }
    