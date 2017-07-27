var id = 1;
// make the Cat constructor
function Cat(name, picture) {  //make sure to only bring in the parameters you need. you don't need to bring in global variables
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.status = ["Happy", "Bite-y"];
    this.petCount = 0;

    id++;
}

// make the cat lady object
var catLady = {
    cats: []
}

// make the cats from the Cat constructor 
var cat1 = new Cat('Mr. Snibbly', 'http://cutecatsinhats.com/wp-content/uploads/2016/01/monocle-top-hat-cat.jpg');
var cat2 = new Cat('Snuffles', 'http://dzasv7x7a867v.cloudfront.net/product_photos/207011/il_fullxfull.200025111_original.jpg');
var cat3 = new Cat('Mittens', 'https://s-media-cache-ak0.pinimg.com/originals/96/df/4c/96df4c49d417365c0f76bf84c51ba657.jpg');

// push the cats into the cat lady's 'cats' array.
catLady.cats.push(cat1, cat2, cat3);


//begin defining functions:

//will be responsible for drawing/displaying all of the cats on the screen in a given HTML format
function draw(catsArray) {

    //template stringing:
    var template = '';  //every single cat will have its own template. Make the example in HTML first

    for (var i = 0; i < catsArray.length; i++) {
        var cat = catsArray[i];
        //check number of pets to determine status

        var statusIndex = 0;  //to keep track of which item in the status array you want to use
        if (cat.petCount > 5) {
            statusIndex = 1  //changes to the second array item when more than 5 pets is reached
        }

        //build up a template that will repeat for each cat
        template +=
            `<div class="cat">
            <img src="${cat.picture}" alt="">
            <h3>Name: ${cat.name}</h3>
            <!--status has 2 options determined by number of pets -->
            <p>Status: ${cat.status[statusIndex]}</p>
            <p>Number of Pets: ${cat.petCount}</p>
            <button type="button" onclick="pet(${cat.id})">Pet</button>
        </div><br>`
    }

    document.getElementById('cats').innerHTML = template;
}


function pet(catId) {
    //find by id --> needs to be its own function (see findCatById below)
    //increment petCount for that cat
    var catToPet = findCatById(catLady.cats, catId);
    catToPet.petCount++;
    draw(catLady.cats);
}

function findCatById(catArray, catId) {
    for (var i = 0; i < catArray.length; i++) {
        var catItem = catArray[i];
        if (catItem.id === catId) {
            return catItem;
        }
    }
}


draw(catLady.cats);