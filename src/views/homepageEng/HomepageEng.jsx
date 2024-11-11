import IconWords from "../../assets/icons/02_ventana palabras.svg";
import IconTree from "../../assets/icons/03_logo semilleros_azul.svg";
import IconBelt from "../../assets/icons/04_cintillo azul.svg";
import ImageJenga from "../../assets/img/2x/05_img jemga.png";
import ImageHands from "../../assets/img/2x/06_img manitas.png";
import IconLetters from "../../assets/icons/08_semillas desarrollo.svg";
import IconHands from "../../assets/icons/07_vector manos.svg";
import ImageHelp from "../../assets/img/2x/09_ img semillas terapia A.png";
import IconTreeWhite from "../../assets/icons/20_logo semilleros blanco.svg";
import IconWind from "../../assets/icons/12_icon onditas.svg";
import ImageLearn from "../../assets/img/2x/11_img semillas terapia B.png";
import IconBeltAqua from "../../assets/icons/13_cintillo aqua.svg";
import IconTalleresA from "../../assets/img/2x/20_icon talleres A.png";
import IconTalleresB from "../../assets/img/2x/20_icon talleres B.png";
import IconTalleresC from "../../assets/img/2x/20_icon talleres C.png";
import IconTalleresD from "../../assets/img/2x/20_icon talleres D.png";
import IconTalleresE from "../../assets/img/2x/20_icon talleres E.png";
import ImageLearn2 from "../../assets/img/2x/15_img semillas terapia C.png";
import IconBeltLarge from "../../assets/icons/16_cintillo palabras.svg";
import ImagenGirl from "../../assets/img/2x/18_imagen nina.png";
import ImageKids2 from "../../assets/img/2x/19_imagen ninos globo.png";
import Footer from "../../components/footer/Footer";
import NavbarEng from "../../components/navbar/NavbarEng";
import FooterEng from "../../components/footer/FooterEng";

