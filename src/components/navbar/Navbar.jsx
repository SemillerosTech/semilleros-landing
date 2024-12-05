import { useNavigate } from "react-router-dom";
import IconSemilleros from "../../assets/icons/01_logo nav bar.svg";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="relative fixed">
      <div className="border border-semilleros-blue">
        <div className="mx-auto">
          <div className="flex justify-end items-center">
            <div className="flex absolute top-0 left-0">
              <span className="cursor-pointer" onClick={() => navigate("/")}>
                <img
                  className="w-[64px] md:w-[90px] xl:w-[120px]"
                  src={IconSemilleros}
                  alt="Logo semilleros"
                />
              </span>
            </div>
            <div className="flex items-center justify-end space-x-3 md:space-x-7 pr-0 md:pr-10">
              <div>
                <button
                  className="px-5 py-10 text-base md:text-lg text-semilleros-blue font-semibold"
                  type="button"
                  onClick={() => navigate("/")}
                >
                  ¿Quienes somos?
                </button>
              </div>
              <div>
                <button
                  className="px-5 py-10 text-base md:text-lg text-semilleros-blue font-semibold"
                  type="button"
                  onClick={() => navigate("/contact")}
                >
                  Contacto
                </button>
              </div>
              <div>
                <button
                  className="px-5 py-10 text-base md:text-lg text-semilleros-blue font-semibold flex"
                  type="button"
                  onClick={() => navigate("/en")}
                >
                  EN
                  <img
                    className="pl-2"
                    src="https://upload.wikimedia.org/wikipedia/commons/8/88/United-states_flag_icon_round.svg"
                    alt=""
                    width={35}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
