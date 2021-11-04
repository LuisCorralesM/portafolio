// Fondo en movimientos
const style = document.documentElement.style;
let limiteAbajo = window.innerHeight;
let
    inicio1 = true,
    inicio2 = true,
    inicio3 = true,
    inicio4 = true,
    inicio5 = true,
    inicio6 = true,
    inicio7 = true

export const animacionFondo = (img1, img2, img3, img4, img5, img6, img7) => {
    let
        b1 = 0,
        l1 = 0,
        b2 = 15,
        l2 = 17,
        b3 = 17,
        l3 = 30,
        b4 = -3,
        l4 = 45,
        b5 = 23,
        l5 = 68,
        b6 = 9,
        l6 = 80,
        b7 = 29,
        l7 = 92;

    let n = 5;

    const intervalo = setInterval(() => {

        const
            top1 = img1.getBoundingClientRect().top,
            top2 = img2.getBoundingClientRect().top,
            top3 = img3.getBoundingClientRect().top,
            top4 = img4.getBoundingClientRect().top,
            top5 = img5.getBoundingClientRect().top,
            top6 = img6.getBoundingClientRect().top,
            top7 = img7.getBoundingClientRect().top,
            bottom1 = img1.getBoundingClientRect().bottom,
            bottom2 = img2.getBoundingClientRect().bottom,
            bottom3 = img3.getBoundingClientRect().bottom,
            bottom4 = img4.getBoundingClientRect().bottom,
            bottom5 = img5.getBoundingClientRect().bottom,
            bottom6 = img6.getBoundingClientRect().bottom,
            bottom7 = img7.getBoundingClientRect().bottom;



        // subida


        // Imagen 1
        if ((top1 > 0) && inicio1) {
            if (Math.round(top1) <= n) {
                inicio1 = false;
            }

            b1 = b1 + 0.2;
        };

        if (top1 > 0 && !inicio1) {
            if (Math.round(parseInt(bottom1)) >= limiteAbajo) {
                inicio1 = true;
            }
            b1 = b1 - 0.2;
        };
        style.setProperty('--p1-b', `${b1}%`);

        // // Imagen 2
        if ((top2 > 0) && inicio2) {
            if (Math.round(top2) <= n) {
                inicio2 = false;
            }

            b2 = b2 + 0.25;
        };

        if (top2 > 0 && !inicio2) {
            if (Math.round(parseInt(bottom2)) >= limiteAbajo) {
                inicio2 = true;
            }
            b2 = b2 - 0.25;
        };
        style.setProperty('--p2-b', `${b2}%`)
        style.setProperty('--p2-l', `${l2}%`)

        // Imagen 3
        if ((top3 > 0) && inicio3) {
            if (Math.round(top3) <= n) {
                inicio3 = false;
            }

            b3 = b3 + 0.15;
        };

        if (top3 > 0 && !inicio3) {
            if (Math.round(parseInt(bottom3)) >= limiteAbajo) {
                inicio3 = true;
            }
            b3 = b3 - 0.15;
        };
        style.setProperty('--p3-b', `${b3}%`)
        style.setProperty('--p3-l', `${l3}%`)

        // Imagen 4
        if ((top4 > 0) && inicio4) {
            if (Math.round(top4) <= n) {
                inicio4 = false;
            }

            b4 = b4 + 0.22;
        };

        if (top4 > 0 && !inicio4) {
            if (Math.round(parseInt(bottom4)) >= limiteAbajo) {
                inicio4 = true;
            }
            b4 = b4 - 0.22;
        };
        style.setProperty('--p4-b', `${b4}%`)
        style.setProperty('--p4-l', `${l4}%`)

        // Imagen 5
        if ((top5 > 0) && inicio5) {
            if (Math.round(top5) <= n) {
                inicio5 = false;
            }

            b5 = b5 + 0.1;
        };

        if (top5 > 0 && !inicio5) {
            if (Math.round(parseInt(bottom5)) >= limiteAbajo) {
                inicio5 = true;
            }
            b5 = b5 - 0.1;
        };
        style.setProperty('--p5-b', `${b5}%`)
        style.setProperty('--p5-l', `${l5}%`)

        // Imagen 6
        if ((top6 > 0) && inicio6) {
            if (Math.round(top6) <= n) {
                inicio6 = false;
            }

            b6 = b6 + 0.24;
        };

        if (top6 > 0 && !inicio6) {
            if (Math.round(parseInt(bottom6)) >= limiteAbajo) {
                inicio6 = true;
            }
            b6 = b6 - 0.24;
        };
        style.setProperty('--p6-b', `${b6}%`)
        style.setProperty('--p6-l', `${l6}%`)

        // Imagen 7
        if ((top7 > 0) && inicio7) {
            if (Math.round(top7) <= n) {
                inicio7 = false;
            }

            b7 = b7 + 0.19;
        };

        if (top7 > 0 && !inicio7) {
            if (Math.round(parseInt(bottom7)) >= limiteAbajo) {
                inicio7 = true;
            }
            b7 = b7 - 0.19;
        };
        style.setProperty('--p7-b', `${b7}%`)
        style.setProperty('--p7-l', `${l7}%`)
    }, 10);
}