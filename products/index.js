$(document).ready(function () {


    Waves.attach(".rippler");
    Waves.init();




    $(".smallPictures").click(function(){
        $("#mainPicture").attr("src",$(this).attr("src"))
    })



    $(function(){

        $("#exzoom").exzoom({
          // options here
        });
      
      });



    $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            600: {
                items: 2
            },

            700: {
                items: 2
            },
            800: {
                items: 3
            },
            900: {
                items: 3
            },
            1000: {
                items: 3
            },
            1100: {
                items: 3
            },
            1150: {
                items: 4
            },
            1200: {
                items: 4
            },
            1300: {
                items: 4
            },
            1400: {
                items: 5
            },
            1500: {
                items: 5
            },
            1600: {
                items: 6
            },
            1700: {
                items: 6
            }
        }
    })



    $(".tooltips").tooltip({ title: "Very saticified", placement: "right" })


    $(".smile").tooltip({ title: "Very saticified", placement: "top" })

    $(".meh").tooltip({ title: " Dissaticified", placement: "top" })

    $(".frown").tooltip({ title: " Very Dissaticified", placement: "top" })

    $(".formAbout").click(function () {
        $(this).find("label").css({
            "color": "green",
            "left": "15px",
            "top": "-20px",
            "transition": "0.5s",
            "font-size": "11px"
        })
    })

    $(".formAbout").focusout(function () {
        $(this).find("label").css({
            "left": "20px",
            "top": "5px",
            "color":"black",
            "transition": "0.5s",
            "font-size": "15px"
        })
    })


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    
    $("#searchSelectItem a").click(function () {
        $("#searchSelect").text($(this).find("span").text()) 
      })
 


    $(window).scroll(function(){
        var scrollValue=$(window).scrollTop();
        
        if(scrollValue>=400){
            $(".forUp").css({
                "display":"block",
                
            })
        }
        else {
            $(".forUp").css({
                "display":"none",
            })
        }
    })


    $("#searchSelectItem a").click(function () {
        $("#searchSelect").text($(this).find("span").text()) 
      })
 
      $(".showSliderNav").click(function(){
        console.log("asdasds")
        $(".sliderNav").css({
            "margin-left":"0px",
            "transition":"0.5s  ease-out",
    
        })
    })
    
    $("#closeSliderNav").click(function(){
        $(".sliderNav").css({
            "margin-left":"-250px",
            "transition":"0.5s ease-in",
    
        })
    })

    var countShop = 0;
    $(".fa-shopping-cart:not('.mainShopIcon')").click(function () {
        countShop++
        $(".badgeShopping").css({ "display": "block"})
        $(".badgeShopping").text(countShop);
    })

    Waves.attach(".rippler");
    Waves.init();
  


    var count1=0;
    $(".addHeart").click(function(){
        count1++;

        $("#wishlistCount").text(count1)

        setTimeout(function(){
            alert("The product  already added to wish list.")
        },500)
        return false;

    })

    var count2=0;
    $(".compare2").click(function(){
        count2++;

        $("#compareCount").text(count2)

        setTimeout(function(){
            alert("The product  has been added to comparison list.")
        },500)
        return false;

    })

    var count3=0;
    $(".addcard").click(function(){
        count3++;

        $(".shopBadge").text(count3).css({
            "display":"block"
        })

        setTimeout(function(){
            alert("The product  has been added to cart. ")
           
        },500)
        return false;

    })
    var addCount = 0
    $(".addCount").click(function () {
        if (addCount < 3) {
            addCount++;

        }
        else {
            alert("You can not choose more items than available. In stock 3 items.")
        }
        // console.log(addCount)


        $(".countProdoct").text(addCount)

    })

    $(".addHeart").tooltip({ title: "Add to Wishlist", placement: "bottom" })
    $(".addShop").tooltip({ title: "Add to Card", placement: "bottom" })
    $(".compare").tooltip({ title: "Add to Compare", placement: "bottom" })
    $(".addCount").tooltip({ title: "Add", placement: "bottom" })
    $(".removeCount").tooltip({ title: "Remove", placement: "bottom" })



    $(".removeCount").click(function () {

        if (addCount > 0)
            addCount--;
        console.log(addCount)
        $(".countProdoct").text(addCount)

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
    var changableDiv10 = document.querySelector(".changableDiv10")
    var changableDiv11 = document.querySelector(".changableDiv11")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv12 = document.querySelector(".changableDiv12")
    var changableDiv13 = document.querySelector(".changableDiv13")
    var changableDiv20 = document.querySelector(".fasionButton")


    first.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = first.style.backgroundColor
        changableDiv2.style.backgroundColor = first.style.backgroundColor
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

        changableDiv11.style.backgroundColor = second.style.backgroundColor
        changableDiv12.style.backgroundColor = second.style.backgroundColor
        changableDiv13.style.backgroundColor = second.style.backgroundColor
        changableDiv20.style.backgroundColor = second.style.backgroundColor

    })

    third.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = third.style.backgroundColor
        changableDiv2.style.backgroundColor = third.style.backgroundColor

        changableDiv10.style.backgroundColor = third.style.backgroundColor
        changableDiv11.style.backgroundColor = third.style.backgroundColor
        changableDiv12.style.backgroundColor = third.style.backgroundColor
        changableDiv13.style.backgroundColor = third.style.backgroundColor
        changableDiv20.style.backgroundColor = third.style.backgroundColor

    })

    fourth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fourth.style.backgroundColor
        changableDiv2.style.backgroundColor = fourth.style.backgroundColor

        changableDiv10.style.backgroundColor = fourth.style.backgroundColor
        changableDiv11.style.backgroundColor = fourth.style.backgroundColor
        changableDiv12.style.backgroundColor = fourth.style.backgroundColor
        changableDiv13.style.backgroundColor = fourth.style.backgroundColor
        changableDiv20.style.backgroundColor = fourth.style.backgroundColor

    })
    fifth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = fifth.style.backgroundColor
        changableDiv2.style.backgroundColor = fifth.style.backgroundColor

        changableDiv10.style.backgroundColor = fifth.style.backgroundColor
        changableDiv11.style.backgroundColor = fifth.style.backgroundColor
        changableDiv12.style.backgroundColor = fifth.style.backgroundColor
        changableDiv13.style.backgroundColor = fifth.style.backgroundColor
        changableDiv20.style.backgroundColor = fifth.style.backgroundColor

    })
    sixth.addEventListener("click", function () {

        changableDiv1.style.backgroundColor = sixth.style.backgroundColor
        changableDiv2.style.backgroundColor = sixth.style.backgroundColor
        changableDiv10.style.backgroundColor = sixth.style.backgroundColor
        changableDiv11.style.backgroundColor = sixth.style.backgroundColor
        changableDiv12.style.backgroundColor = sixth.style.backgroundColor
        changableDiv13.style.backgroundColor = sixth.style.backgroundColor
        changableDiv20.style.backgroundColor = sixth.style.backgroundColor

    })

    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    })

})



