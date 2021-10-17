import { Injectable } from '@angular/core';

@Injectable()


export class jugadoresService {

    private jugadores:jugadoress[]= [
        {
            img :"/assets/img/messi30psghd.jpg",
            img2 :"/assets/img/psg_afa.png",
            link : "/Messi",
            nombre:"LIONEL MESSI",

        },
        {
            img :"/assets/img/ronaldo7manchesterhd.jpg",
            img2 :"/assets/img/man_fpf.png",
            link : "/Ronaldo",
            nombre:"CRISTIANO RONALDO",

        },
        {
            img :"/assets/img/james19everton.png",
            img2 :"/assets/img/eve_fcf.png",
            link : "/James",
            nombre:"JAMES RODRIGUEZ",

        }

        ];


    constructor(){
    console.log("Servicio listo para usar!!");
    }
    getjugadores():jugadoress[]{
    return this.jugadores;
    }

}
export interface jugadoress{
    img: string;
    img2: string;
    link: string;
    nombre: string;
 
}