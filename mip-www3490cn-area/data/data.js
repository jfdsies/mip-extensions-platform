/**
 * @file: 联动所有数据
 * @author: Gniuniu
 */
define(function () {
    var pvcList = [{
        name: '全国',
        cityList: [{name: '全国'}, {name: '华东'}, {name: '华南'},
            {name: '华北'}, {name: '华中'}, {name: '西北'}, {name: '东北'},
            {name: '西南'}, {name: '港澳台'}]
    }, {
        name: '北京',
        cityList: [{name: '全市'}, {name: '东城'}, {name: '西城'},
            {name: '朝阳'}, {name: '丰台'}, {name: '海淀'}, {name: '房山'},
            {name: '通州'}, {name: '顺义'}, {name: '昌平'}, {name: '大兴'},
            {name: '怀柔'}, {name: '平谷'}, {name: '密云'}, {name: '延庆'},
            {name: '石景山'}, {name: '门头沟'}]
    }, {
        name: '上海',
        cityList: [{name: '全市'}, {name: '黄浦'}, {name: '徐汇'},
            {name: '长宁'}, {name: '静安'}, {name: '普陀'}, {name: '闸北'},
            {name: '虹口'}, {name: '杨浦'}, {name: '闵行'}, {name: '宝山'},
            {name: '嘉定'}, {name: '金山'}, {name: '松江'}, {name: '青浦'},
            {name: '奉贤'}, {name: '崇明'}, {name: '浦东新区'}]
    }, {
        name: '天津',
        cityList: [{name: '全市'}, {name: '和平'}, {name: '河东'}, {name: '河西'},
            {name: '南开'}, {name: '河北'}, {name: '红桥'}, {name: '东丽'}, {name: '西青'},
            {name: '津南'}, {name: '北辰'}, {name: '武清'}, {name: '宝坻'}, {name: '静海'},
            {name: '宁河'}, {name: '蓟县'}, {name: '滨海新区'}]
    }, {
        name: '重庆',
        cityList: [{name: '全市'}, {name: '万州'}, {name: '涪陵'}, {name: '渝中'},
            {name: '江北'}, {name: '南岸'}, {name: '北碚'}, {name: '綦江'},
            {name: '大足'}, {name: '渝北'}, {name: '巴南'}, {name: '黔江'},
            {name: '长寿'}, {name: '江津'}, {name: '合川'}, {name: '永川'},
            {name: '南川'}, {name: '铜梁'}, {name: '荣昌'}, {name: '璧山'},
            {name: '梁平'}, {name: '城口'}, {name: '丰都'}, {name: '垫江'},
            {name: '武隆'}, {name: '奉节'}, {name: '巫山'}, {name: '巫溪'},
            {name: '石柱'}, {name: '秀山'}, {name: '酉阳'}, {name: '彭水'},
            {name: '大渡口'}, {name: '沙坪坝'}, {name: '九龙坡'}, {name: '忠县'},
            {name: '开县'}, {name: '两江新区'}]
    }, {
        name: '辽宁',
        cityList: [{name: '全省'}, {name: '沈阳'}, {name: '大连'}, {name: '鞍山'},
            {name: '抚顺'}, {name: '本溪'}, {name: '丹东'}, {name: '锦州'},
            {name: '营口'}, {name: '阜新'}, {name: '辽阳'}, {name: '盘锦'},
            {name: '铁岭'}, {name: '朝阳'}, {name: '葫芦岛'}]
    }, {
        name: '吉林',
        cityList: [{name: '全省'}, {name: '长春'}, {name: '吉林'}, {name: '四平'},
            {name: '辽源'}, {name: '通化'}, {name: '白山'}, {name: '松原'},
            {name: '白城'}, {name: '延边'}]
    }, {
        name: '黑龙江',
        cityList: [{name: '全省'}, {name: '哈尔滨'}, {name: '鸡西'}, {name: '鹤岗'},
            {name: '大庆'}, {name: '伊春'}, {name: '黑河'}, {name: '绥化'},
            {name: '双鸭山'}, {name: '佳木斯'}, {name: '七台河'}, {name: '牡丹江'},
            {name: '齐齐哈尔'}, {name: '大兴安岭'}]
    }, {
        name: '河北',
        cityList: [{name: '全省'}, {name: '石家庄'}, {name: '唐山'}, {name: '邯郸'},
            {name: '邢台'}, {name: '保定'}, {name: '承德'}, {name: '沧州'},
            {name: '廊坊'}, {name: '衡水'}, {name: '张家口'}, {name: '秦皇岛'}]
    }, {
        name: '山西',
        cityList: [{name: '全省'}, {name: '太原'}, {name: '大同'}, {name: '阳泉'},
            {name: '长治'}, {name: '晋城'}, {name: '朔州'}, {name: '晋中'},
            {name: '运城'}, {name: '忻州'}, {name: '临汾'}, {name: '吕梁'}]
    }, {
        name: '河南',
        cityList: [{name: '全省'}, {name: '郑州'}, {name: '开封'}, {name: '洛阳'},
            {name: '安阳'}, {name: '鹤壁'}, {name: '新乡'}, {name: '焦作'},
            {name: '濮阳'}, {name: '许昌'}, {name: '漯河'}, {name: '南阳'},
            {name: '商丘'}, {name: '信阳'}, {name: '周口'}, {name: '济源'},
            {name: '平顶山'}, {name: '三门峡'}, {name: '驻马店'}]
    }, {
        name: '山东',
        cityList: [{name: '全省'}, {name: '济南'}, {name: '青岛'}, {name: '淄博'},
            {name: '枣庄'}, {name: '东营'}, {name: '烟台'}, {name: '潍坊'},
            {name: '济宁'}, {name: '泰安'}, {name: '威海'}, {name: '日照'},
            {name: '莱芜'}, {name: '临沂'}, {name: '德州'}, {name: '聊城'},
            {name: '滨州'}, {name: '菏泽'}]
    }, {
        name: '江苏',
        cityList: [{name: '全省'}, {name: '南京'}, {name: '无锡'}, {name: '徐州'},
            {name: '常州'}, {name: '苏州'}, {name: '南通'}, {name: '淮安'},
            {name: '盐城'}, {name: '扬州'}, {name: '镇江'}, {name: '泰州'},
            {name: '宿迁'}, {name: '连云港'}]
    }, {
        name: '安徽',
        cityList: [{name: '全省'}, {name: '合肥'}, {name: '芜湖'}, {name: '蚌埠'},
            {name: '淮南'}, {name: '淮北'}, {name: '铜陵'}, {name: '安庆'},
            {name: '黄山'}, {name: '滁州'}, {name: '阜阳'}, {name: '宿州'},
            {name: '六安'}, {name: '亳州'}, {name: '池州'}, {name: '宣城'},
            {name: '马鞍山'}]
    }, {
        name: '江西',
        cityList: [{name: '全省'}, {name: '南昌'}, {name: '萍乡'}, {name: '九江'},
            {name: '新余'}, {name: '鹰潭'}, {name: '赣州'}, {name: '吉安'},
            {name: '宜春'}, {name: '抚州'}, {name: '上饶'}, {name: '景德镇'}]
    }, {
        name: '浙江',
        cityList: [{name: '全省'}, {name: '杭州'}, {name: '宁波'}, {name: '温州'},
            {name: '嘉兴'}, {name: '湖州'}, {name: '绍兴'}, {name: '金华'},
            {name: '衢州'}, {name: '舟山'}, {name: '台州'}, {name: '丽水'}]
    }, {
        name: '福建',
        cityList: [{name: '全省'}, {name: '福州'}, {name: '厦门'}, {name: '莆田'},
            {name: '三明'}, {name: '泉州'}, {name: '漳州'}, {name: '南平'},
            {name: '龙岩'}, {name: '宁德'}]
    }, {
        name: '广东',
        cityList: [{name: '全省'}, {name: '广州'}, {name: '深圳'}, {name: '珠海'},
            {name: '佛山'}, {name: '东莞'}, {name: '中山'}, {name: '汕头'},
            {name: '江门'}, {name: '湛江'}, {name: '茂名'}, {name: '韶关'},
            {name: '肇庆'}, {name: '惠州'}, {name: '梅州'}, {name: '汕尾'},
            {name: '河源'}, {name: '阳江'}, {name: '清远'}, {name: '潮州'},
            {name: '揭阳'}, {name: '云浮'}]
    }, {
        name: '海南',
        cityList: [{name: '全省'}, {name: '海口'}, {name: '三亚'}, {name: '三沙'},
            {name: '琼海'}, {name: '儋州'}, {name: '文昌'}, {name: '万宁'},
            {name: '东方'}, {name: '定安'}, {name: '屯昌'}, {name: '澄迈'},
            {name: '临高'}, {name: '白沙'}, {name: '昌江'}, {name: '乐东'},
            {name: '陵水'}, {name: '保亭'}, {name: '琼中'}, {name: '五指山'}]
    }, {
        name: '贵州',
        cityList: [{name: '全省'}, {name: '贵阳'}, {name: '遵义'}, {name: '安顺'},
            {name: '毕节'}, {name: '铜仁'}, {name: '黔南'}, {name: '黔西南'},
            {name: '黔东南'}, {name: '六盘水'}]
    }, {
        name: '云南',
        cityList: [{name: '全省'}, {name: '昆明'}, {name: '曲靖'}, {name: '玉溪'},
            {name: '保山'}, {name: '昭通'}, {name: '丽江'}, {name: '普洱'},
            {name: '临沧'}, {name: '楚雄'}, {name: '红河'}, {name: '文山'},
            {name: '大理'}, {name: '德宏'}, {name: '怒江'}, {name: '迪庆'},
            {name: '西双版纳'}]
    }, {
        name: '四川',
        cityList: [{name: '全省'}, {name: '成都'}, {name: '自贡'}, {name: '泸州'},
            {name: '德阳'}, {name: '绵阳'}, {name: '广元'}, {name: '遂宁'},
            {name: '内江'}, {name: '乐山'}, {name: '南充'}, {name: '眉山'},
            {name: '宜宾'}, {name: '广安'}, {name: '达州'}, {name: '雅安'},
            {name: '巴中'}, {name: '资阳'}, {name: '阿坝'}, {name: '甘孜'},
            {name: '凉山'}, {name: '攀枝花'}]
    }, {
        name: '湖南',
        cityList: [{name: '全省'}, {name: '长沙'}, {name: '株洲'}, {name: '湘潭'},
            {name: '衡阳'}, {name: '邵阳'}, {name: '岳阳'}, {name: '常德'},
            {name: '益阳'}, {name: '郴州'}, {name: '永州'}, {name: '怀化'},
            {name: '娄底'}, {name: '湘西'}, {name: '张家界'}]
    }, {
        name: '湖北',
        cityList: [{name: '全省'}, {name: '武汉'}, {name: '黄石'}, {name: '十堰'},
            {name: '宜昌'}, {name: '襄阳'}, {name: '鄂州'}, {name: '荆门'},
            {name: '孝感'}, {name: '荆州'}, {name: '黄冈'}, {name: '咸宁'},
            {name: '随州'}, {name: '恩施'}, {name: '仙桃'}, {name: '潜江'},
            {name: '天门'}, {name: '神农架'}]
    }, {
        name: '陕西',
        cityList: [{name: '全省'}, {name: '西安'}, {name: '铜川'}, {name: '宝鸡'},
            {name: '咸阳'}, {name: '渭南'}, {name: '延安'}, {name: '汉中'},
            {name: '榆林'}, {name: '安康'}, {name: '商洛'}]
    }, {
        name: '甘肃',
        cityList: [{name: '全省'}, {name: '兰州'}, {name: '金昌'}, {name: '白银'},
            {name: '天水'}, {name: '武威'}, {name: '张掖'}, {name: '平凉'},
            {name: '酒泉'}, {name: '庆阳'}, {name: '定西'}, {name: '陇南'},
            {name: '临夏'}, {name: '甘南'}, {name: '嘉峪关'}]
    }, {
        name: '青海',
        cityList: [{name: '全省'}, {name: '西宁'}, {name: '海东'}, {name: '海北'},
            {name: '黄南'}, {name: '海南'}, {name: '果洛'}, {name: '玉树'}, {name: '海西'}]
    }, {
        name: '内蒙古',
        cityList: [{name: '全区'}, {name: '呼和浩特'}, {name: '包头'}, {name: '乌海'},
            {name: '赤峰'}, {name: '通辽'}, {name: '兴安'}, {name: '阿拉善'},
            {name: '锡林郭勒'}, {name: '鄂尔多斯'}, {name: '呼伦贝尔'}, {name: '巴彦淖尔'},
            {name: '乌兰察布'}]
    }, {
        name: '西藏',
        cityList: [{name: '全区'}, {name: '拉萨'}, {name: '昌都'}, {name: '山南'},
            {name: '那曲'}, {name: '阿里'}, {name: '林芝'}, {name: '日喀则'}]
    }, {
        name: '新疆',
        cityList: [{name: '全区'}, {name: '乌鲁木齐'}, {name: '哈密'}, {name: '昌吉'},
            {name: '喀什'}, {name: '和田'}, {name: '伊犁'}, {name: '塔城'},
            {name: '吐鲁番'}, {name: '阿克苏'}, {name: '阿勒泰'}, {name: '石河子'},
            {name: '阿拉尔'}, {name: '五家渠'}, {name: '克拉玛依'}, {name: '博尔塔拉'},
            {name: '巴音郭楞'}, {name: '克孜勒苏'}, {name: '图木舒克'}]
    }, {
        name: '广西',
        cityList: [{name: '全区'}, {name: '南宁'}, {name: '柳州'}, {name: '桂林'},
            {name: '梧州'}, {name: '北海'}, {name: '钦州'}, {name: '贵港'},
            {name: '玉林'}, {name: '百色'}, {name: '贺州'}, {name: '河池'},
            {name: '来宾'}, {name: '崇左'}, {name: '防城港'}]
    }, {
        name: '宁夏',
        cityList: [{name: '全区'}, {name: '银川'}, {name: '吴忠'}, {name: '固原'},
            {name: '中卫'}, {name: '石嘴山'}]
    }, {
        name: '香港',
        cityList: [{name: '全区'}, {name: '东区'}, {name: '南区'}, {name: '北区'},
            {name: '荃湾'}, {name: '湾仔'}, {name: '中西'}, {name: '观塘'}, {name: '离岛'},
            {name: '屯门'}, {name: '元朗'}, {name: '大埔'}, {name: '西贡'}, {name: '沙田'},
            {name: '葵青'}, {name: '油尖旺'}, {name: '深水埗'}, {name: '九龙城'}, {name: '黄大仙'}]
    }, {
        name: '澳门',
        cityList: [{name: '全区'}, {name: '氹仔'}, {name: '路环'}, {name: '大堂'},
            {name: '风顺堂'}, {name: '望德堂'}, {name: '花池玛堂'}, {name: '圣安多尼堂'}]
    }, {
        name: '台湾',
        cityList: [{name: '全省'}, {name: '台北'}, {name: '高雄'}, {name: '台中'},
            {name: '基隆'}, {name: '台南'}, {name: '新竹'}, {name: '新北'},
            {name: '嘉义'}, {name: '宜兰'}, {name: '桃园'}, {name: '苗栗'},
            {name: '彰化'}, {name: '南投'}, {name: '云林'}, {name: '屏东'},
            {name: '澎湖'}, {name: '台东'}, {name: '花莲'}]
    }];
    return pvcList;
});