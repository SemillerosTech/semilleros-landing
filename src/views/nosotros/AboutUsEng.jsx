import Footer from "../../components/footer/Footer";
import FooterEng from "../../components/footer/FooterEng";
import NavbarEng from "../../components/navbar/NavbarEng";

const AboutUsEng = () => {
  return (
    <>
      <div>
        <div className="flex flex-row">
          <div className="w-full bg-no-repeat bg-cover fixed z-10">
            <NavbarEng />
          </div>
        </div>
        <div className="flex h-screen overflow-hidden">
          <div className="w-full overflow-auto flex-grow mt-[110px]">
            <div className="flex justify-center">
              <div className="w-[75%] lg:w-[820px] py-[50px] md:py-[100px] space-y-5 md:space-y-8 lg:space-y-10">
                <div className="space-y-2">
                  <p className="text-semilleros-blue text-[35px] md:text-[45px] lg:text-[60px] font-semibold">
                    Informed consent.
                  </p>
                  <p className="text-semilleros-cyan text-[25px] md:text-[35px] lg:text-[50px]">
                    Parents
                  </p>
                </div>
                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                  The organizations Semilleros de Sentido A.C. and ARLENICA A.C.
                  are carrying out a study to develop a specialized instrument
                  to measure are carrying out a study for the development of a
                  specialized instrument to measure certain emotional emotional
                  resources in children and adolescents. In order to conduct
                  this analysis, we would like to ask your son or daughter about
                  his or her preferences and opinions regarding certain topics;
                  This exercise will follow all the protocols established in the
                  manuals for the Protection of Human Participants in the
                  Protection of Human Participants in Research manuals of the
                  National Institutes of Health of the The exercise will follow
                  all of the protocols set forth in the National Institute of
                  Health's (NIH) Human Research Participant Protection Manuals.
                </p>
                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                  There are no right or wrong answers in this questionnaire, and
                  your son or daughter can drop out of the study at any time.
                  your son or daughter may leave the study at any time he or she
                  wishes. he or she wishes to leave the study at any time. In
                  order to follow up on this study, your son or daughter will be
                  asked at the end of the your son or daughter will be asked, at
                  the end of the interview, some personal data, which are
                  necessary for the purpose of this research. the purpose of
                  this research.
                </p>
                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                  The information provided to us is strictly confidential and
                  will not be confidential and will not be known to anyone
                  outside the research team that has been team that has been
                  endorsed by the institutions leading the study. leading the
                  study.
                </p>
                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                  We are very grateful for your cooperation. If you have any
                  comments or doubts about this study, please contact Rosa
                  Adelaida del Valle Puente or Adelaida del Valle Puente, or
                  Edgar Valle Álvarez. To the mail info@semillerosdesmentido.org
                </p>
              </div>
            </div>
            <FooterEng isFixed={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsEng;
