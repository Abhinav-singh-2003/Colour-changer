const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button){
    button.addEventListener('click', function(color){
        
        // if ( color.target.id ==='grey'){
        //     body.style.backgroundColor = "grey" ;
        // }
        // if (color.target.id ==='white'){
        //     body.style.backgroundColor = 'white' ;
        // }
        // if (color.target.id ==='blue'){
        //     body.style.backgroundColor = 'blue' ;
        // }
        // if (color.target.id === 'yellow'){
        //     body.style.backgroundColor = 'yellow';
        // }

        switch(color.target.id){
            case "grey":
                 body.style.backgroundColor = 'grey';
                break;
            
            case "white": 
                body.style.backgroundColor = 'white';
                break;

            case "blue": 
                body.style.backgroundColor = 'blue';
                break;

            case "yellow": 
                body.style.backgroundColor = 'yellow';
                break;

        }


    })

})
