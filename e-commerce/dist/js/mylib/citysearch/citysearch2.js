var Vcity={};Vcity._m={$:function(a,b){var c,d,e,f=[],g=a.substring(1);if(b=b||document,"string"==typeof a)switch(a.charAt(0)){case"#":return document.getElementById(g);break;case".":if(b.getElementsByClassName)return b.getElementsByClassName(g);for(c=Vcity._m.$("*",b),d=c.length,e=0;e<d;e++)-1<c[e].className.indexOf(g)&&f.push(c[e]);return f;break;default:return b.getElementsByTagName(a);}},on:function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)},getEvent:function(a){return a||window.event},getTarget:function(a){return a.target||a.srcElement},getPos:function(a){var b=document.documentElement.scrollLeft||document.body.scrollLeft,c=document.documentElement.scrollTop||document.body.scrollTop,d=a.getBoundingClientRect();return{top:d.top+c,right:d.right+b,bottom:d.bottom+c,left:d.left+b}},addClass:function(a,b){b&&(b.className=Vcity._m.hasClass(a,b)?b.className:b.className+" "+a)},removeClass:function(a,b){var c=new RegExp("(^|\\s+)"+a+"(\\s+|$)","g");Vcity._m.hasClass(a,b)&&(b.className=c.test(b.className)?b.className.replace(c,""):b.className)},hasClass:function(a,b){return!!(b&&b.className)&&-1<b.className.indexOf(a)},stopPropagation:function(a){a=a||window.event,a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},trim:function(a){return a.replace(/^\s+|\s+$/g,"")}},Vcity.allCity=["\u5317\u4EAC\u5E02|beijing|bj","\u4E0A\u6D77\u5E02|shanghai|sh","\u5E7F\u5DDE\u5E02|guangzhou|gz","\u6DF1\u5733\u5E02|shenzhen|sz","\u5357\u4EAC\u5E02|nanjing|nj","\u676D\u5DDE\u5E02|hangzhou|hz","\u5929\u6D25\u5E02|tianjin|tj","\u91CD\u5E86\u5E02|chongqing|cq","\u6210\u90FD\u5E02|chengdu|cd","\u9752\u5C9B\u5E02|qingdao|qd","\u82CF\u5DDE\u5E02|shuzhou|sz","\u65E0\u9521\u5E02|wuxi|wx","\u5E38\u5DDE\u5E02|changzhou|cz","\u6E29\u5DDE\u5E02|wenzhou|wz","\u6B66\u6C49\u5E02|wuhan|wh","\u957F\u6C99\u5E02|changsha|cs","\u77F3\u5BB6\u5E84\u5E02|shijiazhuang|sjz","\u5357\u660C\u5E02|nanchang|nc","\u4E09\u4E9A\u5E02|sanya|sy","\u5408\u80A5\u5E02|hefei|hf","\u90D1\u5DDE\u5E02|zhengzhou|zz","\u4FDD\u5B9A\u5E02|baoding|bd","\u5510\u5C71\u5E02|tangshan|ts","\u79E6\u7687\u5C9B\u5E02|qinhuangdao|qhd","\u90AF\u90F8\u5E02|handan|hd","\u90A2\u53F0\u5E02|xingtai|xt","\u5F20\u5BB6\u53E3\u5E02|zhangjiakou|zjk","\u627F\u5FB7\u5E02|chengde|cd","\u8861\u6C34\u5E02|hengshui|hs","\u5ECA\u574A\u5E02|langfang|lf","\u6CA7\u5DDE\u5E02|cangzhou|cz","\u592A\u539F\u5E02|taiyuan|ty","\u5927\u540C\u5E02|datong|dt","\u9633\u6CC9\u5E02|yangquan|yq","\u957F\u6CBB\u5E02|changzhi|cz","\u664B\u57CE\u5E02|jincheng|jc","\u6714\u5DDE\u5E02|shuozhou|sz","\u664B\u4E2D\u5E02|jinzhong|jz","\u8FD0\u57CE\u5E02|yuncheng|yc","\u5FFB\u5DDE\u5E02|xinzhou|xz","\u4E34\u6C7E\u5E02|linfen|lf","\u5415\u6881\u5E02|lvliang|ll","\u547C\u548C\u6D69\u7279\u5E02|huhehaote|hhht","\u5305\u5934\u5E02|baotou|bt","\u4E4C\u6D77\u5E02|wuhai|wh","\u8D64\u5CF0\u5E02|chifeng|cf","\u901A\u8FBD\u5E02|tongliao|tl","\u9102\u5C14\u591A\u65AF\u5E02|eerduosi|eeds","\u547C\u4F26\u8D1D\u5C14\u5E02|hulunbeier|hlbe","\u5DF4\u5F66\u6DD6\u5C14\u5E02|bayannaoer|byne","\u4E4C\u5170\u5BDF\u5E03\u5E02|wulanchabu|wlcb","\u5174\u5B89\u76DF|xinganmeng|xam","\u9521\u6797\u90ED\u52D2\u76DF|xilinguolemeng|xlglm","\u963F\u62C9\u5584\u76DF|alashanmeng|alsm","\u6C88\u9633\u5E02|shenyang|sy","\u5927\u8FDE\u5E02|dalian|dl","\u978D\u5C71\u5E02|anshan|as","\u629A\u987A\u5E02|fushun|fs","\u672C\u6EAA\u5E02|benxi|bx","\u4E39\u4E1C\u5E02|dandong|dd","\u9526\u5DDE\u5E02|jinzhou|jz","\u8425\u53E3\u5E02|yingkou|yk","\u961C\u65B0\u5E02|fuxin|fx","\u8FBD\u9633\u5E02|liaoyang|ly","\u76D8\u9526\u5E02|panjin|pj","\u94C1\u5CAD\u5E02|tieling|tl","\u671D\u9633\u5E02|chaoyang|cy","\u846B\u82A6\u5C9B\u5E02|huludao|hld","\u957F\u6625\u5E02|changchun|cc","\u5409\u6797\u5E02|jilin|jl","\u56DB\u5E73\u5E02|siping|sp","\u8FBD\u6E90\u5E02|liaoyuan|ly","\u901A\u5316\u5E02|tonghua|th","\u767D\u5C71\u5E02|baishan|bs","\u677E\u539F\u5E02|songyuan|sy","\u767D\u57CE\u5E02|baicheng|bc","\u5EF6\u8FB9\u671D\u9C9C\u65CF\u81EA\u6CBB\u5DDE|ybcxzzzz|ybcxzzzz","\u54C8\u5C14\u6EE8\u5E02|haerbin|heb","\u9F50\u9F50\u54C8\u5C14\u5E02|qiqihaer|qqhe","\u9E21\u897F\u5E02|jixi|jx","\u9E64\u5C97\u5E02|hegang|hg","\u53CC\u9E2D\u5C71\u5E02|shuangyashan|sys","\u5927\u5E86\u5E02|daqing|dq","\u4F0A\u6625\u5E02|yichun|yc","\u4F73\u6728\u65AF\u5E02|jiamusi|jms","\u4E03\u53F0\u6CB3\u5E02|qitaihe|qth","\u7261\u4E39\u6C5F\u5E02|mudanjiang|mdj","\u9ED1\u6CB3\u5E02|heihe|hh","\u7EE5\u5316\u5E02|suihua|sh","\u5927\u5174\u5B89\u5CAD\u5730\u533A|daxinganling|dxaldq","\u5F90\u5DDE\u5E02|xuzhou|xz","\u5357\u901A\u5E02|nantong|nt","\u8FDE\u4E91\u6E2F\u5E02|lianyungang|lyg","\u6DEE\u5B89\u5E02|huaian|ha","\u76D0\u57CE\u5E02|yancheng|yc","\u626C\u5DDE\u5E02|yangzhou|yz","\u9547\u6C5F\u5E02|zhenjiang|zj","\u6CF0\u5DDE\u5E02|taizhou|tz","\u5BBF\u8FC1\u5E02|suqian|sq","\u5B81\u6CE2\u5E02|ningbo|nb","\u5609\u5174\u5E02|jiaxing|jx","\u6E56\u5DDE\u5E02|huzhou|hz","\u7ECD\u5174\u5E02|shaoxing|sx","\u821F\u5C71\u5E02|zhoushan|zs","\u8862\u5DDE\u5E02|quzhou|qz","\u91D1\u534E\u5E02|jinhua|jh","\u53F0\u5DDE\u5E02|taizhou|tz","\u4E3D\u6C34\u5E02|lishui|ls","\u829C\u6E56\u5E02|wuhu|wh","\u868C\u57E0\u5E02|bengbu|bb","\u6DEE\u5357\u5E02|huainan|hn","\u9A6C\u978D\u5C71\u5E02|maanshan|mas","\u6DEE\u5317\u5E02|huaibei|hb","\u94DC\u9675\u5E02|tongling|tl","\u5B89\u5E86\u5E02|anqing|aq","\u9EC4\u5C71\u5E02|huangshan|hs","\u6EC1\u5DDE\u5E02|chuzhou|cz","\u961C\u9633\u5E02|fuyang|fy","\u5BBF\u5DDE\u5E02|suzhou|sz","\u5DE2\u6E56\u5E02|chaohu|ch","\u516D\u5B89\u5E02|luan|la","\u4EB3\u5DDE\u5E02|bozhou|bz","\u6C60\u5DDE\u5E02|chizhou|cz","\u5BA3\u57CE\u5E02|xuancheng|xc","\u798F\u5DDE\u5E02|fuzhou|fz","\u53A6\u95E8\u5E02|xiamen|xm","\u8386\u7530\u5E02|putian|pt","\u4E09\u660E\u5E02|sanming|sm","\u6CC9\u5DDE\u5E02|quanzhou|qz","\u6F33\u5DDE\u5E02|zhangzhou|zz","\u5357\u5E73\u5E02|nanping|np","\u9F99\u5CA9\u5E02|longyan|ly","\u5B81\u5FB7\u5E02|ningde|nd","\u666F\u5FB7\u9547\u5E02|jingdezhen|jdz","\u840D\u4E61\u5E02|pingxiang|px","\u4E5D\u6C5F\u5E02|jiujiang|jj","\u65B0\u4F59\u5E02|xinyu|xy","\u9E70\u6F6D\u5E02|yingtan|yt","\u8D63\u5DDE\u5E02|ganzhou|gz","\u5409\u5B89\u5E02|jian|ja","\u5B9C\u6625\u5E02|yichun|yc","\u629A\u5DDE\u5E02|fuzhou|fz","\u4E0A\u9976\u5E02|shangrao|sr","\u6D4E\u5357\u5E02|jinan|jn","\u6DC4\u535A\u5E02|zibo|zb","\u67A3\u5E84\u5E02|zaozhuang|zz","\u4E1C\u8425\u5E02|dongying|dy","\u70DF\u53F0\u5E02|yantai|yt","\u6F4D\u574A\u5E02|weifang|wf","\u6D4E\u5B81\u5E02|jining|jn","\u6CF0\u5B89\u5E02|taian|ta","\u5A01\u6D77\u5E02|weihai|wh","\u65E5\u7167\u5E02|rizhao|rz","\u83B1\u829C\u5E02|laiwu|lw","\u4E34\u6C82\u5E02|linyi|ly","\u5FB7\u5DDE\u5E02|dezhou|dz","\u804A\u57CE\u5E02|liaocheng|lc","\u6EE8\u5DDE\u5E02|binzhou|bz","\u83CF\u6CFD\u5E02|heze|hz","\u5F00\u5C01\u5E02|kaifeng|kf","\u6D1B\u9633\u5E02|luoyang|ly","\u5E73\u9876\u5C71\u5E02|pingdingshan|pds","\u5B89\u9633\u5E02|anyang|ay","\u9E64\u58C1\u5E02|hebi|hb","\u65B0\u4E61\u5E02|xinxiang|xx","\u7126\u4F5C\u5E02|jiaozuo|jz","\u6FEE\u9633\u5E02|puyang|py","\u8BB8\u660C\u5E02|xuchang|xc","\u6F2F\u6CB3\u5E02|luohe|lh","\u4E09\u95E8\u5CE1\u5E02|sanmenxia|smx","\u5357\u9633\u5E02|nanyang|ny","\u5546\u4E18\u5E02|shangqiu|sq","\u4FE1\u9633\u5E02|xinyang|xy","\u5468\u53E3\u5E02|zhoukou|zk","\u9A7B\u9A6C\u5E97\u5E02|zhumadian|zmd","\u6D4E\u6E90\u5E02|jiyuan|jiyuan","\u9EC4\u77F3\u5E02|huangshi|hs","\u5341\u5830\u5E02|shiyan|sy","\u5B9C\u660C\u5E02|yichang|yc","\u8944\u6A0A\u5E02|xiangfan|xf","\u9102\u5DDE\u5E02|ezhou|ez","\u8346\u95E8\u5E02|jingmen|jm","\u5B5D\u611F\u5E02|xiaogan|xg","\u8346\u5DDE\u5E02|jingzhou|jz","\u9EC4\u5188\u5E02|huanggang|hg","\u54B8\u5B81\u5E02|xianning|xn","\u968F\u5DDE\u5E02|suizhou|sz","\u6069\u65BD\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE|estjzmzzzz|estjzmzzzz","\u4ED9\u6843\u5E02|xiantao|xt","\u6F5C\u6C5F\u5E02|qianjiang|qj","\u5929\u95E8\u5E02|tianmen|tm","\u795E\u519C\u67B6\u6797\u533A|shennongjia|snjlq","\u682A\u6D32\u5E02|zhuzhou|zz","\u6E58\u6F6D\u5E02|xiangtan|xt","\u8861\u9633\u5E02|hengyang|hy","\u90B5\u9633\u5E02|shaoyang|sy","\u5CB3\u9633\u5E02|yueyang|yy","\u5E38\u5FB7\u5E02|changde|cd","\u5F20\u5BB6\u754C\u5E02|zhangjiajie|zjj","\u76CA\u9633\u5E02|yiyang|yy","\u90F4\u5DDE\u5E02|chenzhou|cz","\u6C38\u5DDE\u5E02|yongzhou|yz","\u6000\u5316\u5E02|huaihua|hh","\u5A04\u5E95\u5E02|loudi|ld","\u6E58\u897F\u571F\u5BB6\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE|xxtjzmzzzz|xxtjzmzzzz","\u97F6\u5173\u5E02|shaoguan|sg","\u73E0\u6D77\u5E02|zhuhai|zh","\u6C55\u5934\u5E02|shantou|st","\u4F5B\u5C71\u5E02|foushan|fs","\u6C5F\u95E8\u5E02|jiangmen|jm","\u6E5B\u6C5F\u5E02|zhanjiang|jz","\u8302\u540D\u5E02|maoming|mm","\u8087\u5E86\u5E02|zhaoqing|zq","\u60E0\u5DDE\u5E02|huizhou|hz","\u6885\u5DDE\u5E02|meizhou|mz","\u6C55\u5C3E\u5E02|shanwei|sw","\u6CB3\u6E90\u5E02|heyuan|hy","\u9633\u6C5F\u5E02|yangjiang|yj","\u6E05\u8FDC\u5E02|qingyuan|qy","\u4E1C\u839E\u5E02|dongguan|dg","\u4E2D\u5C71\u5E02|zhongshan|zs","\u6F6E\u5DDE\u5E02|chaozhou|cz","\u63ED\u9633\u5E02|jieyang|jy","\u4E91\u6D6E\u5E02|yunfu|yf","\u5357\u5B81\u5E02|nanning|nn","\u67F3\u5DDE\u5E02|liuzhou|lz","\u6842\u6797\u5E02|guilin|gl","\u68A7\u5DDE\u5E02|wuzhou|wz","\u5317\u6D77\u5E02|beihai|bh","\u9632\u57CE\u6E2F\u5E02|fangchenggang|fcg","\u94A6\u5DDE\u5E02|qinzhou|qz","\u8D35\u6E2F\u5E02|guigang|gg","\u7389\u6797\u5E02|yulin|yl","\u767E\u8272\u5E02|baise|bs","\u8D3A\u5DDE\u5E02|hezhou|hz","\u6CB3\u6C60\u5E02|hechi|hc","\u6765\u5BBE\u5E02|laibin|lb","\u5D07\u5DE6\u5E02|chongzuo|cz","\u6D77\u53E3\u5E02|haikou|hk","\u4E09\u4E9A\u5E02|sanya|sy","\u4E94\u6307\u5C71\u5E02|wuzhishan|wzs","\u743C\u6D77\u5E02|qionghai|qh","\u510B\u5DDE\u5E02|danzhou|dz","\u6587\u660C\u5E02|wenchang|wc","\u4E07\u5B81\u5E02|wanning|wn","\u4E1C\u65B9\u5E02|dongfang|df","\u5B9A\u5B89\u53BF|dingan|da","\u5C6F\u660C\u53BF|tunchang|tc","\u6F84\u8FC8\u53BF|chengmai|cm","\u4E34\u9AD8\u53BF|lingao|lg","\u767D\u6C99\u9ECE\u65CF\u81EA\u6CBB\u53BF|bsnzzzx|bsnzzzx","\u660C\u6C5F\u9ECE\u65CF\u81EA\u6CBB\u53BF|cjlzzzx|cjlzzzx","\u4E50\u4E1C\u9ECE\u65CF\u81EA\u6CBB\u53BF|ldlzzzx|ldlzzzx","\u9675\u6C34\u9ECE\u65CF\u81EA\u6CBB\u53BF|lingshui|ls","\u4FDD\u4EAD\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF|btlzmzzzx|btlzmzzzx","\u743C\u4E2D\u9ECE\u65CF\u82D7\u65CF\u81EA\u6CBB\u53BF|qzlzmzzzx|qzlzmzzzx","\u897F\u6C99\u7FA4\u5C9B|xishaqundao|xsqd","\u5357\u6C99\u7FA4\u5C9B|nanshaqundao|nsqd","\u4E2D\u6C99\u7FA4\u5C9B\u7684\u5C9B\u7901\u53CA\u5176\u6D77\u57DF|zhongshaqundao|zsqd","\u81EA\u8D21\u5E02|zigong|zg","\u6500\u679D\u82B1\u5E02|panzhihua|pzh","\u6CF8\u5DDE\u5E02|luzhou|lz","\u5FB7\u9633\u5E02|deyang|dy","\u7EF5\u9633\u5E02|mianyang|my","\u5E7F\u5143\u5E02|guangyuan|gy","\u9042\u5B81\u5E02|suining|sn","\u5185\u6C5F\u5E02|neijiang|nj","\u4E50\u5C71\u5E02|leshan|ls","\u5357\u5145\u5E02|nanchong|nc","\u7709\u5C71\u5E02|meishan|ms","\u5B9C\u5BBE\u5E02|yibin|yb","\u5E7F\u5B89\u5E02|guangan|ga","\u8FBE\u5DDE\u5E02|dazhou|dz","\u96C5\u5B89\u5E02|yaan|ya","\u5DF4\u4E2D\u5E02|bazhong|bz","\u8D44\u9633\u5E02|ziyang|zy","\u963F\u575D\u85CF\u65CF\u7F8C\u65CF\u81EA\u6CBB\u5DDE|abzzqzzzz|abzzqzzzz","\u7518\u5B5C\u85CF\u65CF\u81EA\u6CBB\u5DDE|gzzzzzz|gzzzzzz","\u51C9\u5C71\u5F5D\u65CF\u81EA\u6CBB\u5DDE|lsyzzzz|lsyzzzz","\u8D35\u9633\u5E02|guiyang|gy","\u516D\u76D8\u6C34\u5E02|liupanshui|lps","\u9075\u4E49\u5E02|zunyi|zy","\u5B89\u987A\u5E02|anshun|as","\u94DC\u4EC1\u5730\u533A|tongren|tr","\u9ED4\u897F\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE|qxnbyzmzzzz|qxnbyzmzzzz","\u6BD5\u8282\u5730\u533A|bijie|bj","\u9ED4\u4E1C\u5357\u82D7\u65CF\u4F97\u65CF\u81EA\u6CBB\u5DDE|qdnmzdzzzz|qdnmzdzzzz","\u9ED4\u5357\u5E03\u4F9D\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE|qnbyzmzzzz|qnbyzmzzzz","\u6606\u660E\u5E02|kunming|km","\u66F2\u9756\u5E02|qujing|qj","\u7389\u6EAA\u5E02|yuxi|yx","\u4FDD\u5C71\u5E02|baoshan|bs","\u662D\u901A\u5E02|zhaotong|zt","\u4E3D\u6C5F\u5E02|lijiang|lj","\u601D\u8305\u5E02|simao|sm","\u4E34\u6CA7\u5E02|lincang|lc","\u695A\u96C4\u5F5D\u65CF\u81EA\u6CBB\u5DDE|cxyzzzz|cxyzzzz","\u7EA2\u6CB3\u54C8\u5C3C\u65CF\u5F5D\u65CF\u81EA\u6CBB\u5DDE|hhhnzyzzzz|hhhnzyzzzz","\u6587\u5C71\u58EE\u65CF\u82D7\u65CF\u81EA\u6CBB\u5DDE|wszzmzzzz|wszzmzzzz","\u897F\u53CC\u7248\u7EB3\u50A3\u65CF\u81EA\u6CBB\u5DDE|xsbndzzzz|xsbndzzzz","\u5927\u7406\u767D\u65CF\u81EA\u6CBB\u5DDE|dlbzzzz|dlbzzzz","\u5FB7\u5B8F\u50A3\u65CF\u666F\u9887\u65CF\u81EA\u6CBB\u5DDE|dhdzjpzzzz|dhdzjpzzzz","\u6012\u6C5F\u5088\u50F3\u65CF\u81EA\u6CBB\u5DDE|njlszzzz|njlszzzz","\u8FEA\u5E86\u85CF\u65CF\u81EA\u6CBB\u5DDE|dqzzzzz|dqzzzzz","\u62C9\u8428\u5E02|lasa|ls","\u660C\u90FD\u5730\u533A|changdudiqu|cd","\u5C71\u5357\u5730\u533A|shannandiqu|sndq","\u65E5\u5580\u5219\u5730\u533A|rikazediqu|rkzdq","\u90A3\u66F2\u5730\u533A|naqudiqu|nqdq","\u963F\u91CC\u5730\u533A|alidiqu|aldq","\u6797\u829D\u5730\u533A|linzhidiqu|lzdq","\u897F\u5B89\u5E02|xian|xa","\u94DC\u5DDD\u5E02|tongchuan|tc","\u5B9D\u9E21\u5E02|baoji|bj","\u54B8\u9633\u5E02|xianyang|xy","\u6E2D\u5357\u5E02|weinan|wn","\u5EF6\u5B89\u5E02|yanan|ya","\u6C49\u4E2D\u5E02|hanzhong|hz","\u6986\u6797\u5E02|yulin|yl","\u5B89\u5EB7\u5E02|ankang|ak","\u5546\u6D1B\u5E02|shangluo|sl","\u5170\u5DDE\u5E02|lanzhou|lz","\u5609\u5CEA\u5173\u5E02|jiayuguan|jyg","\u91D1\u660C\u5E02|jinchang|jc","\u767D\u94F6\u5E02|baiyin|by","\u5929\u6C34\u5E02|tianshui|ts","\u6B66\u5A01\u5E02|wuwei|ww","\u5F20\u6396\u5E02|zhangye|zy","\u5E73\u51C9\u5E02|pingliang|pl","\u9152\u6CC9\u5E02|jiuquan|jq","\u5E86\u9633\u5E02|qingyang|qy","\u5B9A\u897F\u5E02|dingxi|dx","\u9647\u5357\u5E02|longnan|ln","\u4E34\u590F\u56DE\u65CF\u81EA\u6CBB\u5DDE|lxhzzzz|lxhzzzz","\u7518\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE|gnzzzzz|gnzzzzz","\u897F\u5B81\u5E02|xining|xn","\u6D77\u4E1C\u5730\u533A|haidongdiqu|hddq","\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u5DDE|hbzzzzz|hbzzzzz","\u9EC4\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE|hnzzzzz|hnzzzzz","\u6D77\u5357\u85CF\u65CF\u81EA\u6CBB\u5DDE|hnzzzzz|hnzzzzz","\u679C\u6D1B\u85CF\u65CF\u81EA\u6CBB\u5DDE|glzzzzz|hlzzzzz","\u7389\u6811\u85CF\u65CF\u81EA\u6CBB\u5DDE|yszzzzz|yszzzzz","\u6D77\u897F\u8499\u53E4\u65CF\u85CF\u65CF\u81EA\u6CBB\u5DDE|hxmgzzzzzz|hxmgzzzzzz","\u94F6\u5DDD\u5E02|yinchuan|yc","\u77F3\u5634\u5C71\u5E02|shizuishan|szs","\u5434\u5FE0\u5E02|wuzhong|wz","\u56FA\u539F\u5E02|guyuan|gy","\u4E2D\u536B\u5E02|zhongwei|zw","\u4E4C\u9C81\u6728\u9F50\u5E02|wulumuqi|wlmq","\u514B\u62C9\u739B\u4F9D\u5E02|kelamayi|klmy","\u5410\u9C81\u756A\u5730\u533A|tulufandiqu|tlfdq","\u54C8\u5BC6\u5730\u533A|hamidiqu|hmdq","\u660C\u5409\u56DE\u65CF\u81EA\u6CBB\u5DDE|cjhzzzz|cjhzzzz","\u535A\u5C14\u5854\u62C9\u8499\u53E4\u81EA\u6CBB\u5DDE|betlmgzzz|betlmgzzz","\u5DF4\u97F3\u90ED\u695E\u8499\u53E4\u81EA\u6CBB\u5DDE|byglmgzzz|byglmgzzz","\u963F\u514B\u82CF\u5730\u533A|akesudiqu|aksdq","\u514B\u5B5C\u52D2\u82CF\u67EF\u5C14\u514B\u5B5C\u81EA\u6CBB\u5DDE|kzlskekzzzz|kzlskekzzzz","\u5580\u4EC0\u5730\u533A|kashidiqu|ksdq","\u548C\u7530\u5730\u533A|hetian|ht","\u4F0A\u7281\u54C8\u8428\u514B\u81EA\u6CBB\u5DDE|ylhskzzz|ylhskzzz","\u5854\u57CE\u5730\u533A|tachengdiqu|tcdq","\u963F\u52D2\u6CF0\u5730\u533A|aletaidiqu|altdq","\u77F3\u6CB3\u5B50\u5E02|shihezi|shz","\u963F\u62C9\u5C14\u5E02|alaer|ale","\u56FE\u6728\u8212\u514B\u5E02|tumushuke|tmsk","\u4E94\u5BB6\u6E20\u5E02|wujiaqu|wjq","\u53F0\u5317\u5E02|taibei|tb","\u9AD8\u96C4\u5E02|gaoxiong|gx","\u57FA\u9686\u5E02|jilong|jl","\u53F0\u4E2D\u5E02|taizhong|tz","\u53F0\u5357\u5E02|tainan|tn","\u65B0\u7AF9\u5E02|xinzhu|xz","\u5609\u4E49\u5E02|jiayi|jy","\u53F0\u5317\u53BF|taibeixian|tbx","\u5B9C\u5170\u53BF|yilanxian|ylx","\u6843\u56ED\u53BF|taoyuanxian|tyx","\u65B0\u7AF9\u53BF|xinzhuxian|xzx","\u82D7\u6817\u53BF|miaolixian|mlx","\u53F0\u4E2D\u53BF|taizhongxian|tzx","\u5F70\u5316\u53BF|zhanghuaxian|zhx","\u5357\u6295\u53BF|nantouxian|ntx","\u4E91\u6797\u53BF|yunlinxian|ylx","\u5609\u4E49\u53BF|jiayixian|jyx","\u53F0\u5357\u53BF|tainanxian|tnx","\u9AD8\u96C4\u53BF|gaoxiongxian|gxx","\u5C4F\u4E1C\u53BF|pingdongxian|pdx","\u6F8E\u6E56\u53BF|penghuxian|phx","\u53F0\u4E1C\u53BF|taidongxian|tdx","\u82B1\u83B2\u53BF|hualianxian|hlx","\u4E2D\u897F\u533A|zhongxiqu|zxq","\u4E1C\u533A|dongqu|dq","\u4E5D\u9F99\u57CE\u533A|jiulongchengqu|jlcq","\u89C2\u5858\u533A|guantangqu|gtq","\u5357\u533A|nanqu|nq","\u6DF1\u6C34\u57D7\u533A|shenshuibuqu|ssbq","\u9EC4\u5927\u4ED9\u533A|huangdaxianqu|hdxq","\u6E7E\u4ED4\u533A|wanzaiqu|wzq","\u6CB9\u5C16\u65FA\u533A|youjianwangqu|yjwq","\u79BB\u5C9B\u533A|lidaoqu|ldq","\u8475\u9752\u533A|kuiqingqu|kqq","\u5317\u533A|beiqu|bq","\u897F\u8D21\u533A|xigongqu|xgq","\u6C99\u7530\u533A|shatianqu|stq","\u5C6F\u95E8\u533A|tunmenqu|tmq","\u5927\u57D4\u533A|dabuqu|dbq","\u8343\u6E7E\u533A|quanwanqu|qwq","\u5143\u6717\u533A|yuanlangqu|ylq","\u82B1\u5730\u739B\u5802\u533A|huadimatangqu|hdmtq","\u5723\u5B89\u591A\u5C3C\u5802\u533A|shenganduonitangqu|sadntq","\u5927\u5802\u533A|datangqu|dtq","\u671B\u5FB7\u5802\u533A|wangdetangqu|wdtq","\u98CE\u987A\u5802\u533A|fengshuntangqu|fstq","\u5609\u6A21\u5802\u533A|jiamotangqu|jmtq","\u5723\u65B9\u6D4E\u5404\u5802\u533A|shengfangjigetangqu|sfjgtq"],Vcity.regEx=/^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i,Vcity.regExChiese=/([\u4E00-\u9FA5\uf900-\ufa2d]+)/,function(){var a,b,c=Vcity.allCity,d=Vcity.regEx,e=/^[a-b]$/i,f=/^[c-d]$/i,g=/^[e-g]$/i,h=/^[h]$/i,j=/^[j]$/i,k=/^[k-l]$/i,l=/^[m-p]$/i,m=/^[q-r]$/i,o=/^[s]$/i,p=/^[t]$/i,q=/^[w]$/i,r=/^[x]$/i,s=/^[y]$/i,t=/^[z]$/i;if(!Vcity.oCity){Vcity.oCity={hot:{},AB:{},CD:{},EFG:{},H:{},J:{},KL:{},MNP:{},QR:{},S:{},T:{},W:{},X:{},Y:{},Z:{}};for(var u=0,v=c.length;u<v;u++)a=d.exec(c[u]),b=a[3].toUpperCase(),e.test(b)?(!Vcity.oCity.AB[b]&&(Vcity.oCity.AB[b]=[]),Vcity.oCity.AB[b].push(a[1])):f.test(b)?(!Vcity.oCity.CD[b]&&(Vcity.oCity.CD[b]=[]),Vcity.oCity.CD[b].push(a[1])):g.test(b)?(!Vcity.oCity.EFG[b]&&(Vcity.oCity.EFG[b]=[]),Vcity.oCity.EFG[b].push(a[1])):h.test(b)?(!Vcity.oCity.H[b]&&(Vcity.oCity.H[b]=[]),Vcity.oCity.H[b].push(a[1])):j.test(b)?(!Vcity.oCity.J[b]&&(Vcity.oCity.J[b]=[]),Vcity.oCity.J[b].push(a[1])):k.test(b)?(!Vcity.oCity.KL[b]&&(Vcity.oCity.KL[b]=[]),Vcity.oCity.KL[b].push(a[1])):l.test(b)?(!Vcity.oCity.MNP[b]&&(Vcity.oCity.MNP[b]=[]),Vcity.oCity.MNP[b].push(a[1])):m.test(b)?(!Vcity.oCity.QR[b]&&(Vcity.oCity.QR[b]=[]),Vcity.oCity.QR[b].push(a[1])):o.test(b)?(!Vcity.oCity.S[b]&&(Vcity.oCity.S[b]=[]),Vcity.oCity.S[b].push(a[1])):p.test(b)?(!Vcity.oCity.T[b]&&(Vcity.oCity.T[b]=[]),Vcity.oCity.T[b].push(a[1])):q.test(b)?(!Vcity.oCity.W[b]&&(Vcity.oCity.W[b]=[]),Vcity.oCity.W[b].push(a[1])):r.test(b)?(!Vcity.oCity.X[b]&&(Vcity.oCity.X[b]=[]),Vcity.oCity.X[b].push(a[1])):s.test(b)?(!Vcity.oCity.Y[b]&&(Vcity.oCity.Y[b]=[]),Vcity.oCity.Y[b].push(a[1])):t.test(b)&&(!Vcity.oCity.Z[b]&&(Vcity.oCity.Z[b]=[]),Vcity.oCity.Z[b].push(a[1])),20>u&&(!Vcity.oCity.hot.hot&&(Vcity.oCity.hot.hot=[]),Vcity.oCity.hot.hot.push(a[1]))}}(),Vcity._template=["<p class=\"tip\">\u76F4\u63A5\u8F93\u5165\u53EF\u641C\u7D22\u57CE\u5E02(\u652F\u6301\u6C49\u5B57/\u62FC\u97F3)</p>","<ul>","<li class=\"on\">\u70ED\u95E8\u57CE\u5E02</li>","<li>AB</li>","<li>CD</li>","<li>EFG</li>","<li>H</li>","<li>J</li>","<li>KL</li>","<li>MNP</li>","<li>QR</li>","<li>S</li>","<li>T</li>","<li>W</li>","<li>X</li>","<li>Y</li>","<li>Z</li>","</ul>"],Vcity.CitySelector=function(){this.initialize.apply(this,arguments)},Vcity.CitySelector.prototype={constructor:Vcity.CitySelector,initialize:function(a){var b=a.input;this.input=Vcity._m.$("#"+b),this.inputEvent()},createWarp:function(){var a=Vcity._m.getPos(this.input),b=this.rootDiv=document.createElement("div"),c=this;Vcity._m.on(this.rootDiv,"click",function(a){Vcity._m.stopPropagation(a)}),Vcity._m.on(document,"click",function(a){a=Vcity._m.getEvent(a);var b=Vcity._m.getTarget(a);return b!=c.input&&void(c.cityBox&&Vcity._m.addClass("hide",c.cityBox),c.ul&&Vcity._m.addClass("hide",c.ul),c.myIframe&&Vcity._m.addClass("hide",c.myIframe))}),b.className="citySelector",b.style.position="absolute",b.style.left=a.left+"px",b.style.top=a.bottom+5+"px",b.style.zIndex=999999;var d=!!document.all,e=this.isIE6=d&&!window.XMLHttpRequest;if(e){var f=this.myIframe=document.createElement("iframe");f.frameborder="0",f.src="about:blank",f.style.position="absolute",f.style.zIndex="-1",this.rootDiv.appendChild(this.myIframe)}var g=this.cityBox=document.createElement("div");g.className="cityBox",g.id="cityBox",g.innerHTML=Vcity._template.join("");var h=this.hotCity=document.createElement("div");h.className="hotCity",g.appendChild(h),b.appendChild(g),this.createHotCity()},createHotCity:function(){var a,b,c,d,e,f,g,h,l=[],m=Vcity.regEx,o=Vcity.oCity;for(f in o){for(g in a=this[f]=document.createElement("div"),a.className=f+" cityTab hide",h=[],o[f])h.push(g),h.sort();for(var p=0,q=h.length;p<q;p++){b=document.createElement("dl"),c=document.createElement("dt"),d=document.createElement("dd"),c.innerHTML="hot"==h[p]?"&nbsp;":h[p],l=[];for(var k=0,r=o[f][h[p]].length;k<r;k++)e="<a href=\"#\">"+o[f][h[p]][k]+"</a>",l.push(e);d.innerHTML=l.join(""),b.appendChild(c),b.appendChild(d),a.appendChild(b)}Vcity._m.removeClass("hide",this.hot),this.hotCity.appendChild(a)}document.body.appendChild(this.rootDiv),this.changeIframe(),this.tabChange(),this.linkEvent()},tabChange:function(){for(var a=Vcity._m.$("li",this.cityBox),b=Vcity._m.$("div",this.hotCity),c=this,d=0,e=a.length;d<e;d++)a[d].index=d,a[d].onclick=function(){for(var d=0;d<e;d++)Vcity._m.removeClass("on",a[d]),Vcity._m.addClass("hide",b[d]);Vcity._m.addClass("on",this),Vcity._m.removeClass("hide",b[this.index]),c.changeIframe()}},linkEvent:function(){for(var a=Vcity._m.$("a",this.hotCity),b=this,c=0,d=a.length;c<d;c++)a[c].onclick=function(){b.input.value=this.innerHTML,Vcity._m.addClass("hide",b.cityBox),Vcity._m.addClass("hide",b.myIframe)}},inputEvent:function(){var a=this;Vcity._m.on(this.input,"click",function(b){b=b||window.event,a.cityBox?!!a.cityBox&&Vcity._m.hasClass("hide",a.cityBox)&&(!a.ul||a.ul&&Vcity._m.hasClass("hide",a.ul))&&(Vcity._m.removeClass("hide",a.cityBox),Vcity._m.removeClass("hide",a.myIframe),a.changeIframe()):a.createWarp()}),Vcity._m.on(this.input,"blur",function(){var b=Vcity._m.trim(a.input.value);if(""!=b){for(var c=new RegExp("^"+b+"|\\|"+b,"gi"),d=0,e=0,f=Vcity.allCity.length;e<f;e++)c.test(Vcity.allCity[e])&&d++;if(0==d)a.input.value="";else{var g=Vcity._m.$("li",a.ul);if("object"==typeof g&&0<g.length){var h=g[0],j=h.children;j&&1<j.length&&(a.input.value=j[0].innerHTML)}else a.input.value=""}}}),Vcity._m.on(this.input,"keyup",function(b){b=b||window.event;var c=b.keyCode;Vcity._m.addClass("hide",a.cityBox),a.createUl(),Vcity._m.removeClass("hide",a.myIframe),!a.ul||Vcity._m.hasClass("hide",a.ul)||a.isEmpty||a.KeyboardEvent(b,c)})},createUl:function(){var a,b=Vcity._m.trim(this.input.value);if(""!==b){for(var c=new RegExp("^"+b+"|\\|"+b,"gi"),d=[],e=0,f=Vcity.allCity.length;e<f;e++)if(c.test(Vcity.allCity[e])){var g=Vcity.regEx.exec(Vcity.allCity[e]);a=0===d.length?"<li class=\"on\"><b class=\"cityname\">"+g[1]+"</b><b class=\"cityspell\">"+g[2]+"</b></li>":"<li><b class=\"cityname\">"+g[1]+"</b><b class=\"cityspell\">"+g[2]+"</b></li>",d.push(a)}if(this.isEmpty=!1,0==d.length&&(this.isEmpty=!0,a="<li class=\"empty\">\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u627E\u5230 \"<em>"+b+"</em>\"</li>",d.push(a)),!this.ul){var h=this.ul=document.createElement("ul");h.className="cityslide mCustomScrollbar",this.rootDiv&&this.rootDiv.appendChild(h),this.count=0}else this.ul&&Vcity._m.hasClass("hide",this.ul)&&(this.count=0,Vcity._m.removeClass("hide",this.ul));this.ul.innerHTML=d.join(""),this.changeIframe(),this.liEvent()}else Vcity._m.addClass("hide",this.ul),Vcity._m.removeClass("hide",this.cityBox),Vcity._m.removeClass("hide",this.myIframe),this.changeIframe()},changeIframe:function(){this.isIE6&&(this.myIframe.style.width=this.rootDiv.offsetWidth+"px",this.myIframe.style.height=this.rootDiv.offsetHeight+"px")},KeyboardEvent:function(a,b){var c=Vcity._m.$("li",this.ul),d=c.length;switch(b){case 40:this.count++,this.count>d-1&&(this.count=0);for(var e=0;e<d;e++)Vcity._m.removeClass("on",c[e]);Vcity._m.addClass("on",c[this.count]);break;case 38:for(this.count--,0>this.count&&(this.count=d-1),e=0;e<d;e++)Vcity._m.removeClass("on",c[e]);Vcity._m.addClass("on",c[this.count]);break;case 13:this.input.value=Vcity.regExChiese.exec(c[this.count].innerHTML)[0],Vcity._m.addClass("hide",this.ul),Vcity._m.addClass("hide",this.ul),Vcity._m.addClass("hide",this.myIframe);break;default:}},liEvent:function(){for(var a=this,b=Vcity._m.$("li",this.ul),c=0,d=b.length;c<d;c++)Vcity._m.on(b[c],"click",function(b){b=Vcity._m.getEvent(b);var c=Vcity._m.getTarget(b);a.input.value=Vcity.regExChiese.exec(c.innerHTML)[0],Vcity._m.addClass("hide",a.ul),Vcity._m.addClass("hide",a.myIframe)}),Vcity._m.on(b[c],"mouseover",function(a){a=Vcity._m.getEvent(a);var b=Vcity._m.getTarget(a);Vcity._m.addClass("on",b)}),Vcity._m.on(b[c],"mouseout",function(a){a=Vcity._m.getEvent(a);var b=Vcity._m.getTarget(a);Vcity._m.removeClass("on",b)})}};