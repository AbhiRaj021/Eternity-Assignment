import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="w-full flex justify-center bg-white shadow-sm font-['Poppins']">
            <nav className="w-full max-w-[1440px] h-[80px] lg:h-[118px] px-4 lg:px-[32px] bg-white flex items-center justify-between lg:justify-start relative box-border transition-all duration-300">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <img
                        src="/EWA.png"
                        alt="My Ewa Care Logo"
                        className="w-[100px] h-[60px] lg:w-[141px] lg:h-[94px] object-contain"
                    />
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex items-center gap-[40px] ml-[60px]">
                    {["Home", "Our Services", "Our Blog", "Events", "About Us"].map((item) => (
                        <a
                            key={item}
                            href="#"
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 500,
                                fontSize: "18px",
                                lineHeight: "24px",
                                textAlign: "left",
                                color: "#000000",
                                textDecoration: "none",
                            }}
                            className="hover:text-[#02989D] transition-colors whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle Button */}
                <div className="lg:hidden ml-auto">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-600 focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Desktop CTA Button */}
                <div className="hidden lg:flex flex-shrink-0 ml-auto">
                    <button
                        style={{
                            width: "215px",
                            height: "57px",
                            borderRadius: "9999px",
                            padding: "10px",
                            backgroundColor: "#02989D",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "Poppins, sans-serif",
                                fontWeight: 600,
                                fontSize: "18px",
                                lineHeight: "24px",
                                textAlign: "center",
                                color: "#FFFFFF",
                            }}
                        >
                            Schedule a Demo
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 z-50 lg:hidden animate-in slide-in-from-top-2 duration-200">
                        {["Home", "Our Services", "Our Blog", "Events", "About Us"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="text-lg font-medium text-black hover:text-[#02989D] transition-colors font-['Poppins']"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                        <button
                            className="bg-[#02989D] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#027a7e] transition-all duration-300 shadow-md text-base"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Schedule a Demo
                        </button>
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar

