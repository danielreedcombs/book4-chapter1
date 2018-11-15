// Your job is to create a large, flightless bird class that defines the properties of a feathered terror. It should have the following properties:

// height
// flightless (should always be true)
// isExtinct
// name
// running speed
// toString -- This will be a method that outputs a description of the bird based on some of its properties.
// Example output: "The Cassowary is a big, scary bird that stands up to 6 ft and can run up to 30 mph!"
const PiggysProperties={
    height: "1ft",
    isExtinct: false,
    name: "Piggy",
    runningSpeed: "15mph"
}

const PiggeottoProperties= {
    height:"3ft",
    isExtinct: false,
    name: "Piggeotto",
    runningSpeed: "30mph"

}
const PigeotProperties= {
    height:"4.5ft",
    isExtinct:false,
    name: "Pigeot",
    runningSpeed:"45mph"
}
class flightlessBird{

    constructor(props){
        this.height= props.height;
        this.flightless=true;
        this.isExtinct= props.isExtinct;
        this.name= props.name;
        this.runningSpeed= props.runningSpeed;
    }
    string () {
        console.log(`The Cassowary is a big, scary bird that stands up to ${this.height}and can run up to ${this.runningSpeed}`)
    }
}
 const Piggy = new flightlessBird(PiggysProperties)
 const Piggeotto = new flightlessBird(PiggeottoProperties)
 const Pigeot = new flightlessBird(PigeotProperties)





//  class Restaurant {
//     constructor (props) {
//         this.comboDiscount = props.discount
//         this.menu = props.menu
//     }
//   }

//   const bobsBurgers = new Restaurant({
//     discount: 0.85,
//     menu: {
//         fries: 1.29,
//         burger: 3.69
//     }
//     get comboPrice (value) {
//         let discount = .85
//         let comboPrice=
//         this.menu.small_pizza +
//         this.menu.soda +
//         this.menu.salad


//         // Add logic here to calc and return combo price
//       }
// })

// /*
//     Note the lack of parenthesis after comboPrice.
//     It's a property. As an example, let's assume that
//     it returns 4.99.
// */
// console.log(sunnyChina.comboPrice)
// > 4.99

// /*
//     It is also a read-only property since you did not define
//     a setter. So while the following code will not throw an error, it won't change the output.
// */
// sunnyChina.comboPrice = 29.99

// console.log(sunnyChina.comboPrice)
// > 4.99

// class resturantOrder {

//     constructor(){
//         this.drink= props.drink,
//         this.burger= props.burger,
//         this.fries= props.fries
//     }
//     get comboItems(name){
//         this.item.push(name)

//     }

// }
// Make a childCare class where you can pass in any child and care giver as properties with methods to change diaper
// (console logs an inspirational quote to the care giver), and to store behavior in a properties (good or bad ect) using a setter.


// }
const careGiver= {
    careGiver: "shouldntBeAroundChildren",
    child: "Rickkyyy"
}

class Childcare{
    constructor(props){
        this.child = props.child,
        this.careGiver = props.careGiver
    }

    get changeDiaper(){
        return `excersises is dumb ${careGiver}`
        }
    set behavior(goodbad){
        this._behavior=goodbad
    }
        }


    const dreamTeam = new Childcare(careGiver)
        dreamTeam._behavior= " I hate a;ouag;oae;u"
        console.log(dreamTeam._behavior)
        console.log(dreamTeam.changeDiaper)
