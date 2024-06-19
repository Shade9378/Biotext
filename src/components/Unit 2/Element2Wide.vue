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
            <button @click="previous" class="control" style="font-size: 90px;">
                <
            </button>
            <button @click="next" class="control" style="font-size: 90px;">
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

        <img id="media2" class="media" width="80%" src="@/assets/Unit1-PeriodicTable.webp"></img>

        <img id="media3" class="media" width="40%" src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png">​</img>

        <img id="media4" class="media" width="40%" src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda2.png">​</img>

        <img id="media5" class="media" width="80%" src="@/assets/Unit1-BondSymbolTable.webp">​</img>

        <p class="title">
            Unit 2. More Structural Representations and Isomers
        </p>
        <div id="slide" v-if="!gridEnabled" @touchstart="touchStartMethod" @mousedown="mouseDownMethod" @keyup.left="next()">
            <div class="page" id="page">
                <p style="margin-top: 27px;" >
                    As with Lewis structures, in line structures we represent bonds with lines. However, in line
                    structures we don’t show all of the bonds. We leave out bonds to hydrogen atoms. Also, we don’t
                    write the symbol for carbon atoms.
                    I’ve said what we don’t write, what about what we do write? Basically we just write the
                    bonds between carbon atoms and any other non-hydrogen atoms. We generally write these bonds
                    in a zig-zag sort of way. It is a short hand notation so we have to understand what the short hand
                    means. When we draw a line, we understand that the line represents a bond so there must be
                    atoms at both ends of the bond. If another kind of atom isn’t specifically indicated we understand
                    the end of the line to be a carbon atom. If we write several lines (representing bonds) in a zig-zag
                    then the end of a line or a corner where two lines meet represent a carbon. Since we know that
                    carbon normally makes 4 bonds, we also understand that the number of hydrogen atoms bonded
                    to each carbon is 4 minus the number of bonds shown. If an atom other than carbon or hydrogen
                    is present we write its symbol at the end of a line or a corner where two lines meet and
                    understand that that atom is there instead of carbon. We don’t write hydrogens bonded to C but
                    usually write hydrogens bonded to other atoms.
                </p>
            </div>
            <div class="page" id="page">
                <p>
                    <strong>What we will learn in this unit:</strong>
                    <ul list-style: disc outside none>
                        <li>Common bonding patterns in organic compounds.</li>
                        <li>Drawing Lewis structures.</li>
                        <li>Drawing condensed structures.</li>
                    </ul>
                </p>
                <p style="text-indent: 0%;">
                    Let’s see some examples.
                </p>
            </div>
            <div class="page" id="page">
                <p><strong>Isomers</strong></p>
                <p>
                    
                    Isomers are compounds with the same molecular formula but the atoms are connected
                    differently. Since one of our goals for this course is to begin to understand how organic
                    molecules are put together (we call this structure) and how structure affects properties and
                    reactivity, we need to develop a couple of skills. Understanding isomers will help us do that. One
                    skill we need is simply being able to see when two structures are the same or not. This sounds
                    trivial, but it isn’t necessarily. Especially as structures become more complex we will see that
                    there may be many ways to draw the same structure. 
                </p>
            </div>
            <div class="page" id="page">
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
                        <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png"  style="height:250px; cursor: pointer;" @click="playVideo('overlay'); playVideo('media1')" >
                    </div>
                </div>
            </div>
            <div class="page" id="page">
                <p style="margin-bottom: 30px;">
                    We could take this analogy further. If the one of the people is much larger than the other they could take the drink entirely for themselves. 
                    This can actually make a strong bond too since the smaller person will be after the larger one to try to get some of the drink too. This is like an ionic bond.
                </p>
                <div style="display: flex; justify-content: space-evenly; background-color: aliceblue;">
                    <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda.png" style="width:45%; cursor: pointer;" @click="playVideo('overlay'); playVideo('media3')">
                    <img src="@/assets/Unit1-ScreenshotOfTwoPeopleSharingSoda2.png" style="width:45%; cursor: pointer;" @click="playVideo('overlay'); playVideo('media4')">
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
                <img src="@/assets/Unit1-BondSymbolTable.webp" style="margin:30px auto; width: 100%; cursor: pointer;" @click="playVideo('overlay'); playVideo('media5')">
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
            var scrolled = (window.screen.width <= window.screen.height) ? totalWidth / 3 : totalWidth / 1; //1 because the current slide has 4 pages. (4/2 = 2, 2-1=1)
            document.getElementById("myBar").style.width = scrolled*this.count + "px";
            console.log(this.count)
        },

        previous() {
            if(this.count <= 2 && this.count > 0){ //2 because the current slide has 10 pages
                this.count--
            }
            this.scroll("previous")
            this.handleScroll()
        },

        next() {
            if(this.count < 2 && this.count >= 0){ //2 because the current slide has 10 pages
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

        handleKeydown (e) {
    	    switch (e.which) {
                case 37:
                    this.next();
                    break;
                case 39: 
                    this.next();
                    break;
            }
        },

        beforeMount () {
  	        window.addEventListener('keydown', this.handleKeydown, null);
        },
        beforeDestroy () {
  	        window.removeEventListener('keydown', this.handleKeydown);
        }
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