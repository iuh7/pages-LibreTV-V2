// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源'
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源'
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源'
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源'
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv'
    },
    heimuer: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: '黑木耳',
        detail: 'https://heimuer.tv'
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源'
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源'
    },
    wolong: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '卧龙资源'
    },
    hwba: {
        api: 'https://cjhwba.com/api.php/provide/vod',
        name: '华为吧资源'
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com'
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源'
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源'
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源'
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源'
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源'
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源'
    },
    wwzy: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短剧'
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源'
    },
    lzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源站'
    },
    testSource: {
        api: 'https://www.example.com/api.php/provide/vod',
        name: '空内容测试源',
        adult: true
    },
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        adult: true
    },
    jkun: {
        api: 'https://jkunzyapi.com',
        name: 'jkun资源',
        adult: true
    },
    bwzy: {
        api: 'https://api.bwzym3u8.com',
        name: '百万资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com',
        name: '玉兔资源',
        adult: true
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速播资源'
    },
    fczy: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢资源'
    },
    ukzy: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源'
    },
    api_1: {
        api: 'https://api.1080zyku.com/inc/api_mac10.php',
        name: 'TV-1080资源',
        detail: 'https://api.1080zyku.com'
    },
    api_2: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        detail: 'https://155api.com',
        adult: true
    },
    api_3: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: 'TV-360资源',
        detail: 'https://360zy.com'
    },
    api_4: {
        api: 'https://ckzy.me/api.php/provide/vod',
        name: 'TV-CK资源',
        detail: 'https://ckzy.me',
        adult: true
    },
    api_5: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'TV-U酷资源',
        detail: 'https://api.ukuapi.com'
    },
    api_6: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'TV-U酷资源-2',
        detail: 'https://api.ukuapi88.com'
    },
    api_7: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'TV-iKun资源',
        detail: 'https://ikunzyapi.com'
    },
    api_8: {
        api: 'https://api.wujinapi.cc/api.php/provide/vod',
        name: 'TV-wujinapi无尽',
        detail: ''
    },
    api_9: {
        api: 'https://cj.yayazy.net/api.php/provide/vod',
        name: 'TV-丫丫点播',
        detail: 'https://cj.yayazy.net'
    },
    api_10: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: 'TV-光速资源',
        detail: 'https://api.guangsuapi.com'
    },
    api_11: {
        api: 'https://collect.wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙点播',
        detail: 'https://collect.wolongzyw.com'
    },
    api_12: {
        api: 'https://collect.wolongzy.cc/api.php/provide/vod',
        name: 'TV-卧龙资源-2',
        detail: ''
    },
    api_13: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: 'TV-卧龙资源',
        detail: 'https://wolongzyw.com'
    },
    api_14: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: 'TV-天涯资源',
        detail: 'https://tyyszy.com'
    },
    api_15: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: 'TV-如意资源',
        detail: ''
    },
    api_16: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: 'TV-小猫咪资源',
        detail: 'https://zy.xmm.hk'
    },
    api_17: {
        api: 'https://api.xinlangapi.com/xinlangapi.php/provide/vod',
        name: 'TV-新浪点播',
        detail: 'https://api.xinlangapi.com'
    },
    api_18: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: 'TV-无尽资源-2',
        detail: ''
    },
    api_19: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: 'TV-无尽资源-3',
        detail: ''
    },
    api_20: {
        api: 'https://api.wujinapi.net/api.php/provide/vod',
        name: 'TV-无尽资源-4',
        detail: ''
    },
    api_21: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: 'TV-旺旺短剧',
        detail: 'https://wwzy.tv'
    },
    api_22: {
        api: 'https://api.wwzy.tv/api.php/provide/vod',
        name: 'TV-旺旺资源',
        detail: 'https://api.wwzy.tv'
    },
    api_23: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: 'TV-暴风资源',
        detail: ''
    },
    api_24: {
        api: 'http://zuidazy.me/api.php/provide/vod',
        name: 'TV-最大点播',
        detail: 'http://zuidazy.me'
    },
    api_25: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: 'TV-最大资源',
        detail: 'https://api.zuidapi.com'
    },
    api_26: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: 'TV-樱花资源',
        detail: ''
    },
    api_27: {
        api: 'https://api.yparse.com/api/json',
        name: 'TV-步步高资源',
        detail: ''
    },
    api_28: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: 'TV-牛牛点播',
        detail: 'https://api.niuniuzy.me'
    },
    api_29: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'TV-电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com'
    },
    api_30: {
        api: 'https://api.bwzyz.com/api.php/provide/vod',
        name: '百万资源',
        detail: 'https://api.bwzyz.com'
    },
    api_31: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: 'TV-百度云资源',
        detail: 'https://api.apibdzy.com'
    },
    api_32: {
        api: 'https://api.1080zyku.com/inc/apijson.php',
        name: 'TV-神马云',
        detail: 'https://api.1080zyku.com'
    },
    api_33: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: 'TV-索尼资源',
        detail: ''
    },
    api_34: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: 'TV-红牛资源',
        detail: 'https://www.hongniuzy2.com'
    },
    api_35: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: 'TV-茅台资源',
        detail: 'https://caiji.maotaizy.cc'
    },
    api_36: {
        api: 'https://www.huyaapi.com/api.php/provide/vod',
        name: 'TV-虎牙资源',
        detail: 'https://www.huyaapi.com'
    },
    api_37: {
        api: 'https://caiji.dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源-2',
        detail: 'https://caiji.dbzy.tv'
    },
    api_38: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: 'TV-豆瓣资源',
        detail: 'https://dbzy.tv'
    },
    api_39: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: 'TV-豪华资源',
        detail снова: 'https://hhzyapi.com'
    },
    api_40: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: 'TV-速博资源',
        detail: ''
    },
    api_41: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: 'TV-量子资源',
        detail: ''
    },
    api_42: {
        api: 'https://jinyingzy.com/api.php/provide/vod',
        name: 'TV-金鹰点播',
        detail: 'https://jinyingzy.com'
    },
    api_43: {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: 'TV-金鹰资源',
        detail: 'https://jyzyapi.com'
    },
    api_44: {
        api: 'https://sdzyapi.com/api.php/provide/vod',
        name: 'TV-閃電资源',
        detail: 'https://sdzyapi.com'
    },
    api_45: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod',
        name: 'TV-非凡资源',
        detail: 'https://cj.ffzyapi.com'
    },
    api_46: {
        api: 'https://p2100.net/api.php/provide/vod',
        name: 'TV-飘零资源',
        detail: 'https://p2100.net'
    },
    api_47: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: 'TV-魔爪资源',
        detail: 'https://mozhuazy.com'
    },
    api_48: {
        api: 'https://caiji.moduapi.cc/api.php/provide/vod',
        name: 'TV-魔都动漫',
        detail: 'https://caiji.moduapi.cc'
    },
    api_49: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: 'TV-魔都资源',
        detail: 'https://www.mdzyapi.com'
    },
    api_50: {
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
        name: 'TV-黑木耳',
        detail: 'https://json.heimuer.xyz'
    },
    api_51: {
        api: 'https://json02.heimuer.xyz/api.php/provide/vod',
        name: 'TV-黑木耳点播',
        detail: 'https://json02.heimuer.xyz'
    },
    api_52: {
        api: 'https://91md.me/api.php/provide/vod',
        name: '91麻豆',
        detail: 'https://91md.me',
        adult: true
    },
    api_53: {
        api: 'http://lbapiby.com/api.php/provide/vod',
        name: 'AIvin',
        detail: ''
    },
    api_54: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'JKUN资源',
        detail: 'https://jkunzyapi.com',
        adult: true
    },
    api_55: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souav资源',
        detail: 'https://api.souavzy.vip',
        adult: true
    },
    api_56: {
        api: 'https://lbapi9.com/api.php/provide/vod',
        name: '乐播资源',
        detail: ''
    },
    api_57: {
        api: 'https://aosikazy.com/api.php/provide/vod',
        name: '奥斯卡资源',
        detail: 'https://aosikazy.com'
    },
    api_58: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: '奶香香',
        detail: 'https://Naixxzy.com',
        adult: true
    },
    api_59: {
        api: 'https://slapibf.com/api.php/provide/vod',
        name: 'TV-森林资源',
        detail: 'https://slapibf.com'
    },
    api_60: {
        api: 'https://www.xrbsp.com/api/json.php',
        name: 'TV-水机资源',
        detail: 'https://www.xrbsp.com',
        adult: true
    },
    api_61: {
        api: 'https://apiyutu.com/api.php/provide/vod',
        name: 'TV-玉兔资源',
        detail: 'https://apiyutu.com',
        adult: true
    },
    api_62: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: 'TV-番号资源',
        detail: '',
        adult: true
    },
    api_63: {
        api: 'https://www.kxgav.com/api/json.php',
        name: 'TV-白嫖资源',
        detail: 'https://www.kxgav.com',
        adult: true
    },
    api_64: {
        api: 'https://www.jingpinx.com/api.php/provide/vod',
        name: 'TV-精品资源',
        detail: 'https://www.jingpinx.com'
    },
    api_65: {
        api: 'https Положение: 'https://www.msnii.com/api/json.php',
        name: 'TV-美少女资源',
        detail: 'https://www.msnii.com',
        adult: true
    },
    api_66: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'TV-老色逼资源',
        detail: 'https://apilsbzy1.com',
        adult: true
    },
    api_67: {
        api: 'https://api.sexnguon.com/api.php/provide/vod',
        name: 'TV-色南国',
        detail: 'https://api.sexnguon.com',
        adult: true
    },
    api_68: {
        api: 'https://api.maozyapi.com/inc/apijson_vod.php',
        name: 'TV-色猫资源',
        detail: 'https://api.maozyapi.com',
        adult: true
    },
    api_69: {
        api: 'https://apilj.com/api.php/provide/vod',
        name: 'TV-成人资源',
        detail: 'https://apilj.com',
        adult: true
    },
    api_70: {
        api: 'https://www.gdlsp.com/api/json.php',
        name: 'TV-香奶儿资源',
        detail: 'https://www.gdlsp.com',
        adult: true
    },
    api_71: {
        api: 'https://shayuapi.com/api.php/provide/vod',
        name: 'TV-鲨鱼资源',
        detail: 'https://shayuapi.com'
    },
    api_72: {
        api: 'https://www.pgxdy.com/api/json.php',
        name: 'TV-黄资源',
        detail: 'https://www.pgxdy.com',
        adult: true
    },
    ffzynew: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视new',
        detail: 'http://ffzy5.tv'
    },
    kauiboziyuan: {
        api: 'https://gayapi.com/api.php/provide/vod',
        name: '快播资源网站',
        detail: '',
        adult: true
    },
    xingbaziyuan: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '杏吧资源',
        detail: '',
        adult: true
    },
    aiduanjucc: {
        api: 'https://www.aiduanju.cc/',
        name: '爱短剧.cc',
        detail: ''
    },
    huaweiba: {
        api: 'https://huawei8.live/api.php/provide/vod',
        name: '华为吧资源',
        detail: ''
    },
    taopian: {
        api: 'https://taopianapi.com/cjapi/sda/vod',
        name: '淘片资源',
        detail: ''
    },
    hongniuziyuan: {
        api: 'https://www.hongniuzy3.com/api.php/provide/vod',
        name: '红牛资源',
        detail: ''
    },
    suonisandian: {
        api: 'https://xsd.sdzyapi.com/api.php/provide/vod',
        name: '索尼-闪电资源',
        detail: ''
    },
    fengchao: {
        api: 'https://api.fczy888.me/api.php/provide/vod',
        name: '蜂巢片库',
        detail: ''
    },
    jinmaziyuan2: {
        api: 'https://api.jmzy.com/api.php/provide/vod',
        name: '金马资源网',
        detail: ''
    },
    dadiziy: {
        api: 'https://dadiapi.com/api.php/provide/vod',
        name: '大地资源网络',
        detail: ''
    },
    huangseziy: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
        detail: '',
        adult: true
    },
    xiaojiziy: {
        api: 'https://api.xiaojizy.live/provide/vod',
        name: '小鸡资源',
        detail: ''
    },
    kauicheziyuan: {
        api: 'https://caiji.kuaichezy.org/api.php/provide',
        name: '快车资源阿',
        detail: ''
    },
    lajiaoziyu: {
        api: 'https://apilj.com/api.php/provide',
        name: '辣椒资源黄黄',
        detail: '',
        adult: true
    },
    youzhidianying: {
        api: 'https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod',
        name: '优质资源库1080zyk6.com高清',
        detail: ''
    },
    xibaocaiji: {
        api: 'https://www.xxibaozyw.com/api.php/provide/vod',
        name: '细胞采集黄色',
        detail: '',
        adult: true
    },
    qiqidys: {
        api: 'https://www.qiqidys.com/api.php/provide/vod/',
        name: '七七影视',
        detail: ''
    },
    yingshigongchang: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '影视工厂',
        detail: ''
    },
    fantuanyingshi: {
        api: 'https://www.fantuan.tv/api.php/provide/vod/',
        name: '饭团影视',
        detail: ''


    },
    haiyang: {
        api: 'https://haiyangzy.com/api.php/provide/vod/',
        name: '海洋资源',
        detail: ''
    },
    hongniu: {
        api: 'https://www.hongniuzy.com/api.php/provide/vod/',
        name: '红牛资源',
        detail: ''
    },
    jinniu: {
        api: 'http://api.jinniuyun.com/api.php/provide/vod/',
        name: '金牛资源',
        detail: ''
    },
    kuyun: {
        api: 'https://kuyunzy.co/api.php/provide/vod/',
        name: '酷云资源

',
        detail: ''
    },
    leiying: {
        api: 'https://leiyingzy.com/api.php/provide/vod/',
        name: '雷鹰资源',
        detail: ''
    },
    shenma: {
        api: 'https://smzy.com/api.php/provide/vod/',
        name: '神马资源',
        detail: ''
    },
    tiankong: {
        api: 'https://api.tiankongapi.com/api.php/provide/vod/',
        name: '天空资源',
        detail: ''
    },
    wukong: {
        api: 'https://wukongzy.com/api.php/provide/vod/',
        name: '悟空资源',
        detail: ''
    },
    xiangjiao: {
        api: 'https://xjzy.com/api.php/provide/vod/',
        name: '香蕉资源',
        detail: ''
    },
    yatu: {
        api: 'https://yatuzy.com/api.php/provide/vod/',
        name: '雅

图资源',
        detail: ''
    },
    yjys: {
        api: 'https://api.yjys.me/api.php/provide/vod/',
        name: '影剧影视',
        detail: ''
    },
    yongjiu: {
        api: 'https://yongjiuzy.com/api.php/provide/vod/',
        name: '永久资源',
        detail: ''
    },
    zhiling: {
        api: 'https://zhilingzy.com/api.php/provide/vod/',
        name: '指凌资源',
        detail: ''
    },
    ziyuan: {
        api: 'http://www.zyz.com/api.php/provide/vod/',
        name: '资源站',
        detail: ''
    },
    agzy: {
        api: 'https://agzy.com/api.php/provide/vod',
        name: '爱看资源',
        detail: ''
    },
    bajie: {
        api: 'http://zy.bajieziyuan.com/api.php/provide/vod',
        name: '八戒资源',
        detail: ''
    },
    baozou: {
        api: 'http://www.baozouzy.com/api.php/provide/vod',
        name: '暴走资源',
        detail: ''
    },
    chaofan: {
        api: 'https://cfzy.com/api.php/provide/vod',
        name: '超凡资源',
        detail: ''
    },
    dianbo: {
        api: 'http://api.dbzyz.com/api.php/provide/vod',
        name: '点播资源',
        detail: ''
    },
    feisu: {
        api: 'https://www.feisuzy.com/api.php/provide/vod',
        name: '飞速资源',
        detail: ''
    },
    fuhuo: {
        api: 'http://fuhuoyun.com/api.php/provide/vod',
        name: '复活云',
        detail: ''
    },
    gaoqing: {
        api: 'https://gaoqingzy.com/api.php/provide/vod',
        name: '高清资源',
        detail: ''
    },
    huangjin: {
        api: 'http://hjzy.com/api.php/provide/vod',
        name: '黄金资源',
        detail: ''
    },
    huohua: {
        api: 'https://huohuazy.com/api.php/provide/vod',
        name: '火花资源',
        detail: ''
    },
    juhai: {
        api: 'http://juhai.com/api.php/provide/vod',
        name: '聚海资源',
        detail: ''
    },
    kankan: {
        api: 'http://kankanzy.com/api.php/provide/vod',
        name: '看看资源',
        detail: ''
    },
    laoya: {
        api: 'http://laoyazy.com/api.php/provide/vod',
        name: '老鸭资源',
        detail: ''
    },
    longma: {
        api: 'http://longmazy.com/api.php/provide/vod',
        name: '龙马资源',
        detail: ''
    },
    niuren: {
        api: 'http://www.niurenzy.com/api.php/provide/vod',
        name: '牛人资源',
        detail: ''
    },
    ouye: {
        api: 'http://ouye.com/api.php/provide/vod',
        name: '欧耶资源',
        detail: ''
    },
    piaohua: {
        api: 'http://www.piaohuazy.com/api.php/provide/vod',
        name: '飘花资源',
        detail: ''
    },
    qiezi: {
        api: 'http://qiezi.com/api.php/provide/vod',
        name: '茄子资源',
        detail: ''
    },
    quanmin: {
        api: 'http://quanmin.com/api.php/provide/vod',
        name: '全民资源',
        detail: ''
    },
    sanjiu: {
        api: 'http://39zy.com/api.php/provide/vod',
        name: '39资源',
        detail: ''
    },
    shenlan: {
        api: 'http://shenlan.com/api.php/provide/vod',
        name: '深蓝资源',
        detail: ''
    },
    shier: {
        api: 'http://123.com/api.php/provide/vod',
        name: '123资源',
        detail: ''
    },
    tianyi: {
        api: 'http://tianyi.com/api.php/provide/vod',
        name: '天翼资源',
        detail: ''
    },
    tudou: {
        api: 'http://tudou.com/api.php/provide/vod',
        name: '土豆资源',
        detail: ''
    },
    wanbo: {
        api: 'http://wanbo.com/api.php/provide/vod',
        name: '万播资源',
        detail: ''
    },
    xianggang: {
        api: 'http://xianggang.com/api.php/provide/vod',
        name: '香港资源',
        detail: ''
    },
    xiaoyao: {
        api: 'http://xiaoyao.com/api.php/provide/vod',
        name: '逍遥资源',
        detail: ''
    },
    xingfu: {
        api: 'http://xingfu.com/api.php/provide/vod',
        name: '幸福资源',
        detail: ''
    },
    xingyun: {
        api: 'http://xingyun.com/api.php/provide/vod',
        name: '星云资源',
        detail: ''
    },
    xunlei: {
        api: 'http://xunlei.com/api.php/provide/vod',
        name: '迅雷资源',
        detail: ''
    },
    yingshi: {
        api: 'http://yingshi.com/api.php/provide/vod',
        name: '影视资源',
        detail: ''
    },
    yingxiong: {
        api: 'http://yingxiong.com/api.php/provide/vod',
        name: '英雄资源',
        detail: ''
    },
    yizhou: {
        api: ' tape://yizhou.com/api.php/provide/vod',
        name: '一舟资源',
        detail: ''
    },
    youku: {
        api: 'http://youku.com/api.php/provide/vod',
        name: '优酷资源',
        detail: ''
    },
    youlong: {
        api: 'http://youlong.com/api.php/provide/vod',
        name: '游龙资源',
        detail: ''
    },
    baiwan: {
        api: 'https://www.baiwanzy.com/api.php/provide/vod',
        name: '百万资源',
        detail: ''
    },
    guanngsu: {
        api: 'http://guangsu.com/api.php/provide/vod',
        name: '光速资源',
        detail: ''
    },
    huoyan: {
 Pure: 'https://huoyan.com/api.php/provide/vod',
        name: '火焰资源',
        detail: ''
    },
    jiguang: {
        api: 'https://jiguang.com/api.php/provide/vod',
        name: '极光资源',
        detail: ''
    },
    jinpai: {
        api: 'http://jinpai.com/api.php/provide/vod',
        name: '金牌资源',
        detail: ''
    },
    jisuda: {
        api: 'http://jisuda.com/api.php/provide/vod',
        name: '极速达资源',
        detail: ''
    },
    jiujiuliu: {
        api: 'http://996.com/api.php/provide/vod',
        name: '996资源',
        detail: ''
    },
    lanbo: {
        api: 'http://lanbo.com/api.php/provide/vod',
        name: '蓝波资源',
        detail: ''
    },
    lanniao: {
        api: 'http://lanniao.com/api.php/provide/vod',
        name: '蓝鸟资源',
        detail: ''
    },
    mantian: {
        api: 'http://mantian.com/api.php/provide/vod',
        name: '满天星资源',
        detail: ''
    },
    miaobo: {
        api: 'https://miaobo.com/api.php/provide/vod',
        name: '秒播资源',
        detail: ''
    },
    qimao: {
        api: 'http://qimao.com/api.php/provide/vod',
        name: '奇猫资源',
        detail: ''
    },
    qiyiguang: {
        api: 'https://qiyiguang.com/api.php/provide/vod',
        name: '奇艺光资源',
        detail: ''
    },
    rihan: {
        api: 'http://rihan.com/api.php/provide/vod',
        name: '日韩资源',
        detail: ''
    },
    ronghua: {
        api: 'https://ronghua.com/api.php/provide/vod',
        name: '荣华资源',
        detail: ''
    },
    sijiu: {
        api: 'http://49zy.com/api.php/provide/vod',
        name: '49资源',
        detail: ''
    },
    suku: {
        api: 'http://suku.com/api.php/provide/vod',
        name: '速酷资源',
        detail: ''
    },
    wawa: {
        api: 'http://wawa.com/api.php/provide/vod',
        name: '哇哇资源',
        detail: ''
    },
    weidu: {
        api: 'https://weidu.com/api.php/provide/vod',
        name: '维度资源',
        detail: ''
    },
    hongniu_m3u8: {
        api: 'http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8',
        name: '紅牛資源',
        detail: ''
    },
    lzi_m3u8: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8',
        name: '量子資源',
        detail: ''
    },
    kaifang: {
        api: 'http://vod-demo.onrender.com/pubdovod.php',
        name: '開放電影',
        detail: ''
    },
    '39kan': {
        api: 'http://39kan.com/api.php/provide/vod',
        name: '39影視',
        detail: ''
    },
    vipmv: {
        api: 'http://vipmv.cc/api.php/provide/vod',
        name: '天堂资源',
        detail: ''
    },
    lehootv: {
        api: 'http://lehootv.com/api.php/provide/vod',
        name: '乐活影视',
        detail: ''
    },
    tangrenjie: {
        api: 'http://tangrenjie.tv/api.php/provide/vod',
        name: '唐人街',
        detail: ''
    },
    kuapi: {
        api: 'http://api.kuapi.cc/api.php/provide/vod',
        name: '酷อย่าง点资源',
        detail: ''
    },
    kudian10: {
        api: 'http://kudian10.com/api.php/provide/vod',
        name: '酷点资源',
        detail: ''
    },
    ykapi: {
        api: 'http://api.ykapi.net/api.php/provide/vod',
        name: '影库资源网',
        detail: ''
    },
    kczyapi: {
        api: 'http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8',
        name: '快车资源',
        detail: ''
    },
    apittzy: {
        api: 'http://apittzy.com/api.php/provide/vod',
        name: '探探资源',
        detail: ''
    },
    jyzyapi_m3u8: {
        api: 'http://jyzyapi.com/provide/vod/from/jinyingm3u8',
        name: '金鹰资源',
        detail: ''
    },
    guangsu_m3u8: {
        api: 'http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8',
        name: '光速资源',
        detail: ''
    },
    lovedan: {
        api: 'http://lovedan.net/api.php/provide/vod',
        name: '艾旦影视',
        detail: ''
    },
    zzrhgg: {
        api: 'http://www.zzrhgg.com/api.php/provide/vod',
        name: '飘花电影',
        detail: ''
    },
    prinevillesda: {
        api: 'http://prinevillesda.org/api.php/provide/vod',
        name: '网民电影',
        detail: ''
    },
    siwazyw: {
        api: 'https://siwazyw.cc/api.php/provide/vod',
        name: '丝袜资源',
        detail: '',
        adult: true
    },
    tiankong_m3u8: {
        api: 'https://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8',
        name: '天空資源',
        detail: ''
    },
    haiwaikan: {
        api: 'https://haiwaikan.com/api.php/provide/vod',
        name: '海外看資源',
        detail: ''
    },
    xiaomaomi_xml: {
        api: 'http://zy.xiaomaomi.cc/api.php/provide/vod/at/xml',
        name: '小猫咪(官)',
        detail: ''
    },
    foxzyapi: {
        api: 'https://api.foxzyapi.com/api.php/provide/vod/at/xml',
        name: 'FOX资源(切)',
        detail: ''
    },
    yikanapi: {
        api: 'https://api.yikanapi.com/api.php/provide/vod/at/xml',
        name: '易看资源(切)',
        detail: ''
    },
    ylzy1: {
        api: 'https://api.ylzy1.com/api.php/provide/vod/at/xml',
        name: '鱼乐资源(切)',
        detail: ''
    },
    hanjuzy: {
        api: 'http://www.hanjuzy.com/inc/api.php',
        name: '韩剧资源(切)',
        detail: ''
    },
    '77hanju': {
        api: 'https://www.77hanju.com/api.php/provide/vod/at/xml',
        name: '77韩剧(切)',
        detail: ''
    },
    ff9: {
        api: 'https://www.ff9.top/api.php/provide/vod/at/xml',
        name: 'FF9资源(切)',
        detail: ''
    },
    rrvipw: {
        api: 'https://www.rrvipw.com/api.php/provide/vod/at/xml',
        name: '789盘(优)',
        detail: ''
    },
    longteng: {
        api: 'http://175.178.7.35:2020/api.php/provide/vod/at/xml',
        name: '龙腾资源(优)',
        detail: ''
    },
    inmi: {
        api: 'https://www.inmi.app/api.php/provide/vod/at/xml',
        name: '映迷(优)',
        detail: ''
    },
    vodimg: {
        api: 'https://cj.vodimg.top/api.php/provide/vod/at/xml',
        name: '影图(聚)',
        detail: ''
    },
    '7en7': {
        api: 'http://app.7en7.com/api.php/provide/vod/at/xml',
        name: '瞬间影视(聚)',
        detail: ''
    },
    '30dian': {
        api: 'https://www.30dian.cn/api.php/provide/vod/at/xml',
        name: '创艺影视(聚)',
        detail: ''
    },
    aliys: {
        api: 'http://aliys.cn:90/api.php/provide/vod/at/xml',
        name: '阿里影视(聚)',
        detail: ''
    },
    mgzyz1: {
        api: 'https://mgzyz1.com/api.php/provide/vod/at/xml',
        name: '芒果资源',
        detail: ''
    },
    huakuiapi: {
        api: 'https://caiji.huakuiapi.com/inc/api.php',
        name: '花魁资源',
        detail: ''
    },
    putaozy: {
        api: 'https://api.putaozy.net/inc/api.php',
        name: '葡萄资源',
        detail: ''
    },
    sewozyapi: {
        api: 'https://sewozyapi.com/api.php/provide/vod/at/xml',
        name: '色窝资源',
        detail: '',
        adult: true
    },
    hghhh: {
        api: 'https://hghhh.com/api.php/provide/vod/at/xml',
        name: '皇冠资源',
        detail: ''
    },
    caiji21: {
        api: 'http://www.caiji21.com/home/cjapi/klkl/mc10/vod/xml',
        name: '我要啪啪',
        detail: '',
        adult: true
    },
    caiji22: {
        api: 'https://www.caiji22.com/home/cjapi/klp0/mc10/vod/xml',
        name: 'AV集中淫',
        detail: '',
        adult: true
    },
    caiji23: {
        api: 'https://www.caiji23.com/home/cjapi/kls6/mc10/vod/xml',
        name: '夜夜撸资源',
        detail: '',
        adult: true
    },
    caiji24: {
        api: 'http://www.caiji24.com/home/cjapi/p0d2/mc10/vod/xml',
        name: '大屌丝资源',
        detail: '',
        adult: true
    },
    caiji25: {
        api: 'http://www.caiji25.com/home/cjapi/p0as/mc10/vod/xml',
        name: '咪咪资源',
        detail: '',
        adult: true
    },
    caiji26: {
        api: 'http://caiji26.com/home/cjapi/p0g8/mc10/vod/xml',
        name: '鲍鱼AV',
        detail: '',
        adult: true
    },
    jgczyapi: {
        api: 'https://jgczyapi.com/home/cjapi/kld2/mc10/vod/xml',
        name: '精工厂资源',
        detail: '',
        adult: true
    },
    xx55zyapi: {
        api: 'https://xx55zyapi.com/home/cjapi/ascf/mc10/vod/xml',
        name: '点点娱乐',
        detail: ''
    },
    dmmapi: {
        api: 'https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod/xml',
        name: '大MM资源',
        detail: '',
        adult: true
    },
    caiji10: {
        api: 'https://www.caiji10.com/home/cjapi/cfs6/mc10/vod/xml',
        name: '黄瓜TV资源',
        detail: '',
        adult: true
    },
    caiji09: {
        api: 'https://www.caiji09.com/home/cjapi/cfp0/mc10/vod/xml',
        name: '快播盒子资源',
        detail: '',
        adult: true
    },
    caiji08: {
        api: 'https://www.caiji08.com/home/cjapi/cfkl/mc10/vod/xml',
        name: '大香蕉资源',
        detail: '',
        adult: true
    },
    caiji07: {
        api: 'https://www.caiji07.com/home/cjapi/cfcf/mc10/vod/xml',
        name: '日本AV在线',
        detail: '',
        adult: true
    },
    caiji06: {
        api: 'https://www.caiji06.com/home/cjapi/cfbb/mc10/vod/xml',
        name: '久久热在线',
        detail: '',
        adult: true
    },
    caiji05: {
        api: 'https://www.caiji05.com/home/cjapi/cfda/mc10/vod/xml',
        name: '青青草视频',
        detail: '',
        adult: true
    },
    caiji04: {
        api: 'https://www.caiji04.com/home/cjapi/cfc7/mc10/vod/xml',
        name: '麻豆视频',
        detail: '',
        adult: true
    },
    caiji03: {
        api: 'https://www.caiji03.com/home/cjapi/cfg8/mc10/vod/xml',
        name: '一本道资源',
        detail: '',
        adult: true
    },
    caiji02: {
        api: 'https://www.caiji02.com/home/cjapi/cfas/mc10/vod/xml',
        name: '草榴视频',
        detail: '',
        adult: true
    },
    caiji01: {
        api: 'https://www.caiji01.com/home/cjapi/cfd2/mc10/vod/xml',
        name: '亚洲成人在线',
        detail: '',
        adult: true
    },
    '99zy': {
        api: 'http://99zy.pw/api.php/provide/vod/at/xml',
        name: '99资源',
        detail: ''
    },
    '888dav': {
        api: 'https://www.888dav.com/api.php/provide/vod/at/xml',
        name: '抖阴视频',
        detail: '',
        adult: true
    },
    '156_249_29_8': {
        api: 'https://156.249.29.8/inc/api.php',
        name: '蛋蛋视频',
        detail: '',
        adult: true
    },
    msnii_xml: {
        api: 'https://www.msnii.com/api/xml.php',
        name: '美少女资源',
        detail: '',
        adult: true
    },
    xrbsp_xml: {
        api: 'https://www.xrbsp.com/api/xml.php',
        name: '淫水机资源',
        detail: '',
        adult: true
    },
    gdlsp_xml: {
        api: 'https://www.gdlsp.com/api/xml.php',
        name: '香奶儿资源',
        detail: '',
        adult: true
    },
    kxgav_xml: {
        api: 'https://www.kxgav.com/api/xml.php',
        name: '白嫖资源',
        detail: '',
        adult: true
    },
    afasu: {
        api: 'https://www.afasu.com/api/xml.php',
        name: '小湿妹资源',
        detail: '',
        adult: true
    },
    pgxdy_xml: {
        api: 'https://www.pgxdy.com/api/xml.php',
        name: '黄AV资源',
        detail: '',
        adult: true
    },
    feifei67: {
        api: 'http://www.feifei67.com/api.php/provide/vod/at/xml',
        name: 'CK资源',
        detail: '',
        adult: true
    },
    apilyzy_xml: {
        api: 'https://api.apilyzy.com/api.php/provide/vod/at/xml',
        name: '老鸭资源',
        detail: ''
    },
    apihjzy: {
        api: 'https://apihjzy.com/api.php/provide/vod',
        name: '花椒资源',
        detail: ''
    },
    bttcj: {
        api: 'http://bttcj.com/inc/sapi.php',
        name: '博天堂',
        detail: ''
    },
    secj8: {
        api: 'http://secj8.com/inc/sapi.php',
        name: '色色资源',
        detail: '',
        adult: true
    },
    jcspcj8: {
        api: 'http://jcspcj8.com/api',
        name: '久草资源',
        detail: '',
        adult: true
    },
    cjmygzy: {
        api: 'http://cjmygzy.com/inc/sapi.php',
        name: '狼少年',
        detail: ''
    },
    f2dcj6: {
        api: 'http://f2dcj6.com/sapi',
        name: '富二代资源',
        detail: '',
        adult: true
    },
    zmcj88: {
        api: 'http://zmcj88.com/sapi',
        name: '字幕网',
        detail: ''
    },
    llzxcj: {
        api: 'http://llzxcj.com/inc/sck.php',
        name: '利来资源',
        detail: ''
    },
    wmcj8: {
        api: 'http://wmcj8.com/inc/sapi.php',
        name: '环亚资源',
        detail: ''
    },
    caiji523: {
        api: 'https://caiji.523zyw.com/inc/apijson_vod.php',
        name: '523资源',
        detail: ''
    },
    leyuzyapi: {
        api: 'https://www.leyuzyapi.com/inc/apijson_vod.php',
        name: '乐鱼资源',
        detail: ''
    },
    yinwoapi: {
        api: 'https://api.yinwoapi.com/api.php/provide/vod/',
        name: '淫窝资源',
        detail: '',
        adult: true
    },
    '4000zy': {
        api: 'https://www.4000zy.com/inc/apijson_vod.php',
        name: '4000资源',
        detail: ''
    },
    sdszyapi: {
        api: 'http://sdszyapi.com/home/cjapi/asbb/mc10/vod/xml',
        name: '色屌丝资源',
        detail: '',
        adult: true
    },
    xjjzyapi: {
        api: 'https://xjjzyapi.com/home/cjapi/askl/mc10/vod/xml',
        name: '小姐姐资源',
        detail: '',
        adult: true
    },
    '52zyapi': {
        api: 'https://52zyapi.com/home/cjapi/asda/mc10/vod/xml',
        name: '52AVAV',
        detail: '',
        adult: true
    },
    caomeiapi: {
        api: 'https://caiji.caomeiapi.com/inc/apijson_vod.php',
        name: '草莓资源',
        detail: '',
        adult: true
    },
    aikanzyz9: {
        api: 'http://www.aikanzyz9.com/inc/apijson_vod.php',
        name: '爱看资源',
        detail: ''
    },
    '91av': {
        api: 'https://91av.cyou/api.php/provide/vod/',
        name: '91视频',
        detail: '',
        adult: true
    },
    tmav: {
        api: 'https://tmav.art/api.php/provide/vod/',
        name: '天美AV',
        detail: '',
        adult: true
    },
    sezy: {
        api: 'https://sezy.website/api.php/provide/vod/',
        name: '色资源',
        detail: '',
        adult: true
    },
    xxavs: {
        api: 'https://xxavs.com/api.php/provide/vod/',
        name: '湿乐园',
        detail: '',
        adult: true
    },
    uezy: {
        api: 'https://a.uezy.pw/api.php/provide/vod/',
        name: '优异资源',
        detail: ''
    },
    yszy02: {
        api: 'https://www.yszy02.com/api.php/provide/vod/',
        name: '夜色资源',
        detail: '',
        adult: true
    },
    hdys2: {
        api: 'https://hdys2.com/api.php/provide/vod/',
        name: '花都影视',
        detail: ''
    },
    lyhapi: {
        api: 'https://api.lyhapi.com/api.php/provide/vod/',
        name: '狼友会资源',
        detail: '',
        adult: true
    },
    yinlong: {
        api: 'https://yinlong.tv/api.php/provide/vod/at/xml/',
        name: '银龙资源',
        detail: ''
    },
    naichaapi: {
        api: 'https://caiji.naichaapi.com/inc/api.php',
        name: '奶茶资源',
        detail: ''
    },
    madouse: {
        api: 'http://www.madouse.la/api.php/provide/vod/',
        name: '麻豆视频2',
        detail: '',
        adult: true
    },
    '010aizy': {
        api: 'http://www.010aizy.com/API/macs.php',
        name: '010爱资源',
        detail: ''
    },
    javcaptain: {
        api: 'https://javcaptain.com/api.php/provide/vod/',
        name: '痴汉队长',
        detail: '',
        adult: true
    },
    aicaozy: {
        api: 'https://aicaozy.com/api.php/provide/vod/',
        name: '爱操资源',
        detail: '',
        adult: true
    },
    langchaozy6: {
        api: 'http://langchaozy6.com/api.php/provide/vod/',
        name: '浪潮资源',
        detail: ''
    },
    suboapi: {
        api: 'https://api.suboapi.com/api.php/provide/vod/',
        name: '速播资源',
        detail: ''
    },
    kudouzy: {
        api: 'https://kudouzy.com/api.php/provide/vod/',
        name: '酷豆资源',
        detail: ''
    },
    kdapi: {
        api: 'https://api.kdapi.info/api.php/provide/vod/',
        name: '酷豆2',
        detail: ''
    },
    kudian70: {
        api: 'https://api.kudian70.com/api.php/provide/vod/',
        name: '酷伦理',
        detail: '',
        adult: true
    },
    wanying4: {
        api: 'https://wanying4.com/api.php/provide/vod/',
        name: '万影色',
        detail: '',
        adult: true
    },
    apiabzy: {
        api: 'https://cj.apiabzy.com/api.php/provide/vod/',
        name: '爱播资源',
        detail: ''
    },
    jializyzapi: {
        api: 'http://www.jializyzapi.com/api.php/provide/vod/',
        name: '佳丽资源',
        detail: ''
    },
    '7777688': {
        api: 'http://m.7777688.com/inc/apijson.php',
        name: 'AVZY6888资源',
        detail: '',
        adult: true
    },
    fenwe_18av: {
        api: 'http://www.fenwe.tk:5700/vod?rule=18av&ext=txt/js/18/18av.js',
        name: '18av(道长)',
        detail: '',
        adult: true
    },
    fenwe_banan: {
        api: 'http://www.fenwe.tk:5700/vod?rule=banan&ext=txt/js/18/banan.js',
        name: 'banan(道长)',
        detail: '',
        adult: true
    },
    fenwe_missav: {
        api: 'http://www.fenwe.tk:5700/vod?rule=Missav&ext=txt/js/18/Missav.js',
        name: 'Missav(道长)',
        detail: '',
        adult: true
    },
    fenwe_yangduan: {
        api: 'http://www.fenwe.tk:5700/vod?rule=养端&ext=txt/js/18/养端.js',
        name: '养端(道长)',
        detail: '',
        adult: true
    },
    fenwe_zhuguli: {
        api: 'http://www.fenwe.tk:5700/vod?rule=朱古力&ext=txt/js/18/朱古力.js',
        name: '朱古力(道长)',
        detail: '',
        adult: true
    },
    fenwe_wanou: {
        api: 'http://www.fenwe.tk:5700/vod?rule=玩偶姐姐&ext=txt/js/18/玩偶姐姐.js',
        name: '玩偶姐姐(道长)',
        detail: '',
        adult: true
    },
    mdm3u8: {
       opio: 'https://91md.me/api.php/provide/vod/from/mdm3u8/',
        name: '91麻豆',
        detail: '',
        adult: true
    },
    cmzy: {
        api: 'https://cmzy.top/api.php/provide/vod',
        name: '草帽',
        detail: ''
    },
    '51smt4': {
        api: 'http://51smt4.xyz/api.php/provide/vod/',
        name: '水蜜桃',
        detail: '',
        adult: true
    },
    xiuseapi: {
        api: 'https://api.xiuseapi.com/api.php/provide/vod/at/xml',
        name: '秀色资源',
        detail: '',
        adult: true
    },
    haosezyw: {
        api: 'https://haosezyw.com/api.php/provide/vod/',
        name: '好色资源',
        detail: '',
        adult: true
    },
    zszyw: {
        api: 'https://zszyw.top/api.php/provide/vod/',
        name: '最色资源',
        detail: '',
        adult: true
    },
    zy018: {
        api: 'https://www.zy018.com/api.php/provide/vod/',
        name: '黄瓜资源',
        detail: '',
        adult: true
    },
    timizy10: {
        api: 'https://timizy10.cc/api.php/provide/vod/',
        name: '甜蜜资源',
        detail: ''
    },
    caoliuzyw: {
        api: 'https://www.caoliuzyw.com/api.php/prodao/vod/',
        name: '草榴资源',
        detail: '',
        adult: true
    },
    partnersky: {
        api耍: 'https://www.partnersky-horoskop.com/api.php/provide/vod/',
        name: '成人影视1',
        detail: '',
        adult: true
    },
    vodkok2: {
        api: 'https://api.vodkok2.com/api.php/provide/vod/',
        name: 'KOK资源',
        detail: ''
    },
    shabizy: {
        api: 'http://www.shabizy.com:777/inc/sea',
        name: '成人19',
        detail: '',
        adult: true
    },
    '106_52_244_241': {
        api: 'http://106.52.244.241:1234/api.php/app/',
        name: '分享者自用',
        detail: ''
    },
    fivezn: {
        api: 'https://fivezn.com/api.php/app/',
        name: '555',
        detail: ''
    },
    tvkuys: {
        api: 'https://www.tvkuys.xyz//api.php/app/',
        name: 'TV酷影视',
        detail: ''
    },
    vipwxys: {
        api: 'http://app.vipwxys.cn/mogai_api.php/v1.vod',
        name: '微笑TV',
        detail: ''
    },
    yingszj: {
        api: 'http://yingszj.xn--654a.cc/api.php/app/',
        name: '影视之家',
        detail: ''
    },
    songshu: {
        api: 'http://mf.songshu.cyou/api.php/app/',
        name: '柠檬影视',
        detail: ''
    },
    '91o': {
        api: 'https://www.91o.cc/api.php/v1.vod',
        name: '91影视',
        detail: ''
    },
    '9tian': {
        api: 'https://www.9tianqian.cc/api.php/app/',
        name: 'a8影视',
        detail: ''
    },
    zjtu: {
        api: 'https://www.zjtu.tv/api.php/app/',
        name: '追剧兔',
        detail: ''
    },
    damifi: {
        api: 'https://damifi.com/api.php/app/',
        name: '大米星球',
        detail: ''
    },
    '51bro': {
        api: 'https://ys.51bro.cn/mogai_api.php/v1.vod',
        name: '零刻影院',
        detail: ''
    },
    heli888: {
        api: 'https://www.heli888.cc/api.php/app/',
        name: '河狸影视',
        detail: ''
    },
    szyyds: {
        api: 'https://mas.szyyds.cn/api.php/app/',
        name: '小马影视',
        detail: ''
    },
    '134_175_219_46': {
        api: 'http://134.175.219.46/mogai_api.php/v1.vod',
        name: '银河影视',
        detail: ''
    },
    '4kgod6': {
        api: 'http://www.4kgod6.club/api.php/app/',
        name: '白菜影视',
        detail: ''
    },
    ajj001: {
        api: 'http://www.ajj001.top/api.php/app/',
        name: '老蟹电影',
        detail: ''
    },
    freeys: {
        api: 'https://www.freeys.cc/mogai_api.php/v1.vod',
        name: '自由影视',
        detail: ''
    },
    yy365: {
        api: 'http://ysjtv.yy365.vip/api.php/app/',
        name: '4k_2影视',
        detail: ''
    },
    '69mj': {
        api: 'https://www.69mj.com/xgapp.php/v1/',
        name: '69美剧',
        detail: ''
    },
    feisubo: {
        apiics: 'https://www.feisubo.top/api.php/v1.vod',
        name: '飞速播影视',
        detail: ''
    },
    ttmja: {
        api: 'https://www.ttmja.com/api.php/app/',
        name: '天天影院',
        detail: ''
    },
    bczhuiju: {
        api: 'https://www.bczhuiju.com/api.php/v1.vod',
        name: '北川影视',
        detail: ''
    },
    '953365': {
        api: 'http://4k.953365.cn:8090/xgapp.php/v1/',
        name: '可可',
        detail: ''
    },
    shaozeyy: {
        api: 'https://yk.shaozeyy.com/api.php/app/',
        name: '少泽影客',
        detail: ''
    },
    xjqxz: {
        api: 'http://tipu.xjqxz.top//api.php/v2.vod',
        name: '聚焦影视',
        detail: ''
    },
    siguyy: {
        api: 'https://siguyy.cn/api.php/app/',
        name: '思古影视',
        detail: ''
    },
    haituu: {
        api: 'https://www.haituu.tv/api.php/v1.vod',
        name: '海兔影视',
        detail: ''
    },
 | '122_228_84_103': {
        api: 'http://122.228.84.103:5822/api.php/app/',
        name: '蚂蚁资源',
        detail: ''
    },
    '52dianying': {
        api: 'https://www.52dianying.top//api.php/app/',
        name: '我爱电影',
        detail: ''
    },
    heyiys1: {
        api: 'https://www.heyiys1.com:4433/api.php/app/',
        name: '何以影视',
        detail: ''
    },
    netfly: {
        api: 'https://www.netfly.tv//api.php/app/',
        name: '奈飞中文影视',
        detail: ''
    },
    xihauche: {
        api: 'https://tx.xihauche.cn/api.php/app/',
        name: '4k_1影视',
        detail: ''
    },
    qmjzys: {
        api: 'https://www.qmjzys.com/api.php/app/',
        name: '千梦影视',
        detail: ''
    },
    nnystv: {
        api: 'https://nnystv.cn/api.php/app/',
        name: '沐沐电影',
        detail: ''
    },
    nntv: {
        api: 'https://www.nntv.in/api.php/v1.vod',
        name: '奴娜影视',
        detail: ''
    },
    haitu: {
        api: 'http://www.haitu.xyz/api.php/v1.vod/',
        name: '海兔影院',
        detail: ''
    },
    adys: {
        api: 'https://adys.tv/xgapp.php/v1/',
        name: '爱迪影视',
        detail: ''
    },
    gqjiexi: {
        api: 'https://caiji gqjiexi.com/api.php/provide/vod',
        name: '搞起(直连)',
        detail: ''
    },
    tianmiapi: {
        api: 'https://tianmiapi.com/api.php/provide/vod',
        name: '甜蜜(直连)',
        detail: ''
    },
    vnzyz: {
        api: 'https://vnzyz.com/api.php/provide/vod',
        name: '越南(直连)',
        detail: ''
    },
    avre06: {
        api: 'https://www.avre06.com/api.php/proprovide/vod',
        name: '黄瓜(直连)',
        detail: '',
        adult: true
    },
    apisesehuzy: {
        api: 'https://apisesehuzy.com/api.php/provide/vod',
        name: '色虎(直连)',
        detail: '',
        adult: true
    },
    kuai: {
        api: 'https://kuaiavzy.com/api.php/provide/vod',
        name: '快av(FQ)',
        detail: '',
        adult: true
    },
    semaozy: {
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php',
        name: '色猫(FQ)',
        detail: '',
        adult: true
    },
    apilj_json: {
        api: 'https://apilj.com/api.php/provide/vod/at/json',
        name: '成人06',
        detail: '',
        adult: true
    },
    bajiecaiji: {
        api: 'http://cj.bajiecaiji.com/inc/bjm3u8.php',
        name: '八戒云',
        detail: ''
    },
    ahjiuman: {
        api: 'http://www.ahjiuman.com/api.php/provide/vod/at/json',
        name: '飘花',
        detail: ''
    },
    '911ysw': {
        api: 'https://www.911ysw.top/tianyi.php/provide/vod/',
        name: '天翼|点播',
        detail: ''
    },
    xzcjz

: {
        api: 'https://xzcjz.com/api.php/provide/vod/',
        name: '熊掌|点播',
        detail: ''
    },
    kuaikan: {
        api: 'https://kuaikan-api.com/api.php/provide/vod/from/kuaikanyun',
        name: '快看资源',
        detail: ''
    },
    kuaiyunzy: {
        api: 'https://www.kuaiyunzy.com/api.php/provide/vod/',
        name: '快云资源',
        detail: ''
    },
    xkanzy10: {
        api: 'https://xkanzy10.com/api.php/provide/vod/',
        name: '享看资源',
        detail: ''
    },
    '42_la': {
        api: 'https://www.42.la/api.php/provide/vod/',
        name: '42资源',
        detail: ''
    },
    leshizyapi: {
        api: 'https://leshizyapi.com/api.php/provide/vod/',
        name: '乐视资源',
        detail: ''
    },
    '82_156_40_118': {
        api: 'http://82.156.40.118:1234/api.php/provide/vod/',
        name: '至圣云',
        detail: ''
    },
    hw8: {
        api: 'https://hw8.live/api.php/provide/vod/',
        name: '华为吧|点播',
        detail: ''
    }
};
// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