const HomepageEng = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-full bg-no-repeat bg-cover fixed z-10">
          <NavbarEng />
        </div>
      </div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-full overflow-auto flex-grow mt-[110px]">
          <div className="md:flex md:justify-center md:items-center md:space-x-10 mt-8 mb-14 md:pb-0 px-5 md:px-0">
            <div className="w-auto md:w-[400px] lg:w-[480px] xl:w-[680px] space-y-5">
              <p className="text-[30px] lg:text-[40px] xl:text-[60px] text-semilleros-blue font-bold">
                <span className="text-semilleros-cyan">Logotherapy</span> in
                acción where every
                <span className="text-semilleros-pink"> seed</span> finds its
                purpose
              </p>
              <p className="text-[14px] lg:text-[18px] xl:text-[24px] text-semilleros-gray font-light">
                The association Semilleros de Sentido, A.C., has as its main
                purpose to communicate and disseminate the principles and legacy
                of Viktor E. Frankl, the outstanding creator of Logotherapy, a
                therapeutic approach that emphasizes the search for meaning,
                purpose and direction in human life.
              </p>
            </div>
            <div className="relative flex justify-center md:block pt-5 md:pt-0">
              <img
                className="absolute w-[60px] md:w-[180px] lg:w-[220px] xl:w-auto md:pl-[120px] lg:pl-[150px] xl:pl-[190px] pt-[20px] xl:pt-[40px]"
                src={IconTree}
                alt="Icono semilleros blanco"
              />
              <img
                className="w-[300px] lg:w-[380px] xl:w-[503px] h-auto"
                src={IconWords}
                alt="Icono palabras"
              />
            </div>
          </div>
          <div className="relative">
            <img className="-mt-[50px]" src={IconBelt} alt="Cintillo azul" />
          </div>
          <div className="md:flex md:justify-center md:items-center md:space-x-5 lg:space-x-10 xl:space-x-[100px] px-5 md:px-0">
            <div className="flex justify-center">
              <img
                className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto"
                src={ImageJenga}
                alt="Icon jenga"
              />
            </div>
            <div className="w-auto md:w-[310px] lg:w-[380px] xl:w-[530px] space-y-3">
              <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                We consider it vitally important to disseminate these principles
                among children and adolescents, as well as in the educational
                sphere, in order to foster from an early age the ability to face
                contemporary challenges with a proactive and constructive
                attitude, in accordance with the demands of the 21st century.
              </p>
              <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                Our association amalgamates the postulates of Logotherapy with
                the significant contributions of child and adolescent
                psychology, conceived under a profoundly humanistic and
                integrative approach.
              </p>
            </div>
          </div>
          <div className="bg-[#F7F7F7] md:flex md:justify-center md:items-center md:space-x-5 xl:space-x-10 mt-14 space-y-5 md:space-y-0 pb-5 md:pb-0">
            <div className="w-auto md:w-[430px] lg:w-[470px] xl:w-[570px] space-y-3 px-5">
              <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                We recognize that living with meaning implies facing various
                challenges inherent to the human condition, such as suffering,
                guilt and death.
              </p>
              <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                However, we trust in the spiritual capacity of each individual
                to find meaning in even the most adverse circumstances,
                transforming them into opportunities for personal growth and
                examples of attitude.
              </p>
            </div>
            <div>
              <img
                className="w-[500px] lg:w-[600px] xl:w-[772px] h-auto"
                src={ImageHands}
                alt="Manos"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="w-auto">
              <img
                className="hidden md:block w-[80px] lg:w-[100px] xl:w-[140px] h-auto"
                src={IconLetters}
                alt="Letras"
              />
            </div>
            <div className="w-full px-5">
              <div className="md:flex md:justify-center md:items-center md:space-x-10">
                <div className="flex justify-center">
                  <img
                    className="w-[200px] lg:w-[300px] xl:w-[351px] h-auto"
                    src={IconHands}
                    alt="manos"
                  />
                </div>
                <div className="w-auto md:w-[320px] lg:w-[400px] xl:w-[567px] space-y-3">
                  <p className="text-[13px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                    By promoting the early development and exploration of
                    individual capabilities in children and adolescents, we aim
                    to prevent the onset of long-term illnesses and disorders,
                    while cultivating in them the conviction that every painful
                    experience carries with it the possibility of growth and
                    overcoming.
                  </p>
                </div>
              </div>
              <div className="md:flex md:justify-center md:items-center md:space-x-10 pt-5 md:pt-0">
                <div className="w-auto md:w-[410px] lg:w-[400px] xl:w-[567px] space-y-3">
                  <p className="text-[14px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                    We also seek to establish a close collaboration with
                    psychologists and therapists specialized in Logotherapy,
                    thus guaranteeing the effectiveness of our programs and
                    services.
                  </p>
                  <p className="text-[13px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                    In addition, we are committed to involving experts from
                    diverse whose experience and knowledge contribute to the
                    enrichment of the community and to the enrichment of the
                    community and mutual learning.
                  </p>
                </div>
                <div>
                  <img
                    className="w-[350px] lg:w-[420px] xl:w-[658px] h-auto"
                    src={ImageHelp}
                    alt="Imagen ayuda"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative bg-semilleros-kids bg-center bg-cover h-[440px] xl:h-[538px] flex justify-center items-center">
            <div className="md:flex md:justify-center md:items-center md:space-x-[40px] lg:space-x-[60px] xl:space-x-[100px] px-5 md:px-0">
              <div className="flex justify-center pb-5 md:pb0 md:pr-[60px] lg:pr-[80px] xl:pr-[100px] md:border-r-2 bd:border-white">
                <img
                  className="w-[70px] md:w-auto"
                  src={IconTreeWhite}
                  alt="Logo semilleros blanco"
                />
              </div>
              <div className="w-auto md:w-[530px] lg:w-[700px] xl:w-[880px]">
                <p className="text-[18px] lg:text-[24px] xl:text-[30px] text-semilleros-white">
                  We are deeply grateful for your interest in our work and
                  invite you to join us in our effort to and invite you to join
                  us in our efforts to promote a life of meaning and purpose for
                  all and purpose for all generations.
                </p>
              </div>
            </div>
            <div className="hidden md:block absolute left-[300px] lg:left-[400px] xl:left-[550px] bottom-[-100px]">
              <img className="" src={IconWind} alt="Icon ondas" />
            </div>
          </div>
          <div className="pt-14 md:pt-[150px] px-5 md:px-0">
            <div className="w-auto md:w-[730px] lg:w-[900px] xl:w-[1100px] m-auto">
              <p className="text-[26px] lg:text-[32px] xl:text-[40px] text-semilleros-gray">
                Development of a standardized test for children and adolescents
                on “sense of life” and “noetic resources”. on “sense of life”
                and “noetic resources”.
              </p>
            </div>
            <div className="md:flex md:justify-center md:items-center md:space-x-10 pt-[40px] xl:pt-[70px]">
              <div className="w-auto md:w-[390px] lg:w-[470px] xl:w-[508px] space-y-3">
                <p className="text-[14px] lg:text-[17px] xl:text-[19px] text-semilleros-gray font-light">
                  From the PIL questionnaire {"("}Purpose in Life Questionnaire
                  {")"} {"("}Gottfried, 2019; Crumbaugh, 1964; Maholick, 1964,
                  1969{")"}, translated as the Vital Purpose Test, the goal is
                  to develop a standardized test in Spanish that allows
                  measuring various constructs closely linked to the “sense of
                  life”, in contrast to existential emptiness in children and
                  adolescents; both concepts are core categories of Logotherapy
                  and Existential Analysis.
                </p>
                <p className="text-[14px] lg:text-[17px] xl:text-[19px] text-semilleros-gray font-light">
                  This test will be named the LiReSen Scale {"("}Freedom,
                  Responsibility, and Meaning{")"} for children.
                </p>
              </div>
              <div className="flex justify-center pt-5 md:pt-0">
                <img
                  className="w-[260px] md:w-[240px] lg:w-[300px] xl:w-[379px]"
                  src={ImageLearn}
                  alt="Imagen terapia"
                />
              </div>
            </div>
            <div className="hidden md:block">
              <img
                className="w-[600px] lg:w-[700px] xl:w-[1000px]"
                src={IconBeltAqua}
                alt="Icon belt"
              />
            </div>
          </div>
          <div className="bg-[#F7F7F7] md:flex md:justify-center md:items-center md:space-x-10 pt-14 pb-5 md:pb-28 px-5">
            <div>
              <div className="w-auto md:w-[380px] lg:w-[500px] xl:w-[660px]">
                <p className="text-[35px] md:text-[45px] lg:text-[60px] xl:text-[80px] text-semilleros-blue font-semibold">
                  In search of the{" "}
                  <span className="text-semilleros-cyan">treasure</span> of
                  meaning
                </p>
              </div>
              <div>
                <p className="text-[20px] lg:text-[24px] xl:text-[31px] text-semilleros-blue">
                  Logotherapeutic adventure for children and adolescents
                </p>
              </div>
              <div className="w-auto md:w-[500px] lg:w-[530px] xl:w-[722px] pt-3 md:pt-0">
                <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                  The workshops will be formed according to the organization in
                  groups of no more than 30 students. groups of no more than 30
                  students where the following will be established in each The
                  following will be established in each group.
                </p>
              </div>
              <div className="flex justify-start items-center py-5">
                <img
                  className="w-[40px] xl:w-[57px] z-10"
                  src={IconTalleresA}
                  alt="Imagen taller a"
                />
                <div className="bg-semilleros-blue -ml-3 px-8 py-2 rounded-full">
                  <p className="text-[15px] xl:text-[20px] text-white">
                    The workshops will be distributed according to age.
                  </p>
                </div>
              </div>
              <div>
                <ul>
                  <li className="md:flex md:justify-start md:items-center">
                    <div className="hidden md:block w-[70px] xl:w-[100px]">
                      <img
                        className="w-[32px] xl:w-[42px]"
                        src={IconTalleresB}
                        alt="Imagen taller b"
                      />
                    </div>
                    <div className="w-full md:w-[150px] xl:w-[200px] bg-[#EBEDF0] pl-5 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                        6 to 8 years old
                      </p>
                    </div>
                    <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] bg-[#EBEDF0] pl-5 md:pl-0 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                        Correspond to first and second grade
                      </p>
                    </div>
                  </li>
                  <li className="md:flex md:justify-start md:items-center">
                    <div className="hidden md:block w-[70px] xl:w-[100px]">
                      <img
                        className="w-[32px] xl:w-[42px]"
                        src={IconTalleresC}
                        alt="Imagen taller c"
                      />
                    </div>
                    <div className="w-full md:w-[150px] xl:w-[200px] pl-5 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                        8 to 10 years old
                      </p>
                    </div>
                    <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] pl-5 md:pl-0 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                        Correspond to third and fourth grade
                      </p>
                    </div>
                  </li>
                  <li className="md:flex md:justify-start md:items-center">
                    <div className="hidden md:block w-[70px] xl:w-[100px]">
                      <img
                        className="w-[32px] xl:w-[42px]"
                        src={IconTalleresD}
                        alt="Imagen taller d"
                      />
                    </div>
                    <div className="w-full md:w-[150px] xl:w-[200px] bg-[#EBEDF0] pl-5 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                        10 to 12 years old
                      </p>
                    </div>
                    <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] bg-[#EBEDF0] pl-5 md:pl-0 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                        Correspond to fifth and sixth grade
                      </p>
                    </div>
                  </li>
                  <li className="md:flex md:justify-start md:items-center">
                    <div className="hidden md:block w-[70px] xl:w-[100px]">
                      <img
                        className="w-[32px] xl:w-[42px]"
                        src={IconTalleresE}
                        alt="Imagen taller e"
                      />
                    </div>
                    <div className="w-full md:w-[150px] xl:w-[200px] pl-5 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                        12 ti 15 years old
                      </p>
                    </div>
                    <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] pl-5 md:pl-0 py-[12px]">
                      <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                        Correspond to the three secondary school grades
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                className="w-[300px] md:w-[350px] xl:w-[424px]"
                src={ImageLearn2}
                alt="Imagen terapia 2"
              />
            </div>
          </div>
          <div className="hidden md:block">
            <img
              className="w-full"
              src={IconBeltLarge}
              alt="Imagen cintillo largo"
            />
          </div>
          <div className="bg-semilleros-kids2 bg-center bg-cover px-5 md:px-0">
            <div className="md:flex md:justify-center md:items-center md:space-x-8 md:pl-[180px] lg:pl-[290px] xl:pl-[250px] py-14">
              <div className="hidden md:block">
                <div>
                  <img
                    className="w-[80px] xl:w-[180px]"
                    src={ImagenGirl}
                    alt="Imagen niña"
                  />
                </div>
                <div>
                  <img
                    className="w-[150px] xl:w-[305px]"
                    src={ImageKids2}
                    alt="Imagen niños"
                  />
                </div>
              </div>
              <div className="space-y-5">
                <p className="w-full md:w-[80%] xl:w-[600px] text-[35px] lg:text-[40px] xl:text-[60px] text-semilleros-blue">
                  The main <span className="font-semibold">topics</span> to be
                  addressed:
                </p>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    01.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    The main <span className="font-semibold">topics</span> to be
                    discussed:
                  </p>
                </div>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    02.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    My <span className="font-bold">creative skills</span> and
                    the values of creation.
                  </p>
                </div>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    03.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    <span className="font-bold">Freedom:</span> respecting my
                    actions and the actions of others.
                  </p>
                </div>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    04.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    <span className="font-bold">Responsibility:</span> how to
                    learn from myself and others to take action.
                  </p>
                </div>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    05.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    <span className="font-bold">Awareness of suffering:</span>
                    how to face it and what it is for.
                  </p>
                </div>
                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                  <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">
                    06.
                  </p>
                  <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                    <span className="font-bold">
                      Learn to be time travelers:
                    </span>{" "}
                    learn from my past and be able to think about the future.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <FooterEng />
        </div>
      </div>
    </div>
  );
};

export default HomepageEng;
