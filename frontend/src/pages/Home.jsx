import { Link } from "react-router-dom";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import heroImg1 from "../assets/images/hero-img1.png";
import heroImg2 from "../assets/images/hero-img2.png";
import heroImg3 from "../assets/images/hero-img3.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* hero section start */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Nous aidons les patients à vivre plus longtemps et en bonne
                  santé.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Labore cumque, aut sequi tempora, doloremque quos blanditiis,
                  quae impedit ab omnis inventore? Quasi quod beatae, eos
                </p>
                <button className="btn">Demander un rendez-vous</button>
              </div>
              {/* hero counter */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Années d'expérience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Lieu de la clinique</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-10px]"></span>
                  <p className="text__para">Satisfaction des patients</p>
                </div>
              </div>
            </div>
            {/* hero content */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg2} alt="" className="w-full mb-[30px]" />
                <img src={heroImg3} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end*/}

      {/* Service section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Fournir les meilleurs services médicaux
            </h2>
            <p className="text__para text-center">
              Des soins de classe mondiale pour tous. Notre système de santé
              offre des soins inégalés et spécialisés.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Trouver un médecin
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Des soins de classe mondiale pour tous. Notre système de santé
                  offre des soins inégalés et spécialisés. Du laboratoire à la
                  clinique
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Trouver un lieu
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Des soins de classe mondiale pour tous. Notre système de santé
                  offre des soins inégalés et spécialisés. Du laboratoire à la
                  clinique
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Prendre rendez-vous
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Des soins de classe mondiale pour tous. Notre système de santé
                  offre des soins inégalés et spécialisés. Du laboratoire à la
                  clinique
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service section end*/}

      <About />

      {/* services section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nos services médicaux</h2>
            <p className="text__para text-center">
              Des soins de classe mondiale pour tous. Notre système de santé
              offre des soins inégalés et spécialisés.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/* services section */}

      {/* feature section */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row ">
            {/* feature content */}
            <div className="xl:w-[670px] ">
              <h2 className="heading ">
              Obtenez un traitement virtuel <br /> à tout moment.
              </h2>

              <ul className="pt-4">
                <li className="text__para">
                1. Fixer directement le rendez-vous
                </li>
                <li className="text__para">
                2. Recherchez votre médecin ici et contactez son cabinet.
                </li>
                <li className="text__para">
                3. Consultez la liste des médecins qui acceptent de nouveaux patients et utilisez l'outil de prise de rendez-vous en ligne pour choisir une heure de rendez-vous.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">En savoir plus</button>
              </Link>
            </div>
            {/* featuer img */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4  lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Mar, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10h00
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px]  lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h1 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature section */}

      {/* doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nos grands médecins</h2>
            <p className="text__para text-center">
            Des soins de classe mondiale pour tous. Notre système de santé offre des soins inégalés et spécialisés.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* doctors */}

      {/* faq */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="faq-img" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">
              La plupart des questions posées par nos patients bien-aimés
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq */}

      {/* testimonial */}
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Ce que disent nos patients</h2>
          <p className="text__para text-center">
          Des soins de classe mondiale pour tous. Notre système de santé offre des soins inégalés et spécialisés.
          </p>
        </div>
        <Testimonial />
      </div>
      {/* testimonial */}
    </>
  );
};

export default Home;
