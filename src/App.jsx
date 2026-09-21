import PlaceCard from './components/PlaceCard.jsx'
import './App.css'

function App() {
  return (
    <div>
      <h1>Explore Miami</h1>
      <img
        className = "header-image"
        src = "/images/ChatGPT Image Sep 21, 2026, 05_47_32 PM.png"
        alt = "header"
      />
      <p>Activities to do and places to visit</p>
    
      <div className="places-container">
        <PlaceCard
          name = "Wynwood"
          category = "Art and culture"
          location = "Wynwood"
          image = "/images/wynwood.jpg"
         description = "Explore colorful murals and Miami’s vibrant street art scene."
          link = "https://thewynwoodwalls.com/info/"
        />

        <PlaceCard
          name = "Oleta River State Park"
          category = "The great outdoors"
          location = "North Miami"
          image = "/images/oleta.jpg"
         description = "Enjoy kayaking, biking, hiking, and outdoor adventures."
          link = "https://www.floridastateparks.org/OletaRiver"
        />

        <PlaceCard
          name = "Aventura Mall"
          category = "Retail therapy"
          location = "Aventura"
          image = "/images/aventura.jpg"
         description = "Shop, dine, and explore one of Miami’s premier shopping destinations."
          link = "https://aventuramall.com/"
        />

        <PlaceCard
          name = "Zoo Miami"
          category = "Attractions"
          location = "Miami"
          image = "/images/zoo.jpg"
         description = "Discover wildlife from around the world in an open-air zoo."
          link = "https://www.zoomiami.org/"
        />

        <PlaceCard
          name = "Biscayne National Park"
          category = "The great outdoors"
          location = "Biscayne Bay"
          image = "/images/biscayne.jpg"
         description = "Explore beautiful waters, islands, coral reefs, and marine life."
          link = "https://www.nps.gov/bisc/index.htm"
        />

        <PlaceCard
          name = "Phillip & Patricia Frost Museum of Science"
          category = "Attractions"
          location = "Miami"
          image = "/images/frost.jpg"
         description = "Discover science through interactive exhibits, a planetarium, and aquarium."
          link = "https://www.frostscience.org/"
        />

        <PlaceCard
          name = "Brickell City Centre"
          category = "Retail therapy"
          location = "Brickell"
          image = "/images/brickell.jpg"
         description = "Enjoy upscale shopping, dining, and entertainment in the heart of Brickell."
          link = "https://www.simon.com/mall/brickell-city-centre"
        />

        <PlaceCard
          name = "Calle Ocho"
          category = "Art and culture"
          location = "Little Havana"
          image = "/images/calle.jpg"
         description = "Experience Cuban culture, food, music, and history in Little Havana."
          link = "https://www.miamiandbeaches.com/things-to-do/attractions/explore-calle-ocho-in-little-havana"
        />

        <PlaceCard
          name = "South Pointe Park"
          category = "The great outdoors"
          location = "Miami Beach"
          image = "/images/pointe.jpg"
         description = "Relax by the waterfront and enjoy scenic views of Miami Beach."
          link = "https://www.miamibeachfl.gov/city-hall/parks-and-recreation/parks-facilities-directory/south-pointe-park/"
        />

        <PlaceCard
          name = "Rooftop Cinema Club South Beach"
          category = "Attractions"
          location = "Miami Beach"
          image = "/images/rooftop.jpg"
         description = "Watch movies outdoors with beautiful views of the Miami skyline."
          link = "https://rooftopcinemaclub.com/us/miami-beach/south-beach"
        />
      </div>
    </div>
  )
}

export default App