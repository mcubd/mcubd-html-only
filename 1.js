function me() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd.herokuapp.com/------------------------------------fb---------------fb-----', true);
    xhttp.send();
    window.open('https://www.facebook.com/zafar.niloy','_self')

}

function aaa() {
    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd.herokuapp.com/----------------------------------Vlc------------------------------', true);
    xhttp.send();

}

function mcus() {
    // window.open('https://mcubd.herokuapp.com/ms','_self')


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd.herokuapp.com/----------------------------------Marvel--seris--clicked------------------------', true);
    xhttp.send();


    window.open('https://mcubd.netlify.app/mcu-seris/index','_self')

}

function mcu() {
    // location.reload(true);    
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", 'https://mcubd.herokuapp.com/----------------------------------MCU-but-clicked--------------------------', true);
    xhttp.send();

    window.open('https://mcubd.netlify.app', '_self')
}

function home() {
    // location.reload(true);
    var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", 'https://mcubd.herokuapp.com/----------------------------------MCU-logo-clicked--------------------------', true);
    xhttp.send();


    window.open('https://mcubd.netlify.app', '_self')
}

function mar() {

    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd.herokuapp.com/----------------------------------Marvel-butt-clicked-------------------------', true);
    xhttp.send();
    window.open('https://mcubd.netlify.app/marvel/index','_self')
    
}

function other() {

    // alert('coming...')


    var xhttp = new XMLHttpRequest();

    xhttp.open("GET", 'https://mcubd.herokuapp.com/---------------------------------other-clicked-----------------------------', true);
    xhttp.send();


    window.open('https://mcubd.netlify.app/others/index','_self')


}





