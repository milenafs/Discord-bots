module.exports = {
    name: 'santa',
    description: 'this is santa command',
    execute(message,args){
        message.channel.send(':sparkles::christmas_tree::confetti_ball: **Santa Claus!** :sparkles::christmas_tree::confetti_ball:');
        message.channel.send('https://i1.wp.com/blog.lucasgilbert.com.br/wp-content/uploads/2018/12/santa-claus-e-father-christmas-lucas-gilbert.jpg?resize=650%2C427&ssl=1');
        message.channel.send('**Santa Claus**—otherwise known as Saint Nicholas or Kris Kringle—has a long history steeped in Christmas traditions. Today, he is thought of mainly as the jolly man in red who brings toys to good girls and boys on Christmas Eve, but his story stretches all the way back to the 3rd century, when Saint Nicholas walked the earth and became the patron saint of children. Find out more about the history of Santa Claus from his earliest origins to the shopping mall Santas of today, and discover how two New Yorkers—Clement Clark Moore and Thomas Nast—were major influences on the Santa Claus millions of children wait for each Christmas Eve.\n'+'*link: https://www.history.com/topics/christmas/santa-claus*');
    }
}