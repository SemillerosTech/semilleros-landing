import { useNavigate } from "react-router-dom";
import IconTreeWhite from "../../assets/icons/20_logo semilleros blanco.svg";

const Footer = ({ isFixed }) => {
	const navigate = useNavigate();

	return (
		<div
			className={`bg-semilleros-blue w-full ${isFixed ? "fixed bottom-0" : ""}`}
		>
			<div className="space-y-5 py-5 lg:py-[50px] 3xl:py-[70px]">
				<img
					className="w-[40px] lg:w-[50px] 3xl:w-[65px] h-auto m-auto"
					src={IconTreeWhite}
					alt="Icon semilleros"
				/>
				<div className="flex justify-center items-center space-x-3">
					<p
						className="text-sm md:text-base text-white cursor-pointer"
						onClick={() => navigate("/nosotros")}
					>
						Aviso de privacidad
					</p>
					<p className="py-2 border-r border-white"></p>
					<p
						className="text-sm md:text-base text-white cursor-pointer"
						onClick={() => navigate("/")}
					>
						Semilleros de sentido 2024
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