function imgdiv(bname, bimg, q7pp,size,t1,t2) {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var g = w * .3939


    var chidiv = document.createElement("div");
    var iiidiv = document.createElement("div");
    var p = document.createElement("p");
    p.innerText = bname
    var image = document.createElement("img");

    chidiv.classList.add('chi');
    iiidiv.classList.add('iii');
    image.src ='./logoimg/'+ bimg+'.jpg'

    iiidiv.append(image)
    chidiv.append(iiidiv, p)
    var con = document.getElementById('cont')
    con.appendChild(chidiv)

    if (h - w < 0) {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .9 + 'px'
        chidiv.style.width = g * .6 + 'px'

        image.style.width = g * .6 + 'px'

        iiidiv.style.height = h * .7 + 'px'
        iiidiv.style.overflow = 'hidden'

    } 
    else {
        chidiv.style.backgroundColor = '#000000';
        chidiv.style.padding = '0px'
        chidiv.style.marginTop = '14px'
        chidiv.style.float = 'left'
        chidiv.style.height = h * .55 + 'px'
        chidiv.style.width = g + 'px'

        image.style.width = g + 'px'

        iiidiv.style.height = h * .4 + 'px'
        iiidiv.style.overflow = 'hidden'

    }

    chidiv.onclick = () => {
        var con = document.getElementById('cont')
        con.style.display = 'none'

        var req = 'https://mcubd.herokuapp.com/--------------------' + bimg + '------------------' + bimg
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", req, true);
        xhttp.send();



        var onli = document.createElement("button");
        var down7 = document.createElement("button");
        
        onli.setAttribute('id', 'onli')
        down7.setAttribute('id', 'down')

        onli.innerText = 'Watch Online'
        down7.innerText = 'Download (' + size + ')'

        down7.style.display = 'block'
        down7.style.width = '100%'
        down7.style.padding ='50px'
        
        onli.style.display = 'block'
        onli.style.width = '100%'
        onli.style.padding = '50px'
        onli.style.marginBottom = '10px'

        // document.body.append(video, button)
        document.body.append(onli,down7)

    



onli.onclick = () => {
        var onli = document.getElementById('onli')
        onli.remove()
        var dow = document.getElementById('down')
        dow.remove()


        var video = document.createElement("video");
        var source = document.createElement("source");
        var mic = document.createElement("button");
        var poc = document.createElement("button");

        video.setAttribute('controls', 'true')
        video.setAttribute('autoplay', 'true')
        video.setAttribute('id', 'viddd')
        video.setAttribute('controlsList', 'noplaybackrate nodownload ')
        video.setAttribute('oncontextmenu', 'return false;')

        source.setAttribute('id', 'srcc')
        mic.setAttribute('id', 'mic')
        poc.setAttribute('id', 'poc')
        
        video.width = w * .94
        video.style.marginTop = '20px'
        source.src = q7pp

        mic.innerText = 'Mid-Credit'
        poc.innerText = 'Post-Credit'

        mic.style.padding = '20px'
        poc.style.padding = '20px'
        video.append(source)

        document.body.append(video)

        // var ti0 = setTimeout(() => {
        //     var vid0 = document.getElementById("viddd");
        //     if (vid0.readyState != 4  && vid0.currentTime < 2) {
        //         alert('Video loading failed,Plz Reload the Website to fix it')
        //     }
        // }, 60000);

setTimeout(() => {
    if(video.currentTime===0){
        // window.location.href = "https://mcubd.netlify.app"
        alert('আরে ভাই আপনার ইন্টারনেটের speed কম, আপনি ডাউনলোড করে দেখুন,এত কম speed এ অনলাইনে দেখা সম্ভব না')

        var aud = document.createElement("audio")
        var sourc = document.createElement("source");

        aud.setAttribute('controls', 'true')
        aud.setAttribute('autoplay', 'true')

        aud.append(sourc)

        aud.src='https://mcubd.netlify.app/logoimg/op.mp3'

        // document.body.append(aud)

setTimeout(() => {
        // window.location.href = "https://mcubd.netlify.app"
    
}, 20000);



        

    }

}, 2000);


        sig(bimg,'9000','9s')
        sig(bimg,'20000','20s')
        sig(bimg,'40000','40s')
        sig(bimg,'120000','2m')
        sig(bimg,'300000','5m')
        sig(bimg,'900000','15m')
        sig(bimg,'1200000','20m')
        sig(bimg,'1800000','30m')
        sig(bimg,'2400000','40m')
        sig(bimg,'3000000','50m')
        sig(bimg,'3600000','1h')
        sig(bimg,'4200000','1h-10m')
        sig(bimg,'4800000','1h-20m')
        sig(bimg,'5400000','1h-30m')
        sig(bimg,'6000000','1h-40m')
        sig(bimg,'6600000','1h-50m')
        sig(bimg,'7200000','2h')
        sig(bimg,'7500000','2h-5m')
        sig(bimg,'7800000','2h-10m')
        sig(bimg,'8100000','2h-15m')
        sig(bimg,'8400000','2h-20m')
        sig(bimg,'8700000','2h-25m')
        sig(bimg,'9000000','2h-30m')
        sig(bimg,'9300000','2h-35m')
        sig(bimg,'9600000','2h-40m')



        // var ti = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-8s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 8000);
        // var ti2 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-20s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 20000);
        // var ti3 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-40s---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 40000);
        // var ti4 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-2m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 120000);
        // var ti5 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-5m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 300000);
        // var ti6 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-15m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 900000);
        // var ti7 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-30m---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 1800000);
        // var ti8 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-1h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 3600000);
        // var ti9 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-1:30-h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 5400000);
        // var ti10 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-1:45-h--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 6300000);
        // var ti11 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-2h---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 7200000);
        // var ti12 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-2h-10m--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 7800000);
        // var ti13 = setTimeout(() => {
        //     var xhttp = new XMLHttpRequest();
        //     xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-2h-16m--' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
        //     xhttp.send();

        // }, 8160000);

        video.oncanplay = function () {
            var viddd1 = document.getElementById('viddd')

            if (video.currentTime < 2 && video.readyState == 4 && viddd1 != null) {
                if(t1!=undefined && t1 !=''){document.body.append(mic)
                    mic.onclick=function(){
            if(t1!=undefined && t1 !=''){
        document.getElementById('viddd').currentTime=t1}else{alert('No Mid-credit')}}

                
                }


                if(t2!=undefined && t2 !=''){document.body.append(poc)
                    poc.onclick=function(){
            if(t2!=undefined && t2 !=''){
        document.getElementById('viddd').currentTime=t2}else{alert('No Post-credit')}}
                
                }

            }

        };





        }



        down7.onclick = () => {
            var req = 'https://mcubd.herokuapp.com/-----------------download---' + bimg + '------------------'
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", req, true);
        xhttp.send();

        down7.disabled=true
            window.open(q7pp, '_self') }


    }

}



