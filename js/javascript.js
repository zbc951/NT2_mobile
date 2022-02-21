//ad
$(document).on('ready', function() {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		arrows: false,
	})
})

//gameList Btn
$(function(){
    $('.gameList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.gameList .slotBtn').click(function(){
        $('.gameBox.slotBox').addClass('display');
        $('.gameBox.slotBox').siblings().removeClass('display');
    })
    $('.gameList .fishBtn').click(function(){
        $('.gameBox.fishBox').addClass('display');
        $('.gameBox.fishBox').siblings().removeClass('display');
    })
    $('.gameList .liveBtn').click(function(){
        $('.gameBox.liveBox').addClass('display');
        $('.gameBox.liveBox').siblings().removeClass('display');
    })
    $('.gameList .sportBtn').click(function(){
        $('.gameBox.sportBox').addClass('display');
        $('.gameBox.sportBox').siblings().removeClass('display');
    })
    $('.gameList .lotteryBtn').click(function(){
        $('.gameBox.lotteryBox').addClass('display');
        $('.gameBox.lotteryBox').siblings().removeClass('display');
    })
    $('.gameList .boardBtn').click(function(){
        $('.gameBox.boardBox').addClass('display');
        $('.gameBox.boardBox').siblings().removeClass('display');
    })
})

//filter
$(function(){
    $('.jumpWindow .close').click(function(){
        $('.filter').removeClass('display');
    })

    $('.loginBtn').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.loginWindow').addClass('display');
    })

    $('.loginWindow .forget').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.forgetWindow').addClass('display');
    })

    $('.registerBtn,.ruleWindow .back').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.registerWindow').addClass('display');
    })

    $('.registerWindow .isCheck p').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.ruleWindow').addClass('display');
    })

    $(".applyList .applyBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })
    $(".applyList .checkBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.eventWindow').addClass('display');
    })

    $(".changePwdBtn").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.passwordWindow').addClass('display');
    })

    $(".vipWrap .topBox .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.checkPoint').addClass('display');
    })

    $(".searchContent .opAcc").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.accWindow').addClass('display');
    })
    $(".searchContent .opPlat").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.platWindow').addClass('display');
    })

    $(".cardContent button").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo2').addClass('display');
    })

    $(".transWrap .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.plsGo').addClass('display');
    })

    $(".forActive .check,.forHistory .check").click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.bettingDetail').addClass('display');
    })
})
//請先登入
function unlogin(){
    $('.jumpWindow').removeClass('display');
    $('.filter,.plsGo').addClass('display');
}

//register choose
$(function(){
    $('.jumpWindow .choose .line').click(function(){
        $('.line').removeClass('display');
        $('.weChat').addClass('display');
    })

    $('.jumpWindow .choose .weChat').click(function(){
        $('.line').addClass('display');
        $('.weChat').removeClass('display');
    })
})

//news切換
$(function(){
    $('.jumpWindow.news .typeList li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(1)').click(function(){
        $('.jumpWindow.news .normal').addClass('display');
        $('.jumpWindow.news .normal').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(2)').click(function(){
        $('.jumpWindow.news .hot').addClass('display');
        $('.jumpWindow.news .hot').siblings().removeClass('display');
    })

    $('.jumpWindow.news .typeList li:nth-of-type(3)').click(function(){
        $('.jumpWindow.news .deposit').addClass('display');
        $('.jumpWindow.news .deposit').siblings().removeClass('display');
    })
})

