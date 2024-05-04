if(location.href == "https://waeacksa.com"){
        // if(window.innerWidth <= 500){
        //     document.querySelector(".s-block--fixed-banner img").src = "https://raw.githubusercontent.com/YoussefNsserALlam/sascript/main/web%201.png";
        // }
        let prodacts = document.querySelectorAll(".s-products-list-wrapper");
        for(let i = 0; i < prodacts.length; i++){
            prodacts[i].classList.remove("s-products-list-wrapper");
            prodacts[i].classList.add("allam-prodact");
            if(i == 1){
            prodacts[i].classList.add("s-products-list-wrapper");
            prodacts[i].classList.remove("allam-prodact");
            }
        }    
    }else{
                            //حصول على تاريخ ووقت محليين
                            const now = new Date();
            
                            // الحصول على ساعة من التاريخ
                            let hours = now.getHours();
                            
                            // الحصول على دقائق من التاريخ
                            let minutes = now.getMinutes();
                            let seconds = now.getSeconds();
                            // الحصول على اليوم (AM أو PM) استنادًا إلى قيمة الساعات
                            const period = hours >= 12 ? 'مساءً' : 'صباحًا';
                            let displayHours = hours % 12 || 12;
                            function tim(){
                                document.querySelectorAll(".te1")[0].innerHTML = 60 - minutes;
                                document.querySelectorAll(".te3")[0].innerHTML = 60 - seconds;
                                // document.querySelector(".pa2 h1").innerHTML = `   سينتهي العرض خلال :`;
                                if(displayHours >= 1 && period == "مساءً" && displayHours !== 6 ){
                                    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
                                    document.querySelectorAll(".te2")[0].innerHTML = 5-displayHours;
                                }else if(displayHours >= 6 && period == "مساءً" && displayHours !== 11){
                                    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
                                    document.querySelectorAll(".te2")[0].innerHTML = 10-displayHours;
                                }else if(displayHours >= 11 && period == "صباحًا" && displayHours !== 6){
                                    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
                                    document.querySelectorAll(".te2")[0].innerHTML = 15-displayHours;
                                }else if(displayHours >= 6 && period == "صباحًا" && displayHours !== 1){
                                    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
                                    document.querySelectorAll(".te2")[0].innerHTML = 10-displayHours;
                                }else if(displayHours >= 1 && period == "صباحًا" && displayHours !== 8){
                                    // document.querySelector(".pa2 h1").innerHTML = ` سينتهي العرض خلال  : `;
                                    document.querySelectorAll(".te2")[0].innerHTML = 5-displayHours;
                                }else if(displayHours >= 8 && period == "مساءً" && displayHours !== 6){
                                       document.querySelectorAll(".te2")[0].innerHTML = 12-displayHours;
                                    }
                            }
                            let timer = `
                            <div class="pa2"><h1>متبقى على نهاية العرض </h1></div>
                            <div class="tim">
                                <div class="te"><p class="te3"></p></div>
                                
                                <div class="te te1"><p class="te1"></p></div>
                                <div class="te"><p class="te2"></p></div>
                            </div>
                            <div class="pa">
                                <h4>ثانيه</h4>
                                <h4>دقيقه</h4>
                                <h4>ساعة</h4>
                            </div>`;
                            let timerText =     `
                            <h3>العرض لمدة 24ساعة.
                    </h3>
                            <div style="color:red; font-size:18px;">
                        احصل على دورة التسويق المتكاملة خطوة بخطوة مع المدرب   
                        <span style="color:red;font-size:20px;">
                         بـ120 ريال
                         </span>
                         فقط
                         </div>
                    
                        <br>
                        ( تضيفهم للسلة ويتفعل معك العرض تلقائي)
                        <br>
                            `
                            ;
        setInterval(() => {
                    let modalClasses = document.querySelectorAll(".salla-modal")[1].classList;
            if (modalClasses.contains("s-hidden")) {    
            document.querySelectorAll(".product__description p")[0].innerHTML = timer
        
                setInterval(() => {
                    tim()
                }, 1000);
            } else {
         
            document.querySelectorAll(".s-modal-header-inner")[0].style.cssText = `display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0;`;
        
                document.querySelectorAll(".s-modal-header-content p")[0].innerHTML = `
            ${timerText + timer}
            `;
                setInterval(() => {
                    tim()
                }, 1000);
                    document.querySelectorAll(".s-offer-modal-footer")[0].remove();document.getElementById("product_49390870").remove();
                                }
             
                document.querySelectorAll(".s-modal-title")[0].innerHTML = `العرض  لمدة 24 ساعة فقط !!
        `;
        document.querySelectorAll(".s-offer-modal-footer p")[0].remove()

            }, 1000);
            
            document.querySelectorAll(".store-footer__inner .container div")[0].style.cssText = 
            `display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        `;
        
        setTimeout(() => {
            document.querySelectorAll(".s-button-btn")[0].innerHTML = `اضافة للسله`;
        }, 800);
        
        let fox_s = document.createElement("div");
        fox_s.classList.add("fox_s");
        fox_s.innerHTML = document.querySelectorAll(".container")[5].innerHTML;
        document.querySelector(".s-comments-product").appendChild(fox_s);
        if(location.href.startsWith("https://waeacksa.com/%D8%AF%D9%88%D8%B1%D8%A9-%D8%A7%D9%84%D8%B1%D8%A8%D8%AD-%D9%85%D9%86-%D8%A7%D9%84%D8%AA%D8%AC%D8%A7%D8%B1%D8%A9-%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9-%D8%A7%D9%84%D8%A7%D8%AD%D8%AA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9/p323750460")){
            setTimeout(() => {
                document.querySelectorAll(".fox_s h2")[0].innerHTML = `
                ${timerText}
                `
                ;
                document.querySelectorAll(".fox_s h2")[0].style.cssText = `
                text-align:center;
                `;
                document.querySelectorAll(".s-slider-container") [1].classList.remove("swiper")
        }, 2000);
        }else if(location.href.startsWith("https://waeacksa.com/%D9%83%D9%88%D8%B1%D8%B3-%D8%A7%D9%84%D8%AA%D8%B3%D9%88%D9%8A%D9%82-%D8%A7%D9%84%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84/p2115584067")){
        setTimeout(() => {
                document.querySelectorAll(".fox_s h2")[0].innerHTML = timerText;
                document.querySelectorAll(".fox_s h2")[0].style.cssText = `
                text-align:center;
                `;
                document.querySelectorAll(".s-slider-container") [1].classList.remove("swiper")
        }, 2000);
        }
             document.querySelectorAll("form section")[0].remove();
        document.querySelectorAll("salla-products-slider")[1].remove();
        document.querySelectorAll("salla-products-slider salla-slider")[0].remove();
        document.querySelectorAll("#product-129006271")[0].style.cssText = "position: inherit;";
            document.querySelectorAll("#product-323750460")[0].style.cssText = "position: inherit;";
        // else{
        // document.querySelectorAll("#product-323750460")[0].style.cssText = "position: relative;";
        // }
    }
