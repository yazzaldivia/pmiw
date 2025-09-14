let img;
let cantidad = 3;
let tamaño;
let tamañoCirculo;
let cambiar = false;

function preload() {
  img = loadImage("assets/img.jpg");
}

function setup() {
  createCanvas(800, 400);
  tamaño = 400.0 / cantidad;
  tamañoCirculo = tamaño;
}

function draw() {
  background(255);

  image(img, 0, 0, 400, 400);

  for (let i = 0; i < cantidad; i++) {
    for (let j = 0; j < cantidad; j++) {
      let x = 400 + i * tamaño;
      let y = j * tamaño;

      if ((i + j) % 2 == 0) {
        fill(25, 25, 112);
      } else {
        fill(0);
      }
      rect(x, y, tamaño, tamaño);

      if (cambiar) {
        if ((i + j) % 2 == 0) {
          fill(25, 25, 112);
        } else {
          fill(0);
        }
      } else {
        if ((i + j) % 2 == 0) {
          fill(0);
        } else {
          fill(25, 25, 112);
        }
      }

      ellipse(x + tamaño / 2, y + tamaño / 2, tamañoCirculo, tamañoCirculo);
    }
  }

  fill(200);
  rect(650, 350, 120, 30);
  fill(0);
  textAlign(CENTER, CENTER);
  text("Reiniciar", 710, 365);

  mostrarTexto("Modo: " + (cambiar ? "Invertido" : "Normal"), 710, 20);
}

function mousePressed() {
  if (mouseX > 650 && mouseX < 770 && mouseY > 350 && mouseY < 380) {
    cambiar = false;
    cantidad = 3;
    tamaño = 400.0 / cantidad;
    tamañoCirculo = tamaño;
  } else if (mouseX > 400) {
    cambiar = !cambiar;
    tamañoCirculo = generarTamañoAleatorio();
  }
}

function mostrarTexto(mensaje, x, y) {
  fill(0);
  textAlign(CENTER);
  text(mensaje, x, y);
}

function generarTamañoAleatorio() {
  return random(30, tamaño);
} 
