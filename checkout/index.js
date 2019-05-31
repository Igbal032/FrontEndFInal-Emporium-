$(document).ready(function () {


    Waves.attach(".rippler");
    Waves.init();

    
    
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
    

    $(".changerColor").click(function () {
        $(".mainColorChanger").toggleClass("active")

        // $(".mainColorChanger").addClass("active")
    })


    $(".changerColor").dblclick(function () {
        $(".mainColorChanger").addClass("remove")


    })


    $("#searchSelectItem a").click(function () {
        $("#searchSelect").text($(this).find("span").text()) 
      })
 


    $(".moneyTypes a").click(function () {
        var x = $(this).text()

        $(".mainMoneyText").text(x)

    })


    $(window).scroll(function(){
        var scrollValue=$(window).scrollTop();
        
        if(scrollValue>=700){
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
    var changableDiv13 = document.querySelector(".fasionButton")

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



    $(function () {
        $("#register-form").validate({
            rules: {
                email: {
                    required: true,
                },
                firstname: {
                    required: true,

                },
                lastname: {
                    required: true,

                },
                phone: {
                    required: true,

                },
                country: {
                    required: true,

                },
                city: {
                    required: true,

                },
                zipCode: {
                    required: true,

                },
                adress: {
                    required: true,

                },
                cardholdername: {
                    required: true,

                },
                cardnumber: {
                    required: true,

                },
                exmonth: {
                    required: true,

                },
                exyear: {
                    required: true,

                },
                cvv: {
                    required: true,

                }
            },
            messages: {
                email: {
                    required: '<span style="color:red;">Email is required</span>',
                },
                firstname: {
                    required: '<span style="color:red;">First Name is required</span>',
                },
                lastname: {
                    required: '<span style="color:red;">Last Name is required</span>',

                },
                phone: {
                    required: '<span style="color:red;">Phone is required</span>',

                },
                country: {
                    required: '<span style="color:red;">Country is required is required</span>',

                },
                city: {
                    required: '<span style="color:red;"> City is required</span>',

                },
                zipCode: {
                    required: '<span style="color:red;">Zip/Postal Code is required</span>',

                },
                adress: {
                    required: '<span style="color:red;">Address is required</span>',

                },

                cardholdername: {
                    required: '<span style="color:red;">Card holder name is required</span>',

                },
                cardnumber: {
                    required: '<span style="color:red;">Card number is required</span>',

                },
                exmonth: {
                    required: '<span style="color:red;">Expired month is required</span>',

                },
                exyear: {
                    required: '<span style="color:red;">Expired year is required</span>',

                },
                cvv: {
                    required: '<span style="color:red;">Cvv is required</span>',
                }
            },

        })
    })

    $(function () {
        $("#registerPart2").validate({
            rules: {

                cardholdername: {
                    required: true,

                },
                cardnumber: {
                    required: true,

                },
                exmonth: {
                    required: true,

                },
                exyear: {
                    required: true,

                },
                cvv: {
                    required: true,

                }
            },
            messages: {

                cardholdername: {
                    required: '<span style="color:red;">Card holder name is required</span>',

                },
                cardnumber: {
                    required: '<span style="color:red;">Card number is required</span>',

                },
                exmonth: {
                    required: '<span style="color:red;">Expired month is required</span>',

                },
                exyear: {
                    required: '<span style="color:red;">Expired year is required</span>',

                },
                cvv: {
                    required: '<span style="color:red;">Cvv is required</span>',
                }
            },

        })
    })



    $(".formPart").click(function () {
        $(this).find(".labels").css({
            "left": "15px",
            "top": "-5px",
            "color": "green",
            "transition": "0.5s",
            "font-size": "12px",
        })

    })

    $(".formPart").focusout(function () {
        if ($(this).find("input:not('#company,#secondname,#state')").val() == "") {
            $(this).find(".labels").css({
                "left": "20px",
                "top": "22px",
                "color": "red",
                "transition": "0.5s",
                "font-size": "16px",
            })
        }


        else if ($(this).find("#company,#secondname,#state").val() == "") {
            $(this).find(".labels").css({
                "left": "20px",
                "top": "22px",
                "color": "#868e96",
                "transition": "0.5s",
                "font-size": "16px",
            })

        }
    })





    $(".nextButton1").click(function () {
      
            $("#list1").removeClass("active in show")
            $("#list2").addClass("active in show")
        
    })

    $(".nextButton2").click(function () {
      
        $("#list2").removeClass("active in show")
        $("#list3").addClass("active in show")
        
    })
    $(".nextButton3").click(function () {
        
        $("#list3").removeClass("active in show")
        $("#list4").addClass("active in show")
        
    })
    $(".nextButton4").click(function () {
        
        $("#list4").removeClass("active in show")
        $("#list5").addClass("active in show")
        
    })

    $(".prevButton1").click(function () {
        $("#list2").removeClass("active in show")
        $("#list1").addClass("active in show")
    })

    $(".prevButton2").click(function () {
        $("#list3").removeClass("active in show")
        $("#list2").addClass("active show")
    })

    $(".prevButton3").click(function () {
        $("#list4").removeClass("active in show")
        $("#list3").addClass("active in show")
    })

    var count1=0;
    $(".addHeart").click(function(){
        count1++;

        $("#wishlistCount").text(count1)

        setTimeout(function(){
            alert("The product  already added to wish list.")
        },500)
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
    })


})


