class Form
{

    constructor()
    {
    }
    
    display()
    {

        //Heading 
        var title = createElement('H1') ;
        title.html("CAR RACING GAME BY: ISHWAAK")
        title.position(250,50) 

        // create input Thingggy 
        var input = createInput("Name") ; 
        input.position = (100,150);

        var button = createButton("Click here BOII") ; 
        button.position = (150,150);
        button.mousePressed
        (
            function()
            {

                input.hide();
                button.hide();
                //hide Function Is inbuild 

                 var name = input.value();
                  // value = p5 dome 

                Message.html("Heyy,"+ name);
                
                Message.position(200,100);
            }
        )

        var Message = createElement('h4');

        


    }

    

};