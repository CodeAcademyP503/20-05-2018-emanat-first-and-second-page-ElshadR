/*------------------object start---------------- */
let provideObj={
    kOdenis:{
        mainHeader:{
            mainHeaderImg:["images/uPayments/flame.png","images/uPayments/drop.png","images/uPayments/lightbulb.png"],
            mainHeaderText:["KOMMUNAL ÖDDƏNİŞLƏRİ","ПРЕИМУЩЕСТВА КОММУНИСТРАТОРА","UTİLİTY PAYMENTS"]
        },
        mainContent:{
            mainContentImg:["images/uPayments/azerigaz.gif","images/uPayments/azerishiq.png","images/uPayments/azeristilik.png",
                "images/uPayments/azersu.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3"]
        },
        footer:{
            mainFooterSpan:["GERI","НАЗАД","BACK"]
        }
    },
    mOperator:{
        mainHeader:{
            mainHeaderImg:["images/mOperators/phone.png"],
            mainHeaderText:["MOBİL OPERATORLAR","МОБИЛЬНЫЕ ОПЕРАТОРЫ","MOBILE OPERATORS"]
        },
        mainContent:{
            mainContentImg:["images/mOperators/azercel.png","images/mOperators/bakcell.png","images/mOperators/narmobile.png"],
            mainContentBoxBackground:["#4391d3","#d3d3d3","#55a91f"]
        }
    },
    bXidmeti:{
        mainHeader:{
            mainHeaderImg:["images/banks/bank.png"],
            mainHeaderText:["BANKLAR","БАНКИ","BANKS"]
        },
        mainContent:{
            mainContentImg:["images/banks/bankbtb.png","images/banks/bankofbaku.png","images/banks/embafinans.png",
                "images/banks/expressbank.png","images/banks/finca.png","images/banks/meqasigorta.png",
                "images/banks/molbulak.png","images/banks/rabitebank.png","images/banks/turanbank.png",
                "images/banks/unibank.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3","#e2416e","#b90a86",
                "#55a91f","#d3d3d3","#55a91f","#767070"]
        }
    },
    dBelediye:{
        mainHeader:{
            mainHeaderImg:["images/dBelediye/bankk.png"],
            mainHeaderText:["DÖVLƏT VƏ BƏLƏDİYYƏ ÖDƏNİŞLƏRİ","ГОСУДАРСТВЕННЫЕ И УДОВЛЕТВОРНЫЕ ПЛАТЕЖИ","STATE AND SATISFACTION PAYMENTS"]
        },
        mainContent:{
            mainContentImg:["images/dBelediye/gb1.png","images/dBelediye/gb1.png","images/dBelediye/gb1.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86"],
            mainContentBoxTextAze:["ƏMDK","Bələdiyə vergiləri və ödənişləri","NİZAMİ MKTB"],
            mainContentBoxTextRus:["ƏMDK","Муниципальные налоги и сборы","NİZAMİ MKTB"],
            mainContentBoxTextEng:["ƏMDK","Municipal taxes and fees","NİZAMİ MKTB"]
        }
    },
    TV:{
        mainHeader:{
            mainHeaderImg:["images/TV/monitor.png"],
            mainHeaderText:["TV","ТВ","TV"]
        },
        mainContent:{
            mainContentImg:["images/TV/ailetv.png","images/TV/atv.png","images/TV/baktelecomaz.png",
                "images/TV/clip.png","images/TV/headlogo.png","images/TV/tvcity.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3","#e2416e","#b90a86"]
        }
    },
    internet:{
        mainHeader:{
            mainHeaderImg:["images/internet/wifi.png"],
            mainHeaderText:["INTERNET","ИНТЕРНЕТ","INTERNET"]
        },
        mainContent:{
            mainContentImg:["images/banks/bankbtb.png","images/banks/bankofbaku.png","images/banks/embafinans.png",
                "images/banks/expressbank.png","images/banks/finca.png","images/banks/meqasigorta.png",
                "images/banks/molbulak.png","images/banks/rabitebank.png","images/banks/turanbank.png",
                "images/banks/unibank.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3","#e2416e","#b90a86",
                "#55a91f","#d3d3d3","#55a91f","#767070"]
        }
    },
    oKartlari:{
        mainHeader:{
            mainHeaderImg:["images/odemekartlari/cards.png"],
            mainHeaderText:["ÖDƏMƏ KARTLARI","ПЛАТЕЖНЫЕ КАРТЫ","PAYMENT CARDS"]
        },
        mainContent:{
            mainContentImg:["images/banks/bankbtb.png","images/banks/bankofbaku.png","images/banks/embafinans.png",
                "images/banks/expressbank.png","images/banks/finca.png","images/banks/meqasigorta.png",
                "images/banks/molbulak.png","images/banks/rabitebank.png","images/banks/turanbank.png",
                "images/banks/unibank.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3","#e2416e","#b90a86",
                "#55a91f","#d3d3d3","#55a91f","#767070"]
        }
    },
    eOyunlar:{
        mainHeader:{
            mainHeaderImg:["images/eylenceveoyun/gamepad.png"],
            mainHeaderText:["ƏYLƏNCƏ VƏ OYUNLAR","РАЗВЛЕЧЕНИЯ И ИГРЫ","ENTERTAİNMENT AND GAMES"]
        },
        mainContent:{
            mainContentImg:["images/eylenceveoyun/azerlotereya.png","images/eylenceveoyun/lisenziya.png"],
            mainContentBoxBackground:["#767070","#55a91f"]
        }
    },
    ePulqbi:{
        mainHeader:{
            mainHeaderImg:["images/e-pulqabi/filled-money.png"],
            mainHeaderText:["E-PULQABI","E-WALLET","E-WALLET"]
        },
        mainContent:{
            mainContentImg:["images/e-pulqabi/yandex.png","images/e-pulqabi/kasam.png","images/e-pulqabi/portmanat.png",
            "images/e-pulqabi/moneta.png","images/e-pulqabi/wallet.png"],
            mainContentBoxBackground:["#d3d3d3","#55a91f","#b90a86","#4391d3","#e2416e","#b90a86"]
        }
    },
    footer:{
        mainFooterSpan:["GERI","НАЗАД","BACK"]
    }
}
var _createProvideElement;
let _createProvideImg;
function createPE(elementName,elementId,elementClass,elementValue,inElement,imgSrc,_background,imgs,_text){
    if(elementName!=""){
        if(imgSrc!=""){
            _createProvideElement=document.createElement(elementName);
            _createProvideElement.id=elementId;
            _createProvideElement.className=elementClass;
            _createProvideElement.style.background=_background;
            _createProvideElement.innerText=_text;
            inElement.appendChild(_createProvideElement);
            _createProvideImg=document.createElement("img");
            _createProvideImg.src=imgSrc;
            _createProvideElement.appendChild(_createProvideImg)
        }
        else if(imgSrc==""){
            _createProvideElement=document.createElement(elementName);
            _createProvideElement.id=elementId;
            _createProvideElement.src=imgs;
            _createProvideElement.className=elementClass;
            _createProvideElement.style.background=_background;
            _createProvideElement.innerText=_text;
            inElement.appendChild(_createProvideElement); 
        }
    }

    
}

