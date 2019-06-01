/*********************系統變數設置*********************/
const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();
const {RichEmbed , Attachment} = require('discord.js');
const hook = new Discord.WebhookClient(config.webhook.id, config.webhook.token);
/**/


/*********************指令列表*********************/
const list = new RichEmbed()
 .setTitle('HiZollo 的指令列表')
 .setColor(0x0000FF)
 .setDescription(`${config.bot.prefix}help \n ${config.bot.prefix}ping \n ${config.bot.prefix}yourname \n ${config.bot.prefix}wiki \n `+
                 `${config.bot.prefix}rip \n ${config.bot.prefix}dice \n ${config.bot.prefix}hzweb \n ${config.bot.prefix}avatar \n`+
                 `${config.bot.prefix}think \n ${config.bot.prefix}8ball \n ${config.bot.prefix}invite \n ${config.bot.prefix}fact`);

 const secretlist = new RichEmbed()
  .setColor(0x0000FF)
  .addField('HiZollo 的指令列表', `${config.bot.prefix}help \n ${config.bot.prefix}ping \n ${config.bot.prefix}yourname \n ${config.bot.prefix}wiki \n `+
                                 `${config.bot.prefix}rip \n ${config.bot.prefix}dice \n ${config.bot.prefix}hzweb \n ${config.bot.prefix}avatar \n`+
                                 `${config.bot.prefix}think \n ${config.bot.prefix}8ball \n ${config.bot.prefix}invite \n ${config.bot.prefix}fact`, true)
  .addField('HiZollo 的秘密指令列表', `${config.bot.prefix}help hidden \n www \n oof \n 真慢／慢死了／太慢了吧 \n 吵死了 HiZollo／HiZollo 吵死了／吵死了HiZollo／HiZollo吵死了`+
                                                                    ` \n yee \n lol \n ...／...... \n omg／OMG`, true);
/**/


/*********************函式*********************/
function randomInt(min, max) {
  var c = Math.floor(max*Math.random())+min;
  return c;
}

function fact(){
  const facts = ['奇數跟整數一樣多', '6.022e23 個氫原子重一公克', '把賭博的輪盤上所有數字加起來剛好是 666', '骰子相對的兩面點數相加都是七',
                 '如果公園中雕像騎的馬兩條前腿都沒著地，代表這個人死於沙場之上', ' 如果公園中雕像騎的馬只有一條前腿都沒著地，代表這個人後來傷重而死',
                 '如果公園中雕像騎的馬四條腿都著地，代表這個人死於自然因素', '要把一塊美金換成零錢有 293 種換法', '111111111*111111111 = 12345678987654321',
                 '紅心老Ｋ是唯一沒有鬍鬚的老Ｋ', '自由女神的皇冠有七個尖', '燈泡並不是愛迪生發明的，事實上愛迪生很多的專利都是「買來的」',
                 '沒有一張紙可對摺超過7次', '乘坐飛機發生事故的機率遠遠小於乘坐汽車', '把石頭放在微波爐中加熱會爆炸',
                 '愛因斯坦9歲時不能流利說話，他媽媽曾一度以為他是弱智', '其實，河馬跑得比人快', '大象死後還會保持站立姿勢',
                 '當你害怕時，你的視力會變得更好', '你每天吞下的鼻涕約一公升', '如果把地球的整個歷史壓縮成一年的話，那麼人類是在12/31 23:58誕生的',
                 '從芬蘭走到朝鮮，只需橫跨一個國家', '畢卡索的全名叫 帕布羅.迭戈.荷瑟.山迪亞哥.弗朗西斯科.德.保拉.居安.尼波莫切諾.克瑞斯皮尼亞諾.德.羅斯.瑞米迪歐斯.'+
                                                  '西波瑞亞諾.德.拉.山迪西瑪.特立尼達.瑪利亞.帕里西奧.克里托.瑞茲.布拉斯科.畢卡索',
                 '草莓不是梅果的一種', '牛排的血水並不是血', '人類是唯一有下巴的動物', '劃卡不一定要用２Ｂ鉛筆，美國劃卡統一使用２號鉛筆，相當於我們的ＨＢ鉛筆',
                 '當你輸入...或......，HiZollo會回應.......，一共是七個點', '有理數的數量跟自然數的數量一樣', '河馬的奶是粉紅色的', '在冰島，養狗當寵物是違法的'];
  var fact = facts[randomInt(1,facts.length)-1];
  return fact;
}

