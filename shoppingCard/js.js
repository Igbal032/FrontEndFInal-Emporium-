$(document).ready(function () {


    $(window).scroll(function () {
        var scrollValue = $(window).scrollTop();

        if (scrollValue >= 200) {
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
        console.log("asdasds")
        $(".sliderNav").css({
            "margin-left": "0px",
            "transition": "0.5s  ease-out",

        })
    })

    var countShop = 0;
    $(".fa-shopping-cart:not('.mainShopIcon')").click(function () {
        countShop++
        $(".badgeShopping").css({ "display": "block" })
        $(".badgeShopping").text(countShop);
    })


    $("#closeSliderNav").click(function () {
        $(".sliderNav").css({
            "margin-left": "-250px",
            "transition": "0.5s ease-in",

        })
    })


    Waves.attach(".rippler");
    Waves.init();


    $(".changerColor").click(function () {
        $(".mainColorChanger").toggleClass("active").css({
            "transition": "0.5",
        })

    })


    $(".moneyTypes a").click(function () {
        var x = $(this).text()

        $(".mainMoneyText").text(x)

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
    $(".compare").click(function () {
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
    var changableDiv5 = document.querySelector(".changableDiv5")
    var changableDiv10 = document.querySelector(".changableDiv10")
    var changableDiv11 = document.querySelector(".changableDiv11")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv13 = document.querySelector(".changableDiv13")
    var changableDiv20 = document.querySelector(".fasionButton")

    first.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = first.style.backgroundColor
        changableDiv2.style.backgroundColor = first.style.backgroundColor
        changableDiv5.style.backgroundColor = first.style.backgroundColor
        changableDiv10.style.backgroundColor = first.style.backgroundColor
        changableDiv11.style.backgroundColor = first.style.backgroundColor
        changableDiv12.style.backgroundColor = first.style.backgroundColor
        changableDiv13.style.backgroundColor = first.style.backgroundColor
        changableDiv20.style.backgroundColor = first.style.backgroundColor


    })
    second.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = second.style.backgroundColor
        changableDiv2.style.backgroundColor = second.style.backgroundColor
        changableDiv10.style.backgroundColor = second.style.backgroundColor
        changableDiv5.style.backgroundColor = second.style.backgroundColor

        changableDiv11.style.backgroundColor = second.style.backgroundColor
        changableDiv12.style.backgroundColor = second.style.backgroundColor
        changableDiv13.style.backgroundColor = second.style.backgroundColor
        changableDiv20.style.backgroundColor = second.style.backgroundColor

    })

    third.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = third.style.backgroundColor
        changableDiv2.style.backgroundColor = third.style.backgroundColor
        changableDiv5.style.backgroundColor = third.style.backgroundColor

        changableDiv10.style.backgroundColor = third.style.backgroundColor
        changableDiv11.style.backgroundColor = third.style.backgroundColor
        changableDiv12.style.backgroundColor = third.style.backgroundColor
        changableDiv13.style.backgroundColor = third.style.backgroundColor
        changableDiv20.style.backgroundColor = third.style.backgroundColor


    })

    fourth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fourth.style.backgroundColor
        changableDiv2.style.backgroundColor = fourth.style.backgroundColor
        changableDiv5.style.backgroundColor = fourth.style.backgroundColor

        changableDiv10.style.backgroundColor = fourth.style.backgroundColor
        changableDiv11.style.backgroundColor = fourth.style.backgroundColor
        changableDiv12.style.backgroundColor = fourth.style.backgroundColor
        changableDiv13.style.backgroundColor = fourth.style.backgroundColor
        changableDiv20.style.backgroundColor = fourth.style.backgroundColor

    })
    fifth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fifth.style.backgroundColor
        changableDiv2.style.backgroundColor = fifth.style.backgroundColor
        changableDiv5.style.backgroundColor = fifth.style.backgroundColor

        changableDiv10.style.backgroundColor = fifth.style.backgroundColor
        changableDiv11.style.backgroundColor = fifth.style.backgroundColor
        changableDiv12.style.backgroundColor = fifth.style.backgroundColor
        changableDiv13.style.backgroundColor = fifth.style.backgroundColor
        changableDiv20.style.backgroundColor = fifth.style.backgroundColor

    })
    sixth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = sixth.style.backgroundColor
        changableDiv2.style.backgroundColor = sixth.style.backgroundColor
        changableDiv5.style.backgroundColor = sixth.style.backgroundColor
        changableDiv10.style.backgroundColor = sixth.style.backgroundColor
        changableDiv11.style.backgroundColor = sixth.style.backgroundColor
        changableDiv12.style.backgroundColor = sixth.style.backgroundColor
        changableDiv13.style.backgroundColor = sixth.style.backgroundColor
        changableDiv20.style.backgroundColor = sixth.style.backgroundColor

    })


})


