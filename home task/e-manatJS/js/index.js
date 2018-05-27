
let _createElement;
let createImg;
let createSpan;
let container;
let header;
let imgEmanat;
let imgA;
let imgB;
let imgI;
let main;
let mainHeader;
let mainContent;
var test ={};

function index(_language) {

    /*-------------------------------------create element start-------------------------------------- */
    
    let k = 0;
    function createE(elementName, elementId, elementClass, elementValue, inElement, imgSrc, _background, imglength, imgObjLength, textSpan) {
        if ((elementName != "") && (inElement != "")) {
            if ((elementId == "") && (imgSrc != "")) {
                _createElement = document.createElement(elementName);
                _createElement.className = elementClass;
                _createElement.value = elementValue;
                _createElement.addEventListener("click", function () {
                    localStorage.lastname=this.value;
                    document.location.href="provide.html";
                });
                inElement.appendChild(_createElement);
                createImg = document.createElement("img");
                createImg.src = imgSrc;
                _createElement.appendChild(createImg);

            }
           
            else if (imgSrc == "") {
                _createElement = document.createElement(elementName);
                _createElement.id = elementId;
                _createElement.className = elementClass;
                _createElement.style.background = _background;
                _createElement.value = elementValue;
                _createElement.addEventListener("click", function () {
                    localStorage.lastname=this.value;
                    document.location.href="provide.html";
                });

                inElement.appendChild(_createElement);

                for (let j = 0; j < imglength; j++) {
                    createImg = document.createElement("img");
                    createImg.src = indexObj.mainContent.contentBoxImg[imgObjLength][j];
                    _createElement.appendChild(createImg);
                }
                createSpan = document.createElement("span");
                createSpan.innerText = textSpan;
                _createElement.appendChild(createSpan);
            }
        }
    }
   
    /*-------------------------------------create element end-------------------------------------- */

    /*-------------------------------------object  start-------------------------------------- */
    var indexObj = {
        mainHeaderr: {
            headerImg: ["images/socar.png", "images/azersu.png", "images/azercel.png", "images/bakcell.png",
                "images/narmobile.png", "images/azerishiq.png", "images/meqasigorta.png"],
            headerBoxClass:["box1","box2","box3","box4","box5","box6","box7"],
            headerBoxValue:{
                headerBoxValueAze:["socarAze=aze","azersuAze","azercellAze","bakcellAze","narAze","azerisiqAze","meqaSigortaAze"],
                headerBoxValueRus:["socarRus=rus","azersuRus","azercellRus","bakcellRus","narRus","azerisiqRus","meqaSigortaRus"],
                headerBoxValueEng:["socarEng=eng","azersuEng","azercellEng","bakcellEng","narEng","azerisiqEng","meqaSigortaEng"]
            }

        },
        mainContent: {
            contentBoxTextAze: ["Kommunal ödənişləri", "Mobil operatorlar", "Bank xidmetleri", "Dovlet ve bələdiyə",
                "TV", "Internet", "Ödəmə kartlari", "Əyləncə ve oyunlar", "E-pulqabi"],
            contentBoxTextRus: ["Коммунальные платежи", "Мобильные операторы", "Банковские услуги", "Довлет и муниципалитет",
                "TВ", "Интернет", "Платежные карты", "Развлечения и игры", "E-кашальок"],
            contentBoxTextEng: ["Utility payments", "Mobile operators", "Bank services", "The State and municipality",
                "TV", "Internet", "Payment cards", "Entertainment and games", "E-wallet"],
            contentBoxBackground: ["#175db3", "#ffaa01", "#3d1e7b", "#b11da5", "#44801c", "#f03a24", "#0187c4", "#b11e48", "#b57720"],
            contentBoxImg: [["images/content/flame.png","images/content/drop.png", "images/content/lightbulb.png"], ["images/content/phone.png"],
            ["images/content/money.png"], ["images/content/financial.png"], ["images/content/monitor.png",],
            ["images/content/wifi.png"], ["images/content/cards.png"], ["images/content/gamepad.png"], ["images/content/filled-money.png"]],
            contentBoxValue:{
                contentBoxValueAze:["kOdenisAze=aze","mOperatorAze=aze","bXidmetleriAze=aze","dBlediyeAze=aze","tVAze=aze","internetAze=aze","oKartlariAze=aze","eOyunlarAze=aze","ePulqabiAze=aze"],
                contentBoxValueRus:["kOdenisRus=rus","mOperatorRus=rus","bXidmetleriRus=rus","dBlediyeRus=rus","tVRus=rus","internetRus=rus","oKartlariRus=rus","eOyunlarRus=rus","ePulqabiRus=rus"],
                contentBoxValueEng:["kOdenisEng=eng","mOperatorEng=eng","bXidmetleriEng=eng","dBlediyeEng=eng","tVEng=eng","internetEng=eng","oKartlariEng=eng","eOyunlarEng=eng","ePulqabiEng=eng"]
            }
        }
    };
    /*-------------------------------------object  end-------------------------------------- */
    
   
    function indexBox() {

        container = document.createElement("div");
        container.name = "div";
        container.id = "indexBox";
        document.body.appendChild(container);
        header = document.createElement("header");
        container.appendChild(header);
        imgEmanat = document.createElement("img");
        imgEmanat.className = "emanat";
        imgEmanat.src = "images/e-manat.png";
        header.appendChild(imgEmanat);

        language();

        /*---------------------------------main start---------------------------- */
        main = document.createElement("main");
        container.appendChild(main);
        mainHeader = document.createElement("header");
        main.appendChild(mainHeader);
        let setA = _language;
        mainHeaderBox(7,setA);

        mainContent = document.createElement("content");
        mainContent.id = "mainContent";
        main.appendChild(mainContent);
        
        mainContentBox(9,setA);
        /*---------------------------------main end--------------------------- */


    }
    indexBox();

    /*-----------------------------language element create start------------------------------- */
    function language(){
        imgA = document.createElement("img");
        imgA.src = "images/flagA.png";
        imgA.className = "flagAzeri";
        
        imgA.addEventListener("click", function () {
            document.body.children[1].remove();
            index(1);
        });
        header.appendChild(imgA);
        imgB = document.createElement("img");
        imgB.src = "images/flagR.png";
        imgB.className = "flagRussia";
        imgB.addEventListener("click", function () {
            document.body.children[1].remove();
            index(2);
        });
        header.appendChild(imgB);
        imgI = document.createElement("img");
        imgI.src = "images/flagI.png";
        imgI.className = "flagEnglish";
        imgI.addEventListener("click", function () {
            document.body.children[1].remove();
            index(3);
        });
        header.appendChild(imgI);
    }
    /*----------------------------language element create end----------------------------- */
    

    /*----------------------------------main header box start--------------------------- */
    function mainHeaderBox(item,getA) {
        for (let i = 0; i < item; i++) {
            let valueBox;
            if(getA==1){
                valueBox=indexObj.mainHeaderr.headerBoxValue.headerBoxValueAze[i];
            }
            else if(getA==2){
                valueBox=indexObj.mainHeaderr.headerBoxValue.headerBoxValueRus[i];
            }
            else if(getA==3){
                valueBox=indexObj.mainHeaderr.headerBoxValue.headerBoxValueEng[i];
            }
            let _headerBoxId=indexObj.mainHeaderr.headerBoxClass[i];
            createE("div", "", _headerBoxId,valueBox, mainHeader, indexObj.mainHeaderr.headerImg[i]);
        }
    }
    /*----------------------------------main header box end-------------------------------- */
    
    /*-------------------------------main content box start------------------------------------ */
    function mainContentBox(item, getA) {
        for (let i = 0; i < item; i++) {
            let _back = indexObj.mainContent.contentBoxBackground[i];
            let _length = indexObj.mainContent.contentBoxImg[i]["length"];
            let _textSpan;
            let contentBoxValue;
            if(getA==1){
                contentBoxValue=indexObj.mainContent.contentBoxValue.contentBoxValueAze[i];
            }
            else if(getA==2){
                contentBoxValue=indexObj.mainContent.contentBoxValue.contentBoxValueRus[i];
            }
            else if(getA==3){
                contentBoxValue=indexObj.mainContent.contentBoxValue.contentBoxValueEng[i];
            }

            if (getA == 1) {
                _textSpan = indexObj.mainContent.contentBoxTextAze[i];
            }
            else if (getA == 2) {
                _textSpan = indexObj.mainContent.contentBoxTextRus[i];
            }
            else if (getA == 3) {
                _textSpan = indexObj.mainContent.contentBoxTextEng[i];
            }
            createE("div", "contentBox", "",contentBoxValue, mainContent, "", _back, _length, k, _textSpan);
            k++;
        }
    }
    /*--------------------------------main content box end---------------------------------------- */
    
}
index(1);