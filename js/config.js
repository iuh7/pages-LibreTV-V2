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
        adult: true
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
        adult: true
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
        adult: true
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
        adult: true
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv', 
        adult: true
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com', 
        adult: true
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
        adult: true
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
        adult: true
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源'
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
    testSource: {
        api: 'https://api.ffzyapi.com/api.php/provide/vod',
        name: '非凡影视new',
        adult: true
    },
    ckzy: {
        api: 'http://fhapi9.com/api.php/provide/vod',
        name: 'TV-番号资源',
        adult: true
    },
    jkun: {
        api: 'https://91md.me/api.php/provide/vod/from/mdm3u8/',
        name: '91麻豆',
        adult: true
    },
    bwzy: {
        api: 'https://xxavs.com/api.php/provide/vod/',
        name: '湿乐园',
        adult: true
    },
    bwzy: {
        api: 'https://Naixxzy.com/api.php/provide/vod',
        name: '奶香香',
        adult: true
    },
    souav: {
        api: 'https://www.avre06.com/api.php/provide/vod',
        name: '黄瓜',
        adult: true
    },
    lsb: {
        api: 'https://hsckzy888.com/api.php/provide/vod',
        name: '黄色资源啊啊',
        adult: true
    },
    huangcang: {
        api: 'https://xingba111.com/api.php/provide/vod',
        name: '杏吧资源',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'JKUN资源',
        adult: true
    },

    // 下面是资源失效率高的API源，不建议使用
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速播资源'
    },
    ukzy: {
        api: 'https://api.ukuapi88.com/api.php/provide/vod',
        name: 'U酷资源'
        },
        "api_4": {
            "name": "TV-CK资源",
            "api": "https://ckzy.me/api.php/provide/vod",
            "detail": "https://ckzy.me"
        },
        "api_8": {
            "name": "TV-wujinapi无尽",
            "api": "https://api.wujinapi.cc/api.php/provide/vod",
            "detail": ""
        },
        "api_12": {
            "name": "TV-卧龙资源",
            "api": "https://collect.wolongzy.cc/api.php/provide/vod",
            "detail": ""
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
        "api_29": {
            "name": "TV-电影天堂资源",
            "api": "http://caiji.dyttzyapi.com/api.php/provide/vod",
            "detail": "http://caiji.dyttzyapi.com"
        },
        "api_36": {
            "name": "TV-虎牙资源",
            "api": "https://www.huyaapi.com/api.php/provide/vod",
            "detail": "https://www.huyaapi.com"
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
        "api_48": {
            "name": "TV-魔都动漫",
            "api": "https://caiji.moduapi.cc/api.php/provide/vod",
            "detail": "https://caiji.moduapi.cc"
      
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
        "api_58": {
            "name": "奶香香",
            "api": "https://Naixxzy.com/api.php/provide/vod",
            "detail": "https://Naixxzy.com"
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
        "api_64": {
            "name": "TV-精品资源",
            "api": "https://www.jingpinx.com/api.php/provide/vod",
            "detail": "https://www.jingpinx.com"
        },
        "ffzynew": {
            "name": "非凡影视new",
            "api": "https://api.ffzyapi.com/api.php/provide/vod",
            "detail": "http://ffzy5.tv"
        },
        "xingbaziyuan": {
            "name": "杏吧资源",
            "api": "https://xingba111.com/api.php/provide/vod",
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
        "yingshigongchang": {
            "name": "影视工厂",
            "api": "https://cj.lziapi.com/api.php/provide/vod/",
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
        "91av": {
            "name": "91视频",
            "api": "https://91av.cyou/api.php/provide/vod/",
            "detail": ""
        },
        "xxavs": {
            "name": "湿乐园",
            "api": "https://xxavs.com/api.php/provide/vod/",
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
