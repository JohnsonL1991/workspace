define(['jquery'], function () {
    var b = {};
    b.floorSwitcHover = function (d) {
        if (!d || d.size() == 0) {
            return
        }
        var a = d.find(".left_slider");
        a.each(function () {
            var r = $(this);
            var n = r.find("ul li");
            var u = r.find(".slider_nav a");
            var p = n.length;
            if (p == 1) {
                return
            }
            var q = 0;
            var v = 0;
            var t = 3000;
            var c = 500;
            u.on("mouseenter", function () {
                q = $(this).index();
                o()
            });

            function o() {
                u.removeClass("cur").eq(q).addClass("cur");
                n.removeClass("cur").fadeOut(c).eq(q).addClass("cur").fadeIn(c)
            }
            function s() {
                v = setInterval(function () {
                    q++;
                    if (q > p - 1) {
                        q = 0
                    }
                    o()
                }, t)
            }
            s();
            r.on({
                mouseover: function () {
                    clearInterval(v)
                },
                mouseout: function () {
                    s()
                }
            })
        })
    };
    b.floorStackSlide = function (d) {
        if (!d || d.size() == 0) {
            return
        }
        var a = d.find("div.floor_silder");
        a.each(function () {
            var q = $(this);
            var s = q.find("ul");
            var t = q.find("ul li");
            var c = q.find(".prev_btn");
            var w = q.find(".next_btn");
            var u = t.length;
            q.find(".show_num").find("em").html(u);
            if (u == 1) {
                return
            }
            var p = 0;
            var y = 0;
            var x = 3000;
            w.click(function () {
                p++;
                if (p + 1 > u) {
                    p = 0
                }
                z(p);
                v();
                return false
            });
            c.click(function () {
                p--;
                if (p + 1 < 1) {
                    p = u - 1
                }
                z(p);
                v();
                return false
            });

            function z(e) {
                switch (e) {
                case 2:
                    t.eq(e).css("z-index", 100).stop().animate({
                        width: 195,
                        height: 225,
                        left: 0,
                        top: 0
                    });
                    t.eq(e - 1).css("z-index", 80).stop().animate({
                        width: 155,
                        height: 225,
                        left: 20,
                        top: -18
                    });
                    t.eq(e - 2).css("z-index", 90).stop().animate({
                        width: 175,
                        height: 225,
                        left: 10,
                        top: -10
                    });
                    t.eq(e).find(".color_mask").stop().animate({
                        opacity: 0
                    });
                    t.eq(e - 1).find(".color_mask").stop().animate({
                        opacity: 0.8
                    });
                    t.eq(e - 2).find(".color_mask").stop().animate({
                        opacity: 0.5
                    });
                    break;
                default:
                    t.eq(e).css("z-index", 100).stop().animate({
                        width: 195,
                        height: 225,
                        left: 0,
                        top: 0
                    });
                    t.eq(e - 1).css("z-index", 80).stop().animate({
                        width: 155,
                        height: 225,
                        left: 20,
                        top: -18
                    });
                    t.eq(e + 1).css("z-index", 90).stop().animate({
                        width: 175,
                        height: 225,
                        left: 10,
                        top: -10
                    });
                    t.eq(e).find(".color_mask").stop().animate({
                        opacity: 0
                    });
                    t.eq(e - 1).find(".color_mask").stop().animate({
                        opacity: 0.8
                    });
                    t.eq(e + 1).find(".color_mask").stop().animate({
                        opacity: 0.5
                    })
                }
            }
            function v() {
                q.find(".show_num").find("span").html(p + 1)
            }
            function r() {
                y = setInterval(function () {
                    w.click()
                }, x)
            }
            r();
            $(this).bind({
                mouseover: function () {
                    clearInterval(y)
                },
                mouseout: function () {
                    r()
                }
            })
        })
    };
    return b
});