var bodyvar = document.body

//four buttons
var climatevar = document.getElementById("climate")
console.log("climatevar: ", climatevar);

var consumptionvar = document.getElementById("consumption")
console.log("consumptionvar: ", consumptionvar);

var resourcesvar = document.getElementById("resources")
console.log("resourcevar: ", resourcesvar);

var peoplevar = document.getElementById("people")
console.log("peoplevar: ", peoplevar);

//save text
var savetext = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

// vareable declaration done-------


consumptionvar.onclick = () => {
    
    //background
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    //frame
    frame.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //savetext
    savetext.innerHTML = 'Do your bit! Shop only what you need,eat only what you need and always save the leftovers.'

    //buttons
    consumptionvar.style.background = "#27AE60"

    climatevar.style.background = "none"
    resourcesvar.style.background = "none"
    peoplevar.style.background = "none"
}

resourcesvar.onclick = () => {

    //background
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    //frame
    frame.src = "https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //savetext
    savetext.innerHTML = "Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    //buttons
    resourcesvar.style.background = "orange"

    climatevar.style.background = "none"
    peoplevar.style.background = "none"    
    consumptionvar.style.background = "none"
}

peoplevar.onclick = () => {

    //background
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    //frame
    frame.src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //savetext
    savetext.innerHTML = "Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

    //buttons
    peoplevar.style.background = "pink"

    climatevar.style.background = "none"
    resourcesvar.style.background = "none"  
    consumptionvar.style.background = "none"  
}

climatevar.onclick = () => {
    
    //background
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"

    //frame
    frame.src = "https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //savetext
    savetext.innerHTML = "Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    //buttons
    climatevar.style.background = "blue"

    resourcesvar.style.background = "none"  
    consumptionvar.style.background = "none"
    peoplevar.style.background = "none"
}