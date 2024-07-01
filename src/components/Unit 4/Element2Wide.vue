<template>
    <!--
        This "Element2Wide.vue" component shows up when the screen is wider than a certain number.
        (See "ScrollView.vue")
    -->
    <!--
        Code reference: Adeoye's blog article "How to build a Vuejs image slider"
        https://medium.com/@davidola360/how-to-create-a-vuejs-image-slider-60b4be844081
    -->
    <div class="container" id="container" @keyup="created">
        <div class="nav-buttons">
            <button @click="previous" class="control">
                <
            </button>
            <button @click="next" class="control">
                >
            </button>
        </div>
        
        <div id="overlay" class="overlay" @click="clickOut('overlay'); clickOut('media')">
            <!--
                Overlay class rests upon the slide class. It contains video/3d model data and it expands when a user
                selects the thumbnail picture.
            -->
        </div>
        <video id="media1" class="media" width="80%" controls>
            <source src="@/assets/Unit1-twoPeopleSharingSoda.mp4" type="video/mp4" showControl>
        </video>

        <img id="media2" class="media" width="80%" src=""> 

        <img id="media3" class="media" width="40%" src="">

        <img id="media4" class="media" width="40%" src="">

        <img id="media5" class="media" width="80%" src="">

        <img id="media6" class="media" width="80%" src="">

        <img id="media7" class="media" width="80%" src="">

        <img id="media8" class="media" width="80%" src="">

        <img id="media9" class="media" width="80%" src="">

        <p class="title">
            Dark Souls
        </p>
        <div id="slide" v-if="!gridEnabled" @touchstart="touchStartMethod" @mousedown="mouseDownMethod" @keyup.left="next()" @click="isElementXPercentInViewport">
            <div class="page" id="page1">
                <p>
                    <strong>What we will learn in this unit:</strong>
                    <ul list-style: disc outside none>
                        <li>Alkanes, Alkenes, and Alkynes</li>
                        <li>A systematic approach to naming hydrocarbons</li>
                    </ul>
                </p>
                <p style="margin-top: 27px;" >
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
                <p>
                    
                </p>
            </div>
            <div class="page" id="page">
            </div>
            <div class="page" id="page">
                <p><strong>Bonding</strong></p>
                <p>
                    
                </p>
                <p>
                   
                </p>
                <p>

                </p>
            </div>
            <div class="page" id="page">
                <p>
                </p>
                <p>
                </p>
            </div>
            <div class="page" id="page">
                <p>
                </p>
                <p style="margin-bottom: 30px;">
                </p>
            </div>
            <div class="page" id="page">
                <p style="margin-bottom: 30px;">
                </p>
                <p style="margin-top: 30px;">
                </p>
            </div>
            <div class="page" id="page">
                <p style="text-indent: 0%;">
                </p>
                <img src="@/assets/Unit1-BondSymbolTable.webp" style="margin:30px auto; width: 50%; cursor: pointer;" @click="playVideo('overlay'); playVideo('media5')">
                <p>
                </p>
            </div>
            <div class="page" id="page">
                <p><strong>Representing structures</strong></p>
                <p>               
                </p>
                <p>
                </p>
                <p>
                </p>
            </div>
            <div class="page" id="page">
                <p style="text-indent: 0%;">
                </p>
                <p>
                </p>
            </div>
        </div>
        <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
        </div> 
    </div>
</template>

<script>
import { TresCanvas } from '@tresjs/core'

