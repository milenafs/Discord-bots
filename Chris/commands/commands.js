module.exports = {
    name: 'commands',
    description: 'this is commands command',
    execute(message,args){
        message.channel.send(':sparkles::christmas_tree::confetti_ball: **CHRIS COMMANDS** :sparkles::christmas_tree::confetti_ball:\n'+
        '**-commands** \tshow a list of all Chrisbot\'s commands with a description\n'+
        '**-christmas** \texplain what is Christmas :christmas_tree:\n'+
        '**-decorations** \tget to know some of the traditional decorations\n'+
        '**-food** \t some recipes :shallow_pan_of_food: that can\'t be missing in the Christmas\n'+
        '**-movies** \tmovies to watch w/ your family in this holiday\n'+
        '**-origin** \thow Christmas started?\n'+
        '**-santa** \tSanta Claus :santa: biography\n'+
        '**-songs** \ttop Christmas song\n'+
        '**-traditions** \twhat you need to do to have a the perfect Christmas\n'+
        '**-worldevents** \tHow other countries :map: celebrate this date\n'+
        '**-gift** \tRecive a gift from Chris and open it by reacting :palms_up_together: to it!');
    }
}