function eightBall(){
  const answers = ['或許吧', '我覺得不行', '當然', '我不覺得', '有可能', '請等等再問一次', '最好不要', '你覺得呢', '你再想想看', '不', '嗯' ,'也許吧', '我不知道', '這個答案是機密，所以我不能告訴你'];
  var answer = answers[randomInt(1,answers.length)-1];
  return answer;
}

function Ping(from){
  var ping = Math.round(from);
  return ping;
}
/**/


/*********************上線確認*********************/
bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}`);
  hook.send(`成功登入 ${bot.user.tag}`);
});
/**/


/*********************指令*********************/
bot.on('message', message => {
  /*********************一般指令*********************/
  /*****指令清單*****/
  if (message.content === `${config.bot.prefix}help`){
    message.channel.send(list);
    console.log('有人要求顯示指令清單');
    hook.send('有人要求顯示指令清單');
  }
  /**/
  /*****ping值*****/
  if (message.content === `${config.bot.prefix}ping`){
    var p = Ping(message.client.ping);
    message.channel.send(':information_source:  |  Pong！本次ping值為：'+p+'ms');
    console.log('被ping了，值為'+p+'ms');
    hook.send('被ping了，值為'+p+'ms');
  }
  /**/
  /*****機器人名字*****/
  if (message.content === `${config.bot.prefix}yourname`){
    message.channel.send(`我叫 HiZollo，是個機器人。`);
    console.log('被問名字了');
    hook.send('被問名字了');
  }
  /**/
  /*****維基推銷*****/
  if (message.content === `${config.bot.prefix}wiki`){
    message.channel.send('Diep.io 繁中維基 是個好地方。');
    message.channel.send('https://diepio.fandom.com/zh');
    console.log('Wiki link has been sent.');
    hook.send('Wiki link has been sent.');
  }
  /**/
  /*****RIP*****/
  if (message.content === `${config.bot.prefix}rip`) {
    const rip = new Attachment('https://i.imgur.com/w3duR07.png');
    message.channel.send(rip);
    console.log('RIP!');
    hook.send('RIP!');
  }
  /**/
  /*****骰子*****/
  if (message.content === `${config.bot.prefix}dice`){
    var d = randomInt(1,6);
    message.channel.send(`${message.author}，你擲出了`+d+'點！');
    console.log(`${message.author}擲出了`+d+'點！');
    hook.send(`${message.author}擲出了`+d+`點！`);
  }
  /**/
  /*****網頁版HiZollo*****/
  if (message.content === `${config.bot.prefix}hzweb`){
    message.channel.send(':information_source:  |  HiZollo 網頁版 連結。');
    message.channel.send('https://hizollo.fandom.com/zh');
    console.log('Chat link has been sent.');
    hook.send('Chat link has been sent');
  }
  /**/
  /*****顯示頭像*****/
  if (message.content.startsWith(`${config.bot.prefix}avatar`)) {
      message.channel.send(`${message.author}，以下是你的頭像：\n${message.author.avatarURL}`);
      console.log(`${message.author}要求了顯示自己的頭像`);
      hook.send(`${message.author}要求了顯示自己的頭像`);
  }
  /**/
  /*****think*****/
  if (message.content === `${config.bot.prefix}think`) {
    message.channel.send(`:thinking:`);
    console.log(`${message.author}： :thinking:`);
    hook.send(`${message.author}： :thinking:`);
  }
  /**/
  /*****8Ball*****/
  if (message.content === `${config.bot.prefix}8ball`){
    message.channel.send(`${message.author}，8Ball的用法是：\`${config.bot.prefix}8ball <你的問題>\``);
    console.log(`${message.author}使用了8Ball，卻沒有問問題。`);
    hook.send(`${message.author}使用了8Ball，卻沒有問問題。`);
  }else if (message.content.startsWith(`${config.bot.prefix}8ball`)) {
    var a = eightBall();
    message.channel.send(`${message.author}，`+a);
    console.log(`${message.author}問8ball問題，8ball給的回答是`+a);
    hook.send(`${message.author}問8ball問題，8ball給的回答是`+a);
  }
  /**/
  /*****邀請連結*****/
  if (message.content === `${config.bot.prefix}invite`) {
    message.channel.send(`你可以使用以下連結來邀請HiZollo至你的伺服器中： \n http://bit.ly/2IVtIFq`);
    console.log(`Invite link has been sent.`);
    hook.send(`Invite link has been sent.`);
  }
  /**/
  /*****事實*****/
  if (message.content === `${config.bot.prefix}fact`) {
    var f = fact();
    message.channel.send(f);
    console.log(`${message.author}想知道一個事實，我告訴他`+f);
    hook.send(`${message.author}想知道一個事實，我告訴他`+f);
  }
  /**/

  /*********************隱藏指令*********************/
  /*****隱藏指令清單*****/
  if (message.content === `${config.bot.prefix}help hidden`){
    message.channel.send(secretlist)
    console.log('被要求顯示隱藏指令列表');
    hook.send('被要求顯示隱藏指令列表');
  }
  /**/
  /*****嫌ping慢*****/
  if (message.content === '真慢' ||message.content === '慢死了'||message.content === '太慢了吧'){
    message.channel.send('我有什麼辦法啊');
    console.log('被嫌慢了');
    hook.send('被嫌慢了');
  }
  /**/
  /*****www*****/
  if (message.content === 'www'){
    message.channel.send('wwwwww');
    console.log('wwwwww');
    hook.send('wwwwww');
  }
  /**/
  /*****oof*****/
  if (message.content === 'oof'||message.content === 'OOF'){
    message.channel.send('ooooooooooof');
    console.log('oof');
    hook.send('ooof');
  }
  /**/
  /*****嫌機器人吵*****/
  if (message.content === '吵死了 HiZollo' || message.content === 'HiZollo 吵死了' || message.content === '吵死了HiZollo' || message.content === 'HiZollo吵死了'){
    message.channel.send('QAQ');
    console.log('被嫌很吵......');
    hook.send('被嫌很吵......');
  }
  /**/
  /*****yee*****/
  if (message.content === 'yee'){
    message.channel.send('yeeeeeeeeeeeeeeeeeee');
    console.log('yeeeeeeeeeeeeeeeeeee');
    hook.send('yeeeeeeeeeeeeeeeeeee');
  }
  /**/
  /*****lol*****/
  if (message.content === 'lol'){
    message.channel.send('looooooooooooool');
    console.log('loool');
    hook.send('loool');
  }
  /**/
  /*****無言薯條*****/
  if (message.content === '......'||message.content === '...'){
    message.channel.send('.......');
    console.log('無言');
    hook.send('無言');
  }
  /**/
