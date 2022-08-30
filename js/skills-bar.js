$(function(){
    var numa = 0;
    var numb = 0;
    var numc = 0;
    var numd = 0;
    $(window).scroll(function () {
        /*스킬바*/
        
        if ($(document).scrollTop() > $('#skill_box').offset().top - 200) {
            

            $('#bar_html-css').addClass("a_ani");
            $('#bar_javascript').addClass("b_ani");
            $('#bar_react').addClass("c_ani");
            $('#bar_nodejs').addClass("d_ani");

            
            if(numa < 1){
                /*숫자 카운팅*/
                $({
                    val: 0 /*시작 숫자*/
                }).animate({
                    val: 80 /*최종숫자*/
                }, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        numa = numberWithCommas(Math.floor(this.val));
                        $(".a_num").text(numa+'%');
                    },
                    complete: function () {
                        numa = numberWithCommas(Math.floor(this.val));
                        $(".a_num").text(numa+'%');
                    }
                })
            }
            if(numb < 1){
                /*숫자 카운팅*/
                $({
                    val: 0 /*시작 숫자*/
                }).animate({
                    val: 60 /*최종숫자*/
                }, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        numb = numberWithCommas(Math.floor(this.val));
                        $(".b_num").text(numb+'%');
                    },
                    complete: function () {
                        numb = numberWithCommas(Math.floor(this.val));
                        $(".b_num").text(numb+'%');
                    }
                })
            }
            if(numc < 1){
                /*숫자 카운팅*/
                $({
                    val: 0 /*시작 숫자*/
                }).animate({
                    val: 30 /*최종숫자*/
                }, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        numc = numberWithCommas(Math.floor(this.val));
                        $(".d_num").text(numc+'%');
                    },
                    complete: function () {
                        numc = numberWithCommas(Math.floor(this.val));
                        $(".d_num").text(numc+'%');
                    }
                })
            }
            if(numd < 1){
                /*숫자 카운팅*/
                $({
                    val: 0 /*시작 숫자*/
                }).animate({
                    val: 55 /*최종숫자*/
                }, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        numd = numberWithCommas(Math.floor(this.val));
                        $(".c_num").text(numd+'%');
                    },
                    complete: function () {
                        numd = numberWithCommas(Math.floor(this.val));
                        $(".c_num").text(numd+'%');
                    }
                })
            }
            
            
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    });
})