//realLogin
$(function(){
    $('.realLogin').click(function(){
        $('.jumpWindow,.loginBtn').removeClass('display');
        $('.filter,.news,.alLogin').addClass('display');
        
        $('.gameBox.slotBox li').attr('onclick',"window.location.href='./html/slotPage.html'");
        $('.gameBox.fishBox li').attr('onclick',"callFish()");
        $('.gameBox.liveBox li').attr('onclick',"callLive()");
        $('.gameBox.sportBox li').attr('onclick',"callSport()");
        $('.gameBox.lotteryBox li').attr('onclick',"callLottery()");
        $('.gameBox.boardBox li').attr('onclick',"callBoard()");

        $('.operate button:eq(0)').attr('onclick',"window.location.href='./html/deposit.html'");
        $('.operate button:eq(1)').attr('onclick',"window.location.href='./html/transfer.html'");
        $('.operate button:eq(2)').attr('onclick',"window.location.href='./html/withdrawal.html'");
        $('.operate button:eq(3)').attr('onclick',"window.location.href='./html/vip.html'");

        $('footer li:nth-of-type(2)').attr('onclick',"window.location.href='./html/event.html'");
        $('footer li:nth-of-type(3)').attr('onclick',"window.location.href='./html/wallet.html'");
        $('footer li:nth-of-type(4)').attr('onclick',"window.location.href='./html/help_often_contact.html'");
        $('footer li:nth-of-type(5)').attr('onclick',"window.location.href='./html/member.html'");
    })
})
function callSport() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.sport').addClass('display');
}
function callLive() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.live').addClass('display');
}
function callFish() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.fish').addClass('display');
}
function callLottery() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.lottery').addClass('display');
}
function callBoard() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.board').addClass('display');
}
function callSlot() {
    $('.jumpWindow').removeClass('display');
    $('.filter,.gameWindow.slot').addClass('display');
}

//slotPage .gameBox .love
$(function(){
    $('.slotWrap .gameBox .love').click(function(){
        $(this).toggleClass('active');
    })
})
//slotPage .slotHeader切換
$(function(){
    $('.slotHeader .listBox li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//event .eventType切換
$(function(){
    $('.eventType li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})

//walletWrap btnBox
$(function(){
    $('.walletWrap .btnBox button:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forActive').addClass('display');
        $('.walletList .forActive').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forHistory').addClass('display');
        $('.walletList .forHistory').siblings().removeClass('display');
    })

    $('.walletWrap .btnBox button:nth-of-type(3)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.walletList .forPlatform').addClass('display');
        $('.walletList .forPlatform').siblings().removeClass('display');
    })
})
//walletWrap openBtn
$(function(){
    $('.walletWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//member opLang
$(function(){
    $('.memberWrap .opLang').click(function(){
        $('.jumpWindow').removeClass('display');
        $('.filter,.langWindow').addClass('display');
    })

    $('.langWindow li:nth-of-type(1)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.lang_tw').addClass('active');
        $('.lang_ch').removeClass('active');
        $('.filter').removeClass('display');
    })
    $('.langWindow li:nth-of-type(2)').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.lang_tw').removeClass('active');
        $('.lang_ch').addClass('active');
        $('.filter').removeClass('display');
    })
})

//help
function backToPage(){
    $("header .helpPage").removeClass("display");
    $("header .helpPage:eq(0)").addClass("display");

    $(".helpInner").removeClass("display");
    $(".helpWrap").addClass("display");
}
$(function(){
    $(".helpInner li").click(function(){
        $(this).toggleClass("active");
    })

    $(".helpBody li:eq(0)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q1").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q1").addClass("display");
    })

    $(".helpBody li:eq(1)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q2").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q2").addClass("display");
    })

    $(".helpBody li:eq(2)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q3").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q3").addClass("display");
    })

    $(".helpBody li:eq(3)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q4").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q4").addClass("display");
    })

    $(".helpBody li:eq(4)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q5").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q5").addClass("display");
    })

    $(".helpBody li:eq(5)").click(function(){
        $("header .helpPage").removeClass("display");
        $("header .helpPage.q6").addClass("display");

        $(".helpWrap,.helpInner ul").removeClass("display");
        $(".helpInner,.helpInner .q6").addClass("display");
    })
})

