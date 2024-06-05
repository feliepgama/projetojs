// Declaração de variáveis para a posição da bolinha
let x, y;
// Declaração de variáveis para a velocidade da bolinha
let xSpeed, ySpeed;

function setup() {
  // Cria uma tela de 800x600 pixels
  createCanvas(800, 600);
  // Inicializa a posição da bolinha no centro da tela
  x = width / 2;
  y = height / 2;
  // Define a velocidade da bolinha
  xSpeed = 3;
  ySpeed = 2;
}

function draw() {
  // Define o fundo da tela como preto
  background(0);
  // Desenha a bolinha na posição (x, y)
  ellipse(x, y, 50, 50);
  
  // Atualiza a posição da bolinha
  x += xSpeed;
  y += ySpeed;
  
  // Verifica colisão com as bordas horizontais
  if (x > width - 25 || x < 25) {
    xSpeed *= -1;
  }
  
  // Verifica colisão com as bordas verticais
  if (y > height - 25 || y < 25) {
    ySpeed *= -1;
  }
}