/*****Oh my God*****/
  if (message.content === 'omg'||message.content === 'OMG'){
    message.channel.send('Oh my God!');
    console.log('我的老天鵝啊');
    hook.send('我的老天鵝啊');
  }
  /**/
  /*****釣魚拉霸室*****/
    /*****祈福*****/
    if (message.content.startsWith('???') && message.channel.name == '釣魚拉霸室'){
      message.channel.send('==========[祈福]========== \n' +
                           '           ???????????????????? \n' +
                           '           ???????????????????? \n' +
                           '           ???祈求下次釣到魚???  \n' +
                           '           ???????????????????? \n' +
                           '           ????????????????????');
      console.log('祈福');
      hook.send('祈福');
    }
    /**/
    /*****謝天****/
    if (message.content.startsWith('!!!') && message.channel.name == '釣魚拉霸室'){
      message.channel.send('==========[謝天]========== \n' +
                           '           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n' +
                           '           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n' +
                           '           !!!!!!!!!感謝上天恩賜!!!!!!!!!  \n' +
                           '           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! \n' +
                           '           !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
      console.log('謝天');
      hook.send('謝天');
    }
    /**/
  /**/
  /*****For Leia*****/
  if (message.content === '!!2019'){
    message.channel.send(`${message.author}，簽到成功喔！`);
    message.member.addRole('574235094391455757');
  }
  /**/
});
/**/


/*********************登出*********************/
bot.login(config.bot.token);
