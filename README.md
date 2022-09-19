Proyecto con vanilla JS

la Primera funcion: removeTransition(e){}
usa la e para referenciar a cualquier elemento del archivo. a traves del Condicional IF remueve la clase "playing". volviendo a foja 0 el documento

en el caso de este proyecto:
    1~ para acceder al html => document.querySelectorAll{} / document.querySelector()
    2~ para transfrormarlo => (elemento sea class o id).addEventListener(). En este caso que al apretar la tecla se dispare un sonido.
    3~ ternina con la funcion que remueve la CLASE del html para que el selector de css no actue, "vuelve a al normalidad"


la segunda funcion playSOund(e){}  uso del dom con el metodo
document.querySelectorAll()
            You use this method to access one or more elements from the DOM that matches one or more CSS selectors

busca acceder al html desde los selectores de css:
ejemplo: var parrafo = document.querySelectorAll( 'p' );


.addEventListener() aparentemente siempre esta dentro de la funcion o constante -
        ES una PROPIEDAD no metodo
            This property attaches an event listener to your element.

            It takes a callback which will run when that event is triggered.
 
 sirve para transformar al elemento de html
 ej:  SUBMIT ==(apretas y cambia a)=>  SUBMITED!!





// sabiendo la teoria del DOM ahora se hace mucho mas facil, saber para que utilizamos cada atributo

//~lo nuevo que vemos es que en los audios, no puso ni class ni id, sino DATA-KEY.un atributo global para cualqueir elemento html. 

//data-* es para crear "nnuestros propios atributos" en este caso emparenta los keys de las teclas con los sonidos.

//objeto WINDOW hace referencia a la ventana del navegador donde se despliega el documento, es global, no importa si se pone o no.