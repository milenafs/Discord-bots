const { ReactionCollector } = require("discord.js");
const giftwrappers = ['https://cdn.pixabay.com/photo/2020/07/17/18/15/gift-5414985_1280.png','https://www.pinclipart.com/picdir/big/553-5532188_drawing-gift-cartoon-cartoon-gift-box-drawing-clipart.png',
'https://banner.holidaypng.com/20191119/foo/pink-leaf-gift-for-christmas-5dd3a8a920f201.53489039.png','https://freesvg.org/img/christmas-wrapped-gift.png','https://banner.holidaypng.com/20200507/hof/fathers-day-blue-gift-for-fathers-day-5eb39984ca4656.82840825.png','https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/67829/blue-gift-box-clipart-sm.png','https://cdn.picpng.com/gift/gift-loop-blue-red-cartoon-99332.png','https://pngfreepic.com/wp-content/uploads/2021/06/gift-box-png-freepic-114.png?v=1624260371','https://www.nicepng.com/png/full/417-4174636_cartoon-gift-bag-gift.png','https://cdn.shopify.com/s/files/1/0358/0061/3001/products/SweetElegance_2_720x.png?v=1593020477','https://www.howtogeek.com/wp-content/themes/htg-responsive/img/emoji-gift-box.png?noautoborder-trim=1,1'];

const gifts = ['https://i1.wp.com/www.historiadasartes.com/wp-content/uploads/2017/09/m_autorretrato.jpg?resize=413%2C450','https://imagens.mdig.com.br/ilusoes/ilusao_optica_dali_12.jpg','https://www.altoastral.com.br/media/uploads/legacy/2016/10/Salvador-Dali-casal-musico-ilusao-otica.jpg','https://mega.ibxk.com.br/2016/03/08/08200551900688.jpg?ims=610x','https://img.myloview.com.br/fotomurais/ilusao-de-otica-elipse-quadro-400-2571032.jpg','https://img.myloview.com.br/fotomurais/ilusao-de-otica-elipse-quadro-400-2571032.jpg','https://mega.ibxk.com.br/2016/03/08/08200652912693.jpg?ims=610x','https://rockntech.com.br/wp-content/uploads/2017/11/pinturas-ilusao-de-otica_1.jpg','https://www.hypeness.com.br/1/2015/01/magic-realism-paintings-rob-gonsalves-22__880.jpg','https://i.pinimg.com/474x/0a/33/d4/0a33d403734dc3487b907ed9cc93914a--twin-flames-surreal-art.jpg','https://i.pinimg.com/originals/e0/88/53/e08853c742c9ef2038d99d084894b200.jpg','https://assets.b9.com.br/wp-content/uploads/2015/02/rob7.jpg','https://www.altoastral.com.br/media/uploads/legacy/2016/10/Vladimir-Kush-Departure-winged-ship-ilusao-otica.jpg','https://i.pinimg.com/originals/21/2d/6a/212d6a0a4fe747a6fb99a9b75bca6200.jpg','https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg'];

module.exports = {
    name: 'gift',
    description: 'this is gift command',
    execute(message,args){
        var giftwrapper = Math.floor(Math.random() * giftwrappers.length);
        
        message.reply(giftwrappers[giftwrapper],'').then(msg=>{
            msg.react("🤲");
            const reciveFilter = (reaction,user) => reaction.emoji.name === ":palms_up_together:" && user.id === message.author.id;

            const collector = msg.createReactionCollector({ reciveFilter, time: 15000 });
            collector.on('collect', (reaction, user) => {
                if(user.id != message.author.id) return;
                console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
                var gift = Math.floor(Math.random() * gifts.length);
                msg.edit(gifts[gift]);
                msg.channel.send(`${message.author} hope you liked the gift!! **Merry Christmas!!**\n:sparkles::christmas_tree::confetti_ball::sparkles::christmas_tree::confetti_ball::sparkles::christmas_tree::confetti_ball::sparkles::christmas_tree::confetti_ball::sparkles::christmas_tree::confetti_ball:`);
            });
        })
    }
}