setTimeout(() => {

    // imgdiv(name,img,q7,down,size)

    imgdiv('Avengers: Infinity War   (2018)         [1.3GB]', 'war', 'https://abcd.bdff.workers.dev/0:/infinity.mp4', '1.3GB')


    imgdiv('Avengers: Endgame(2019) [1.6GB]','end','https://share.bdff.workers.dev/0:/MCU-720/Endgame720p.mp4','1.6GB')


    imgdiv('Avengers age of ultron (2015) [1.2GB]', 'Avengers2', 'https://abcd.bdff.workers.dev/0:/ultron-mp3.mp4', '1.2GB')


    imgdiv('Thor ragnarok (2017) [1.3GB]', 'Thor3', 'https://abcd.bdff.workers.dev/0:/Thor-ragnarock-mp3.mp4', '1.3GB','7354','7770')


    imgdiv('Captain America: The First Avenger (2011)    [1.2GB]','cap','https://share.bdff.workers.dev/0:/MCU-720/captain-america-720.mp4','1.2GB')


    imgdiv('Iron Man  (2008) [984MB]','iron','https://share.bdff.workers.dev/0:/MCU-720/IronMan-720p.mp4','984MB','','7508')


    imgdiv('Captain America: Civil War  (2016) [1.5GB]','civil','https://share.bdff.workers.dev/0:/MCU-720/Civil-war.mp4','1.5GB')

    imgdiv('Iron Man 3 (2013) [1.2GB]','iron3','https://share.bdff.workers.dev/0:/MCU-720/Iron-man3.mp4','1.2GB')


    imgdiv('Spider-Man: Homecoming (2017) [1.3GB]','spi1','https://share.bdff.workers.dev/0:/MCU-720/spi1.mp4','1.3GB')


    imgdiv('Captain America: The Winter Soldier (2014) [1.3GB]','cap2','https://share.bdff.workers.dev/0:/MCU-720/cap2.mp4','1.3GB')



    imgdiv('Guardian of the galaxy vol.2  (2017) [1.2GB]', 'galaxy2','https://abcd.bdff.workers.dev/0:/Guardian2-mp3.mp4', '1.2GB')



    imgdiv('Ant-man (2015) [920MB]', 'ant', 'https://abcd.bdff.workers.dev/0:/Ant.Man-mp3.mp4', '920 MB')


    imgdiv('Guardian of the galaxy vol.1   (2014)   [1.9GB]','galaxy','https://abcd.bdff.workers.dev/0:/guardian.mp4','1.9GB')



    imgdiv('Doctor Strange (2016) [1.2GB]', 'dr', 'https://share.bdff.workers.dev/0:/MCU-720/Doctor.Strange.2016.720p.mp4', '1.2GB','6390','6775')



    imgdiv('Ant-Man and the Wasp  (2018)  [1.2GB]','ant2','https://share.bdff.workers.dev/0:/MCU-720/ant2.mp4','1.2GB')


    // imgdiv('Doctor Strange in the Multiverse of Madness ,Coming soon.','drst2.jpg')


    // imgdiv('Yaariyan    [1.2GB]', 'yari', 'https://abcd.bdff.workers.dev/0:/Yaariyan.720.mp4', '1.2GB')

    


}, 1);

function sig(bimg,sett,tim){

     var video=document.getElementById('viddd') 
    return setTimeout(() => {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", 'https://mcubd.herokuapp.com/-------------------------------' + bimg + '-----State-'+tim+'---' + video.readyState + '--' + Math.trunc(video.currentTime / 60 / 60) + ':' + Math.trunc((video.currentTime / 60) % 60) + ':' + Math.trunc(video.currentTime % 60) + '--------------------', true);
            xhttp.send();
    
        }, sett);
    
}



var aud1 = document.createElement("audio")
var sourc1 = document.createElement("source");

aud1.setAttribute('controls', 'true')
// aud1.setAttribute('autoplay', 'true')

aud1.append(sourc1)

aud1.src='https://mcubd.netlify.app/logoimg/op.mp3'
