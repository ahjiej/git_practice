// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Returns an object with 2 parameters: a number and a 15 DNA base
function pAequorFactory(number, dnaBases) {
  return {
    specimenNum: number,
    dna: dnaBases,
    mutate: function () {
      let randomItem = Math.floor(Math.random() * 15);
      let dnaBase = returnRandBase();
      while (dnaBase === this.dna[randomItem]) {
        dnaBase = returnRandBase();
      }
      this.dna[randomItem] = dnaBase;
      return this.dna;
    },
    compareDNA: function(pAequor) {
      let commonDNA = 0;
      for (let i =0; i<this.dna.length; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          commonDNA++;
        }
      }
      console.log(`Specimen #${this.specimenNum} and specimen #${pAequor.specimenNum} have ${commonDNA/15*100}% DNA in common`);
    },  
    willLikelySurvive: function() {
      let counter = 0;
      for (let i = 0; i < this.dna.length; i++){
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          counter++;
        }
      }
      if (counter/15*100 >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
};


const pAequorsArray = [];
let index = 0;
while (pAequorsArray.length < 30) {
  let pAequor = pAequorFactory(index, mockUpStrand());
  index++;
  if (pAequor.willLikelySurvive()) {
    pAequorsArray.push(pAequor);
  }
}

console.log(pAequorsArray.length);
console.log(pAequorsArray);
console.log("Tout est bien qui finit bien !");


/*const object1 = pAequorFactory(1, mockUpStrand());
console.log(object1);
console.log(object1.mutate());
console.log(object1);

const object2 = pAequorFactory(5, mockUpStrand());
object1.compareDNA(object1);

console.log(object1.willLikelySurvive());
console.log(object1.dna);
*/


