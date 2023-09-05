const GOLPE_DEBIL = 20;
const GOLPE_FUERTE = 40;

let set = 1;

let puntosJugados = 0;

let setJug1 = 0;
let setJug2 = 0;

let puntosJug1 = 0;
let puntosJug2 = 0;



while (setJug1 < 2 && setJug2 < 2) {

   let saqueJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
   let recibeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

   let energiaJug1 = 100;
   let energiaJug2 = 100;

   console.log('------------- Set ' + set + ' Punto ' + (puntosJug1 + 1 + puntosJug2) + '--------------------------')

   energiaJug2 -= saqueJug1;

   console.log("Saca Jug 1 (" + saqueJug1 + ")");
   console.log("Energía Jug 2: " + energiaJug2);

   console.log("_______________________________");

   energiaJug1 -= recibeJug2;

   console.log("Recibe Jug 2 (" + recibeJug2 + ")");
   console.log("Energía Jug 1: " + energiaJug1);

   console.log("_______________________________");

   while (energiaJug1 > 0 && energiaJug2 > 0) {

      let golpeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
      let golpeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

      energiaJug2 -= golpeJug1;

      console.log("Golpea Jug 1 (" + golpeJug1 + ")");
      console.log("Energía Jug 2: " + energiaJug2);

      console.log("_______________________________");

      if (energiaJug1 > 0 && energiaJug2 > 0) {

         energiaJug1 -= golpeJug2;

         console.log("Golpea Jug 2 (" + golpeJug2 + ")");
         console.log("Energía Jug 1: " + energiaJug1);

         console.log("_______________________________");

      }

   }

   //finaliza el punto 

   if (energiaJug1 > 0) {
      console.log("Punto para Jug1");
      puntosJug1 += 1;
      console.log("Puntos Jug1:" + puntosJug1);
      console.log("Puntos Jug2:" + puntosJug2);
   } else {
      console.log("Punto Jug2");
      puntosJug2 += 1;
      console.log("Puntos Jug1:" + puntosJug1);
      console.log("Puntos Jug2:" + puntosJug2);
   }

   if (puntosJug1 === 5) {
      console.log("Set para Jug 1");
      setJug1 += 1;
      set += 1;
      puntosJug1 = 0;
      puntosJug2 = 0;
   } else if (puntosJug2 === 5) {
      console.log("Set para Jug 2");
      setJug2 += 1;
      set += 1;
      puntosJug1 = 0;
      puntosJug2 = 0;
   }

}
console.log("Final del partido");
console.log("Jug1: " + setJug1);
console.log("Jug2: " + setJug2);