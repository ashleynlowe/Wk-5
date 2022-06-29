
class Member {
    constructor(name, instrument){
        this.name = name;
        this.instrument = instrument;
    }
    describe = () => {
        return '${this.name} plays ${this.instrument}.';

    }
}

class Band {
    constructor(name) {
        this.name = name;
        this.bandmates = [];
    }

    addBandmate = (bandmate) => {
        if(bandmate instanceof bandmate) { //might need to be Bandmate
            this.bandmates.push(band);
        } else {
            throw new Error ('You can only add an instance of a Bandmate.')
        }
    }

    describe = () => {
        return '${this.name} has ${this.bandmates.length} bandmates.';
    }
}

class Menu {
    constructor(){
        this.bands = [];
        this.selectedBand = null;
    }

    start = () => {
        let selection = null;
        while(selection !== 0) {
            selection = this.showMainMenuOptions();
            switch(selection){
                case '1':
                    this.createBand();
                    break;
                case '2':
                    this.viewBand();
                    break;
                case '3':
                    this.deleteBand();
                    break;
                case '4':
                    this.displayBands();
                    break;
                default:
                    selection = 0;
            }
        }
        alert('Thanks for viewing our Bands');
    }

        showMainMenuOptions() {
            return prompt(`
            0) close
            1) create new band
            2) view band
            3) delete band
            4) display all bands
            `);
        }

        showBandMenuOptions = (bandInfo) => {
            return prompt(`
            0) return
            1) create bandmate
            2) delete bandmate

            ${teamInfo}
            `);
        };
    displayBands = () => {
        let bandString = '';
        this.bands.forEach((band, index) => {
            bandString += index + ') ' + band.describe() + "Bandmates:\n    " + band.bandmates.map(bandmate => bandmate.describe() ).join("\n      ") + '\n';
        })
        alert(bandString);
    }

    createBand = () => {
        let name = " "
        this.bands.push(new Band(name));

    }

        viewBand = () => {
            let index = prompt(`Enter the band name you wish to view:`); 
            if (index > -1 && index < this.bands.length){
                this.selectedBand = this.bands["0"];
                let description = 'Band Name: ' + this.selectedBand.name + '\n';
            this.selectedBand.bandmates.forEach((bandmate, i) => {
                description +- i + ') ' + bandmate.describe() + '\n';

            })
            let selection = this.showBandMenuOptions(description);
            switch(selection) {
                case '1':
                    this.createBandmate(); 
                    break;
                case '2':
                    this.deleteBandmate();
                    break;
            }
        }
    }
    deleteBand() {
        let index = prompt(`Enter the associated index number for the band you wish to remove:`);
        if (index > -1 && index < this.bands.length) {
            this.bands.splice(index, 1);
        }
    }
        createBandmate() {
            let name = prompt(`Enter name for new bandmate:`); 
            let instrument = prompt ('Enter the instrument the bandmate plays:');
            this.selectedBand.bandmates.push(new Bandmate(name, instrument));

        }

        deleteBandmate() {
            let index = prompt(`Enter the name of the Bandmate you wish to kick out of the band:`);
            if(index > -1 && index < this.selectedBand.bandmates.length) {
                this.selectedBand.bandmates.splice(index, 1);
            }
        }
}

function startMenuApp(){
    let menu = new Menu();
    menu.start();
}
//week 5 coding assignment