export default {
    data(){
        return{
            count: 0,
            direction: 'forward',
            frame: 2
        }
    },
    created(){
        var self = this;
        //var slide = setInterval(()=>this.slideLoop(this.direction),2000)
        window.addEventListener('scroll', this.handleScroll);
        document.onkeydown = function(e) {
            switch(e.which) {
                case 37: 
                self.previous()// left
                break;

                case 39: 
                self.next()// right
                break;
            }
        };
    },
    
    methods:{
        ////playVideo() invokes the overlay area that has a video on top of it.
        playVideo(id){
            document.getElementById(id).style.display = "flex";
        },
        //closeVideo() closes the overlay area.
        closeVideo(id){
            document.getElementById(id).style.display = "none";
        },
        play3D(){
            document.getElementById("overlay2").style.display = "flex";
        },
        close3D(){
            document.getElementById("overlay2").style.display = "none";
        },
        clickOut(cls){
            const el = document.getElementsByClassName(cls);
            for (let i=0; i < el.length; i += 1) {
                el[i].style.display = "none";
            }
        },
        //handleScroll() manages the scroll bar function. Every time a user clicks Next/Previous,
        //it increases/decreases the area of a green bar that indicates where the reader is at wihtin
        //the whole slide.
        handleScroll() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            //var scrolled = (winScroll / height) * 100;
            //var totalWidth = screen.availWidth;
            var totalWidth = document.getElementById("slide").offsetWidth;
            var scrolled = (window.screen.width <= window.screen.height) ? totalWidth / 11 : totalWidth / 5; //5 because the current slide has 12 pages. (12/2 = 6, 6-1=5)
            document.getElementById("myBar").style.width = scrolled*this.count + "px";
            console.log(this.count)
        },

        previous() {
            if(this.count <= 12 && this.count > 0){ //12 because the current slide has 12 pages
                this.count--
            }
            this.scroll("previous")
            this.handleScroll()
        },

        next() {
            if(this.count < 12 && this.count >= 0){ //12 because the current slide has 12 pages
                this.count++
            }
            this.scroll("next")
            this.handleScroll()
        },

        scroll(position) {
            let el = document.getElementById("slide");
            let width = document.getElementById("container").offsetWidth/2;
            let pos = 0;
            let id = setInterval(frame, 10);
            let num = 10 - this.frame //put the total number of pages here
            //let width = (screen.availWidth-160)*0.5;
            let resize = num * width
            let check = position == "reset" ? resize : width 
            function frame() {
                if (pos >= check) {
                    clearInterval(id);
                }
                else {
                    pos += 5;
                    let leftDirection = 12;
                    let rightDirection = 12;
                    /*** if (window.screen.width < 425) {
                        leftDirection = 9;
                        rightDirection = 9;
                    }
                    else if (window.screen.width < 499) {
                        leftDirection = 8.7;
                        rightDirection = 8.2;
                    }
                    else if (window.screen.width < 1600) {
                        leftDirection = 12;
                        rightDirection = 12;
                    }
                    else if (window.screen.width <= 1920) {
                        leftDirection = 12;
                        rightDirection = 12;
                    }
                    else if (window.screen.width <= 2560){
                        leftDirection = 14;
                        rightDirection = 13.5;
                    }
                    else {
                        leftDirection = 18;
                        rightDirection = 17.5;
                    } ***/
                    if(position == 'next'){  
                        el.scrollLeft +=  leftDirection
                    }
                    else{
                        el.scrollLeft -= rightDirection
                    }
                }
            }
            
            console.log(position)
            console.log(resize)
            console.log(check)
            console.log(width);
            console.log(pos);
            console.log(document.getElementById("container").offsetWidth/2)
        },

        resetScroll(){
            this.count = 0
            this.direction = "forward"
            this.scroll("reset")
        },
 
        touchStartMethod (touchEvent) {
            if (touchEvent.changedTouches.length !== 1) { // Only care if one finger is used
                return;
            }
            const posXStart = touchEvent.changedTouches[0].clientX;
            addEventListener('touchend', (touchEvent) => this.touchEndMethod(touchEvent, posXStart), {once: true});
        },

        touchEndMethod (touchEvent, posXStart) {
            if (touchEvent.changedTouches.length !== 1) { // Only care if one finger is used
                return;
            }
            const posXEnd = touchEvent.changedTouches[0].clientX;
            if (posXStart < posXEnd) {
                this.previous(); // swipe right
            } else if (posXStart > posXEnd) {
                this.next(); // swipe left
            }
        },

        mouseDownMethod (touchEvent) {
            const posXStart = touchEvent.clientX;
            addEventListener('mouseup', (touchEvent) => this.mouseUpMethod(touchEvent, posXStart), {once: true});
        },

        mouseUpMethod (touchEvent, posXStart) {
            const cellText = document.getSelection();
            const posXEnd = touchEvent.clientX;
            if (cellText.type != 'Range') {
                if (posXStart < posXEnd) {
                    this.previous(); // swipe right
                } else if (posXStart > posXEnd) {
                    this.next(); // swipe left
                }
            }
        },
    },
}


