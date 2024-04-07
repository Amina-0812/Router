import dark from "./dark.jpeg";
import incep from "./incep.jpeg";
import matrix from "./matrix.jpeg";
import inter from "./inter.jpg";
import shaws from "./shaws.jpg";
import forrest from "./forrest.jpg";



//defining an array of movie objects
const movies = [
    {
      id: 1,
      name: "Inception",
      description: "Directed by visionary filmmaker Christopher Nolan, Inception is a mind-bending heist thriller set within the realm of dreams. Dom Cobb, played by Leonardo DiCaprio, is a skilled thief who specializes in the dangerous art of extraction – stealing valuable secrets from deep within the subconscious mind during the dream state. Tasked with an impossible mission to plant an idea into the mind of a powerful businessman, Cobb and his team must navigate a labyrinth of dreams within dreams, facing surreal challenges and confronting their own inner demons along the way. Blending stunning visual effects with intricate storytelling, Inception is a cinematic masterpiece that challenges the very fabric of reality.",
      image: incep,
      rating: "5/5", 
      trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    {
      id: 2,
      name: "The Dark Knight",
      description: "In this epic superhero saga, directed by Christopher Nolan, Gotham City faces its greatest threat yet as the mysterious and sadistic Joker wreaks havoc upon its streets. As the city descends into chaos, Batman, portrayed by Christian Bale, must confront his own inner demons while battling the Joker's twisted ideology. With stunning performances from Heath Ledger as the Joker and an intense storyline that explores themes of morality, justice, and the nature of heroism, The Dark Knight is a gripping and unforgettable cinematic experience.",
      image: dark,
      rating:"4/5", 
      trailer: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    {
      id: 3,
      name: "Interstellar",
      description: "Directed by Christopher Nolan, Interstellar is a mesmerizing sci-fi epic that explores the boundless depths of space and the enduring spirit of humanity. In a future where Earth is on the brink of environmental collapse, a team of astronauts embarks on a daring mission through a newly discovered wormhole in search of a new habitable planet for mankind. Led by Cooper, portrayed by Matthew McConaughey, the crew must confront the unfathomable mysteries of the universe and grapple with the profound implications of their journey for the fate of humanity. With breathtaking visuals, emotional depth, and thought-provoking themes of love, sacrifice, and the resilience of the human spirit, Interstellar is a cinematic journey unlike any other.",
      image: inter,
      rating:"3/5", 
      trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    {
      id: 4,
      name: "The Matrix",
      description: "In this groundbreaking science fiction film directed by the Wachowskis, The Matrix explores the concept of a simulated reality where humanity is enslaved by intelligent machines. Neo, portrayed by Keanu Reeves, is a computer hacker who discovers the truth about the world he lives in  that it is an elaborate illusion created by the machines to control and subjugate mankind. Joined by a group of rebels led by the enigmatic Morpheus, Neo must confront his destiny as the prophesied savior known as The One and free humanity from its digital prison. Featuring groundbreaking visual effects, exhilarating action sequences, and a thought-provoking narrative, The Matrix remains a cultural phenomenon that continues to captivate audiences worldwide.",
      image: matrix,
      rating:"2/5", 
      trailer: "https://www.youtube.com/watch?v=m8e-FF8MsqU"
    },
    {
        id: 5,
        name: "The Shawshank Redemption",
        description: "Two imprisoned men, Andy Dufresne and Ellis Red Redding, form an unlikely friendship over the years within the confines of Shawshank State Penitentiary. As they navigate the brutal realities of prison life, Andy's quiet determination and Red's wisdom and resilience inspire hope and redemption amidst despair. Based on a novella by Stephen King, The Shawshank Redemption is a poignant tale of friendship, perseverance, and the enduring power of the human spirit.",
        image: shaws,
        rating: "5/5",
        trailer: "https://www.youtube.com/watch?v=6hB3S9bIaco"
      },
      {
        id: 6,
        name: "Forrest Gump",
        description: "Forrest Gump follows the remarkable journey of Forrest Gump, a man with a low IQ but an extraordinary life. From his childhood in Alabama to his adventures through the tumultuous events of the 20th century, including the Vietnam War, Watergate scandal, and rise of the counterculture, Forrest unwittingly becomes a witness to history. With his unwavering optimism, simple wisdom, and unwavering love for his childhood friend Jenny, Forrest teaches us that life is like a box of chocolates , you never know what you're gonna get.",
        image: forrest,
        rating: "1/5",
        trailer: "https://www.youtube.com/watch?v=uPIEn0M8su0"
      }
  ];
  
  const Movies = () => { //here we are defining the movies component
    return movies;
  };
  
  export default Movies;