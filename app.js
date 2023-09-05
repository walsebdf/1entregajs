const GOLPE_DEBIL = 20;
const GOLPE_FUERTE = 40;

let set = 1;

let puntosJugados = 0;

let setJug1 = 0;
let setJug2 = 0;

let puntosJug1 = 0;
let puntosJug2 = 0;



while (setJug1 < 2 && setJug2 < 2) {

    if ((setJug1 + setJug2) % 2 === 0) {

        if (Math.trunc(((puntosJug1 + puntosJug2) / 2) % 2) === 0) {

            let saqueJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
            let recibeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

            let restoJug1 = 100;
            let restoJug2 = 100;

            console.log('------------- Set ' + set + ' Punto ' + (puntosJug1 + 1 + puntosJug2) + '--------------------------')

            restoJug2 -= saqueJug1;

            console.log("Saca Jug 1 (" + saqueJug1 + ")");
            console.log("Resto Jug 2: " + restoJug2);

            console.log("_______________________________");

            restoJug1 -= recibeJug2;

            console.log("Recibe Jug 2 (" + recibeJug2 + ")");
            console.log("Resto Jug 1: " + restoJug1);

            console.log("_______________________________");

            while (restoJug1 > 0 && restoJug2 > 0) {

                let golpeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
                let golpeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

                restoJug2 -= golpeJug1;

                console.log("Golpea Jug 1 (" + golpeJug1 + ")");
                console.log("Resto Jug 2: " + restoJug2);

                console.log("_______________________________");

                if (restoJug1 > 0 && restoJug2 > 0) {

                    restoJug1 -= golpeJug2;

                    console.log("Golpea Jug 2 (" + golpeJug2 + ")");
                    console.log("Resto Jug 1: " + restoJug1);

                    console.log("_______________________________");

                }

            }

            if (restoJug1 > 0) {
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

        } else {
            let saqueJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
            let recibeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

            let restoJug1 = 100;
            let restoJug2 = 100;

            console.log('------------- Set ' + set + ' Punto ' + (puntosJug1 + 1 + puntosJug2) + '--------------------------')

            restoJug1 -= saqueJug2;

            console.log("Saca Jug 2 (" + saqueJug2 + ")");
            console.log("Resto Jug 1: " + restoJug1);

            console.log("_______________________________");

            restoJug2 -= recibeJug1;

            console.log("Recibe Jug 1 (" + recibeJug1 + ")");
            console.log("Resto Jug 2: " + restoJug2);

            console.log("_______________________________");

            while (restoJug1 > 0 && restoJug2 > 0) {

                let golpeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
                let golpeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

                restoJug1 -= golpeJug2;

                console.log("Golpea Jug 2 (" + golpeJug2 + ")");
                console.log("Resto Jug 1: " + restoJug1);

                console.log("_______________________________");

                if (restoJug1 > 0 && restoJug2 > 0) {

                    restoJug2 -= golpeJug1;

                    console.log("Golpea Jug 1 (" + golpeJug1 + ")");
                    console.log("Resto Jug 2: " + restoJug2);

                    console.log("_______________________________");

                }

            }

            if (restoJug1 > 0) {
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
        }

        //finaliza el punto 

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

    } else {

        if (Math.trunc(((puntosJug1 + puntosJug2) / 2) % 2) === 0) {

            let saqueJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
            let recibeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

            let restoJug1 = 100;
            let restoJug2 = 100;

            console.log('------------- Set ' + set + ' Punto ' + (puntosJug1 + 1 + puntosJug2) + '--------------------------')

            restoJug1 -= saqueJug2;

            console.log("Saca Jug 2 (" + saqueJug2 + ")");
            console.log("Resto Jug 1: " + restoJug1);

            console.log("_______________________________");

            restoJug2 -= recibeJug1;

            console.log("Recibe Jug 1 (" + recibeJug1 + ")");
            console.log("Resto Jug 2: " + restoJug2);

            console.log("_______________________________");

            while (restoJug1 > 0 && restoJug2 > 0) {

                let golpeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
                let golpeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

                restoJug1 -= golpeJug2;

                console.log("Golpea Jug 2 (" + golpeJug2 + ")");
                console.log("Resto Jug 1: " + restoJug1);

                console.log("_______________________________");

                if (restoJug1 > 0 && restoJug2 > 0) {

                    restoJug2 -= golpeJug1;

                    console.log("Golpea Jug 1 (" + golpeJug1 + ")");
                    console.log("Resto Jug 2: " + restoJug2);

                    console.log("_______________________________");

                }

            }

            if (restoJug1 > 0) {
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

        } else {
            let saqueJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
            let recibeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

            let restoJug1 = 100;
            let restoJug2 = 100;

            console.log('------------- Set ' + set + ' Punto ' + (puntosJug1 + 1 + puntosJug2) + '--------------------------')

            restoJug1 -= saqueJug2;

            console.log("Saca Jug 2 (" + saqueJug2 + ")");
            console.log("Resto Jug 1: " + restoJug1);

            console.log("_______________________________");

            restoJug2 -= recibeJug1;

            console.log("Recibe Jug 1 (" + recibeJug1 + ")");
            console.log("Resto Jug 2: " + restoJug2);

            console.log("_______________________________");

            while (restoJug1 > 0 && restoJug2 > 0) {

                let golpeJug1 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);
                let golpeJug2 = Math.ceil(Math.random() * (GOLPE_FUERTE - GOLPE_DEBIL) + GOLPE_DEBIL);

                restoJug1 -= golpeJug2;

                console.log("Golpea Jug 2 (" + golpeJug2 + ")");
                console.log("Resto Jug 1: " + restoJug1);

                console.log("_______________________________");

                if (restoJug1 > 0 && restoJug2 > 0) {

                    restoJug2 -= golpeJug1;

                    console.log("Golpea Jug 1 (" + golpeJug1 + ")");
                    console.log("Resto Jug 2: " + restoJug2);

                    console.log("_______________________________");

                }

            }

            if (restoJug1 > 0) {
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
        }

        //finaliza el punto 

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
}


console.log("------Final del partido-----------");
console.log("Jug1: " + setJug1);
console.log("Jug2: " + setJug2);

