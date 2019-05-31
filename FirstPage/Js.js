$(document).ready(function () {


    var countShop = 0;
    $(".fa-shopping-cart:not('.mainShopIcon')").click(function () {
        countShop++
        $(".badgeShopping").css({ "display": "block" })
        $(".badgeShopping").text(countShop);
    })


    Waves.attach(".rippler");
    Waves.init();

    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();

        if (scrollValue >= 500) {
            $(".forUp").css({
                "display": "block",

            })
        }
        else {
            $(".forUp").css({
                "display": "none",
            })
        }
    })

    $("#searchSelectItem a").click(function () {
        $("#searchSelect").text($(this).find("span").text())
    })


    $(".showSliderNav").click(function () {
        $(".sliderNav").css({
            "margin-left": "0px",
            "transition": "0.5s  ease-out",

        })
    })

    $("#closeSliderNav").click(function () {
        $(".sliderNav").css({
            "margin-left": "-250px",
            "transition": "0.5s ease-in",

        })
    })



    $("#searchSelectItem a").click(function () {
        $("#searchSelect").text($(this).find("span").text())
    })


    $(".libutton1").click(function () {
        $(".libutton2").find("div").removeClass("activeLiline")
        $(".libutton3").find("div").removeClass("activeLiline")
        $(".libutton4").find("div").removeClass("activeLiline")


        $(".libutton2").find("div").addClass("removeLiline")
        $(".libutton3").find("div").addClass("removeLiline")
        $(".libutton4").find("div").addClass("removeLiline")
        $(".libutton1").find("div").addClass("activeLiline")
        $(".libutton2").find("div").removeClass("removeLiline")
        $(".libutton3").find("div").removeClass("removeLiline")
        $(".libutton4").find("div").removeClass("removeLiline")
    })

    $(".libutton2").click(function () {

        $(".libutton1").find("div").removeClass("activeLiline")
        $(".libutton3").find("div").removeClass("activeLiline")
        $(".libutton4").find("div").removeClass("activeLiline")

        $(".libutton1").find("div").addClass("removeLiline")
        $(".libutton3").find("div").addClass("removeLiline")
        $(".libutton4").find("div").addClass("removeLiline")
        $(".libutton2").find("div").addClass("activeLiline")
        $(".libutton1").find("div").removeClass("removeLiline")
        $(".libutton3").find("div").removeClass("removeLiline")
        $(".libutton4").find("div").removeClass("removeLiline")

    })

    $(".libutton3").click(function () {

        $(".libutton2").find("div").removeClass("activeLiline")
        $(".libutton1").find("div").removeClass("activeLiline")
        $(".libutton4").find("div").removeClass("activeLiline")

        $(".libutton2").find("div").addClass("removeLiline")
        $(".libutton1").find("div").addClass("removeLiline")
        $(".libutton4").find("div").addClass("removeLiline")
        $(".libutton3").find("div").addClass("activeLiline")
        $(".libutton2").find("div").removeClass("removeLiline")
        $(".libutton1").find("div").removeClass("removeLiline")
        $(".libutton4").find("div").removeClass("removeLiline")
    })

    $(".libutton4").click(function () {

        $(".libutton2").find("div").removeClass("activeLiline")
        $(".libutton3").find("div").removeClass("activeLiline")
        $(".libutton1").find("div").removeClass("activeLiline")

        $(".libutton2").find("div").addClass("removeLiline")
        $(".libutton3").find("div").addClass("removeLiline")
        $(".libutton1").find("div").addClass("removeLiline")
        $(".libutton4").find("div").addClass("activeLiline")
        $(".libutton2").find("div").removeClass("removeLiline")
        $(".libutton3").find("div").removeClass("removeLiline")
        $(".libutton1").find("div").removeClass("removeLiline")
    })



    $(".addHeart").tooltip({ title: "Add to Wishlist", placement: "bottom" })
    $(".addcard").tooltip({ title: "Add to Card", placement: "bottom" })
    $(".compare1").tooltip({ title: "Add to Compare", placement: "bottom" })
    $(".view").tooltip({ title: "View", placement: "bottom" })


    $(".mouseOver").mouseover(function () {
        $(this).find(".opDiv2").css({ "opacity": "0.7", "transition": "0.5s" })
    })

    $(".mouseOver").mouseout(function () {
        $(this).find(".opDiv2").css({ "opacity": "0.3", "transition": "0.5s" })
    })


    var count1 = 0;
    $(".addHeart").click(function () {
        count1++;

        $("#wishlistCount").text(count1)

        setTimeout(function () {
            alert("The product  already added to wish list.")
        }, 500)
        return false;
    })

    var count2 = 0;
    $(".compare2").click(function () {
        count2++;

        $("#compareCount").text(count2)

        setTimeout(function () {
            alert("The product  has been added to comparison list.")
        }, 500)
        return false;

    })

    var count3 = 0;
    $(".addcard").click(function () {
        count3++;

        $(".shopBadge").text(count3).css({
            "display": "block"
        })

        setTimeout(function () {
            alert("The product  has been added to cart. ")

        }, 500)
        return false;

    })



    $('.owl-theme').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        autoplay: 1000,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },

            570: {
                items: 2
            },

            600: {
                items: 2
            },


            656: {
                items: 3
            },

            680: {
                items: 3
            },

            764: {
                items: 3
            },

            900: {
                items: 4
            },

            1000: {
                items: 3
            },

            1200: {
                items: 4
            },

            1400: {
                items: 5
            },

            1700: {
                items: 6
            }

        }
    })


    $(".firstOwl").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 1
            },
            600: {
                items: 1
            },

            764: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 3
            },
            600: {
                items: 3
            },

            764: {
                items: 4
            },
            1000: {
                items: 7
            }
        }
    })


    $(".changerColor").click(function () {
        $(".mainColorChanger").toggleClass("active").css({
            "transition": "0.5",
        })

    })

    

    $(".moneyTypes a").click(function () {
        var x = $(this).text()

        $(".mainMoneyText").text(x)

    })




    var mainFlagText = document.querySelector(".mainFlagText span")
    var eLink = document.querySelector(".eLink")
    var fLink = document.querySelector(".fLink")
    var gLink = document.querySelector(".gLink")

    var rLink = document.querySelector(".rLink")
    var tLink = document.querySelector(".tLink")


    var mainFlag = document.querySelector("#mainFlag")
    var englishFlag = document.querySelector("#englishFlag")
    var germanFlag = document.querySelector("#germanyFlag")

    var franceFlag = document.querySelector("#franceFlag")
    var russianFlag = document.querySelector("#russianFlag")
    var turkeyFlag = document.querySelector("#turkeyFlag")

    eLink.addEventListener("click", function () {
        mainFlag.src = englishFlag.src
        mainFlagText.textContent = eLink.textContent

    })


    fLink.addEventListener("click", function () {

        mainFlag.src = franceFlag.src
        mainFlagText.textContent = fLink.textContent

    })

    gLink.addEventListener("click", function () {

        mainFlag.src = germanFlag.src
        mainFlagText.textContent = gLink.textContent

    })

    rLink.addEventListener("click", function () {
        mainFlag.src = russianFlag.src
        mainFlagText.textContent = rLink.textContent
    })

    tLink.addEventListener("click", function () {
        mainFlag.src = turkeyFlag.src
        mainFlagText.textContent = tLink.textContent

    })


    var first = document.querySelector(".first")
    var second = document.querySelector(".second")
    var third = document.querySelector(".third")
    var fourth = document.querySelector(".fourth")
    var fifth = document.querySelector(".fifth")
    var sixth = document.querySelector(".sixth")
    var changableDiv1 = document.querySelector(".changableDiv1")
    var changableDiv2 = document.querySelector(".changableDiv2")
    var changableDiv3 = document.querySelector(".changableDiv3")
    var changableDiv4 = document.querySelector(".changableDiv4")
    var changableDiv5 = document.querySelector(".changableDiv5")
    var changableDiv6 = document.querySelector(".changableDiv6")
    var changableDiv7 = document.querySelector(".changableDiv7")
    var changableDiv8 = document.querySelector(".changableDiv8")
    var changableDiv9 = document.querySelector(".changableDiv9")
    var changableDiv10 = document.querySelector(".changableDiv10")
    var changableDiv11 = document.querySelector(".changableDiv11")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv13 = document.querySelector(".changableDiv13")
    var changableDiv14 = document.querySelector(".changableDiv14")
    var changableDiv15 = document.querySelector(".changableDiv15")
    var changableDiv16 = document.querySelector(".changableDiv16")
    var changableDiv17 = document.querySelector(".changableDiv17")
    var changableDiv18 = document.querySelector(".changableDiv18")
    var changableDiv19 = document.querySelector(".changableDiv19")
    var changableDiv20 = document.querySelector(".fasionButton")

    // var line1 = document.querySelector(".l1 .line1")
    // var line2 = document.querySelector(".l2 .line")
    // var line3 = document.querySelector(".l3 .line")
    // var line4 = document.querySelector(".l4 .line")




    first.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = first.style.backgroundColor
        changableDiv2.style.backgroundColor = first.style.backgroundColor
        changableDiv3.style.backgroundColor = first.style.backgroundColor
        changableDiv4.style.backgroundColor = first.style.backgroundColor
        changableDiv5.style.backgroundColor = first.style.backgroundColor
        changableDiv6.style.backgroundColor = first.style.backgroundColor
        changableDiv7.style.backgroundColor = first.style.backgroundColor
        changableDiv8.style.color = first.style.backgroundColor
        changableDiv9.style.color = first.style.backgroundColor
        changableDiv10.style.backgroundColor = first.style.backgroundColor
        changableDiv11.style.backgroundColor = first.style.backgroundColor
        changableDiv12.style.backgroundColor = first.style.backgroundColor
        changableDiv13.style.backgroundColor = first.style.backgroundColor
        changableDiv14.style.backgroundColor = first.style.backgroundColor
        changableDiv15.style.backgroundColor = first.style.backgroundColor
        changableDiv16.style.backgroundColor = first.style.backgroundColor
        changableDiv17.style.backgroundColor = first.style.backgroundColor
        changableDiv18.style.backgroundColor = first.style.backgroundColor
        changableDiv19.style.backgroundColor = first.style.backgroundColor
        changableDiv20.style.backgroundColor = first.style.backgroundColor
        

        // line1.style.borderColor = first.style.backgroundColor
        // line2.style.borderColor = first.style.backgroundColor
        // line3.style.borderColor = first.style.backgroundColor
        // line4.style.borderColor = first.style.backgroundColor




    })
    second.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = second.style.backgroundColor
        changableDiv2.style.backgroundColor = second.style.backgroundColor
        changableDiv3.style.backgroundColor = second.style.backgroundColor
        changableDiv4.style.backgroundColor = second.style.backgroundColor
        changableDiv5.style.backgroundColor = second.style.backgroundColor
        changableDiv6.style.backgroundColor = second.style.backgroundColor
        changableDiv7.style.backgroundColor = second.style.backgroundColor
        changableDiv8.style.color = second.style.backgroundColor
        changableDiv9.style.color = second.style.backgroundColor
        changableDiv10.style.backgroundColor = second.style.backgroundColor
        changableDiv11.style.backgroundColor = second.style.backgroundColor
        changableDiv12.style.backgroundColor = second.style.backgroundColor
        changableDiv13.style.backgroundColor = second.style.backgroundColor
        changableDiv14.style.backgroundColor = second.style.backgroundColor
        changableDiv15.style.backgroundColor = second.style.backgroundColor
        changableDiv16.style.backgroundColor = second.style.backgroundColor
        changableDiv17.style.backgroundColor = second.style.backgroundColor
        changableDiv18.style.backgroundColor = second.style.backgroundColor
        changableDiv19.style.backgroundColor = second.style.backgroundColor
        changableDiv20.style.backgroundColor = second.style.backgroundColor

        // line1.style.borderColor = second.style.backgroundColor
        // line2.style.borderColor = second.style.backgroundColor
        // line3.style.borderColor = second.style.backgroundColor
        // line4.style.borderColor = second.style.backgroundColor


    })

    third.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = third.style.backgroundColor
        changableDiv2.style.backgroundColor = third.style.backgroundColor
        changableDiv3.style.backgroundColor = third.style.backgroundColor
        changableDiv4.style.backgroundColor = third.style.backgroundColor
        changableDiv5.style.backgroundColor = third.style.backgroundColor
        changableDiv6.style.backgroundColor = third.style.backgroundColor
        changableDiv7.style.backgroundColor = third.style.backgroundColor
        changableDiv8.style.color = third.style.backgroundColor
        changableDiv9.style.color = third.style.backgroundColor
        changableDiv10.style.backgroundColor = third.style.backgroundColor
        changableDiv11.style.backgroundColor = third.style.backgroundColor
        changableDiv12.style.backgroundColor = third.style.backgroundColor
        changableDiv13.style.backgroundColor = third.style.backgroundColor
        changableDiv14.style.backgroundColor = third.style.backgroundColor
        changableDiv15.style.backgroundColor = third.style.backgroundColor
        changableDiv16.style.backgroundColor = third.style.backgroundColor
        changableDiv17.style.backgroundColor = third.style.backgroundColor
        changableDiv18.style.backgroundColor = third.style.backgroundColor
        changableDiv19.style.backgroundColor = third.style.backgroundColor
        changableDiv20.style.backgroundColor = third.style.backgroundColor

        // line1.style.borderColor = third.style.backgroundColor
        // line2.style.borderColor = third.style.backgroundColor
        // line3.style.borderColor = third.style.backgroundColor
        // line4.style.borderColor = third.style.backgroundColor
    })

    fourth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fourth.style.backgroundColor
        changableDiv2.style.backgroundColor = fourth.style.backgroundColor
        changableDiv3.style.backgroundColor = fourth.style.backgroundColor
        changableDiv4.style.backgroundColor = fourth.style.backgroundColor
        changableDiv5.style.backgroundColor = fourth.style.backgroundColor
        changableDiv6.style.backgroundColor = fourth.style.backgroundColor
        changableDiv7.style.backgroundColor = fourth.style.backgroundColor
        changableDiv8.style.color = fourth.style.backgroundColor
        changableDiv9.style.color = fourth.style.backgroundColor
        changableDiv10.style.backgroundColor = fourth.style.backgroundColor
        changableDiv11.style.backgroundColor = fourth.style.backgroundColor
        changableDiv12.style.backgroundColor = fourth.style.backgroundColor
        changableDiv13.style.backgroundColor = fourth.style.backgroundColor
        changableDiv14.style.backgroundColor = fourth.style.backgroundColor
        changableDiv15.style.backgroundColor = fourth.style.backgroundColor
        changableDiv16.style.backgroundColor = fourth.style.backgroundColor
        changableDiv17.style.backgroundColor = fourth.style.backgroundColor
        changableDiv18.style.backgroundColor = fourth.style.backgroundColor
        changableDiv19.style.backgroundColor = fourth.style.backgroundColor
        changableDiv20.style.backgroundColor = fourth.style.backgroundColor

        // line1.style.borderColor = fourth.style.backgroundColor
        // line2.style.borderColor = fourth.style.backgroundColor
        // line3.style.borderColor = fourth.style.backgroundColor
        // line4.style.borderColor = fourth.style.backgroundColor
    })
    fifth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fifth.style.backgroundColor
        changableDiv2.style.backgroundColor = fifth.style.backgroundColor
        changableDiv3.style.backgroundColor = fifth.style.backgroundColor
        changableDiv4.style.backgroundColor = fifth.style.backgroundColor
        changableDiv5.style.backgroundColor = fifth.style.backgroundColor
        changableDiv6.style.backgroundColor = fifth.style.backgroundColor
        changableDiv7.style.backgroundColor = fifth.style.backgroundColor
        changableDiv8.style.color = fifth.style.backgroundColor
        changableDiv9.style.color = fifth.style.backgroundColor
        changableDiv10.style.backgroundColor = fifth.style.backgroundColor
        changableDiv11.style.backgroundColor = fifth.style.backgroundColor
        changableDiv12.style.backgroundColor = fifth.style.backgroundColor
        changableDiv13.style.backgroundColor = fifth.style.backgroundColor
        changableDiv14.style.backgroundColor = fifth.style.backgroundColor
        changableDiv15.style.backgroundColor = fifth.style.backgroundColor
        changableDiv16.style.backgroundColor = fifth.style.backgroundColor
        changableDiv17.style.backgroundColor = fifth.style.backgroundColor
        changableDiv18.style.backgroundColor = fifth.style.backgroundColor
        changableDiv19.style.backgroundColor = fifth.style.backgroundColor
        changableDiv20.style.backgroundColor = fifth.style.backgroundColor

        // line1.style.borderColor = fifth.style.backgroundColor
        // line2.style.borderColor = fifth.style.backgroundColor
        // line3.style.borderColor = fifth.style.backgroundColor
        // line4.style.borderColor = fifth.style.backgroundColor
    })
    sixth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = sixth.style.backgroundColor
        changableDiv2.style.backgroundColor = sixth.style.backgroundColor
        changableDiv3.style.backgroundColor = sixth.style.backgroundColor
        changableDiv4.style.backgroundColor = sixth.style.backgroundColor
        changableDiv5.style.backgroundColor = sixth.style.backgroundColor
        changableDiv6.style.backgroundColor = sixth.style.backgroundColor
        changableDiv7.style.backgroundColor = sixth.style.backgroundColor
        changableDiv8.style.color = sixth.style.backgroundColor
        changableDiv9.style.color = sixth.style.backgroundColor
        changableDiv10.style.backgroundColor = sixth.style.backgroundColor
        changableDiv11.style.backgroundColor = sixth.style.backgroundColor
        changableDiv12.style.backgroundColor = sixth.style.backgroundColor
        changableDiv13.style.backgroundColor = sixth.style.backgroundColor
        changableDiv14.style.backgroundColor = sixth.style.backgroundColor
        changableDiv15.style.backgroundColor = sixth.style.backgroundColor
        changableDiv16.style.backgroundColor = sixth.style.backgroundColor
        changableDiv17.style.backgroundColor = sixth.style.backgroundColor
        changableDiv18.style.backgroundColor = sixth.style.backgroundColor
        changableDiv19.style.backgroundColor = sixth.style.backgroundColor
        changableDiv20.style.backgroundColor = sixth.style.backgroundColor

        // line1.style.borderColor = sixth.style.backgroundColor
        // line2.style.borderColor = sixth.style.backgroundColor
        // line3.style.borderColor = sixth.style.backgroundColor
        // line4.style.borderColor = sixth.style.backgroundColor
    })


})


