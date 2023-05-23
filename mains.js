    window.addEventlistener(`load`, setup);

    function setup(){
        const form = document.forms.entrada;
        form.addEventlistener(`submit`,envia);
    }
     
    function envia(evento){
            evento.preventDefault();
            console.log (`formulario enviado!`);
        }
