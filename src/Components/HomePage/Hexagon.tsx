const Hexagon = () => {
    return (
        <div className="w-full min-h-screen bg-white py-16 px-4 flex justify-center overflow-x-hidden">
            <div className="w-full max-w-[1345px]">
                <div className="text-center mb-16 xl:mb-24 flex flex-col items-center">
                    <h1
                        className="w-full max-w-[714px] font-semibold text-2xl md:text-3xl xl:text-[32px] xl:leading-[43px] text-[#02989D] text-center"style={{fontFamily: "Poppins, sans-serif"}}
                    >
                        Customizable Packages for Every Need
                    </h1>
                    <p
                        className="w-full max-w-[1008px] text-gray-700 font-normal text-base md:text-lg xl:text-[20px] xl:leading-[36px] text-center mt-4" style={{fontFamily: "Poppins, sans-serif"}}
                    >
                        No two people (or organizations) have the same health needs — and neither should their packages.
                    </p>
                    <p
                        className="w-full max-w-full xl:max-w-none font-semibold text-lg xl:text-[20px] xl:leading-[36px] text-[#404040] text-center mt-2" style={{fontFamily: "Poppins, sans-serif"}}
                    >
                        With Myewacare, you can customize your health plan by:
                    </p>
                </div>

                <div className="relative hidden xl:block mx-auto w-[1345px] h-[384px]">
                    <HexBlock
                        left="109.2px"
                        icon="prescription.png"
                        text="Selecting the tests you need"
                        textStyle={{
                            width: "188px",
                            height: "62px",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600,
                            fontSize: "20px",
                            lineHeight: "29px",
                            textAlign: "center",
                            color: "#404040",
                        }}
                    />

                    <HexBlock left="510.06px" icon="doc.png" text="Adding doctor consultations" />

                    <HexBlock
                        left="910.92px"
                        icon="money.png"
                        text="Adjusting the plan based on your budget or group size"
                        padding="px-8"
                    />

                    <ConnectorLine left="420px" />
                    <ConnectorLine left="820.06px" hasCircle={false} />
                </div>
                    
                <div className="xl:hidden flex flex-col items-center gap-8">
                    <MobileHex icon="prescription.png" text="Selecting the tests you need" />
                    <MobileHex icon="doc.png" text="Adding doctor consultations" />
                    <MobileHex icon="money.png" text="Adjusting the plan based on your budget or group size" padding="px-8" />
                </div>
            </div>
        </div>
    )
}

const HexBlock = ({
    left,
    icon,
    text,
    padding = "px-12",
    textStyle,
}: {
    left: string
    icon: string
    text: string
    padding?: string
    textStyle?: React.CSSProperties
}) => (
    <div className="absolute top-[35.65px] w-[360px] h-[316px]" style={{ left: `calc(${left} - 25px)` }}>
        <HexagonOutlineLines />
        <div className="absolute top-[24px] left-[25px] w-[310px] h-[268px]">
            <HexagonShapeWithShadow />
            <Content icon={icon} text={text} className={padding} textStyle={textStyle} />
        </div>
    </div>
)

const HexagonOutlineLines = () => (
    <svg className="absolute w-full h-full" viewBox="0 0 360 316" preserveAspectRatio="none">
        <line x1="90" y1="0" x2="0" y2="158" stroke="#02989D" strokeWidth="3" />
        <line x1="0" y1="158" x2="90" y2="316" stroke="#02989D" strokeWidth="3" />
        <line x1="90" y1="0" x2="180" y2="0" stroke="#02989D" strokeWidth="3" />
        <line x1="90" y1="316" x2="180" y2="316" stroke="#02989D" strokeWidth="3" />
        <line x1="270" y1="0" x2="360" y2="158" stroke="#717171" strokeWidth="3" />
        <line x1="360" y1="158" x2="270" y2="316" stroke="#717171" strokeWidth="3" />
        <line x1="180" y1="0" x2="270" y2="0" stroke="#717171" strokeWidth="3" />
        <line x1="180" y1="316" x2="270" y2="316" stroke="#717171" strokeWidth="3" />
    </svg>
)

const HexagonShapeWithShadow = () => (
    <svg
        className="absolute w-full h-full"
        viewBox="0 0 310 268"
        preserveAspectRatio="none"
        style={{
            filter: "drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.15))",
        }}
    >
        <polygon points="77.5,0 232.5,0 310,134 232.5,268 77.5,268 0,134" fill="white" />
    </svg>
)

const Content = ({
    icon,
    text,
    className,
    textStyle,
}: {
    icon: string
    text: string
    className?: string
    textStyle?: React.CSSProperties
}) => (
    <div className={`absolute inset-0 flex flex-col items-center justify-center text-center ${className}`}>
        <img src={icon || "/placeholder.svg"} alt="" className="w-20 h-20 mb-6" />
        <p className={`text-lg font-bold text-gray-800 leading-tight`} style={textStyle}>
            {text}
        </p>
    </div>
)

const ConnectorLine = ({ left, hasCircle = true }: { left: string; hasCircle?: boolean }) => (
    <div className="absolute top-[192px] h-[2px] w-[100px]" style={{ left }}>
        <div className="absolute left-6 w-[30px] h-full bg-[#717171]" />
        {hasCircle && (
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full bg-[#9ca3af] border-[2px] border-white"
                style={{ boxShadow: "0 0 0 1px #9ca3af" }}
            />
        )}
    </div>
)

const MobileHex = ({ icon, text, padding = "px-12" }: { icon: string; text: string; padding?: string }) => (
    <div className="relative w-[300px] h-[263px] md:w-[360px] md:h-[316px]">
        <HexagonOutlineLines />
        <div className="absolute top-[20px] left-[21px] w-[258px] h-[223px] md:top-[24px] md:left-[25px] md:w-[310px] md:h-[268px]">
            <HexagonShapeWithShadow />
            <Content icon={icon} text={text} className={padding} />
        </div>
    </div>
)

export default Hexagon
