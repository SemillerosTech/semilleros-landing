import Footer from "../../components/footer/Footer";
import FooterEng from "../../components/footer/FooterEng";
import NavbarEng from "../../components/navbar/NavbarEng";

const ContactEng = () => {
  return (
    <div>
      <div className="flex flex-row">
        <div className="w-full bg-no-repeat bg-cover fixed z-10">
          <NavbarEng />
        </div>
      </div>
      <div className="flex h-screen overflow-hidden">
        <div className="w-full overflow-auto flex-grow mt-[110px]">
          <div className="flex justify-center">
            <div className="py-[100px]">
              <p className="text-semilleros-cyan text-[30px] md:text-[40px] xl:text-[60px] font-semibold">
                Contact
              </p>
              <a
                href="mailto:rossy@semillerosdesentido.org"
                className="text-semilleros-blue text-lg md:text-[30px] xl:text-[41px]"
              >
                rossy@semillerosdesentido.org
              </a>
            </div>
          </div>
          <FooterEng isFixed={true} />
        </div>
      </div>
    </div>
  );
};

export default ContactEng;
