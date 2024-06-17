<template>
    <!--
        This "Element2Wide.vue" component shows up when the screen is wider than a certain number.
        (See "ScrollView.vue")
    -->
    <!--
        Code reference: Adeoye's blog article "How to build a Vuejs image slider"
        https://medium.com/@davidola360/how-to-create-a-vuejs-image-slider-60b4be844081
    -->
    <div class="container" id="container">
        <div class="nav-buttons">
            <button @click="previous" class="control" style="font-size: 90px;">
                <
            </button>
            <button @click="next" class="control" style="font-size: 90px;">
                >
            </button>
        </div>
        
        <div id="overlay" class="overlay" @click="clickOut('overlay'); clickOut('media') ">
            <!--
                Overlay class rests upon the slide class. It contains video/3d model data and it expands when a user
                selects the thumbnail picture.
            -->
        </div>
        <video id="media1" class="media" width="80%" controls>
            <source src="@/assets/Unit1-twoPeopleSharingSoda.mp4" type="video/mp4" showControl>
        </video>

        <img id="media2" class="media" width="80%" src="@/assets/Unit1-PeriodicTable.webp">Common elements in organic chemistry: C, H, O, N, F, Cl, Br, I ​</img>

        <img id="media3" class="media" width="40%" src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png">​</img>

        <img id="media4" class="media" width="40%" src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda2.png">​</img>

        <img id="media5" class="media" width="80%" src="@/assets/Unit1-BondSymbolTable.webp">​</img>

        <p class="title">
            Unit 1. Bonding, Introduction to Structural Representations
        </p>
        <div id="slide" v-if="!gridEnabled" @touchstart="touchStartMethod" @mousedown="mouseDownMethod">
            <div class="page" id="page">
                <p style="margin-top: 27px;" >
                    Throughout the semester, we will incorporate scientist spotlights highlighting scientists 
                    whose research is related to the topics we are studying and our course theme of neurotransmitters.
                </p>
                <p>
                    Deena Walker is a scientist who studies the molecular mechanism of addiction and depression. 
                    She found that mice who were raised in social isolation showed higher levels of anxiety than mice 
                    raised in groups. These mice also had different levels of the neurotransmitters dopamine and serotonin 
                    than mice raised in groups.
                </p>
                <p>
                    Deena has a family history of anxiety and depression. She was able to overcome her own struggles with
                    anxiety to become a successful research scientist. Her family history inspired her research because 
                    she wanted to explore how genes vs. environment affect susceptibility to anxiety and depression.
                </p>
                <p>
                    Dopamine and serotonin both play a role in anxiety and depression, although scientists are still trying 
                    to figure out the details of how they do this. We will discuss the structures of these neurotransmitters 
                    over the next few classes. But first, we must learn about bonding and structural representations of molecules.
                </p>
            </div>
            <div class="page" id="page">
                <div>
                    <p>
                        Deena did a podcast describing her motivation for her research:
                    </p>
                    <img src="@/assets/Unit1-DeenaWalker.jpg" style="float:left; max-width:20%">
                    <iframe frameBorder="0" scrolling="no" src="https://playlist.megaphone.fm/?e=PPY5510118240"
                    width="70%"></iframe>
                    <p style="margin: 10px;">
                        When anxiety begins to overtake her, biology student Deena Walker begins to worry she'll end up just like her mentally ill sister.
                    </p>
                    <p style="margin: 10px;">
                        Deena Walker is a postdoctoral fellow at Mt. Sinai School of Medicine where she studies the molecular mechanisms of addiction and depression. She recently moved to New York after finishing her PhD at The University of Texas at Austin in December 2012. When she's not in lab she enjoys practicing yoga and playing fetch with her dog in Central Park.
                    </p>
                </div>
                <p>
                    <strong>What we will learn in this unit:</strong>
                    <ul list-style: disc outside none>
                        <li>Common bonding patterns in organic compounds.</li>
                        <li>Drawing Lewis structures.</li>
                        <li>Drawing condensed structures.</li>
                    </ul>
                </p>
                <p><strong>Learning Goal:</strong></p>
                <textarea placeholder="Enter what you expect to learn from this course."/>
            </div>
            <div class="page" id="page">
                <p><strong>Bonding</strong></p>
                <p>
                    Atoms are made of a nucleus that contains protons and neutrons and orbiting around that nucleus are electrons. 
                    The nucleus is very small in volume relative to the overall volume of the atom but contains most of the atoms mass. 
                    The protons in the nucleus are positively charged, the neutrons have no charge, and the electrons have a negative charge. 
                    Atoms combine with each other by making bonds. There are many types of bonds: ionic, covalent, coordinate covalent, metallic, and more. 
                </p>
                <p>
                    In this course we will talk a little about ionic bonding, but our major concern will be covalent bonds. 
                    We won’t really talk about other types of bonds in this course at all.This is an organic chemistry course so we will be learning about compounds made from a limited set of elements. 
                    Since organic chemistry is often defined as the chemistry of carbon compounds, carbon will be central to our studies. Other elements commonly found in organic compounds are 
                    hydrogen, oxygen, nitrogen, and the halogens (fluorine, chlorine, bromine, and iodine). We will also occasionally see sulfur and phosphorous.
                </p>
                <p>
                    These elements follow specific patterns when they make covalent bonds with each other.
                    For reasons we will understand more fully later, the elements we will be working with 
                    (except for H) want to have 8 valence electrons (electrons potentially able to make bonds). 
                    Hydrogen wants to have 2 valence electrons. 
                </p>
            </div>
            <div class="page" id="page">
                <div style="display: flex; justify-content: center; margin-bottom: 27px;" @click="playVideo('overlay'); playVideo('media2')">
                    <div class="elemtal-chart" style="height:54%; width: 100%; display: flex; flex-direction: column; align-items: center;">
                        <img src="@/assets/Unit1-PeriodicTable.webp" style="width:100%;">
                        <h6 style="font-family: 'League Spartan', sans-serif;">
                            Common elements in organic chemistry: C, H, O, N, F, Cl, Br, I
    ​                    </h6>
                    </div>
                </div>
                <p>
                    The atoms start with a certain number of valence electrons. 
                    The periodic table tells us (the numbers at the top of the columns) how many electrons each atom starts with. 
                    To get more electrons the atoms share with other atoms to make covalent bonds. 
                    One electron shared from each atom makes a bond between the atoms. So every covalent bond is two electrons shared between two atoms. 
                    By sharing the electrons it is like both atoms have one more electron than they started with.
                </p>
            </div>
            <div class="page" id="page">
                <p>
                    Covalent bonding is like two people sharing a drink. Sharing creates a bond between them. The same is true for atoms sharing electrons. 
                    The sharing holds the atoms together; it bonds them.
                </p>
                <p style="margin-bottom: 30px;">
                    Sometimes when people share they don't share equally. Maybe one is bigger than the other so they take more. This can make the relationship less stable. 
                    The same can be said for bonds. Some atoms attract the shared electrons more than others. Usually this makes for bonds that are more reactive.
                </p>
                <div style="width: 100%; height: 53%;">
                    <h6>Animation: Two people sharing soda?</h6>
                    <div class="hover-container">
                        <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png"  style="height:250px;" @click="playVideo('overlay'); playVideo('media1')" >
                    </div>
                </div>
            </div>
            <div class="page" id="page">
                <p style="margin-bottom: 30px;">
                    We could take this analogy further. If the one of the people is much larger than the other they could take the drink entirely for themselves. 
                    This can actually make a strong bond too since the smaller person will be after the larger one to try to get some of the drink too. This is like an ionic bond.
                </p>
                <div style="display: flex; justify-content: space-evenly; background-color: aliceblue;">
                    <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png" style="width:45%;" @click="playVideo('overlay'); playVideo('media3')">
                    <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda2.png" style="width:45%;" @click="playVideo('overlay'); playVideo('media4')">
                </div>
                <p style="margin-top: 30px;">
                    It is possible for two atoms to share more electrons with each other, always in pairs. 
                    We will see single bonds (1 electron shared from each atom), double bonds (2 electrons 
                    shared from each atom for 4 total), and triple bonds (3 electrons shared from each atom 
                    for 6 total). Since for every bond the atom gets an extra electron and each atom wants to 
                    get a total of 8 valence electrons, 
                </p>
            </div>
            <div class="page" id="page">
                <p style="text-indent: 0%;">the number of bonds each atom makes is 8 minus the number of 
                    valence electrons it starts with (from the periodic table). Hydrogen makes 1 bond.
                </p>
                <img src="@/assets/Unit1-BondSymbolTable.webp" style="margin:30px auto; width: 100%" @click="playVideo('overlay'); playVideo('media5')">
                <p>
                    Lewis dot symbols are written by writing the symbol (letter) for each atom then surrounding 
                    it with dots to represent electrons. Imagine the symbol is inside a square. We write up to 
                    two electrons on each side of the square but start with one electron per side and only pair 
                    them up when we have more than 4 valence electrons. The dot structures show us how we can connect 
                    atoms to make molecules. Every where we have a single electron on a side we can make a bond to another 
                    atom. When all the atoms have all their single electrons used up the molecule is complete. Usually we 
                    represent a bond with a line between the two atoms. A line represents a bond, which is a sharing of 
                    two electrons. On sides where there are two electrons we don’t make a bond. Those electrons are not shared. 
                    Sometimes they are referred to as non-bonding electrons or as “lone pairs.”
                </p>
            </div>
            <div class="page" id="page">
                <p><strong>Representing structures</strong></p>
                <p>
                    There are multiple ways that chemists represent a molecule. We saw the Lewis dot structure or Lewis Structure 
                    (with lines for bonds). Of course, we can also just write a molecular formula. The molecular formula simply 
                    lists the types of atoms present and the number of each kind of atom. We always list the atoms in the order 
                    of C then H then any other atoms in alphabetical order. This is because all organic molecules contain C and 
                    almost all contain H, but they don’t necessarily have other elements and usually fewer of them. The molecular 
                    formula contains less information than the Lewis structure. It tells us how many of each kind of atom but not 
                    how they are connected. It has the advantage of being easier to write and 
                    is useful for things like stoichiometry, but not very useful for understanding physical and chemical properties of the compound.                    
                </p>
                <p>
                    The Lewis Structure tells us a lot about how the molecule is put together, but when we start working with larger 
                    molecules, let's say with 8 or more carbon atoms, it becomes cumbersome to write out every atom and every bond. 
                </p>
                <p>
                    So chemists have developed ways of writing less while still representing how the atoms are connected. One of 
                    these ways is the condensed structure.
                </p>
                <p>
                    None of these ways of representing the molecule (molecular formula, Lewis structure, condensed structure) are completely 
                    accurate representations. While
                </p>
            </div>
            <div class="page" id="page">
                <p style="text-indent: 0%;">
                    the Lewis and condensed structures show us how the atoms are connected, they don’t 
                    adequately represent the three-dimensional nature of the molecules, as we saw in the video. One of the skills we need to 
                    develop is translating between the actual three dimensional molecule and the two-dimensional representations we are forced 
                    to use because of the nature of the paper, computer screens, white boards, and other media we use to communicate. We will 
                    want to use videos like this along with other 3D representations to help us learn to make this 3D to 2D connection. You 
                    should also use your model kit to help with this. Ultimately, we want to be able to see the 2D representation but have a 
                    mental image of the 3D molecule. Understanding the 3D nature of these molecules is important for fully understanding their chemistry.
                </p>
            </div>
            <div class="page" id="page">
            </div>
        </div>
        <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
        </div> 
    </div>