let buttonBack=localStorage.lastname.split("=");
    let container;
    let _header;
    let _main;
    let _mainHeader;
    let _mainContent;
    let _footer;

function _back(changeText){
        _footer=document.createElement("footer");
        container.appendChild(_footer);
        let _text;
        if(changeText=="aze"){
            _text=provideObj.footer.mainFooterSpan[0]; 
            }
        else if(changeText=="rus"){
            _text=provideObj.footer.mainFooterSpan[1]; 
            }
        else if(changeText=="eng"){
            _text=provideObj.footer.mainFooterSpan[2];
            }
        createPE("span","footerSpan","","",_footer,"","green","",_text)
        footerSpan.onclick=function(){document.location.href="index.html"};
}
/*------------------object end---------------- */

/*------------------------------utility payments star------------------------------------ */
if(buttonBack[0]=="kOdenisAze" || buttonBack[0]=="kOdenisRus" || buttonBack[0]=="kOdenisEng"){
    
    function provideKO(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        
        for(let i=0;i<3;i++){
            createPE("img","","","",_mainHeader,"","",provideObj.kOdenis.mainHeader.mainHeaderImg[i],"");
        }
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="kOdenisAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.kOdenis.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="kOdenisRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.kOdenis.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="kOdenisEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.kOdenis.mainHeader.mainHeaderText[2]);
        }



        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.kOdenis.mainContent.mainContentImg.length;
        mainContentBox(_length);

        
        _back(buttonBack[1]);

       
    }
    provideKO(buttonBack[0]);
    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.kOdenis.mainContent.mainContentImg[i];
            let back=provideObj.kOdenis.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
        }
    }
};
/*------------------------------utility payments end------------------------------------ */

