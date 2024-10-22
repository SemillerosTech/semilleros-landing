import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const AboutUs = () => {
    return (
        <>
            <div>
                <div className="flex flex-row">
                    <div className="w-full bg-no-repeat bg-cover fixed z-10">
                        <Navbar />
                    </div>
                </div>
                <div className="flex h-screen overflow-hidden">
                    <div className="w-full overflow-auto flex-grow mt-[110px]">
                        <div className="flex justify-center">
                            <div className="w-[75%] lg:w-[820px] py-[50px] md:py-[100px] space-y-5 md:space-y-8 lg:space-y-10">
                                <div className="space-y-2">
                                    <p className="text-semilleros-blue text-[35px] md:text-[45px] lg:text-[60px] font-semibold">Consentimiento informado.</p>
                                    <p className="text-semilleros-cyan text-[25px] md:text-[35px] lg:text-[50px]">Padres de Familia</p>
                                </div>
                                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                                    Las organizaciones Semilleros de Sentido A.C. y ARLENICA A.C. están llevando a cabo un 
                                    estudio para el desarrollo de un instrumento especializado para medir ciertos recursos 
                                    emocionales en niños y adolescentes. Para realizar dicho análisis, quisiéramos hacerle 
                                    algunas preguntas a su hijo o hija sobre sus preferencias y opiniones respecto a ciertos temas; 
                                    dicho ejercicio será siguiendo todos los protocolos establecidos en los manuales de 
                                    Protección de los Participantes Humanos en la Investigación del Instituto Nacional de Salud de 
                                    Los Estados Unidos de Norteamérica {'('}NIH por sus siglas en Inglés{')'}. 
                                </p>
                                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                                    En este cuestionario no hay respuestas buenas ni malas, y su hijo o hija puede abandonar el 
                                    estudio en cualquier momento en que lo desee. Para poder dar seguimiento a este estudio, se le 
                                    solicitará a su hijo o hija, al final de la entrevista, algunos datos personales, mismos que 
                                    son necesarios para el propósito de esta investigación.
                                </p>
                                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                                    La información que nos sea proporcionada es estrictamente confidencial y no la conocerá nadie 
                                    fuera del equipo de investigación que ha sido avalado por las instituciones que encabezan el estudio. 
                                </p>
                                <p className="text-semilleros-gray text-[17px] md:text-[20px] lg:text-[24px]">
                                    Agradecemos mucho su colaboración. Si tuviera cualquier comentario o duda sobre este estudio, 
                                    puede dirigirse con Rosa Adelaida del Valle Puente, o Edgar Valle Álvarez. Al correo 
                                    info@semillerosdesmentido.org
                                </p>
                            </div>
                        </div>
                        <Footer isFixed={false} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;