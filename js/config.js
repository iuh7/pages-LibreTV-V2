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
        detail: 'http://caiji.dyttzyapi.com', 
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    xiaomaomi: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小猫咪资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mozhua: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
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

    // 下面是资源失效率高的API源，不建议使用
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
        "api_3": {
            "name": "TV-360资源",
            "api": "https://360zy.com/api.php/provide/vod",
            "detail": "https://360zy.com"
        },
        "api_4": {
            "name": "TV-CK资源",
            "api": "https://ckzy.me/api.php/provide/vod",
            "detail": "https://ckzy.me"
        },
        "api_5": {
            "name": "TV-U酷资源",
            "api": "https://api.ukuapi.com/api.php/provide/vod",
            "detail": "https://api.ukuapi.com"
        },
        "api_6": {
            "name": "TV-U酷资源",
            "api": "https://api.ukuapi88.com/api.php/provide/vod",
            "detail": "https://api.ukuapi88.com"
        },
        "api_7": {
            "name": "TV-ikun资源",
            "api": "https://ikunzyapi.com/api.php/provide/vod",
            "detail": "https://ikunzyapi.com"
        },
        "api_8": {
            "name": "TV-wujinapi无尽",
            "api": "https://api.wujinapi.cc/api.php/provide/vod",
            "detail": ""
        },
        "api_9": {
            "name": "TV-丫丫点播",
            "api": "https://cj.yayazy.net/api.php/provide/vod",
            "detail": "https://cj.yayazy.net"
        },
        "api_10": {
            "name": "TV-光速资源",
            "api": "https://api.guangsuapi.com/api.php/provide/vod",
            "detail": "https://api.guangsuapi.com"
        },
        "api_11": {
            "name": "TV-卧龙点播",
            "api": "https://collect.wolongzyw.com/api.php/provide/vod",
            "detail": "https://collect.wolongzyw.com"
        },
        "api_12": {
            "name": "TV-卧龙资源",
            "api": "https://collect.wolongzy.cc/api.php/provide/vod",
            "detail": ""
        },
        "api_13": {
            "name": "TV-卧龙资源",
            "api": "https://wolongzyw.com/api.php/provide/vod",
            "detail": "https://wolongzyw.com"
        },
        "api_14": {
            "name": "TV-天涯资源",
            "api": "https://tyyszy.com/api.php/provide/vod",
            "detail": "https://tyyszy.com"
        },
        "api_15": {
            "name": "TV-如意资源",
            "api": "https://cj.rycjapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_16": {
            "name": "TV-小猫咪资源",
            "api": "https://zy.xmm.hk/api.php/provide/vod",
            "detail": "https://zy.xmm.hk"
        },
        "api_17": {
            "name": "TV-新浪点播",
            "api": "https://api.xinlangapi.com/xinlangapi.php/provide/vod",
            "detail": "https://api.xinlangapi.com"
        },
        "api_18": {
            "name": "TV-无尽资源",
            "api": "https://api.wujinapi.com/api.php/provide/vod",
            "detail": ""
       
     
        },
        "api_21": {
            "name": "TV-旺旺短剧",
            "api": "https://wwzy.tv/api.php/provide/vod",
            "detail": "https://wwzy.tv"
        
        },
        "api_23": {
            "name": "TV-暴风资源",
            "api": "https://bfzyapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_24": {
            "name": "TV-最大点播",
            "api": "http://zuidazy.me/api.php/provide/vod",
            "detail": "http://zuidazy.me"
     
        },
        "api_26": {
            "name": "TV-樱花资源",
            "api": "https://m3u8.apiyhzy.com/api.php/provide/vod",
            "detail": ""
        },
        "api_27": {
            "name": "TV-步步高资源",
            "api": "https://api.yparse.com/api/json",
            "detail": ""
        },
        "api_28": {
            "name": "TV-牛牛点播",
            "api": "https://api.niuniuzy.me/api.php/provide/vod",
            "detail": "https://api.niuniuzy.me"
        },
        "api_29": {
            "name": "TV-电影天堂资源",
            "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
            "detail": "http://caiji.dyttzyapi.com"
        },
        "api_30": {
            "name": "百万资源",
            "api": "https://api.bwzyz.com/api.php/provide/vod",
            "detail": "https://api.bwzyz.com"
        },
        "api_31": {
            "name": "TV-百度云资源",
            "api": "https://api.apibdzy.com/api.php/provide/vod",
            "detail": "https://api.apibdzy.com"
        },
        "api_32": {
            "name": "TV-神马云",
            "api": "https://api.1080zyku.com/inc/apijson.php",
            "detail": "https://api.1080zyku.com"
        },
        "api_33": {
            "name": "TV-索尼资源",
            "api": "https://suoniapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_34": {
            "name": "TV-红牛资源",
            "api": "https://www.hongniuzy2.com/api.php/provide/vod",
            "detail": "https://www.hongniuzy2.com"
        },
        "api_35": {
            "name": "TV-茅台资源",
            "api": "https://caiji.maotaizy.cc/api.php/provide/vod",
            "detail": "https://caiji.maotaizy.cc"
        },
        "api_36": {
            "name": "TV-虎牙资源",
            "api": "https://www.huyaapi.com/api.php/provide/vod",
            "detail": "https://www.huyaapi.com"
        },
        "api_37": {
            "name": "TV-豆瓣资源",
            "api": "https://caiji.dbzy.tv/api.php/provide/vod",
            "detail": "https://caiji.dbzy.tv"
       
        },
        "api_39": {
            "name": "TV-豪华资源",
            "api": "https://hhzyapi.com/api.php/provide/vod",
            "detail": "https://hhzyapi.com"
        },
        "api_40": {
            "name": "TV-速博资源",
            "api": "https://subocaiji.com/api.php/provide/vod",
            "detail": ""
        },
        "api_41": {
            "name": "TV-量子资源",
            "api": "https://cj.lziapi.com/api.php/provide/vod",
            "detail": ""
        },
        "api_42": {
            "name": "TV-金鹰点播",
            "api": "https://jinyingzy.com/api.php/provide/vod",
            "detail": "https://jinyingzy.com"
       
        },
        "api_44": {
            "name": "TV-閃電资源",
            "api": "https://sdzyapi.com/api.php/provide/vod",
            "detail": "https://sdzyapi.com"
        },
        "api_45": {
            "name": "TV-非凡资源",
            "api": "https://cj.ffzyapi.com/api.php/provide/vod",
            "detail": "https://cj.ffzyapi.com"
        },
        "api_46": {
            "name": "TV-飘零资源",
            "api": "https://p2100.net/api.php/provide/vod",
            "detail": "https://p2100.net"
        },
        "api_47": {
            "name": "TV-魔爪资源",
            "api": "https://mozhuazy.com/api.php/provide/vod",
            "detail": "https://mozhuazy.com"
        },
        "api_48": {
            "name": "TV-魔都动漫",
            "api": "https://caiji.moduapi.cc/api.php/provide/vod",
            "detail": "https://caiji.moduapi.cc"
      
        },
        "api_50": {
            "name": "TV-黑木耳",
            "api": "https://json.heimuer.xyz/api.php/provide/vod",
            "detail": "https://json.heimuer.xyz"
        },
        "api_51": {
            "name": "TV-黑木耳点播",
            "api": "https://json02.heimuer.xyz/api.php/provide/vod",
            "detail": "https://json02.heimuer.xyz"
        },
        "api_52": {
            "name": "91麻豆",
            "api": "https://91md.me/api.php/provide/vod",
            "detail": "https://91md.me"
        },
        "api_53": {
            "name": "AIvin",
            "api": "http://lbapiby.com/api.php/provide/vod",
            "detail": ""
        },
        "api_54": {
            "name": "JKUN资源",
            "api": "https://jkunzyapi.com/api.php/provide/vod",
            "detail": "https://jkunzyapi.com"
        },
        "api_55": {
            "name": "souav资源",
            "api": "https://api.souavzy.vip/api.php/provide/vod",
            "detail": "https://api.souavzy.vip"
        },
        "api_56": {
            "name": "乐播资源",
            "api": "https://lbapi9.com/api.php/provide/vod",
            "detail": ""
        },
        "api_57": {
            "name": "奥斯卡资源",
            "api": "https://aosikazy.com/api.php/provide/vod",
            "detail": "https://aosikazy.com"
        },
        "api_58": {
            "name": "奶香香",
            "api": "https://Naixxzy.com/api.php/provide/vod",
            "detail": "https://Naixxzy.com"
        },
        "api_59": {
            "name": "TV-森林资源",
            "api": "https://slapibf.com/api.php/provide/vod",
            "detail": "https://slapibf.com"
        },
        "api_60": {
            "name": "TV-水机资源",
            "api": "https://www.xrbsp.com/api/json.php",
            "detail": "https://www.xrbsp.com"
        },
        "api_61": {
            "name": "TV-玉兔资源",
            "api": "https://apiyutu.com/api.php/provide/vod",
            "detail": "https://apiyutu.com"
        },
        "api_62": {
            "name": "TV-番号资源",
            "api": "http://fhapi9.com/api.php/provide/vod",
            "detail": ""
        },
        "api_63": {
            "name": "TV-白嫖资源",
            "api": "https://www.kxgav.com/api/json.php",
            "detail": "https://www.kxgav.com"
        },
        "api_64": {
            "name": "TV-精品资源",
            "api": "https://www.jingpinx.com/api.php/provide/vod",
            "detail": "https://www.jingpinx.com"
        },
        "api_65": {
            "name": "TV-美少女资源",
            "api": "https://www.msnii.com/api/json.php",
            "detail": "https://www.msnii.com"
        },
        "api_66": {
            "name": "TV-老色逼资源",
            "api": "https://apilsbzy1.com/api.php/provide/vod",
            "detail": "https://apilsbzy1.com"
        },
        "api_67": {
            "name": "TV-色南国",
            "api": "https://api.sexnguon.com/api.php/provide/vod",
            "detail": "https://api.sexnguon.com"
        },
        "api_68": {
            "name": "TV-色猫资源",
            "api": "https://api.maozyapi.com/inc/apijson_vod.php",
            "detail": "https://api.maozyapi.com"
        },
        "api_69": {
            "name": "TV-辣椒资源",
            "api": "https://apilj.com/api.php/provide/vod",
            "detail": "https://apilj.com"
        },
        "api_70": {
            "name": "TV-香奶儿资源",
            "api": "https://www.gdlsp.com/api/json.php",
            "detail": "https://www.gdlsp.com"
        },
        "api_71": {
            "name": "TV-鲨鱼资源",
            "api": "https://shayuapi.com/api.php/provide/vod",
            "detail": "https://shayuapi.com"
        },
        "api_72": {
            "name": "TV-黄资源",
            "api": "https://www.pgxdy.com/api/json.php",
            "detail": "https://www.pgxdy.com"
        },
        "ffzynew": {
            "name": "非凡影视new",
            "api": "https://api.ffzyapi.com/api.php/provide/vod",
            "detail": "http://ffzy5.tv"
        },
        "kauiboziyuan": {
            "name": "快播资源网站",
            "api": "https://gayapi.com/api.php/provide/vod",
            "detail": ""
        },
        "xingbaziyuan": {
            "name": "杏吧资源",
            "api": "https://xingba111.com/api.php/provide/vod",
            "detail": ""
        },
        "aiduanjucc": {
            "name": "爱短剧.cc",
            "api": "https://www.aiduanju.cc/",
            "detail": ""
        
        },
        "taopian": {
            "name": "淘片资源",
            "api": "https://taopianapi.com/cjapi/sda/vod",
            "detail": ""
        },
        "hongniuziyuan": {
            "name": "红牛资源",
            "api": "https://www.hongniuzy3.com/api.php/provide/vod",
            "detail": ""
        },
        "suonisandian": {
            "name": "索尼-闪电资源",
            "api": "https://xsd.sdzyapi.com/api.php/provide/vod",
            "detail": ""
        },
        "fengchao": {
            "name": "蜂巢片库",
            "api": "https://api.fczy888.me/api.php/provide/vod",
            "detail": ""
        },
        "jinmaziyuan2": {
            "name": "金马资源网",
            "api": "https://api.jmzy.com/api.php/provide/vod",
            "detail": ""
        },
        "dadiziy": {
            "name": "大地资源网络",
            "api": "https://dadiapi.com/api.php/provide/vod",
            "detail": ""
        },
        "huangseziy": {
            "name": "黄色资源啊啊",
            "api": "https://hsckzy888.com/api.php/provide/vod",
            "detail": ""
        },
        "xiaojiziy": {
            "name": "小鸡资源",
            "api": "https://api.xiaojizy.live/provide/vod",
            "detail": ""
        },
        "kauicheziyuan": {
            "name": "快车资源阿",
            "api": "https://caiji.kuaichezy.org/api.php/provide",
            "detail": ""
        },
        "lajiaoziyu": {
            "name": "辣椒资源黄黄",
            "api": "https://apilj.com/api.php/provide",
            "detail": ""
        },
        "youzhidianying": {
            "name": "优质资源库1080zyk6.com高清",
            "api": "https://api.yzzy-api.com/inc/ldg_api_all.php/provide/vod",
            "detail": ""
        },
        "iqiyi": {
            "name": "iqiyi资源",
            "api": "https://www.iqiyizyapi.com/api.php/provide/vod",
            "detail": ""
        },
        "xibaocaiji": {
            "name": "细胞采集黄色",
            "api": "https://www.xxibaozyw.com/api.php/provide/vod",
            "detail": ""
        },
        "qiqiqiqi": {
            "name": "七七影视",
            "api": "https://www.qiqidys.com/api.php/provide/vod/",
            "detail": ""
        },
        "yingshigongchang": {
            "name": "影视工厂",
            "api": "https://cj.lziapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "fantuanyingshi": {
            "name": "饭团影视",
            "api": "https://www.fantuan.tv/api.php/provide/vod/",
            "detail": ""
        },
        "haiyang": {
            "name": "海洋资源",
            "api": "https://haiyangzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "hongniu": {
            "name": "红牛资源",
            "api": "https://www.hongniuzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "jinniu": {
            "name": "金牛资源",
            "api": "http://api.jinniuyun.com/api.php/provide/vod/",
            "detail": ""
        },
        "kuyun": {
            "name": "酷云资源",
            "api": "https://kuyunzy.co/api.php/provide/vod/",
            "detail": ""
        },
        "leiying": {
            "name": "雷鹰资源",
            "api": "https://leiyingzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "shenma": {
            "name": "神马资源",
            "api": "https://smzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "tiankong": {
            "name": "天空资源",
            "api": "https://api.tiankongapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "wukong": {
            "name": "悟空资源",
            "api": "https://wukongzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "xiangjiao": {
            "name": "香蕉资源",
            "api": "https://xjzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "yatu": {
            "name": "雅图资源",
            "api": "https://yatuzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "yjys": {
            "name": "影剧影视",
            "api": "https://api.yjys.me/api.php/provide/vod/",
            "detail": ""
        },
        "yongjiu": {
            "name": "永久资源",
            "api": "https://yongjiuzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "zhiling": {
            "name": "指凌资源",
            "api": "https://zhilingzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "ziyuan": {
            "name": "资源站",
            "api": "http://www.zyz.com/api.php/provide/vod/",
            "detail": ""
        },
        "agzy": {
            "name": "爱看资源",
            "api": "https://agzy.com/api.php/provide/vod",
            "detail": ""
        },
        "bajie": {
            "name": "八戒资源",
            "api": "http://zy.bajieziyuan.com/api.php/provide/vod",
            "detail": ""
        },
        "baozou": {
            "name": "暴走资源",
            "api": "http://www.baozouzy.com/api.php/provide/vod",
            "detail": ""
        },
        "chaofan": {
            "name": "超凡资源",
            "api": "https://cfzy.com/api.php/provide/vod",
            "detail": ""
        },
        "dianbo": {
            "name": "点播资源",
            "api": "http://api.dbzyz.com/api.php/provide/vod",
            "detail": ""
        },
        "feisu": {
            "name": "飞速资源",
            "api": "https://www.feisuzy.com/api.php/provide/vod",
            "detail": ""
        },
        "fuhuo": {
            "name": "复活云",
            "api": "http://fuhuoyun.com/api.php/provide/vod",
            "detail": ""
        },
        "gaoqing": {
            "name": "高清资源",
            "api": "https://gaoqingzy.com/api.php/provide/vod",
            "detail": ""
        },
        "huangjin": {
            "name": "黄金资源",
            "api": "http://hjzy.com/api.php/provide/vod",
            "detail": ""
        },
        "huohua": {
            "name": "火花资源",
            "api": "https://huohuazy.com/api.php/provide/vod",
            "detail": ""
        },
        "juhai": {
            "name": "聚海资源",
            "api": "http://juhai.com/api.php/provide/vod",
            "detail": ""
        },
        "kankan": {
            "name": "看看资源",
            "api": "http://kankanzy.com/api.php/provide/vod",
            "detail": ""
        },
        "laoya": {
            "name": "老鸭资源",
            "api": "http://laoyazy.com/api.php/provide/vod",
            "detail": ""
        },
        "longma": {
            "name": "龙马资源",
            "api": "http://longmazy.com/api.php/provide/vod",
            "detail": ""
        },
        "niuren": {
            "name": "牛人资源",
            "api": "http://www.niurenzy.com/api.php/provide/vod",
            "detail": ""
        },
        "ouye": {
            "name": "欧耶资源",
            "api": "http://ouye.com/api.php/provide/vod",
            "detail": ""
        },
        "piaohua": {
            "name": "飘花资源",
            "api": "http://www.piaohuazy.com/api.php/provide/vod",
            "detail": ""
        },
        "qiezi": {
            "name": "茄子资源",
            "api": "http://qiezi.com/api.php/provide/vod",
            "detail": ""
        },
        "quanmin": {
            "name": "全民资源",
            "api": "http://quanmin.com/api.php/provide/vod",
            "detail": ""
        },
        "sanjiu": {
            "name": "39资源",
            "api": "http://39zy.com/api.php/provide/vod",
            "detail": ""
        },
        "shenlan": {
            "name": "深蓝资源",
            "api": "http://shenlan.com/api.php/provide/vod",
            "detail": ""
        },
        "shier": {
            "name": "123资源",
            "api": "http://123.com/api.php/provide/vod",
            "detail": ""
        },
        "tianyi": {
            "name": "天翼资源",
            "api": "http://tianyi.com/api.php/provide/vod",
            "detail": ""
        },
        "tudou": {
            "name": "土豆资源",
            "api": "http://tudou.com/api.php/provide/vod",
            "detail": ""
        },
        "wanbo": {
            "name": "万播资源",
            "api": "http://wanbo.com/api.php/provide/vod",
            "detail": ""
        },
        "xianggang": {
            "name": "香港资源",
            "api": "http://xianggang.com/api.php/provide/vod",
            "detail": ""
        },
        "xiaoyao": {
            "name": "逍遥资源",
            "api": "http://xiaoyao.com/api.php/provide/vod",
            "detail": ""
        },
        "xingfu": {
            "name": "幸福资源",
            "api": "http://xingfu.com/api.php/provide/vod",
            "detail": ""
        },
        "xingyun": {
            "name": "星云资源",
            "api": "http://xingyun.com/api.php/provide/vod",
            "detail": ""
        },
        "xunlei": {
            "name": "迅雷资源",
            "api": "http://xunlei.com/api.php/provide/vod",
            "detail": ""
        },
        "yingshi": {
            "name": "影视资源",
            "api": "http://yingshi.com/api.php/provide/vod",
            "detail": ""
        },
        "yingxiong": {
            "name": "英雄资源",
            "api": "http://yingxiong.com/api.php/provide/vod",
            "detail": ""
        },
        "yizhou": {
            "name": "一舟资源",
            "api": "http://yizhou.com/api.php/provide/vod",
            "detail": ""
        },
        "youku": {
            "name": "优酷资源",
            "api": "http://youku.com/api.php/provide/vod",
            "detail": ""
        },
        "youlong": {
            "name": "游龙资源",
            "api": "http://youlong.com/api.php/provide/vod",
            "detail": ""
        },
        "baiwan": {
            "name": "百万资源",
            "api": "https://www.baiwanzy.com/api.php/provide/vod",
            "detail": ""
        },
        "guangsu": {
            "name": "光速资源",
            "api": "http://guangsu.com/api.php/provide/vod",
            "detail": ""
        },
        "huoyan": {
            "name": "火焰资源",
            "api": "https://huoyan.com/api.php/provide/vod",
            "detail": ""
        },
        "jiguang": {
            "name": "极光资源",
            "api": "https://jiguang.com/api.php/provide/vod",
            "detail": ""
        },
        "jinpai": {
            "name": "金牌资源",
            "api": "http://jinpai.com/api.php/provide/vod",
            "detail": ""
        },
        "jisuda": {
            "name": "极速达资源",
            "api": "http://jisuda.com/api.php/provide/vod",
            "detail": ""
        },
        "jiujiuliu": {
            "name": "996资源",
            "api": "http://996.com/api.php/provide/vod",
            "detail": ""
        },
        "lanbo": {
            "name": "蓝波资源",
            "api": "http://lanbo.com/api.php/provide/vod",
            "detail": ""
        },
        "lanniao": {
            "name": "蓝鸟资源",
            "api": "http://lanniao.com/api.php/provide/vod",
            "detail": ""
        },
        "mantian": {
            "name": "满天星资源",
            "api": "http://mantian.com/api.php/provide/vod",
            "detail": ""
        },
        "miaobo": {
            "name": "秒播资源",
            "api": "https://miaobo.com/api.php/provide/vod",
            "detail": ""
        },
        "qimao": {
            "name": "奇猫资源",
            "api": "http://qimao.com/api.php/provide/vod",
            "detail": ""
        },
        "qiyiguang": {
            "name": "奇艺光资源",
            "api": "https://qiyiguang.com/api.php/provide/vod",
            "detail": ""
        },
        "rihan": {
            "name": "日韩资源",
            "api": "http://rihan.com/api.php/provide/vod",
            "detail": ""
        },
        "ronghua": {
            "name": "荣华资源",
            "api": "https://ronghua.com/api.php/provide/vod",
            "detail": ""
        },
        "sijiu": {
            "name": "49资源",
            "api": "http://49zy.com/api.php/provide/vod",
            "detail": ""
        },
        "suku": {
            "name": "速酷资源",
            "api": "http://suku.com/api.php/provide/vod",
            "detail": ""
        },
        "wawa": {
            "name": "哇哇资源",
            "api": "http://wawa.com/api.php/provide/vod",
            "detail": ""
        },
        "weidu": {
            "name": "维度资源",
            "api": "https://weidu.com/api.php/provide/vod",
            "detail": ""
        },
        "dyttzy": {
            "name": "示例资源",
            "api": "http://xxx.com/api.php/provide/vod",
            "detail": "http://xxx.com"
        },
        "hongniu_m3u8": {
            "name": "紅牛資源",
            "api": "http://hongniuzy2.com/api.php/provide/vod/from/hnm3u8",
            "detail": ""
        },
        "lzi_m3u8": {
            "name": "量子資源",
            "api": "http://cj.lziapi.com/api.php/provide/vod/from/lzm3u8",
            "detail": ""
        },
        "kaifang": {
            "name": "開放電影",
            "api": "http://vod-demo.onrender.com/pubdovod.php",
            "detail": ""
        },
        "39kan": {
            "name": "39影視",
            "api": "http://39kan.com/api.php/provide/vod",
            "detail": ""
        },
        "vipmv": {
            "name": "天堂资源",
            "api": "http://vipmv.cc/api.php/provide/vod",
            "detail": ""
        },
        "lehootv": {
            "name": "乐活影视",
            "api": "http://lehootv.com/api.php/provide/vod",
            "detail": ""
        },
        "tangrenjie": {
            "name": "唐人街",
            "api": "http://tangrenjie.tv/api.php/provide/vod",
            "detail": ""
        },
        "kuapi": {
            "name": "酷อย่าง点资源",
            "api": "http://api.kuapi.cc/api.php/provide/vod",
            "detail": ""
        },
        "kudian10": {
            "name": "酷点资源",
            "api": "http://kudian10.com/api.php/provide/vod",
            "detail": ""
        },
        "ykapi": {
            "name": "影库资源网",
            "api": "http://api.ykapi.net/api.php/provide/vod",
            "detail": ""
        },
        "kczyapi": {
            "name": "快车资源",
            "api": "http://caiji.kczyapi.com/api.php/provide/vod/from/kcm3u8",
            "detail": ""
        },
        "apittzy": {
            "name": "探探资源",
            "api": "http://apittzy.com/api.php/provide/vod",
            "detail": ""
        },
        "jyzyapi_m3u8": {
            "name": "金鹰资源",
            "api": "http://jyzyapi.com/provide/vod/from/jinyingm3u8",
            "detail": ""
        },
        "guangsu_m3u8": {
            "name": "光速资源",
            "api": "http://api.guangsuapi.com/api.php/provide/vod/from/gsm3u8",
            "detail": ""
        },
        "lovedan": {
            "name": "艾旦影视",
            "api": "http://lovedan.net/api.php/provide/vod",
            "detail": ""
        },
        "zzrhgg": {
            "name": "飘花电影",
            "api": "http://www.zzrhgg.com/api.php/provide/vod",
            "detail": ""
        },
        "prinevillesda": {
            "name": "网民电影",
            "api": "http://prinevillesda.org/api.php/provide/vod",
            "detail": ""
        },
        "siwazyw": {
            "name": "丝袜资源",
            "api": "https://siwazyw.cc/api.php/provide/vod",
            "detail": ""
        },
        "tiankong_m3u8": {
            "name": "天空資源",
            "api": "https://m3u8.tiankongapi.com/api.php/provide/vod/from/tkm3u8",
            "detail": ""
        },
        "haiwaikan": {
            "name": "海外看資源",
            "api": "https://haiwaikan.com/api.php/provide/vod",
            "detail": ""
        },
        "xiaomaomi_xml": {
            "name": "小猫咪(官)",
            "api": "http://zy.xiaomaomi.cc/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "foxzyapi": {
            "name": "FOX资源(切)",
            "api": "https://api.foxzyapi.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "yikanapi": {
            "name": "易看资源(切)",
            "api": "https://api.yikanapi.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "ylzy1": {
            "name": "鱼乐资源(切)",
            "api": "https://api.ylzy1.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "hanjuzy": {
            "name": "韩剧资源(切)",
            "api": "http://www.hanjuzy.com/inc/api.php",
            "detail": ""
        },
        "77hanju": {
            "name": "77韩剧(切)",
            "api": "https://www.77hanju.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "ff9": {
            "name": "FF9资源(切)",
            "api": "https://www.ff9.top/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "rrvipw": {
            "name": "789盘(优)",
            "api": "https://www.rrvipw.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "longteng": {
            "name": "龙腾资源(优)",
            "api": "http://175.178.7.35:2020/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "inmi": {
            "name": "映迷(优)",
            "api": "https://www.inmi.app/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "vodimg": {
            "name": "影图(聚)",
            "api": "https://cj.vodimg.top/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "7en7": {
            "name": "瞬间影视(聚)",
            "api": "http://app.7en7.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "30dian": {
            "name": "创艺影视(聚)",
            "api": "https://www.30dian.cn/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "aliys": {
            "name": "阿里影视(聚)",
            "api": "http://aliys.cn:90/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "mgzyz1": {
            "name": "芒果资源",
            "api": "https://mgzyz1.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "huakuiapi": {
            "name": "花魁资源",
            "api": "https://caiji.huakuiapi.com/inc/api.php",
            "detail": ""
        },
        "putaozy": {
            "name": "葡萄资源",
            "api": "https://api.putaozy.net/inc/api.php",
            "detail": ""
        },
        "sewozyapi": {
            "name": "色窝资源",
            "api": "https://sewozyapi.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "hghhh": {
            "name": "皇冠资源",
            "api": "https://hghhh.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "caiji21": {
            "name": "我要啪啪",
            "api": "http://www.caiji21.com/home/cjapi/klkl/mc10/vod/xml",
            "detail": ""
        },
        "caiji22": {
            "name": "AV集中淫",
            "api": "https://www.caiji22.com/home/cjapi/klp0/mc10/vod/xml",
            "detail": ""
        },
        "caiji23": {
            "name": "夜夜撸资源",
            "api": "https://www.caiji23.com/home/cjapi/kls6/mc10/vod/xml",
            "detail": ""
        },
        "caiji24": {
            "name": "大屌丝资源",
            "api": "http://www.caiji24.com/home/cjapi/p0d2/mc10/vod/xml",
            "detail": ""
        },
        "caiji25": {
            "name": "咪咪资源",
            "api": "http://www.caiji25.com/home/cjapi/p0as/mc10/vod/xml",
            "detail": ""
        },
        "caiji26": {
            "name": "鲍鱼AV",
            "api": "http://caiji26.com/home/cjapi/p0g8/mc10/vod/xml",
            "detail": ""
        },
        "jgczyapi": {
            "name": "精工厂资源",
            "api": "https://jgczyapi.com/home/cjapi/kld2/mc10/vod/xml",
            "detail": ""
        },
        "xx55zyapi": {
            "name": "点点娱乐",
            "api": "https://xx55zyapi.com/home/cjapi/ascf/mc10/vod/xml",
            "detail": ""
        },
        "dmmapi": {
            "name": "大MM资源",
            "api": "https://www.dmmapi.com/home/cjapi/asd2c7/mc10/vod/xml",
            "detail": ""
        },
        "caiji10": {
            "name": "黄瓜TV资源",
            "api": "https://www.caiji10.com/home/cjapi/cfs6/mc10/vod/xml",
            "detail": ""
        },
        "caiji09": {
            "name": "快播盒子资源",
            "api": "https://www.caiji09.com/home/cjapi/cfp0/mc10/vod/xml",
            "detail": ""
        },
        "caiji08": {
            "name": "大香蕉资源",
            "api": "https://www.caiji08.com/home/cjapi/cfkl/mc10/vod/xml",
            "detail": ""
        },
        "caiji07": {
            "name": "日本AV在线",
            "api": "https://www.caiji07.com/home/cjapi/cfcf/mc10/vod/xml",
            "detail": ""
        },
        "caiji06": {
            "name": "久久热在线",
            "api": "https://www.caiji06.com/home/cjapi/cfbb/mc10/vod/xml",
            "detail": ""
        },
        "caiji05": {
            "name": "青青草视频",
            "api": "https://www.caiji05.com/home/cjapi/cfda/mc10/vod/xml",
            "detail": ""
        },
        "caiji04": {
            "name": "麻豆视频",
            "api": "https://www.caiji04.com/home/cjapi/cfc7/mc10/vod/xml",
            "detail": ""
        },
        "caiji03": {
            "name": "一本道资源",
            "api": "https://www.caiji03.com/home/cjapi/cfg8/mc10/vod/xml",
            "detail": ""
        },
        "caiji02": {
            "name": "草榴视频",
            "api": "https://www.caiji02.com/home/cjapi/cfas/mc10/vod/xml",
            "detail": ""
        },
        "caiji01": {
            "name": "亚洲成人在线",
            "api": "https://www.caiji01.com/home/cjapi/cfd2/mc10/vod/xml",
            "detail": ""
        },
        "99zy": {
            "name": "99资源",
            "api": "http://99zy.pw/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "888dav": {
            "name": "抖阴视频",
            "api": "https://www.888dav.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "156_249_29_8": {
            "name": "蛋蛋视频",
            "api": "https://156.249.29.8/inc/api.php",
            "detail": ""
        },
        "msnii_xml": {
            "name": "美少女资源",
            "api": "https://www.msnii.com/api/xml.php",
            "detail": ""
        },
        "xrbsp_xml": {
            "name": "淫水机资源",
            "api": "https://www.xrbsp.com/api/xml.php",
            "detail": ""
        },
        "gdlsp_xml": {
            "name": "香奶儿资源",
            "api": "https://www.gdlsp.com/api/xml.php",
            "detail": ""
        },
        "kxgav_xml": {
            "name": "白嫖资源",
            "api": "https://www.kxgav.com/api/xml.php",
            "detail": ""
        },
        "afasu": {
            "name": "小湿妹资源",
            "api": "https://www.afasu.com/api/xml.php",
            "detail": ""
        },
        "pgxdy_xml": {
            "name": "黄AV资源",
            "api": "https://www.pgxdy.com/api/xml.php",
            "detail": ""
        },
        "feifei67": {
            "name": "CK资源",
            "api": "http://www.feifei67.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "apilyzy_xml": {
            "name": "老鸭资源",
            "api": "https://api.apilyzy.com/api.php/provide/vod/at/xml",
            "detail": ""
        },
        "apihjzy": {
            "name": "花椒资源",
            "api": "https://apihjzy.com/api.php/provide/vod",
            "detail": ""
        },
        "bttcj": {
            "name": "博天堂",
            "api": "http://bttcj.com/inc/sapi.php",
            "detail": ""
        },
        "secj8": {
            "name": "色色资源",
            "api": "http://secj8.com/inc/sapi.php",
            "detail": ""
        },
        "jcspcj8": {
            "name": "久草资源",
            "api": "http://jcspcj8.com/api",
            "detail": ""
        },
        "cjmygzy": {
            "name": "狼少年",
            "api": "http://cjmygzy.com/inc/sapi.php",
            "detail": ""
        },
        "f2dcj6": {
            "name": "富二代资源",
            "api": "http://f2dcj6.com/sapi",
            "detail": ""
        },
        "zmcj88": {
            "name": "字幕网",
            "api": "http://zmcj88.com/sapi",
            "detail": ""
        },
        "llzxcj": {
            "name": "利来资源",
            "api": "http://llzxcj.com/inc/sck.php",
            "detail": ""
        },
        "wmcj8": {
            "name": "环亚资源",
            "api": "http://wmcj8.com/inc/sapi.php",
            "detail": ""
        },
        "caiji523": {
            "name": "523资源",
            "api": "https://caiji.523zyw.com/inc/apijson_vod.php",
            "detail": ""
        },
        "leyuzyapi": {
            "name": "乐鱼资源",
            "api": "https://www.leyuzyapi.com/inc/apijson_vod.php",
            "detail": ""
        },
        "yinwoapi": {
            "name": "淫窝资源",
            "api": "https://api.yinwoapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "4000zy": {
            "name": "4000资源",
            "api": "https://www.4000zy.com/inc/apijson_vod.php",
            "detail": ""
        },
        "sdszyapi": {
            "name": "色屌丝资源",
            "api": "http://sdszyapi.com/home/cjapi/asbb/mc10/vod/xml",
            "detail": ""
        },
        "xjjzyapi": {
            "name": "小姐姐资源",
            "api": "https://xjjzyapi.com/home/cjapi/askl/mc10/vod/xml",
            "detail": ""
        },
        "52zyapi": {
            "name": "52AVAV",
            "api": "https://52zyapi.com/home/cjapi/asda/mc10/vod/xml",
            "detail": ""
        },
        "caomeiapi": {
            "name": "草莓资源",
            "api": "https://caiji.caomeiapi.com/inc/apijson_vod.php",
            "detail": ""
        },
        "aikanzyz9": {
            "name": "爱看资源",
            "api": "http://www.aikanzyz9.com/inc/apijson_vod.php",
            "detail": ""
        },
        "91av": {
            "name": "91视频",
            "api": "https://91av.cyou/api.php/provide/vod/",
            "detail": ""
        },
        "tmav": {
            "name": "天美AV",
            "api": "https://tmav.art/api.php/provide/vod/",
            "detail": ""
        },
        "sezy": {
            "name": "色资源",
            "api": "https://sezy.website/api.php/provide/vod/",
            "detail": ""
        },
        "xxavs": {
            "name": "湿乐园",
            "api": "https://xxavs.com/api.php/provide/vod/",
            "detail": ""
        },
        "uezy": {
            "name": "优异资源",
            "api": "https://a.uezy.pw/api.php/provide/vod/",
            "detail": ""
        },
        "yszy02": {
            "name": "夜色资源",
            "api": "https://www.yszy02.com/api.php/provide/vod/",
            "detail": ""
        },
        "hdys2": {
            "name": "花都影视",
            "api": "https://hdys2.com/api.php/provide/vod/",
            "detail": ""
        },
        "lyhapi": {
            "name": "狼友会资源",
            "api": "https://api.lyhapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "yinlong": {
            "name": "银龙资源",
            "api": "https://yinlong.tv/api.php/provide/vod/at/xml/",
            "detail": ""
        },
        "naichaapi": {
            "name": "奶茶资源",
            "api": "https://caiji.naichaapi.com/inc/api.php",
            "detail": ""
        },
        "madouse": {
            "name": "麻豆视频2",
            "api": "http://www.madouse.la/api.php/provide/vod/",
            "detail": ""
        },
        "010aizy": {
            "name": "010爱资源",
            "api": "http://www.010aizy.com/API/macs.php",
            "detail": ""
        },
        "javcaptain": {
            "name": "痴汉队长",
            "api": "https://javcaptain.com/api.php/provide/vod/",
            "detail": ""
        },
        "aicaozy": {
            "name": "爱操资源",
            "api": "https://aicaozy.com/api.php/provide/vod/",
            "detail": ""
        },
        "langchaozy6": {
            "name": "浪潮资源",
            "api": "http://langchaozy6.com/api.php/provide/vod/",
            "detail": ""
        },
        "suboapi": {
            "name": "速播资源",
            "api": "https://api.suboapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "kudouzy": {
            "name": "酷豆资源",
            "api": "https://kudouzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "kdapi": {
            "name": "酷豆2",
            "api": "https://api.kdapi.info/api.php/provide/vod/",
            "detail": ""
        },
        "kudian70": {
            "name": "酷伦理",
            "api": "https://api.kudian70.com/api.php/provide/vod/",
            "detail": ""
        },
        "wanying4": {
            "name": "万影色",
            "api": "https://wanying4.com/api.php/provide/vod/",
            "detail": ""
        },
        "apiabzy": {
            "name": "爱播资源",
            "api": "https://cj.apiabzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "jializyzapi": {
            "name": "佳丽资源",
            "api": "http://www.jializyzapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "7777688": {
            "name": "AVZY6888资源",
            "api": "http://m.7777688.com/inc/apijson.php",
            "detail": ""
        },
        "fenwe_18av": {
            "name": "18av(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=18av&ext=txt/js/18/18av.js",
            "detail": ""
        },
        "fenwe_banan": {
            "name": "banan(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=banan&ext=txt/js/18/banan.js",
            "detail": ""
        },
        "fenwe_missav": {
            "name": "Missav(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=Missav&ext=txt/js/18/Missav.js",
            "detail": ""
        },
        "fenwe_yangduan": {
            "name": "养端(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=养端&ext=txt/js/18/养端.js",
            "detail": ""
        },
        "fenwe_zhuguli": {
            "name": "朱古力(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=朱古力&ext=txt/js/18/朱古力.js",
            "detail": ""
        },
        "fenwe_wanou": {
            "name": "玩偶姐姐(道长)",
            "api": "http://www.fenwe.tk:5700/vod?rule=玩偶姐姐&ext=txt/js/18/玩偶姐姐.js",
            "detail": ""
        },
        "mdm3u8": {
            "name": "91麻豆",
            "api": "https://91md.me/api.php/provide/vod/from/mdm3u8/",
            "detail": ""
        },
        "vnzyz": {
            "name": "越南(直连)",
            "api": "https://vnzyz.com/api.php/provide/vod",
            "detail": ""
        },
        "avre06": {
            "name": "黄瓜(直连)",
            "api": "https://www.avre06.com/api.php/provide/vod",
            "detail": ""
        },
        "apisesehuzy": {
            "name": "色虎(直连)",
            "api": "https://apisesehuzy.com/api.php/provide/vod",
            "detail": ""
        },
        "kuai": {
            "name": "快av(FQ)",
            "api": "https://kuaiavzy.com/api.php/provide/vod",
            "detail": ""
        },
        "semaozy": {
            "name": "色猫(FQ)",
            "api": "https://caiji.semaozy.net/inc/apijson_vod.php",
            "detail": ""
        },
        "apilj_json": {
            "name": "成人06",
            "api": "https://apilj.com/api.php/provide/vod/at/json",
            "detail": ""
        },
        "bajiecaiji": {
            "name": "八戒云",
            "api": "http://cj.bajiecaiji.com/inc/bjm3u8.php",
            "detail": ""
        },
        "ahjiuman": {
            "name": "飘花",
            "api": "http://www.ahjiuman.com/api.php/provide/vod/at/json",
            "detail": ""
        },
        "911ysw": {
            "name": "天翼|点播",
            "api": "https://www.911ysw.top/tianyi.php/provide/vod/",
            "detail": ""
        },
        "xzcjz": {
            "name": "熊掌|点播",
            "api": "https://xzcjz.com/api.php/provide/vod/",
            "detail": ""
        },
        "kuaikan": {
            "name": "快看资源",
            "api": "https://kuaikan-api.com/api.php/provide/vod/from/kuaikanyun",
            "detail": ""
        },
        "kuaiyunzy": {
            "name": "快云资源",
            "api": "https://www.kuaiyunzy.com/api.php/provide/vod/",
            "detail": ""
        },
        "xkanzy10": {
            "name": "享看资源",
            "api": "https://xkanzy10.com/api.php/provide/vod/",
            "detail": ""
        },
        "42_la": {
            "name": "42资源",
            "api": "https://www.42.la/api.php/provide/vod/",
            "detail": ""
        },
        "leshizyapi": {
            "name": "乐视资源",
            "api": "https://leshizyapi.com/api.php/provide/vod/",
            "detail": ""
        },
        "82_156_40_118": {
            "name": "至圣云",
            "api": "http://82.156.40.118:1234/api.php/provide/vod/",
            "detail": ""
        },
        "hw8": {
            "name": "华为吧|点播",
            "api": "https://hw8.live/api.php/provide/vod/",
            "detail": ""
    },
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
