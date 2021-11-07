//console.log("setGazeListener");
//webgazer.setGazeListener(observe).begin();


var observe2 = async function(data, clock) {
    //console.log("observer");

    if(data){
        document.getElementById('cordX').innerHTML = Math.round(data.x);
        document.getElementById('cordY').innerHTML = Math.round(data.y);

        if(data.y > 600){
            console.log(`X ${data.x} Y ${data.y}`); //JSON.stringify(data)
            document.body.style.backgroundColor = "red";
            beep();
        }else{
            document.body.style.backgroundColor = "green";
        }    
    }else{
        document.getElementById('cordX').innerHTML = "";
        document.getElementById('cordY').innerHTML = "";
    }
}
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}
function switchOff(){
    document.body.style.backgroundColor = "white";
    document.getElementById('offbtn').style.backgroundColor = 'grey' ;
    document.getElementById('onbtn').style.backgroundColor = 'grey' ;
    setCntLoadedData();

}
function switchOn(){
    document.getElementById('offbtn').style.backgroundColor = 'grey' ;
    document.getElementById('onbtn').style.backgroundColor = 'green' ;
    setCntLoadedData();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function setCntLoadedData(){
    document.getElementById('status').innerHTML = cntLoadedData;
}

function getUrlParam(n, d){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let v = urlParams.get(n)
    if (v){
        return v;
    }else{
        return d;
    }
}

var lastViewDown = 0
var numberOfViews = 0
var firstRecognisedCrime = 0
var newCrime = true;
var warningLevel = 0
var upDownBorder = getUrlParam("upDownBorder", 600);

var observe = async function(data, clock) {
    //console.log("observer");

    if(data){

        if(data.y > upDownBorder){
            if(lastViewDown == 0){
                lastViewDown = clock;
            }else if(clock - lastViewDown > 500){
                if(newCrime){
                    numberOfViews++
                    newCrime = false;
                }

                if(firstRecognisedCrime == 0){
                    firstRecognisedCrime = clock;
                } 

                if(warningLevel >= 2 && (clock - lastViewDown > 5000 || numberOfViews >= 5)){
                    warningLevel = 3 ;
                    //ALARMSTUFE
                    console.log("ALARMSTUFE")
                    console.log("länger als 5 sec nach unten auf Vorwarnstufe")
                    document.body.style.backgroundColor = "red";
                    beep();
                    beep();
                    beep();
                    beep();
                    beep();
                }

                else if(clock - lastViewDown > 5000 && warningLevel <= 2){
                    warningLevel = 2 ;
                    //Warnstufe
                    console.log("WARNSTUFE")
                    console.log("länger als 5 sec nach unten")
                    document.body.style.backgroundColor = "orange";
                    beep();
                    
                }else if(numberOfViews >= 3 && warningLevel <= 2){
                    //Warnstufe
                    warningLevel = 2 ;
                    console.log("WARNSTUFE")
                    console.log("Öfter als 3 mal nach unten")
                    document.body.style.backgroundColor = "orange";
                    firstRecognisedCrime = clock;
                    beep();
                } else {
                    //Vorwarnstufe 
                    warningLevel = 1 ; 
                    document.body.style.backgroundColor = "yellow"; 
                    console.log("VORWARNSTUFE")
                    console.log("länger als 0,5 sec nach unten")
                }           

            }else{
                if(clock - lastViewDown < 500){ 
                    console.log("noch zu kurz nach unten")
                }else{
                    document.body.style.backgroundColor = "pink";
                }
            }
            
        }else{
            lastViewDown = 0 ;
            newCrime = true;

            if(clock - firstRecognisedCrime > 10000){
                firstRecognisedCrime = 0;
                numberOfViews = 0;
                console.log("Zurücksetzten")
                if(warningLevel > 1){
                    warningLevel = 1 ;
                }
                else{
                    warningLevel = 0 ;
                }
            } 


            document.body.style.backgroundColor = "green";
        }    
        document.getElementById('cordX').innerHTML = Math.round(data.x);
        document.getElementById('cordY').innerHTML = Math.round(data.y)
        document.getElementById('warningLevel').innerHTML = Math.round(warningLevel);
        document.getElementById('upDownBorder').innerHTML = Math.round(upDownBorder);
        
    }else{
        
    }

    console.log(`Data: X ${Math.round(data.x)} Y ${Math.round(data.y)} clock ${Math.round(clock)} lastViewDown ${Math.round(lastViewDown)} lookDownDuration ${Math.round(clock - lastViewDown)} numberOfViews ${numberOfViews} firstRecognisedCrime ${Math.round(firstRecognisedCrime)} warningLevel ${warningLevel}`);
}


