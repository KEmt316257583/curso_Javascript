//metodo de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo cancion con id ${id}`);
    },
    pausar : function(id){
        console.log(`Pausando cancion con id ${id}`);
    },
    borrar : function(id){
        console.log(`Borrando cancion con id ${id}`);
    },
    crearPlaylist : function(nombre){
        console.log(`Creando Playlist ${nombre}... `);
    },
    reproducir : function(id){
        console.log(`Reproducir Playlist ${nombre}... `);
    },
};

reproductor.reproducir("Himno");
reproductor.pausar(1);

reproductor.saltarCancion = function(nombre){
    console.log(`Saltando cancion ${nombre}`);
};

reproductor.saltarCancion("Heavy Metal");