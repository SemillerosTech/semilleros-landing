const Loader = () => {
    return(
        <>
            <div className="block">
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="w-[320px] md:w-[500px]">
                        <div className="p-5 border-0 rounded-lg shadow-lg flex-col w-full bg-[#00000099] outline-none focus:outline-none">
                            <div className="relative px-5 pb-2 pt-5 flex justify-center items-center space-x-5">
                                <span className="loader"></span>
                                <span className="text-white text-base md:text-xl">Cargando, por favor espere...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
        </>
    );
}

export default Loader;