</template>

<script>
import { TresCanvas } from '@tresjs/core'

export default{
    
    data(){
        return{
            count: 0,
            direction: 'forward',
            frame: 2
        }
    },
    created(){
        //var slide = setInterval(()=>this.slideLoop(this.direction),2000)
        window.addEventListener('scroll', this.handleScroll);
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
            var scrolled = (window.screen.width <= window.screen.height) ? totalWidth / 9 : totalWidth / 4; //4 because the current slide has 10 pages. (10/2 = 5, 5-1=4)
            document.getElementById("myBar").style.width = scrolled*this.count + "px";
            console.log(this.count)
        },

        previous() {
            if(this.count <= 10 && this.count > 0){ //10 because the current slide has 10 pages
                this.count--
            }
            this.scroll("previous")
            this.handleScroll()
        },

        next() {
            if(this.count < 10 && this.count >= 0){ //10 because the current slide has 10 pages
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

        drag(event1, event2) {
            let downPos = event1.clientX;
            let upPos = event2.clientX;
            if (downPos > upPos) {
                this.previous();
            }
            else {
                this.next();
            }
        },

        mouseDownMethod (touchEvent) {
            const posXStart = touchEvent.clientX;
            addEventListener('mouseup', (touchEvent) => this.mouseUpMethod(touchEvent, posXStart), {once: true});
        },

        mouseUpMethod (touchEvent, posXStart) {
            const posXEnd = touchEvent.clientX;
            if (posXStart < posXEnd) {
                this.previous(); // swipe right
            } else if (posXStart > posXEnd) {
                this.next(); // swipe left
            }
        },
    }
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

.media
{
    position: absolute;
    top: 20%;
    left: 0; 
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
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
    right: 53px;
    bottom: -13px;
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
}

.nav-buttons :hover {
    opacity: 0.5;
}

#slide {
  height: 85vh;
  width: 120%;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  text-indent: 2%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding-right: 2%;
  padding-left:2%;
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
    margin: 12.5px;
    font-size: 2vh;
    font-family: "League Spartan",sans-serif;
    text-align: justify;
}

#slide > div > textarea{
    margin: 0 4% 4% 4%;
    width:95%;
    height:10%;
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
    font-size: 2.7vh;
    font-family:"League Spartan",sans-serif;
    text-align: justify;
}

/*** Media Quiries for Width ***/
@media screen and (max-width: 700px) {
    #slide > div { 
        min-width: 100%;
    }
    .title {
        font-size: 5vw;
    }
    .container {
        min-width: 85.3vw;
    }
}
@media screen and (orientation:portrait) {
    #slide > div { 
        min-width: 100%;
    }
    .title {
        font-size: 150%;
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