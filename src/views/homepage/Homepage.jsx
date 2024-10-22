import Navbar from "../../components/navbar/Navbar";
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

const Homepage = () => {
    return (
        <div>
            <div className="flex flex-row">
                <div className="w-full bg-no-repeat bg-cover fixed z-10">
                    <Navbar />
                </div>
            </div>
            <div className="flex h-screen overflow-hidden">
                <div className="w-full overflow-auto flex-grow mt-[110px]">
                    <div className="md:flex md:justify-center md:items-center md:space-x-10 mt-8 mb-14 md:pb-0 px-5 md:px-0">
                        <div className="w-auto md:w-[400px] lg:w-[480px] xl:w-[680px] space-y-5">
                            <p className="text-[30px] lg:text-[40px] xl:text-[60px] text-semilleros-blue font-bold">
                                <span className="text-semilleros-cyan">Logoterapia</span> en acción donde cada 
                                <span className="text-semilleros-pink"> semilla</span> encuentra su proposito
                            </p>
                            <p className="text-[14px] lg:text-[18px] xl:text-[24px] text-semilleros-gray font-light">
                                La asociación Semilleros de Sentido, A.C., tiene como propósito fundamental
                                comunicar y difundir los principios y el legado de Viktor E. Frankl, destacado
                                creador de la Logoterapia, enfoque terapéutico que enfatiza la búsqueda de sentido,
                                propósito y dirección en la vida humana.
                            </p>
                        </div>
                        <div className="relative flex justify-center md:block pt-5 md:pt-0">
                            <img className="absolute w-[60px] md:w-[180px] lg:w-[220px] xl:w-auto md:pl-[120px] lg:pl-[150px] xl:pl-[190px] pt-[20px] xl:pt-[40px]" src={IconTree}  alt="Icono semilleros blanco"/>
                            <img className="w-[300px] lg:w-[380px] xl:w-[503px] h-auto" src={IconWords}  alt="Icono palabras"/>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="-mt-[50px]" src={IconBelt}  alt="Cintillo azul"/>
                    </div>
                    <div className="md:flex md:justify-center md:items-center md:space-x-5 lg:space-x-10 xl:space-x-[100px] px-5 md:px-0">
                        <div className="flex justify-center">
                            <img className="w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] h-auto" src={ImageJenga} alt="Icon jenga"/>
                        </div>
                        <div className="w-auto md:w-[310px] lg:w-[380px] xl:w-[530px] space-y-3">
                            <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                                Consideramos de vital importancia la difusión de estos principios entre niños y adolescentes, 
                                así como en el ámbito educativo, con el fin de fomentar desde una temprana edad la capacidad 
                                de enfrentar los desafíos contemporáneos con una actitud proactiva y constructiva, acorde a 
                                las demandas del siglo XXI.
                            </p>
                            <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                                Nuestra asociación amalgama los postulados de la Logoterapia con los aportes significativos de la 
                                psicología infantil y adolescente, concebidos bajo un enfoque profundamente humanista e integrativo.
                            </p>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] md:flex md:justify-center md:items-center md:space-x-5 xl:space-x-10 mt-14 space-y-5 md:space-y-0 pb-5 md:pb-0">
                        <div className="w-auto md:w-[430px] lg:w-[470px] xl:w-[570px] space-y-3 px-5">
                            <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                                Reconocemos que vivir con sentido implica enfrentar diversos desafíos inherentes a la condición 
                                humana, como el sufrimiento, la culpa y la muerte.
                            </p>
                            <p className="text-[12px] lg:text-[15px] xl:text-[20px] text-semilleros-gray font-light">
                                Sin embargo, confiamos en la capacidad espiritual de cada individuo para encontrar sentido incluso 
                                en las circunstancias más adversas, transformándolas en oportunidades de crecimiento personal y 
                                ejemplos de actitud.
                            </p>
                        </div>
                        <div>
                            <img className="w-[500px] lg:w-[600px] xl:w-[772px] h-auto" src={ImageHands} alt="Manos"/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="w-auto">
                            <img className="hidden md:block w-[80px] lg:w-[100px] xl:w-[140px] h-auto" src={IconLetters} alt="Letras"/>
                        </div>
                        <div className="w-full px-5">
                            <div className="md:flex md:justify-center md:items-center md:space-x-10">
                                <div className="flex justify-center">
                                    <img className="w-[200px] lg:w-[300px] xl:w-[351px] h-auto" src={IconHands} alt="manos"/>
                                </div>
                                <div className="w-auto md:w-[320px] lg:w-[400px] xl:w-[567px] space-y-3">
                                    <p className="text-[13px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                                        Al promover el desarrollo y la exploración temprana de las capacidades individuales 
                                        en niños y adolescentes, aspiramos a prevenir la aparición de enfermedades y trastornos 
                                        a largo plazo, al tiempo que cultivamos en ellos la convicción de que toda experiencia 
                                        dolorosa encierra consigo la posibilidad de crecimiento y superación.
                                    </p>
                                </div>
                            </div>
                            <div className="md:flex md:justify-center md:items-center md:space-x-10 pt-5 md:pt-0">
                                <div className="w-auto md:w-[410px] lg:w-[400px] xl:w-[567px] space-y-3">
                                    <p className="text-[14px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                                        Asimismo, buscamos establecer una estrecha colaboración con psicólogos y terapeutas 
                                        especializados en Logoterapia, garantizando así la efectividad de nuestros programas y 
                                        servicios.
                                    </p>
                                    <p className="text-[13px] lg:text-[16px] xl:text-[22px] text-semilleros-gray font-light">
                                        Además, nos comprometemos a involucrar a expertos de diversas áreas, cuya experiencia 
                                        y conocimientos contribuyan al enriquecimiento de la comunidad y al aprendizaje mutuo.
                                    </p>
                                </div>
                                <div>
                                    <img className="w-[350px] lg:w-[420px] xl:w-[658px] h-auto" src={ImageHelp} alt="Imagen ayuda"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative bg-semilleros-kids bg-center bg-cover h-[440px] xl:h-[538px] flex justify-center items-center">
                        <div className="md:flex md:justify-center md:items-center md:space-x-[40px] lg:space-x-[60px] xl:space-x-[100px] px-5 md:px-0">
                            <div className="flex justify-center pb-5 md:pb0 md:pr-[60px] lg:pr-[80px] xl:pr-[100px] md:border-r-2 bd:border-white">
                                <img className="w-[70px] md:w-auto" src={IconTreeWhite} alt="Logo semilleros blanco"/>
                            </div>
                            <div className="w-auto md:w-[530px] lg:w-[700px] xl:w-[880px]">
                                <p className="text-[18px] lg:text-[24px] xl:text-[30px] text-semilleros-white">
                                    Agradecemos profundamente su interés en nuestra labor y le invitamos a sumarse a 
                                    nuestro esfuerzo por promover una vida con sentido y propósito para todas las generaciones.
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:block absolute left-[300px] lg:left-[400px] xl:left-[550px] bottom-[-100px]">
                            <img className="" src={IconWind} alt="Icon ondas"/>
                        </div>
                    </div>
                    <div className="pt-14 md:pt-[150px] px-5 md:px-0">
                        <div className="w-auto md:w-[730px] lg:w-[900px] xl:w-[1100px] m-auto">
                            <p className="text-[26px] lg:text-[32px] xl:text-[40px] text-semilleros-gray">
                                Desarrollo de una prueba estandarizada para niños y adolescentes sobre "sentido de vida" y
                                "recursos noéticos".
                            </p>
                        </div>
                        <div className="md:flex md:justify-center md:items-center md:space-x-10 pt-[40px] xl:pt-[70px]">
                            <div className="w-auto md:w-[390px] lg:w-[470px] xl:w-[508px] space-y-3">
                                <p className="text-[14px] lg:text-[17px] xl:text-[19px] text-semilleros-gray font-light">
                                    A partir de el cuestionario PIL {'('}Purpose in Life Questionarie{')'} {'('}Gottfried, 
                                    2019; Crumbaugh, 1964; Maholick, 1964, 1969{')'}, traducido como Test de Propósito Vital, 
                                    se busca desarrollar una prueba estandarizada al español que permita medir distintos 
                                    constructos íntimamente vinculados al “sentido de vida”, en contraposición con el vacío 
                                    existencial en niños y adolescentes; ambos conceptos categorías medulares de la Logoterapia 
                                    y el Análisis existencial.
                                </p>
                                <p className="text-[14px] lg:text-[17px] xl:text-[19px] text-semilleros-gray font-light">
                                    Dicha prueba llevará por nombre Escala LiReSen {'('}Libertad, Responsabilidad y 
                                    Sentido{')'} para niños.
                                </p>
                            </div>
                            <div className="flex justify-center pt-5 md:pt-0">
                                <img className="w-[260px] md:w-[240px] lg:w-[300px] xl:w-[379px]" src={ImageLearn} alt="Imagen terapia"/>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <img className="w-[600px] lg:w-[700px] xl:w-[1000px]" src={IconBeltAqua} alt="Icon belt"/>
                        </div>
                    </div>
                    <div className="bg-[#F7F7F7] md:flex md:justify-center md:items-center md:space-x-10 pt-14 pb-5 md:pb-28 px-5">
                        <div>
                            <div className="w-auto md:w-[380px] lg:w-[500px] xl:w-[660px]">
                                <p className="text-[35px] md:text-[45px] lg:text-[60px] xl:text-[80px] text-semilleros-blue font-semibold">
                                    En busca del <span className="text-semilleros-cyan">tesoro</span> del sentido
                                </p>
                            </div>
                            <div>
                                <p className="text-[20px] lg:text-[24px] xl:text-[31px] text-semilleros-blue">
                                    Aventura logoterapéutica para niños y adolescentes
                                </p>
                            </div>
                            <div className="w-auto md:w-[500px] lg:w-[530px] xl:w-[722px] pt-3 md:pt-0">
                                <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                                    Los talleres se conformarán de acuerdo a la organización en grupos no mayores 
                                    de 30 alumnos donde se establecerá lo siguiente en cada grupo.
                                </p>
                            </div>
                            <div className="flex justify-start items-center py-5">
                                <img className="w-[40px] xl:w-[57px] z-10" src={IconTalleresA} alt="Imagen taller a"/>
                                <div className="bg-semilleros-blue -ml-3 px-8 py-2 rounded-full">
                                    <p className="text-[15px] xl:text-[20px] text-white">Los talleres se distribuirán de acuerdo a las edades.</p>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li className="md:flex md:justify-start md:items-center">
                                        <div className="hidden md:block w-[70px] xl:w-[100px]">
                                            <img className="w-[32px] xl:w-[42px]" src={IconTalleresB} alt="Imagen taller b"/>
                                        </div>
                                        <div className="w-full md:w-[150px] xl:w-[200px] bg-[#EBEDF0] pl-5 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                                                De 6 a 8 años
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] bg-[#EBEDF0] pl-5 md:pl-0 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                                                Corresponden a primero y segundo de primaria
                                            </p>
                                        </div>
                                    </li>
                                    <li className="md:flex md:justify-start md:items-center">
                                        <div className="hidden md:block w-[70px] xl:w-[100px]">
                                            <img className="w-[32px] xl:w-[42px]" src={IconTalleresC} alt="Imagen taller c"/>
                                        </div>
                                        <div className="w-full md:w-[150px] xl:w-[200px] pl-5 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                                                De 8 a 10 años
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] pl-5 md:pl-0 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                                                Corresponden a tercero y cuarto de primaria
                                            </p>
                                        </div>
                                    </li>
                                    <li className="md:flex md:justify-start md:items-center">
                                        <div className="hidden md:block w-[70px] xl:w-[100px]">
                                            <img className="w-[32px] xl:w-[42px]" src={IconTalleresD} alt="Imagen taller d"/>
                                        </div>
                                        <div className="w-full md:w-[150px] xl:w-[200px] bg-[#EBEDF0] pl-5 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                                                De 10 a 12 años
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] bg-[#EBEDF0] pl-5 md:pl-0 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                                                Corresponden a quinto y sexto de primaria
                                            </p>
                                        </div>
                                    </li>
                                    <li className="md:flex md:justify-start md:items-center">
                                        <div className="hidden md:block w-[70px] xl:w-[100px]">
                                            <img className="w-[32px] xl:w-[42px]" src={IconTalleresE} alt="Imagen taller e"/>
                                        </div>
                                        <div className="w-full md:w-[150px] xl:w-[200px] pl-5 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-semibold">
                                                De 12 a 15 años
                                            </p>
                                        </div>
                                        <div className="w-full md:w-[310px] lg:w-[350px] xl:w-[450px] pl-5 md:pl-0 py-[12px]">
                                            <p className="text-[14px] lg:text-[15px] xl:text-[20px] text-semilleros-blue font-light">
                                                Corresponden a los tres grados de secundaria
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img className="w-[300px] md:w-[350px] xl:w-[424px]" src={ImageLearn2} alt="Imagen terapia 2"/>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img className="w-full" src={IconBeltLarge} alt="Imagen cintillo largo"/>
                    </div>
                    <div className="bg-semilleros-kids2 bg-center bg-cover px-5 md:px-0">
                        <div className="md:flex md:justify-center md:items-center md:space-x-8 md:pl-[180px] lg:pl-[290px] xl:pl-[250px] py-14">
                            <div className="hidden md:block">
                                <div>
                                    <img className="w-[80px] xl:w-[180px]" src={ImagenGirl} alt="Imagen niña"/>
                                </div>
                                <div>
                                    <img className="w-[150px] xl:w-[305px]" src={ImageKids2} alt="Imagen niños"/>
                                </div>
                            </div>
                            <div className="space-y-5">
                                <p className="w-full md:w-[80%] xl:w-[600px] text-[35px] lg:text-[40px] xl:text-[60px] text-semilleros-blue">
                                    Los principales <span className="font-semibold">temas</span> a tratar:
                                </p>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">01.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        La <span className="font-bold">capacidad de amar</span> y los valores vivenciales.
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">02.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        Mis <span className="font-bold">habilidades creativas</span> y los valores de creación.
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">03.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        <span className="font-bold">Libertad:</span> respetando mis acciones y las acciones de los démas.
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">04.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        <span className="font-bold">Responsabilidad:</span> cómo aprender de mi y los démas para tomar acciones.
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">05.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        <span className="font-bold">La conciencia del sufrimiento:</span> cómo enfrentarlo y para qué sirve.
                                    </p>
                                </div>
                                <div className="w-full md:w-[80%] xl:w-[600px] flex justify-start items-center space-x-5">
                                    <p className="text-[18px] md:text-[25px] xl:text-[44px] text-semilleros-cyan font-semibold">06.</p>
                                    <p className="text-[18px] md:text-[20px] xl:text-[25px] text-semilleros-blue font-light">
                                        <span className="font-bold">Aprender a ser viajeros del tiempo:</span> aprender de mi pasado y poder pensar el futuro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Homepage;