//eventApply
$(function(){
    $(".eventApplyType li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".eventApplyType li:eq(0)").click(function(){
        $(".applyList").addClass("display");
        $(".applyRecord").removeClass("display");
    })
    $(".eventApplyType li:eq(1)").click(function(){
        $(".applyList").removeClass("display");
        $(".applyRecord").addClass("display");
    })

    $(".applyRecord .bigBtn button").click(function(){
        $(".reviewBody .noData").removeClass("display");
        $(".reviewBody .recordBox").addClass("display");
    })

    $(".applyRecord .btnBox button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".reviewBody .noData").addClass("display");
        $(".reviewBody .recordBox").removeClass("display");
    })
})

//個人資料頁
$(function(){
    $(".memberInfo .chBtn").click(function(){
        $(this).prev().toggleClass("active");
    })
})

//vip
$(function(){
    $(".checkPoint button").click(function(){
        $($(this).prev().children()).toggleClass("display");
    })
})

//mail
$(function(){
    $("header .editBtn").click(function(){
        $(".editBox,.detailBtn.edit").addClass("display");
        $(".editBtn").removeClass("display");
        $(".mailBox").addClass("editing");
    })
    $("header .detailBtn.edit").click(function(){
        $(".editBox,.detailBtn.edit").removeClass("display");
        $(".editBtn").addClass("display");
        $(".mailBox").removeClass("editing");
    })

    $(".topList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })
    $(".topList li:eq(0)").click(function(){
        $(".mailBody.normal").addClass("display");
        $(".mailBody.post").removeClass("display");
        $("header .editBtn").addClass("display");
    })
    $(".topList li:eq(1)").click(function(){
        $(".mailBody.normal").removeClass("display");
        $(".mailBody.post").addClass("display");
        $("header .editBtn").removeClass("display");
    })


    $(".mailBody .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active"); 
    })
    $(".mailBody.normal .subClass li:eq(0)").click(function(){
        $(".mailBox.system").addClass("display");
        $(".mailBox.personal").removeClass("display");
    })
    $(".mailBody.normal .subClass li:eq(1)").click(function(){
        $(".mailBox.system").removeClass("display");
        $(".mailBox.personal").addClass("display");
    })
    $(".mailBody.post .subClass li:eq(0)").click(function(){
        $(".mailBox.hot").addClass("display");
        $(".mailBox.hot").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(1)").click(function(){
        $(".mailBox.nor").addClass("display");
        $(".mailBox.nor").siblings().removeClass("display");
    })
    $(".mailBody.post .subClass li:eq(2)").click(function(){
        $(".mailBox.dep").addClass("display");
        $(".mailBox.dep").siblings().removeClass("display");
    })
})

//bettingRecord + dealRecord
$(function(){
    $(".searchContent .check").click(function(){
        $(".noData").removeClass("display");
        $(".recordBox").addClass("display");
    })

    $(".searchContent .date button").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        $(".noData").addClass("display");
        $(".recordBox").removeClass("display");
    })
})

//deposit
$(function(){
    $(".depList li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".depList li:eq(0)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.card").addClass("display");
    })
    $(".depList li:eq(1)").click(function(){
        $(".depContent").removeClass("display");
        $(".depContent.atm").addClass("display");
    })

    $(".depContent.card .check").click(function(){
        $(".depList,.depContent").removeClass("display");
        $(".depContent.already").addClass("display");
    })
    $(".depContent.already .change").click(function(){
        $(".depContent").removeClass("display");
        $(".depList,.depContent.card").addClass("display");
    })
})

//transWrap
$(function(){
    $(".transWrap .subClass li").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    })

    $(".transWrap .subClass li:eq(0)").click(function(){
        $(".transWrap .forActive").addClass("display");
        $(".transWrap .forPlatform").removeClass("display");
    })
    $(".transWrap .subClass li:eq(1)").click(function(){
        $(".transWrap .forActive").removeClass("display");
        $(".transWrap .forPlatform").addClass("display");
    })

    $('.transWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})

//withWrap
$(function(){
    $(".withWrap .walletBox .check").click(function(){
        $(".walletDetail").toggleClass("active");
    })

    $('.withWrap .openBtn div').click(function(){
        $(this).toggleClass('active');
        $($(this).closest('.openBtn').prev('ul')).toggleClass('active');
    })
})