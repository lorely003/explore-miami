import PlaceCard from './components/PlaceCard.jsx'

function App() {
  return (
    <div>
      <h1>Explore Miami</h1>
      <p>Activities to do and places to visit</p>
    
      <div className="places-container">
        <PlaceCard
          name = "Wynwood"
          category = "Art and culture"
          location = "Wynwood"
          image = "public\images\wynwood.jpg"
         description = "Explore colorful murals and street art in the heart of Wynwood."
          link = "https://thewynwoodwalls.com/info/"
        />

        <PlaceCard
          name = "Oleta River State Park"
          category = "The great outdoors"
          location = "North Miami"
          image = "public\images\oleta.jpg"
         description = "Explore nature and outdoors activities."
          link = "https://www.floridastateparks.org/OletaRiver"
        />

        <PlaceCard
          name = "Aventura Mall"
          category = "Retail therapy"
          location = "Aventura"
          image = "public\images\aventura.jpg"
         description = "Explore stores and restaurants."
          link = "https://aventuramall.com/"
        />

        <PlaceCard
          name = "Zoo Miami"
          category = "Attractions"
          location = "Miami"
          image = "public\images\zoo.jpg"
         description = "Meet amazing animals."
          link = "https://www.zoomiami.org/"
        />

        <PlaceCard
          name = "Zoo Miami"
          category = "Attractions"
          location = "Miami"
          image = "public\images\zoo.jpg"
         description = "Meet amazing animals."
          link = "https://www.zoomiami.org/"
        />
      </div>
    </div>
  )
}

export default App