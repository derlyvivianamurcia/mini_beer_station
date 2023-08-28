
import productCassels from "../assets/images/cassels_milk_stout.jpg";
import productCamba from "../assets/images/camba.jpg";
import productVotus from "../assets/images/votus.jpg";
import productParadise from "../assets/images/paradise.jpg";
import productLoast from "../assets/images/lostabbey.png";
import productRedrice from "../assets/images/redrice.jpg";
import productTopa from "../assets/images/topatopa.JPG";
import productBrune from "../assets/images/brune.jpg";

export const state = () => ({
  products: [
    {
      id: 1,
      photos: productCassels,
      name: "Cassels Milk Stout",
      price: 75000,
      description: "Cassels & Sons Brewing. Cerveza porter y stout",
      category: 'Morena'
    },
    {
      id: 2,
      photos: productCamba,
      name: "Camba Pale Ale",
      price: 85300,
      description: "La Souche Franc-Bois d'hiver. Cervea pale",
      category: 'Morena'

    },
    {
      id: 3,
      photos: productVotus,
      name: "Votus Nº 001",
      price: 75000,
      description: "India Pale Ale del Año 2019. Nº 0001 Red IPA.",
      category: 'Rubia'
    },
    {
      id: 4,
      photos: productParadise,
      name: "Prairie Artisian",
      price: 85300,
      description: "Ales Prairie Noir Whiskey Barrel Aged Imperial ",
      category: 'Rubia'
    },
    {
      id: 5,
      photos: productCamba,
      name: "Lost Abbey",
      price: 75000,
      description: "The Lost Abbey Citrus Sin American Wild ",
      category: 'Rubia'

    },
    {
      id: 6,
      photos: productCassels,
      name: "Prairie",
      price: 85300,
      description: "Prairie Artisa Ales Paradise Imperial Stout 12oz",
      category: 'Rubia'

    },
    {
      id: 7,
      photos: productRedrice,
      name: "Redrice",
      price: 85300,
      description: "Hitachino Nest Beer Red Rice Ale 330ml",
      category: 'Rubia'

    },
    {
      id: 8,
      photos: productCassels,
      name: "Cascade",
      price: 75000,
      description: "Cassels & Sons Brewing. Cerveza porter y stout",
      category: 'Rubia'

    },
    {
      id: 9,
      photos: productTopa,
      name: "Topa Topa",
      price: 85300,
      description: "Cassels & Sons Brewing. Cerveza porter y stout",
      category: 'Roja'

    },
    {
      id: 10,
      photos: productBrune,
      name: "Mira Brune Nº6",
      price: 375000,
      description: "Cassels & Sons Brewing. Cerveza porter y stout",
      category: 'Roja'

    },
  ],
  filters:[
    {
      id:1,
      name: 'Rubia'
    },
    {
      id:2,
      name: 'Morena'
    },
    {
      id:3,
      name: 'Roja'
    }
  ],
}
)