/*------------------------------mobile operator star------------------------------------ */
if(buttonBack[0]=="mOperatorAze" || buttonBack[0]=="mOperatorRus" || buttonBack[0]=="mOperatorEng"){
    function provideMO(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);
        createPE("img","","","",_mainHeader,"","",provideObj.mOperator.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="mOperatorAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.mOperator.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="mOperatorRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.mOperator.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="mOperatorEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.mOperator.mainHeader.mainHeaderText[2]);
        }



        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.mOperator.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);
    }
    provideMO(buttonBack[0]);
    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.mOperator.mainContent.mainContentImg[i];
            let back=provideObj.mOperator.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
        }
    }
};
/*------------------------------mobile operator end------------------------------------ */

/*------------------------------Bank service start--------------------------------------- */

if(buttonBack[0]=="bXidmetleriAze" || buttonBack[0]=="bXidmetleriRus" || buttonBack[0]=="bXidmetleriEng"){
    function provide(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.bXidmeti.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="bXidmetleriAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.bXidmeti.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="bXidmetleriRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.bXidmeti.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="bXidmetleriEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.bXidmeti.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.bXidmeti.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provide(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.bXidmeti.mainContent.mainContentImg[i];
            let back=provideObj.bXidmeti.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------Bank service end--------------------------------------- */

/*------------------------------The State and municipality start--------------------------------------- */

if(buttonBack[0]=="dBlediyeAze" || buttonBack[0]=="dBlediyeRus" || buttonBack[0]=="dBlediyeEng"){
    function provideDB(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.dBelediye.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="dBlediyeAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.dBelediye.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="dBlediyeRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.dBelediye.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="dBlediyeEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.dBelediye.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.dBelediye.mainContent.mainContentImg.length;
        mainContentBox(_length,changeText);
        _back(buttonBack[1]);

    }
    provideDB(buttonBack[0]);


    function mainContentBox(item,_changeText){
        for(let i=0;i<item;i++){
            let imgs=provideObj.dBelediye.mainContent.mainContentImg[i];
            let back=provideObj.dBelediye.mainContent.mainContentBoxBackground[i];
            createPE("div","","boxDB","",_mainContent,imgs,back,"","");
            let _span=document.createElement("span");
            if(_changeText=="dBlediyeAze"){
                _span.innerText=back=provideObj.dBelediye.mainContent.mainContentBoxTextAze[i];
            }
            else if(_changeText=="dBlediyeRus"){
                _span.innerText=back=provideObj.dBelediye.mainContent.mainContentBoxTextRus[i];
            }
            else if(_changeText=="dBlediyeEng"){
                _span.innerText=back=provideObj.dBelediye.mainContent.mainContentBoxTextEng[i];
            }
            _createProvideElement.appendChild(_span);
        }
    }

}
/*------------------------------The State and municipality end--------------------------------------- */

/*------------------------------TV start--------------------------------------- */

if(buttonBack[0]=="tVAze" || buttonBack[0]=="tVRus" || buttonBack[0]=="tVRus"){
    function provideTV(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.TV.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="tVAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.TV.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="tVRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.TV.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="tVEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.TV.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.TV.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provideTV(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.TV.mainContent.mainContentImg[i];
            let back=provideObj.TV.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------TV end--------------------------------------- */

/*------------------------------Internet start--------------------------------------- */

if(buttonBack[0]=="internetAze" || buttonBack[0]=="internetRus" || buttonBack[0]=="internetEng"){
    function provideI(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.internet.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="internetAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.internet.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="internetRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.internet.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="internetEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.internet.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.internet.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provideI(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.internet.mainContent.mainContentImg[i];
            let back=provideObj.internet.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------Internet end--------------------------------------- */

/*------------------------------Payment cards start--------------------------------------- */

if(buttonBack[0]=="oKartlariAze" || buttonBack[0]=="oKartlariRus" || buttonBack[0]=="oKartlariEng"){
    function provideOK(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.oKartlari.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="oKartlariAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.oKartlari.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="oKartlariRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.oKartlari.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="oKartlariEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.oKartlari.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.oKartlari.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provideOK(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.oKartlari.mainContent.mainContentImg[i];
            let back=provideObj.oKartlari.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------Payment cards end--------------------------------------- */



/*------------------------------Entertainment and games start--------------------------------------- */

if(buttonBack[0]=="eOyunlarAze" || buttonBack[0]=="eOyunlarRus" || buttonBack[0]=="eOyunlarEng"){
    function provideOK(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.eOyunlar.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="eOyunlarAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.eOyunlar.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="eOyunlarRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.eOyunlar.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="eOyunlarEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.eOyunlar.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.eOyunlar.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provideOK(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.eOyunlar.mainContent.mainContentImg[i];
            let back=provideObj.eOyunlar.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------Entertainment and games end--------------------------------------- */

/*------------------------------E-wallet start--------------------------------------- */

if(buttonBack[0]=="ePulqabiAze" || buttonBack[0]=="ePulqabiRus" || buttonBack[0]=="ePulqabiEng"){
    function provideOK(changeText){
        container=document.createElement("div");
        container.id="provide";
        document.body.appendChild(container);

        _header=document.createElement("header");
        container.appendChild(_header);

        _main=document.createElement("main");
        container.appendChild(_main);

        _mainHeader=document.createElement("header");
        _main.appendChild(_mainHeader);

        createPE("img","","","",_mainHeader,"","",provideObj.ePulqbi.mainHeader.mainHeaderImg[0],"");
        createPE("div","","","",_mainHeader,"","","","");
        if(changeText=="ePulqabiAze"){
            createPE("span","","","",_mainHeader,"","","",provideObj.ePulqbi.mainHeader.mainHeaderText[0]);
        }
        else if(changeText=="ePulqabiRus"){
            createPE("span","","","",_mainHeader,"","","",provideObj.ePulqbi.mainHeader.mainHeaderText[1]);
        }
        else if(changeText=="ePulqabiEng"){
            createPE("span","","","",_mainHeader,"","","",provideObj.ePulqbi.mainHeader.mainHeaderText[2]);
        }


        _mainContent=document.createElement("content");
        _main.appendChild(_mainContent);
        let _length=provideObj.ePulqbi.mainContent.mainContentImg.length;
        mainContentBox(_length);
        _back(buttonBack[1]);

    }
    provideOK(buttonBack[0]);


    function mainContentBox(item){
        for(let i=0;i<item;i++){
            let imgs=provideObj.ePulqbi.mainContent.mainContentImg[i];
            let back=provideObj.ePulqbi.mainContent.mainContentBoxBackground[i];
            createPE("div","","box","",_mainContent,imgs,back,"","");
           

        }
    }

}
/*------------------------------E-wallet end--------------------------------------- */