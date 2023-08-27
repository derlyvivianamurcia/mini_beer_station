
import productCassels from "../assets/images/cassels_milk_stout.jpg"
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
      photos: productCassels,
      name: "Camba Pale Ale",
      price: 85300,
      description: "La Souche Franc-Bois d'hiver. Cervea pale",
      category: 'Morena'

    },
    {
      id: 3,
      photos: productCassels,
      name: "Votus Nº 001",
      price: 75000,
      description: "India Pale Ale del Año 2019. Nº 0001 Red IPA.",
      category: 'Rubia'
    },
    {
      id: 4,
      photos: productCassels,
      name: "Prairie Artisian",
      price: 85300,
      description: "Ales Prairie Noir Whiskey Barrel Aged Imperial ",
      category: 'Rubia'
    },
    {
      id: 5,
      photos: productCassels,
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
      photos: productCassels,
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
      photos: productCassels,
      name: "Topa Topa",
      price: 85300,
      description: "Cassels & Sons Brewing. Cerveza porter y stout",
      category: 'Roja'

    },
    {
      id: 10,
      photos: productCassels,
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
