Canvas=document.getElementById("Canvas");
pencil=canvas.getContext("2d");

pencil.beginPath();
pencil.strokeStyle="aqua";
pencil.lineWidth=4;
pencil.arc(200,100,40,0,360);
pencil.stroke();