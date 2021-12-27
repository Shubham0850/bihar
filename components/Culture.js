import React from "react";
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Card(props) {
  return (
    <div className={props.flex == 1 ? "row-rev projects" : "row projects"}>
      <Zoom>
        <div className="projects__img-box">
          <img
            src={`/images/${props.image}`}
            alt="project image"
            className="projects__img"
          />
        </div>
      </Zoom>

      <Fade bottom>
        <div className="projects__details">
          <h1 className="name">{props.name}</h1>
          <Fade bottom>
            <p className="short-summery">{props.summery}</p>
          </Fade>
          <div className="links">
            <a
              href={`${props.link}`}
              rel="noreferrer"
              target="_blank"
              className="btn btn--sec"
            >
              Visit Site 🔗
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default function Culture() {
  return (
    <div className="culutre-container" id="culture">
      <div className="h1-box">
        <h1 className="h1 h1--dark">Culture of BIHAR</h1>
      </div>
      <Card
        flex={1}
        name="Festivals"
        image="chhath.jpg"
        summery="India has a tradition of festivals. From national festivals to social ones, people come closer, enjoy and forget their differences. Festivals break the monotony of our day-to-day life. In Bihar there is a long list of festivals and people celebrate them with full joy and happiness.
        "
      />

      <Card
        flex={2}
        name="Cuisines"
        image="litti-choka.jpg"
        summery="Food remains an important part of any culture in the world. Often the food habits of people identify them with the particular place they belong to. The cuisine of Bihar therefore has its uniqueness and features that make it popular in the neighboring states of Jharkhand and Uttar Pradesh. 
        "
      />

      <Card
        flex={1}
        name="Arts and Crafts"
        image="madhubani.jpg"
        summery="Bihar has attained international recognition through arts and crafts since several centuries. The famous Madhubani and Mithila painting are at par and renowned on national spectrum and are therefore usually denoted with Indian paintings of global standards from Bihar. Darbhanga and Madhubani districts are famous for such paintings.  
        "
      />

      <Card
        flex={2}
        name="Pitri Paksha Mela"
        image="gaya-mela.jpg"
        summery="Held in the world famous religious center of Gaya in Bihar, Pitri Paksha Mela is an annual religious festival held for a fortnight. The venue of this fair is on the Falgu River banks.  As per the Bihar Tourism Department estimation, this festival attracts pilgrims in the range of 5,00,000 to 75,00,000 every year.  
        "
      />

      <Card
        flex={1}
        name="Sonepur Cattle Fair"
        image="sonpur-mela.jpg"
        summery="Sonepur Cattle Fair of Bihar is one of the most notable festivals in the state of Bihar which has its global recognition. The festival is also denoted with other names Malegaon Mela and Harihar Kshetra Mela but its global popularity is of Sonepur Mela. This festival is organized on Kartik Poornima in Bihar’s Sonepur area and continues for one month. The location of Sonepur Cattle Fair on the Ganges and Gandak River confluence make it important on religious grounds as well.  
        "
      />

      <Card
        flex={2}
        name="Costumes"
        image="dress.jpg"
        summery="Bihar maintains its unique identity and tradition through many thing including lifestyle and costumes that differ its people from the rest. In the usual cases, people of Bihar prefer their traditional costumes that include the common dhoti-kurta worm by menfolk while women prefer sarees and so do they like various designs of kameez-salwar to wear on daily basis. Their traditional ‘seedha aanchal’ saree wearing practice is very much noticeable and which distinguishes them from the rest.   
        "
      />
    </div>
  );
}