</script>

<style scoped>

/* Header */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(72, 72, 72);
  overflow: hidden;
  max-width: 100%;
}

header{
  background-color: rgb(255, 255, 130);
}

nav {
  margin-left:5%;
  display: flex;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.overlay{
  position:fixed;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: rgba(67, 67, 67, 0.6);
  width:100%;
  height:120%;
  color:white;
  cursor: pointer;
  display:none;
}

.media {
    position: absolute;
    left: 0;
    right: 0;
    top: 15%;
    bottom: 0;
    margin: auto;
    color:white;
    cursor: pointer;
    display:none;
}
.title {
    font-family: "League Spartan", sans-serif;
    margin: 1vw;
    color:aliceblue; 
    font-size: 2.5vw;
}

.nav-buttons {
    background-color: rgba(128, 128, 128, 0.1);
    position: absolute;
    display: flex;
    width: 140px;
    justify-content: center;
    justify-self: center;
    border-radius: 35px;
    right: 3.5%;
    bottom: 5%;
}

.control {
    background: transparent;
    opacity: 0.3;
    display: flex;
    margin: auto;
    align-items: center;
    justify-self: center;
    height: 70px;
    color: yellow ;
    border: none;
    font-size: 90px;
}

.nav-buttons :hover {
    opacity: 0.5;
}

#slide {
  height: 80vh;
  width: 120%;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  text-indent: 2%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  max-width: 81vw;
  padding-bottom: 0;
  height:100%;
  padding-right: 0;
  padding-left: 0;
}

#slide > div {
  min-width: 50%;
  height: 100%;
  min-height: 400px;
  padding: 2%;
  box-sizing: border-box;
  background-color: aliceblue;
  text-align: left;
  margin:0;
  overflow-y: scroll !important; 
  -ms-overflow-style: none;  
  scrollbar-width: none;  
}
#slide > div::-webkit-scrollbar {
  display: none;
}

#slide > div > img {
  max-width: 50%;
}

#slide > div > div {
  padding:2%;
  color: #FFFFFF;
  background: #212121;
  text-align: center;
  border-radius: 20px;
  display:block;
  margin:0;
}

#slide > div > div > h6 {
    margin: 0;
    font-size: 16px;
    text-align: center;
}

#slide > div > div > p {
    text-indent: 0%;
    font-size: 1.5vh;
    font-family: "League Spartan",sans-serif;
    text-align: justify;
}

#slide > div > textarea{
    margin: 0 4% 4% 4%;
    width:95%;
    height:10%;
}

.ex-answer {
    margin: 0% 4% !important;
    width:95% !important;
    height:7% !important;
}

.progress-container {
  width: 120%;
  height: 1%;
  background: #cccccc;
  margin:0;
}

.progress-bar {
  height: 8px;
  background: #04AA6D;
  width: 0%;
  min-width:0%;
  max-width:100%;
}

#slide > .page > p {
    margin: 12.5px;
    font-size: 2.5vh;
    font-family:"League Spartan",sans-serif;
    text-align: justify;
}

.wrap-up-head {
    font-style: italic; 
    margin-bottom: 0% !important;
}

.wrap-up-content {
    margin-top: 0% !important;

}

.excercise {
    margin:30px auto; 
    min-width: 90%; 
    cursor: pointer;
}

/*** Media Quiries for Width ***/
@media (max-width: 700px) and (orientation:portrait){
    #slide > div { 
        min-width: 100%;
    }
    .title {
        font-size: 5vw;
    }
    .container {
        min-width: 85.3vw;
    }
    .control {
        font-size: 70px;
    }
    .nav-buttons {
        width: 100px;
    }
}

/*** @media screen and (min-width: 426px) and (max-width:499px) {
    #slide {
        width: 85.5%;
    }
    .progress-container {
        width: 86%;
    }
}

@media screen and (min-width: 1600px) {
    #slide {
        width: 120%;
    }

    .progress-container {
        width: 120%;
    }
}

@media screen and (min-width: 1920px) {
    #slide {
        width: 137%;
    }
    .progress-container {
        width: 137%;
    }
}

@media screen and (min-width: 2560px) {
    #slide {
        width: 177%;
    }
    .progress-container {
        width: 177%;
    }
} ***/

/***Media Quiries for Height */
</style>