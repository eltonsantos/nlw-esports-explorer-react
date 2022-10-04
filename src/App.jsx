import Header from "./components/Header"
import ListItem from "./components/ListItem"
import Section from "./components/Section"

const gamesListData = [
  {
    url: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/VALORANT",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant"
  },
  {
    url: "https://www.twitch.tv/directory/game/Minecraft",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo League of Legends"
  },
  {
    url: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    imageUrl: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT"
  }
]

const channelListData = [
  {
    url: "https://www.twitch.tv/eltin182",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/b974e232-da44-4574-8cfd-528f8c4ffa1e-profile_image-70x70.png",
    alt: "Imagem de Elton Santos"
  },
  {
    url: "https://www.twitch.tv/alanzoka",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/15cec952-c1ba-4ff8-a79c-53c2fa5bd269-profile_image-150x150.png",
    alt: "Imagem de Alanzoka"
  },
  {
    url: "https://www.twitch.tv/cellbit",
    imageUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/cb885149-f7f7-48f0-99ae-fe0a386ed3e2-profile_image-150x150.png",
    alt: "Imagemd de Cellbit"
  }
]

const socialListData = [
  {
    url: "https://www.twitch.tv/eltin182",
    imageUrl: "assets/twitch.svg",
    alt: "Twitch do Elton Santos"
  },
  {
    url: "https://www.instagram.com/eltin182",
    imageUrl: "assets/instagram.svg",
    alt: "Instagram do Elton Santos"
  },
  {
    url: "https://www.twitter.com/eltin182",
    imageUrl: "assets/twitter.svg",
    alt: "Twitter do Elton Santos"
  },
  {
    url: "https://www.youtube.com/c/eltonsantos_oficial",
    imageUrl: "assets/youtube.svg",
    alt: "Youtube do Elton Santos"
  }
]

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus Jogos" subtitle="Os games que eu mais curto jogar!" className="games-list">
          {
            gamesListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }      
        </Section>
        <Section title="Canais e Streamers" subtitle="Lista de canais e transmissões que não perco!" className="channel-list">
          {
            channelListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
        <Section title="Minhas redes" subtitle="Se conecte comigo agora mesmo!" className="social-list">
          {
            socialListData.map(function (item) {
              return (
                <ListItem
                  url={item.url}
                  imageUrl={item.imageUrl}
                  alt={item.alt}
                />
              )
            })
          }
        </Section>
      </main>
    </div>
  )
}

export default App
