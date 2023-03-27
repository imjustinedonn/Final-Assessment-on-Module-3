let collectionNFT = [];

function mintNFT(Brand, SizeOftheframe, Color, ClassOfthebike, TypeofBrakes) {
  const bike = {
    Brand: Brand,
    SizeOftheframe: SizeOftheframe,
    Color: Color,
    ClassOfthebike: ClassOfthebike,
    TypeofBrakes: TypeofBrakes,
  }
  collectionNFT.push(bike);
}

function listNFTs() {
  for(let i = 0; i < collectionNFT.length; i++) {
    console.log(collectionNFT[i]);
  }
}

function getTotalSupply () {
  console.log("TOTAL NFT: " + collectionNFT.length);
}

mintNFT("CINELLI", 50, "RED", "FIXED GEAR", "FOOT BRAKE");
mintNFT("SANTA CRUZ", 52, "BLUE", "MOUNTAIN BIKE", "HYDRAULIC BRAKES");
mintNFT("RIDLEY", 48, "BLACK", "ROAD BIKE", "RIM BRAKES")

listNFTs();
getTotalSupply();
