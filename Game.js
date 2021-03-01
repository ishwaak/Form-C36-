class Game 
{

    constructor ()
    {
    }

    getState()
    {
       var refer = database.ref('gameState');
       refer.on ("value",function(data) 
                         {
                           gameState = data.val();

                         }
                )

    }

start()
{
    if(gameState === 0 )
    {
        form = new Form();
        form.display();
    }
}

    
};