
require(['js/conf/config'], function () {
    require(['jquery', 'swiper', 'floorslider', 'indexajaxmapping', 'template', 'common'], function ($, Swiper, floorSlider, ajaxmapping, template, common) {
        console.log('成功导入模块');

        
        
        
        $(function () {
            dataLoading();
            initTopBanner();
            initCitySelect();
            initSearchPro();
            initAllBanners();
            //滚动绑定
            windowScrollBind();
           


            var allModules = {
                
            }
            //动态载入

            function dataLoading(){
                //大轮播，数据载入,并初始化
                $.ajax({
                    type: 'get',
                    url: ajaxmapping.focus_gateway,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'jsonpFocus',
                    success: function (data) {
                       
                        $('#templates').load('http://localhost:8080/pages/templates/index/banner.html', function () {
                            var bannerStr = template('banner', {
                                list: data.data
                            });
                            
                            $('.kv_banner').html(bannerStr);
                            createBanner(data.data.length);
                        });
                    }
                });

                //搜索热词载入

                $.ajax({
                    type: 'get',
                    url: ajaxmapping.hotwords,
                    dataType: 'jsonp',
                    callback: 'callback',
                    jsonpCallback: 'jsonpHotWords',
                    success: function (data) {
                       
                        var firshChangeWord = data.data[0];
                        var $a = $('<a></a>');

                        $('#templates').load('http://localhost:8080/pages/templates/index/hotwords.html', function () {
                            var hotWordStr = template('hotwords', {
                                list: data.data
                            });

                            $('.hd_hotword_wrap').html(hotWordStr);
                            $('#hd_search').attr('placeholder', data.data[0][0].n);
                        })

                    }
                })


                //抢购商品载入,并初始化轮播图

                $.ajax({
                    type: 'get',
                    url: ajaxmapping.rushbuy,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'sonpSeckill',
                    success: function(data){
                       
                        $('#templates').load('http://localhost:8080/pages/templates/index/rushbuy.html',function(){
                            var rushBuyStr = template('rushbuy',{
                                list: data.indexMiaoSha
                            });
                           
                            $('.rush_buy_banner .swiper-wrapper').html(rushBuyStr);

                            //抢购轮播
                            var rbSwiper = new Swiper('.rush_buy_banner', {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                navigation: {
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                    disabledClass: 'my-button-disabled'
                                }
                            });
                        });

                        
                        
                    }
                   
                })

                //轮播图右侧图片展示
                $.ajax({
                    type: 'get',
                    url: ajaxmapping.kvrec,
                    dataType: 'jsonp',
                    jsonp: 'callback',
                    jsonpCallback: 'jsonpRec',
                    success: function(data){
                       
                        $('#templates').load('http://localhost:8080/pages/templates/index/kvrec.html',function(){
                            var kvrecStr = template('kvrec',{
                                list: data.data
                            });
                           
                            $('.kv_rec_wrap').html(kvrecStr);

                            
                        });

                        
                        
                    }
                   
                })


                //懂你想要

                $.getJSON('http://localhost:8080/js/data/index/pcyoulike.json',function(data){
                    console.log(data.result.data);
                    $('#templates').load('http://localhost:8080/pages/templates/index/youlike.html',function(){
                        var youlikeStr = template('youlike',{
                            list: data.result.data
                        });
                        console.log(youlikeStr.length);
                        $('.pyl_ul').html(youlikeStr);
                    });
                })
            }
            




            //--------------------topbanner---顶图下拉


            function initTopBanner() {
                //鼠标移入下拉， 移出上拉
                $('.topbanner_wrap').hover(function () {
                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        $('.topbanner_small').animate({
                            'height': 0

                        }, 200, function () {
                            $('.topbanner_small').css('display', 'none');
                        });
                        $('.topbanner_large').css({
                            'display': 'inline-block',
                            'height': '0'
                        }).animate({
                            'height': '250px'
                        }, 200)
                    }, 600);

                }, function () {

                    clearTimeout(this.timer);
                    this.timer = setTimeout(function () {
                        $('.topbanner_small').css({ 'display': 'block' }).animate({
                            'height': '80px'

                        }, 200);
                        $('.topbanner_large').animate({
                            'height': '0px'
                        }, 200, function () {
                            $('.topbanner_large').css('display', 'none');
                        });
                    }, 600)

                })
                //点击关闭，关闭顶部展示
                $('.topbanner_wrap .close_btn').on('click', function () {
                    $('.topbanner_wrap').fadeOut();
                });
            }



            /*----------------------地址选择(根据输入自动检索城市，未完成)-----------------------*/
            function searchInputCity(val) {
                var allCitys = ['北京市|beijing|bj', '上海市|shanghai|sh', '广州市|guangzhou|gz', '深圳市|shenzhen|sz', '南京市|nanjing|nj', '杭州市|hangzhou|hz', '天津市|tianjin|tj', '重庆市|chongqing|cq', '成都市|chengdu|cd', '青岛市|qingdao|qd', '苏州市|shuzhou|sz', '无锡市|wuxi|wx', '常州市|changzhou|cz', '温州市|wenzhou|wz', '武汉市|wuhan|wh', '长沙市|changsha|cs', '石家庄市|shijiazhuang|sjz', '南昌市|nanchang|nc', '三亚市|sanya|sy', '合肥市|hefei|hf', '郑州市|zhengzhou|zz', '保定市|baoding|bd', '唐山市|tangshan|ts', '秦皇岛市|qinhuangdao|qhd', '邯郸市|handan|hd', '邢台市|xingtai|xt', '张家口市|zhangjiakou|zjk', '承德市|chengde|cd', '衡水市|hengshui|hs', '廊坊市|langfang|lf', '沧州市|cangzhou|cz', '太原市|taiyuan|ty', '大同市|datong|dt', '阳泉市|yangquan|yq', '长治市|changzhi|cz', '晋城市|jincheng|jc', '朔州市|shuozhou|sz', '晋中市|jinzhong|jz', '运城市|yuncheng|yc', '忻州市|xinzhou|xz', '临汾市|linfen|lf', '吕梁市|lvliang|ll', '呼和浩特市|huhehaote|hhht', '包头市|baotou|bt', '乌海市|wuhai|wh', '赤峰市|chifeng|cf', '通辽市|tongliao|tl', '鄂尔多斯市|eerduosi|eeds', '呼伦贝尔市|hulunbeier|hlbe', '巴彦淖尔市|bayannaoer|byne', '乌兰察布市|wulanchabu|wlcb', '兴安盟|xinganmeng|xam', '锡林郭勒盟|xilinguolemeng|xlglm', '阿拉善盟|alashanmeng|alsm', '沈阳市|shenyang|sy', '大连市|dalian|dl', '鞍山市|anshan|as', '抚顺市|fushun|fs', '本溪市|benxi|bx', '丹东市|dandong|dd', '锦州市|jinzhou|jz', '营口市|yingkou|yk', '阜新市|fuxin|fx', '辽阳市|liaoyang|ly', '盘锦市|panjin|pj', '铁岭市|tieling|tl', '朝阳市|chaoyang|cy', '葫芦岛市|huludao|hld', '长春市|changchun|cc', '吉林市|jilin|jl', '四平市|siping|sp', '辽源市|liaoyuan|ly', '通化市|tonghua|th', '白山市|baishan|bs', '松原市|songyuan|sy', '白城市|baicheng|bc', '延边朝鲜族自治州|ybcxzzzz|ybcxzzzz', '哈尔滨市|haerbin|heb', '齐齐哈尔市|qiqihaer|qqhe', '鸡西市|jixi|jx', '鹤岗市|hegang|hg', '双鸭山市|shuangyashan|sys', '大庆市|daqing|dq', '伊春市|yichun|yc', '佳木斯市|jiamusi|jms', '七台河市|qitaihe|qth', '牡丹江市|mudanjiang|mdj', '黑河市|heihe|hh', '绥化市|suihua|sh', '大兴安岭地区|daxinganling|dxaldq', '徐州市|xuzhou|xz', '南通市|nantong|nt', '连云港市|lianyungang|lyg', '淮安市|huaian|ha', '盐城市|yancheng|yc', '扬州市|yangzhou|yz', '镇江市|zhenjiang|zj', '泰州市|taizhou|tz', '宿迁市|suqian|sq', '宁波市|ningbo|nb', '嘉兴市|jiaxing|jx', '湖州市|huzhou|hz', '绍兴市|shaoxing|sx', '舟山市|zhoushan|zs', '衢州市|quzhou|qz', '金华市|jinhua|jh', '台州市|taizhou|tz', '丽水市|lishui|ls', '芜湖市|wuhu|wh', '蚌埠市|bengbu|bb', '淮南市|huainan|hn', '马鞍山市|maanshan|mas', '淮北市|huaibei|hb', '铜陵市|tongling|tl', '安庆市|anqing|aq', '黄山市|huangshan|hs', '滁州市|chuzhou|cz', '阜阳市|fuyang|fy', '宿州市|suzhou|sz', '巢湖市|chaohu|ch', '六安市|luan|la', '亳州市|bozhou|bz', '池州市|chizhou|cz', '宣城市|xuancheng|xc', '福州市|fuzhou|fz', '厦门市|xiamen|xm', '莆田市|putian|pt', '三明市|sanming|sm', '泉州市|quanzhou|qz', '漳州市|zhangzhou|zz', '南平市|nanping|np', '龙岩市|longyan|ly', '宁德市|ningde|nd', '景德镇市|jingdezhen|jdz', '萍乡市|pingxiang|px', '九江市|jiujiang|jj', '新余市|xinyu|xy', '鹰潭市|yingtan|yt', '赣州市|ganzhou|gz', '吉安市|jian|ja', '宜春市|yichun|yc', '抚州市|fuzhou|fz', '上饶市|shangrao|sr', '济南市|jinan|jn', '淄博市|zibo|zb', '枣庄市|zaozhuang|zz', '东营市|dongying|dy', '烟台市|yantai|yt', '潍坊市|weifang|wf', '济宁市|jining|jn', '泰安市|taian|ta', '威海市|weihai|wh', '日照市|rizhao|rz', '莱芜市|laiwu|lw', '临沂市|linyi|ly', '德州市|dezhou|dz', '聊城市|liaocheng|lc', '滨州市|binzhou|bz', '菏泽市|heze|hz', '开封市|kaifeng|kf', '洛阳市|luoyang|ly', '平顶山市|pingdingshan|pds', '安阳市|anyang|ay', '鹤壁市|hebi|hb', '新乡市|xinxiang|xx', '焦作市|jiaozuo|jz', '濮阳市|puyang|py', '许昌市|xuchang|xc', '漯河市|luohe|lh', '三门峡市|sanmenxia|smx', '南阳市|nanyang|ny', '商丘市|shangqiu|sq', '信阳市|xinyang|xy', '周口市|zhoukou|zk', '驻马店市|zhumadian|zmd', '济源市|jiyuan|jiyuan', '黄石市|huangshi|hs', '十堰市|shiyan|sy', '宜昌市|yichang|yc', '襄樊市|xiangfan|xf', '鄂州市|ezhou|ez', '荆门市|jingmen|jm', '孝感市|xiaogan|xg', '荆州市|jingzhou|jz', '黄冈市|huanggang|hg', '咸宁市|xianning|xn', '随州市|suizhou|sz', '恩施土家族苗族自治州|estjzmzzzz|estjzmzzzz', '仙桃市|xiantao|xt', '潜江市|qianjiang|qj', '天门市|tianmen|tm', '神农架林区|shennongjia|snjlq', '株洲市|zhuzhou|zz', '湘潭市|xiangtan|xt', '衡阳市|hengyang|hy', '邵阳市|shaoyang|sy', '岳阳市|yueyang|yy', '常德市|changde|cd', '张家界市|zhangjiajie|zjj', '益阳市|yiyang|yy', '郴州市|chenzhou|cz', '永州市|yongzhou|yz', '怀化市|huaihua|hh', '娄底市|loudi|ld', '湘西土家族苗族自治州|xxtjzmzzzz|xxtjzmzzzz', '韶关市|shaoguan|sg', '珠海市|zhuhai|zh', '汕头市|shantou|st', '佛山市|foushan|fs', '江门市|jiangmen|jm', '湛江市|zhanjiang|jz', '茂名市|maoming|mm', '肇庆市|zhaoqing|zq', '惠州市|huizhou|hz', '梅州市|meizhou|mz', '汕尾市|shanwei|sw', '河源市|heyuan|hy', '阳江市|yangjiang|yj', '清远市|qingyuan|qy', '东莞市|dongguan|dg', '中山市|zhongshan|zs', '潮州市|chaozhou|cz', '揭阳市|jieyang|jy', '云浮市|yunfu|yf', '南宁市|nanning|nn', '柳州市|liuzhou|lz', '桂林市|guilin|gl', '梧州市|wuzhou|wz', '北海市|beihai|bh', '防城港市|fangchenggang|fcg', '钦州市|qinzhou|qz', '贵港市|guigang|gg', '玉林市|yulin|yl', '百色市|baise|bs', '贺州市|hezhou|hz', '河池市|hechi|hc', '来宾市|laibin|lb', '崇左市|chongzuo|cz', '海口市|haikou|hk', '三亚市|sanya|sy', '五指山市|wuzhishan|wzs', '琼海市|qionghai|qh', '儋州市|danzhou|dz', '文昌市|wenchang|wc', '万宁市|wanning|wn', '东方市|dongfang|df', '定安县|dingan|da', '屯昌县|tunchang|tc', '澄迈县|chengmai|cm', '临高县|lingao|lg', '白沙黎族自治县|bsnzzzx|bsnzzzx', '昌江黎族自治县|cjlzzzx|cjlzzzx', '乐东黎族自治县|ldlzzzx|ldlzzzx', '陵水黎族自治县|lingshui|ls', '保亭黎族苗族自治县|btlzmzzzx|btlzmzzzx', '琼中黎族苗族自治县|qzlzmzzzx|qzlzmzzzx', '西沙群岛|xishaqundao|xsqd', '南沙群岛|nanshaqundao|nsqd', '中沙群岛的岛礁及其海域|zhongshaqundao|zsqd', '自贡市|zigong|zg', '攀枝花市|panzhihua|pzh', '泸州市|luzhou|lz', '德阳市|deyang|dy', '绵阳市|mianyang|my', '广元市|guangyuan|gy', '遂宁市|suining|sn', '内江市|neijiang|nj', '乐山市|leshan|ls', '南充市|nanchong|nc', '眉山市|meishan|ms', '宜宾市|yibin|yb', '广安市|guangan|ga', '达州市|dazhou|dz', '雅安市|yaan|ya', '巴中市|bazhong|bz', '资阳市|ziyang|zy', '阿坝藏族羌族自治州|abzzqzzzz|abzzqzzzz', '甘孜藏族自治州|gzzzzzz|gzzzzzz', '凉山彝族自治州|lsyzzzz|lsyzzzz', '贵阳市|guiyang|gy', '六盘水市|liupanshui|lps', '遵义市|zunyi|zy', '安顺市|anshun|as', '铜仁地区|tongren|tr', '黔西南布依族苗族自治州|qxnbyzmzzzz|qxnbyzmzzzz', '毕节地区|bijie|bj', '黔东南苗族侗族自治州|qdnmzdzzzz|qdnmzdzzzz', '黔南布依族苗族自治州|qnbyzmzzzz|qnbyzmzzzz', '昆明市|kunming|km', '曲靖市|qujing|qj', '玉溪市|yuxi|yx', '保山市|baoshan|bs', '昭通市|zhaotong|zt', '丽江市|lijiang|lj', '思茅市|simao|sm', '临沧市|lincang|lc', '楚雄彝族自治州|cxyzzzz|cxyzzzz', '红河哈尼族彝族自治州|hhhnzyzzzz|hhhnzyzzzz', '文山壮族苗族自治州|wszzmzzzz|wszzmzzzz', '西双版纳傣族自治州|xsbndzzzz|xsbndzzzz', '大理白族自治州|dlbzzzz|dlbzzzz', '德宏傣族景颇族自治州|dhdzjpzzzz|dhdzjpzzzz', '怒江傈僳族自治州|njlszzzz|njlszzzz', '迪庆藏族自治州|dqzzzzz|dqzzzzz', '拉萨市|lasa|ls', '昌都地区|changdudiqu|cd', '山南地区|shannandiqu|sndq', '日喀则地区|rikazediqu|rkzdq', '那曲地区|naqudiqu|nqdq', '阿里地区|alidiqu|aldq', '林芝地区|linzhidiqu|lzdq', '西安市|xian|xa', '铜川市|tongchuan|tc', '宝鸡市|baoji|bj', '咸阳市|xianyang|xy', '渭南市|weinan|wn', '延安市|yanan|ya', '汉中市|hanzhong|hz', '榆林市|yulin|yl', '安康市|ankang|ak', '商洛市|shangluo|sl', '兰州市|lanzhou|lz', '嘉峪关市|jiayuguan|jyg', '金昌市|jinchang|jc', '白银市|baiyin|by', '天水市|tianshui|ts', '武威市|wuwei|ww', '张掖市|zhangye|zy', '平凉市|pingliang|pl', '酒泉市|jiuquan|jq', '庆阳市|qingyang|qy', '定西市|dingxi|dx', '陇南市|longnan|ln', '临夏回族自治州|lxhzzzz|lxhzzzz', '甘南藏族自治州|gnzzzzz|gnzzzzz', '西宁市|xining|xn', '海东地区|haidongdiqu|hddq', '海北藏族自治州|hbzzzzz|hbzzzzz', '黄南藏族自治州|hnzzzzz|hnzzzzz', '海南藏族自治州|hnzzzzz|hnzzzzz', '果洛藏族自治州|glzzzzz|hlzzzzz', '玉树藏族自治州|yszzzzz|yszzzzz', '海西蒙古族藏族自治州|hxmgzzzzzz|hxmgzzzzzz', '银川市|yinchuan|yc', '石嘴山市|shizuishan|szs', '吴忠市|wuzhong|wz', '固原市|guyuan|gy', '中卫市|zhongwei|zw', '乌鲁木齐市|wulumuqi|wlmq', '克拉玛依市|kelamayi|klmy', '吐鲁番地区|tulufandiqu|tlfdq', '哈密地区|hamidiqu|hmdq', '昌吉回族自治州|cjhzzzz|cjhzzzz', '博尔塔拉蒙古自治州|betlmgzzz|betlmgzzz', '巴音郭楞蒙古自治州|byglmgzzz|byglmgzzz', '阿克苏地区|akesudiqu|aksdq', '克孜勒苏柯尔克孜自治州|kzlskekzzzz|kzlskekzzzz', '喀什地区|kashidiqu|ksdq', '和田地区|hetian|ht', '伊犁哈萨克自治州|ylhskzzz|ylhskzzz', '塔城地区|tachengdiqu|tcdq', '阿勒泰地区|aletaidiqu|altdq', '石河子市|shihezi|shz', '阿拉尔市|alaer|ale', '图木舒克市|tumushuke|tmsk', '五家渠市|wujiaqu|wjq', '台北市|taibei|tb', '高雄市|gaoxiong|gx', '基隆市|jilong|jl', '台中市|taizhong|tz', '台南市|tainan|tn', '新竹市|xinzhu|xz', '嘉义市|jiayi|jy', '台北县|taibeixian|tbx', '宜兰县|yilanxian|ylx', '桃园县|taoyuanxian|tyx', '新竹县|xinzhuxian|xzx', '苗栗县|miaolixian|mlx', '台中县|taizhongxian|tzx', '彰化县|zhanghuaxian|zhx', '南投县|nantouxian|ntx', '云林县|yunlinxian|ylx', '嘉义县|jiayixian|jyx', '台南县|tainanxian|tnx', '高雄县|gaoxiongxian|gxx', '屏东县|pingdongxian|pdx', '澎湖县|penghuxian|phx', '台东县|taidongxian|tdx', '花莲县|hualianxian|hlx', '中西区|zhongxiqu|zxq', '东区|dongqu|dq', '九龙城区|jiulongchengqu|jlcq', '观塘区|guantangqu|gtq', '南区|nanqu|nq', '深水埗区|shenshuibuqu|ssbq', '黄大仙区|huangdaxianqu|hdxq', '湾仔区|wanzaiqu|wzq', '油尖旺区|youjianwangqu|yjwq', '离岛区|lidaoqu|ldq', '葵青区|kuiqingqu|kqq', '北区|beiqu|bq', '西贡区|xigongqu|xgq', '沙田区|shatianqu|stq', '屯门区|tunmenqu|tmq', '大埔区|dabuqu|dbq', '荃湾区|quanwanqu|qwq', '元朗区|yuanlangqu|ylq', '花地玛堂区|huadimatangqu|hdmtq', '圣安多尼堂区|shenganduonitangqu|sadntq', '大堂区|datangqu|dtq', '望德堂区|wangdetangqu|wdtq', '风顺堂区|fengshuntangqu|fstq', '嘉模堂区|jiamotangqu|jmtq', '圣方济各堂区|shengfangjigetangqu|sfjgtq'];
                var regEx = /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*$/i;
                var regExChiese = /([\u4E00-\u9FA5\uf900-\ufa2d]+)/;

                return {

                };
            }


            /*-----------------------headbar地址选项---------------------------*/


            function initCitySelect() {
                //点击打开地址框
                $('.header_city').on('click', function (e) {
                    e.stopPropagation();
                    $(this).addClass('active');
                    $('.hd_city_wrap').css('display', 'block');
                });
                //阻止事件传播
                $('.hd_city_wrap').on('click', function (e) {
                    e.stopPropagation();
                });

                //点击字母，滚动到相应的城市区域
                $('.hd_city_link_content a').on('click', function () {

                    var index = $(this).index();

                    $('.hd_city_list').stop().animate({
                        'scrollTop': $('.hd_city_list li').eq($(this).index()).position().top
                    })
                })


                //点击其它dom元素关闭地址框，搜索提示
                $(document).on('click', function () {
                    $('.header_city').removeClass("active");
                    $('.hd_city_wrap').css('display', 'none');


                });

                //城市输入框， 监听输入
                $('#hd_city_search_input').on('input', function () {
                    if ($(this).val() != '') {
                        $(this).parent().addClass("active");
                    } else {
                        $(this).parent().removeClass("active");
                    }
                });
                //清空输入框内容
                $('.hd_city_search_input_clear').on('click', function () {
                    $('#hd_city_search_input').val('');
                    $(this).parent().removeClass("active");
                })

                //地址输入框失去焦点
                $('#hd_city_search_input').on("blur", function () {
                    if ($(this).val() != '') {
                        $(this).parent().addClass("active");
                    } else {
                        $(this).parent().removeClass("active");
                    }
                });
            }


            /*---------------------商品搜索框------------------------*/


            function initSearchPro() {
                //阻止冒泡
                $('.hd_search_box').on('click', function (e) {
                    e.stopPropagation();
                })
                //输入内容发送请求
                $('#hd_search').on('input', common.debounce(function () {
                    $('.hd_search_result_box').html('');
                    if ($(this).val().trim() != '') {

                        $.ajax({
                            type: 'get',
                            url: ajaxmapping.search,

                            data: {
                                'keywordPrefix': $(this).val().trim()
                            },

                            success: function (data) {

                                if (data.data.length > 0) {
                                    $(data.data).each(function (index, item) {
                                       
                                        var searchItem = '<div class="hd_search_result_item">' + item + '</div>';

                                        $('.hd_search_result_box').append(searchItem);
                                    });
                                    $(".hd_search_result_box").css('display', 'block');
                                }
                            }
                        })
                    }
                }, 500));

                //点击搜索提示， 自动填充到输入框
                $('.hd_search_result_box').on('click', '.hd_search_result_item', function (e) {
                    e.stopPropagation();
                    $('#hd_search').val($(this).html());
                    $('.hd_search_result_box').css('display', 'none').empty();
                });
                $(document).on('click', function () {
                    $(".hd_search_result_box").css('display', 'none');
                    $('.hd_search_result_box').empty();
                })
            }



            /*-------------------初始化所有轮播图--------------------------------*/
            function initAllBanners() {
                //初始化所有小轮播

                floorSlider.floorStackSlide($('.index_floor_left_banner'));

                floorSlider.floorSwitcHover($('.column_part_banner'));

                //消息条滚动
                infoSlideInit($('.lb_banner'));
                function infoSlideInit(wrap) {
                    var box = wrap.find('ul');
                    var items = box.find('li');
                    var timer = null;
                    timer = setInterval(function () {
                        box.animate({
                            'margin-top': -items.height()
                        }, 500, function () {
                            box.css({
                                'margin-top': 0
                            }).find('li:first').appendTo(box);
                        })
                    }, 5000);
                    if (items.length <= 1) {

                    } else {
                        wrap.hover(function () {
                            clearInterval(timer);
                        }, function () {
                            timer = setInterval(function () {
                                box.animate({
                                    'margin-top': -items.height()
                                }, 500, function () {
                                    box.css({
                                        'margin-top': 0
                                    }).find('li:first').appendTo(box);
                                })
                            }, 5000);
                        })
                    }
                }



                


                //团购选项卡

                $('.gp_rank_tab_category').on('mouseenter', function () {
                    $(this).addClass('active').siblings().removeClass('active');

                })
            }


            /*----------------------大轮播封装------------------------*/
            function createBanner(num) {
                //初始化轮播图
                //kv_banner轮播
                var kvTimer = null;
                var kvIndex = 0;
                var kvSlides = num;
                $(".kv_banner_slide").eq(0).addClass('current');
                $(".kv_banner_pagination_item").eq(0).addClass('active');
                function bannerInit(slides, kvIndex) {
                    kvTimer = setInterval(function () {
                        kvIndex++;
                        if (kvIndex >= slides) {
                            kvIndex = 0;
                        }
                        kvBannerChange(kvIndex, '.kv_banner_slide', '.kv_banner_pagination_item');

                    }, 2000);
                }

                //轮播图切换
                function kvBannerChange(index, slideSelector, paginationSelector) {
                    $(slideSelector).eq(index).stop().fadeIn().siblings().stop().fadeOut();
                    $(paginationSelector).eq(index).addClass("active").siblings().removeClass('active');
                }
                bannerInit(kvSlides, kvIndex);
                //鼠标进入轮播区域，轮播停止
                $('.kv_banner').hover(function () {

                    clearInterval(kvTimer);
                }, function () {

                    bannerInit(kvSlides, kvIndex);
                });
                //分页器操作
                $('.kv_banner_pagination_item').on('mouseenter', function () {

                    kvIndex = $(this).index();
                    kvBannerChange(kvIndex, '.kv_banner_slide', '.kv_banner_pagination_item');
                });
            }



            function windowScrollBind(){
                
                $('body').on('scroll',common.throttle(function(){
                    
                    
                    if($(this).scrollTop() > $('.rush_buy_wrap').position().top){
                       
                        if($('.hd_search_w').hasClass('hd_search_fixed')){

                        }else{
                            $('.hd_search_w').addClass('hd_search_fixed').animate({
                                'top' : 0
                            });
                            
                        }
                       
                    }else{

                        if($('.hd_search_w').hasClass('hd_search_fixed')){
                            $('.hd_search_w').removeClass('hd_search_fixed');
                            $('.hd_search_w').css('top','-60px');
                        }
                       
                    }

                    
                },100));

                $('body').on('scroll',common.debounce(function(){
                    if($(this).scrollTop() > $('.rush_buy_wrap').position().top){
                        $('#floor_nav').fadeIn();
                    }else{
                        $('#floor_nav').fadeOut();
                    }
                },200));

                //点击对应楼梯跳转楼层

                $('#floor_nav li').not(':last').on('click',function(e){
                    e.stopPropagation();
                    console.log($(this).index());
                    var _top = $('.floor').eq($(this).index()).position().top - 100;
                   
                    console.log(_top)
                    $('body').stop().animate({
                        'scrollTop': _top
                    });
                    
                })
                
            }




           
           
        })







    })
})