import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
	return (
		<div>
			<div className="flex flex-row">
				<div className="w-full bg-no-repeat bg-cover fixed z-10">
					<Navbar />
				</div>
			</div>
			<div className="flex h-screen overflow-hidden">
				<div className="w-full overflow-auto flex-grow mt-[110px]">
					<div className="flex justify-center">
						<div className="py-[100px]">
							<p className="text-semilleros-cyan text-[30px] md:text-[40px] xl:text-[60px] font-semibold">
								Contacto
							</p>
							<a
								href="mailto:rossy@semillerosdesentido.org"
								className="text-semilleros-blue text-lg md:text-[30px] xl:text-[41px]"
							>
								rossy@semillerosdesentido.org
							</a>
						</div>
					</div>
					<Footer isFixed={true} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
