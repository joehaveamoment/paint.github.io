var poems = [
'送灵澈上人<br>刘长卿<br><br>苍苍竹林寺<br>杳杳钟声晚<br>荷笠带斜阳<br>青山独归远<br>(斜阳 一作：夕阳)<br><br>',
'锦瑟<br>李商隐<br><br>锦瑟无端五十弦<br>一弦一柱思华年<br>庄生晓梦迷蝴蝶<br>望帝春心托杜鹃<br>沧海月明珠有泪<br>蓝田日暖玉生烟<br>此情可待成追忆<br>只是当时已惘然<br><br>',
'春晓<br>孟浩然<br>春眠不觉晓<br>处处闻啼鸟<br><br>夜来风雨声<br>花落知多少<br><br>',
'鹿柴<br>王维<br>空山不见人<br>但闻人语响<br><br>返景入深林<br>复照青苔上<br><br>',
'相思<br>王维<br>红豆生南国<br>春来发几枝<br><br>愿君多采撷<br>此物最相思<br><br>',
'杂诗<br>王维<br>君自故乡来<br>应知故乡事<br><br>来日绮窗前<br>寒梅著花未<br><br>',
'终南望余雪<br>祖咏<br>终南阴岭秀<br>积雪浮云端<br><br>林表明霁色<br>城中增暮寒<br><br>',
'静夜思<br>李白<br>床前明月光<br>疑是地上霜<br><br>举头望明月<br>低头思故乡<br><br>',
'登鹳雀楼<br>王之涣<br>白日依山尽<br>黄河入海流<br><br>欲穷千里目<br>更上一层楼<br><br>',
'江雪<br>柳宗元<br>千山鸟飞绝<br>万径人踪灭<br><br>孤舟蓑笠翁<br>独钓寒江雪<br><br>',
'登乐游原<br>李商隐<br>向晚意不适<br>驱车登古原<br><br>夕阳无限好<br>只是近黄昏<br><br>',
'听弹琴<br>刘长卿<br>泠泠七弦上<br>静听松风寒<br><br>古调虽自爱<br>今人多不弹<br><br>',
'八阵图<br>杜甫<br>功盖三分国<br>名成八阵图<br><br>江流石不转<br>遗恨失吞吴<br><br>',
'赋得古原草送别<br>白居易<br>离离原上草<br>一岁一枯荣<br><br>野火烧不尽<br>春风吹又生<br><br>远芳侵古道<br>晴翠接荒城<br><br>又送王孙去<br>萋萋满别情<br><br>',
'游子吟<br>孟郊<br>慈母手中线<br>游子身上衣<br><br>临行密密缝<br>意恐迟迟归<br><br>谁言寸草心<br>报得三春晖<br><br>',
'关山月<br>李白<br>明月出天山<br>苍茫云海间<br><br>长风几万里<br>吹度玉门关<br><br>',
'望月怀远<br>张九龄<br>海上生明月<br>天涯共此时<br><br>情人怨遥夜<br>竟夕起相思<br><br>',
'送杜少府之任蜀州<br>王勃<br>城阙辅三秦<br>风烟望五津<br><br>与君离别意<br>同是宦游人<br><br>海内存知己<br>天涯若比邻<br><br>无为在岐路<br>儿女共沾巾<br>',
'春望<br>杜甫<br>国破山河在<br>城春草木深<br><br>感时花溅泪<br>恨别鸟惊心<br><br>烽火连三月<br>家书抵万金<br><br>白头搔更短<br>浑欲不胜簪<br>',
'登岳阳楼<br>杜甫<br>昔闻洞庭水<br>今上岳阳楼<br><br>吴楚东南坼<br>乾坤日夜浮<br>',
'终南别业<br>王维<br>中岁颇好道<br>晚家南山陲<br><br>兴来每独往<br>胜事空自知<br>',
'凉州词<br>王翰<br>葡萄美酒夜光杯<br>欲饮琵琶马上催<br><br>醉卧沙场君莫笑<br>古来征战几人回<br>',
'望庐山瀑布<br>李白<br>日照香炉生紫烟<br>遥看瀑布挂前川<br><br>飞流直下三千尺<br>疑是银河落九天<br>',
'送孟浩然之广陵<br>李白<br>故人西辞黄鹤楼<br>烟花三月下扬州<br><br>孤帆远影碧空尽<br>惟见长江天际流<br>',
'早发白帝城<br>李白<br>朝辞白帝彩云间<br>千里江陵一日还<br><br>两岸猿声啼不住<br>轻舟已过万重山<br><br>',
'枫桥夜泊<br>张继<br>月落乌啼霜满天<br>江枫渔火对愁眠<br><br>姑苏城外寒山寺<br>夜半钟声到客船<br><br>',
'乌衣巷<br>刘禹锡<br>朱雀桥边野草花<br>乌衣巷口夕阳斜<br><br>旧时王谢堂前燕<br>飞入寻常百姓家<br><br>',
'送元二使安西<br>王维<br>渭城朝雨浥轻尘<br>客舍青青柳色新<br><br>劝君更尽一杯酒<br>西出阳关无故人<br><br>',
'出塞<br>王昌龄<br>秦时明月汉时关<br>万里长征人未还<br><br>但使龙城飞将在<br>不教胡马渡阴山<br><br>',
'凉州词<br>王之涣<br>黄河远上白云间<br>一片孤城万仞山<br><br>羌笛何须怨杨柳<br>春风不度玉门关<br><br>',
'咏柳<br>贺知章<br>碧玉妆成一树高<br>万条垂下绿丝绦<br><br>不知细叶谁裁出<br>二月春风似剪刀<br><br>',
'黄鹤楼<br>崔颢<br>昔人已乘黄鹤去<br>此地空余黄鹤楼<br><br>黄鹤一去不复返<br>白云千载空悠悠<br><br>晴川历历汉阳树<br>芳草萋萋鹦鹉洲<br><br>日暮乡关何处是<br>烟波江上使人愁<br><br>',
'江畔独步寻花<br>杜甫<br>黄四娘家花满蹊<br>千朵万朵压枝低<br><br>留连戏蝶时时舞<br>自在娇莺恰恰啼<br><br>',
'清明<br>杜牧<br>清明时节雨纷纷<br>路上行人欲断魂<br><br>借问酒家何处有<br>牧童遥指杏花村<br><br>',
'山行<br>杜牧<br>远上寒山石径斜<br>白云生处有人家<br><br>停车坐爱枫林晚<br>霜叶红于二月花<br><br>',
'题都城南庄<br>崔护<br>去年今日此门中<br>人面桃花相映红<br><br>人面不知何处去<br>桃花依旧笑春风<br><br>',
'登幽州台歌<br>陈子昂<br>前不见古人<br><br>后不见来者<br><br>念天地之悠悠<br><br>独怆然而剃下<br><br>',
'悯农二<br>李绅）<br>锄禾日当午<br><br>汗滴禾下土<br><br>谁知盘中餐<br><br>粒粒皆辛苦<br><br>',
'古郎月行<br>李白<br>小时不识月<br><br>呼作金玉盘<br><br>又疑瑶台镜<br><br>飞在碧云端<br><br>',
'山中送别<br>王维<br>山中相送罢<br><br>日暮掩柴扉<br><br>春草明年绿<br><br>王孙归不归？<br><br>',
'独坐敬亭山<br>李白<br>众鸟高飞尽<br><br>孤云独去闲<br><br>相看两不厌<br><br>只有敬亭山<br><br>',
'马诗<br>李贺<br>大漠沙如雪<br><br>燕山月似钩<br><br>何当金络脑<br><br>快走踏清秋<br><br>',
'蒙学诗<br>佚名<br>一去二三里<br><br>烟村四五家<br><br>亭台六七座<br> <br>八九十枝花<br><br>',
'春夜喜雨<br>杜甫<br>好雨知时节<br><br>当春乃发生<br><br>随风潜入夜<br><br>润物细无声<br><br>',
'越女词<br>李白<br>耶溪采莲女<br><br>见客棹歌回<br><br>笑入荷花去<br><br>佯羞不出来<br><br>',
'夜宿山寺<br>李白<br>危楼高百尺<br><br>手可摘星辰<br><br>不敢高声语<br><br>恐惊天上人<br><br>',
'池上<br>白居易<br>小娃撑小艇<br><br>偷采白莲回<br><br>不解藏踪迹<br><br>浮萍一道开<br><br>',
'宿建德江<br>孟浩然<br>移舟泊烟渚<br><br>日暮客愁新<br><br>野旷天低树<br><br>江清月近人<br><br>',
'逢雪宿芙蓉山主人<br>刘长卿<br>日暮苍山远<br><br>天寒白屋贫<br><br>柴门闻犬吠<br><br>风雪夜归人<br><br>',
'寻隐者不遇<br>贾岛<br>松下问童子<br><br>言师采药去<br><br>只在此山中<br><br>云深不知处<br><br>'
'崔九欲往南山马上口号与别/留别王维/送崔九<br>裴迪<br><br>归山深浅去<br>须尽丘壑美<br>莫学武陵人<br>暂游桃源里<br><br>'
]

function newpoem(){
  var randomNumber = Math.floor(Math.random() * (poems.length));
  document.getElementById('tangpoem300').innerHTML = poems[randomNumber];
}
