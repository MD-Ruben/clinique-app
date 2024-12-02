import aboutimg from "../../assets/images/about.png";
import aboutCardimg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/* about img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={aboutimg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
              <img src={aboutCardimg} alt="" />
            </div>
          </div>
          {/* about content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <div className="heading">
              Fier d'être l'un des meilleurs du pays
            </div>
            <p className="text__para">
              Depuis 30 ans, le Ivory Coast. News & World Report nous a reconnus
              comme l'un des meilleurs hôpitaux publics des Nations et le
              premier du Texas. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam, optio.
            </p>
            <p className="textpara mt-[30px]">
              Nous nous efforçons de donner le meilleur de nous-mêmes chaque
              jour, en prenant soin de nos patients. Nous ne regardons pas ce
              que nous avons accompli, mais ce que nous pouvons faire demain.
              Offrir le meilleur. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <Link to="/">
              <button className="btn">En savoir plus</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
