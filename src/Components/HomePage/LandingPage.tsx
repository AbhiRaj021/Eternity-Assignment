const LandingPage = () => {
    return (
        <div className="flex justify-center w-full">
            <div
                className="relative w-full max-w-8xl mx-auto overflow-hidden bg-white"
                style={{
                    background:
                        "linear-gradient(102.57deg, rgba(255, 255, 255, 0.97) -4.35%, rgba(204, 248, 250, 0.97) 91.29%)",
                }}
            >
                <div className="flex flex-col lg:block w-full h-auto lg:h-[627px] px-6 py-12 lg:p-0" style={{ fontFamily: "Poppins, sans-serif" }}>


                    <div className="relative z-10 flex flex-col lg:absolute lg:top-[107px] lg:left-[89px]">
                        <h1 className="font-bold text-black text-4xl md:text-5xl lg:text-[64px] lg:leading-[82px] w-full lg:w-[770px] lg:h-[177px]">
                            Comprehensive <span className="text-[#02989D]">Health</span>{" "}
                            <br className="hidden lg:block" />
                            <span className="text-[#02989D]">& Wellness Packages</span>
                        </h1>

                        <h2 className="font-semibold text-[#0C1F30] mt-6 lg:mt-[20px] text-xl md:text-2xl lg:text-[28px] lg:leading-[31px] w-full lg:w-[672px] lg:h-[31px]">
                            For Individuals, Families, and Corporates
                        </h2>

                        <p className="font-medium text-[#0C1F30] mt-4 lg:mt-[15px] text-base md:text-lg lg:text-[20px] lg:leading-[31px] w-full lg:w-[672px] lg:h-[93px]">
                            At Myewacare, we offer a range of pre-curated and customizable health check-up packages designed by
                            certified doctors to suit different needs, age groups, and budgets.
                        </p>

                        <button
                            className="mt-8 lg:mt-[32px] w-[200px] lg:w-[272px] h-[50px] lg:h-[57px] rounded-full bg-[#02989D] flex items-center justify-center gap-[10px] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:bg-[#027a7e] transition-colors border-none cursor-pointer"
                        >
                            <span className="font-semibold text-white text-base lg:text-[18px] lg:leading-[24px] text-center">
                                Book a Package
                            </span>
                        </button>
                    </div>

                    <div className="relative mt-10 flex justify-center lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:w-[50%] lg:h-full lg:items-end lg:justify-end lg:pb-[60px] pointer-events-none">
                        <img
                            src="landingPage.png"
                            alt="Health & Wellness Illustration"
                            className="w-full max-w-[400px] lg:max-w-full lg:max-h-[90%] object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
