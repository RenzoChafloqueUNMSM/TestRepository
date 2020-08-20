var contexto = document.getElementById("lienzoJuego").getContext("2d")
contexto.canvas.width = 300
contesto.canvas.height = 700
var FPS = 60
var personaje = {
    x:100,
    y:150,
    w:50,
    h:50
}

//CONTROL
function keyDown() {
    personaje.y -=25 
}
setInterval (loop, 1000/FPS)
function loop (){
    contexto.clearRect(0,0,300,700)
    contexto.fillStyle = "rgba(100,0,0,1)"
    contexto.fillRect(personaje,x, personaje.y, personaje.w, personje.h)

    personaje.y += gravedad
    
}

window.addEventListener("keydown", keyDown)