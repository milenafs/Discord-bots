module.exports = {
    name: 'christmas',
    description: 'this is christmas command',
    execute(message,args){
        message.channel.send(':sparkles::christmas_tree::confetti_ball: **Christmas!** :sparkles::christmas_tree::confetti_ball:');
        message.channel.send('https://our.today/wp-content/uploads/2021/12/christmas.jpg');
        message.channel.send('**Christmas** is celebrated on December 25 and is both a sacred religious holiday and a worldwide cultural and commercial phenomenon. For two millennia, people around the world have been observing it with traditions and practices that are both religious and secular in nature. Christians celebrate Christmas Day as the anniversary of the birth of Jesus of Nazareth, a spiritual leader whose teachings form the basis of their religion. Popular customs include exchanging gifts, decorating Christmas trees, attending church, sharing meals with family and friends and, of course, waiting for Santa Claus to arrive. December 25—Christmas Day—has been a federal holiday in the United States since 1870.\n'+
        '*link: https://www.history.com/topics/christmas/history-of-christmas*');
    }
}