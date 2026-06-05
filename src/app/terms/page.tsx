"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Shield, FileText, FileCheck, Scale, Handshake, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState("terms");

    const sections = [
        { id: "terms", title: "Terms & Conditions", icon: <FileText size={20} /> },
        { id: "privacy", title: "Privacy Policy", icon: <Shield size={20} /> },
        { id: "visa", title: "Visa Procedures", icon: <FileCheck size={20} /> },
        { id: "service", title: "Terms of Service", icon: <Scale size={20} /> },
        { id: "b2b", title: "B2B & Partners", icon: <Handshake size={20} /> },
    ];

    // Scroll to section handling
    useEffect(() => {
        const handleScroll = () => {
            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.getBoundingClientRect().top <= 300) {
                    current = section.id;
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 120,
                behavior: "smooth"
            });
            setActiveSection(id);
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <main className="min-h-screen bg-brand-dark text-brand-white selection:bg-brand-light/30">
            {/* Header with Gradient & Glassmorphism */}
            <div className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-medium/20 via-brand-dark to-brand-dark z-0" />
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-light/10 blur-[120px] rounded-full pointer-events-none" />

                <div className="container relative z-10 mx-auto px-8 md:px-20 lg:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-light/20 bg-brand-medium/20 backdrop-blur-sm text-brand-light text-sm font-semibold tracking-wide uppercase">
                            Transparency & Trust
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-white to-brand-light">
                                Legal & Policies
                            </span>
                        </h1>
                        <p className="text-xl text-brand-white/70 leading-relaxed">
                            Everything you need to know about our terms, policies, and partnerships. We believe in complete transparency before you step onto the trail.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-8 md:px-20 lg:px-32 pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-32 backdrop-blur-xl bg-brand-medium/10 rounded-3xl p-6 border border-white/5 shadow-2xl">
                            <h3 className="text-sm font-bold text-brand-light/60 uppercase tracking-wider mb-6 pl-4">{t('Contents')}</h3>
                            <ul className="space-y-3">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 text-left ${activeSection === section.id
                                                ? "bg-brand-light text-brand-dark font-semibold shadow-[0_4px_20px_rgba(216,196,182,0.2)]"
                                                : "text-brand-white/60 hover:bg-white/5 hover:text-white"
                                                }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`${activeSection === section.id ? "text-brand-dark" : "text-brand-light/50 group-hover:text-brand-light transition-colors"}`}>
                                                    {section.icon}
                                                </div>
                                                <span>{section.title}</span>
                                            </div>
                                            {activeSection === section.id && (
                                                <motion.div layoutId="active-indicator">
                                                    <ChevronRight size={18} className="text-brand-dark opacity-70" />
                                                </motion.div>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 space-y-32 mt-10">

                        {/* Terms & Conditions */}
                        <motion.section id="terms" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-lg leading-relaxed">Before signing any adventures with us, we strongly advise you to carefully review the following terms and conditions of our company as all of our trips are conducted in the high altitudes regions of Nepal Himalaya that involve a fair amount of risk.</p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-4 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-medium/50 text-white text-sm">1</span> Advance Booking and Payment</h3>
                                    <p>If you are willing to participate in adventure activities: Trekking, Peak Climbing, and Rafting with little more altitude, you must confirm and book the trip 3 months prior. Three months is required for us to make the necessary arrangements such as flight tickets, transportation and accommodation arrangements, permits and staff (guide/porter) allocation.</p>
                                    <p>Customers must deposit 25% of the total trip cost, at the time of the booking and another 35% must be deposited 45 days before the trip starting date in the following bank account of the company. The last due date for paying the remaining 40% of the total trip cost is after you arrive in Nepal and before starting your adventure.</p>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-4 flex items-center gap-3"><span className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-medium/50 text-white text-sm">2</span> Cancellation</h3>
                                    <p>We are aware that sometimes unfavourable circumstances happen as no one can predict the future in advance. Our cancellation policy is designed to address your issues and cover the occurring expenses of the company.</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">Before 60 days</div>
                                            <div className="text-sm">10% cancellation fee. Remaining refunded after bank charges.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">31 to 60 days</div>
                                            <div className="text-sm">40% cancellation fee. Remaining refunded after bank charges.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">16 to 30 days</div>
                                            <div className="text-sm">80% cancellation fee. Remaining refunded after bank charges.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold mb-2">Within 15 days</div>
                                            <div className="text-sm">No refunds issued. You will be responsible for the full amount.</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-10 mt-12">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">3.</span> Late Booking</h3>
                                        <p>Late bookings may be made up to 7 days before the trip start date, subject to additional charges.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">4.</span> Insurance</h3>
                                        <p>Trekking and peak climbing in the high-altitude regions of the Nepal Himalayas involve significant risks. Therefore, we strongly recommend that our customers purchase a travel insurance package in their own country... This insurance must cover medical expenses and helicopter evacuation. Altitude Sickness, hypothermia, frostbite, landslides, and avalanches are common in these regions.</p>
                                        <p className="mt-2 text-brand-white/60 text-sm">Note: Little more altitude will assist customers by contacting their insurance providers and arranging evacuation if life is at risk, prioritizing safety over procedural delays. However, we do not bear any costs if the insurance provider denies coverage.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">5.</span> Domestic Flight Cancellation</h3>
                                        <p>Mountain weather is highly unpredictable, which can affect the regular flight schedule and may even result in flight cancellations. Freedom Adventures is responsible for arranging accommodations and rescheduling the flight for the next day. Helicopter services can be arranged at an additional cost subject to availability.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">6.</span> Change in Itinerary</h3>
                                        <p>Occasionally, due to unfavorable circumstances such as landslides, avalanches, roadblocks, or flight cancellations, we may need to alter our itinerary. The total number of days for the entire trip will remain unchanged. Rest days may be adjusted to compensate for lost time.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">7.</span> Gears and Equipment</h3>
                                        <p>For peak climbing, little more altitude is responsible for arranging the necessary group gear. Customers are required to arrange their personal gear.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">8.</span> Optional Extras</h3>
                                        <p>Numerous activities are available including heritage tours, rafting, jungle safaris, mountain biking, and mountain flights. Please confirm your interest at least 7 days before arrival.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">9.</span> Media Rights</h3>
                                        <p>Little more altitude reserves the right to use the photos and videos taken by the crew during the trip for promotional purposes.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">10.</span> Acceptance</h3>
                                        <p>Booking a trip with little more altitude signifies your acceptance of these terms and conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Privacy Policy */}
                        <motion.section id="privacy" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Privacy Policy</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-lg">Welcome to Little more altitude. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.</p>

                                <div className="grid md:grid-cols-2 gap-8 mt-8">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                        <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">Information We Collect</h3>
                                        <ul className="space-y-4 m-0 p-0 list-none text-sm">
                                            <li className="flex flex-col gap-1"><strong className="text-white">Contact Information</strong> Name, email address, phone number.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">Payment Information</strong> Credit card details and billing address.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">Booking Information</strong> Travel preferences, dates.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">Technical & Usage Data</strong> IP address, browser type, pages visited.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                        <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">How We Use It</h3>
                                        <ul className="space-y-4 m-0 p-0 list-none text-sm">
                                            <li className="flex flex-col gap-1"><strong className="text-white">To Provide Services</strong> Process bookings, manage payments.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">To Communicate</strong> Send confirmations, updates, promotional materials.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">To Improve</strong> Analyze usage data to enhance user experience.</li>
                                            <li className="flex flex-col gap-1"><strong className="text-white">To Ensure Security</strong> Monitor and protect from fraud.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-6 mt-12">
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Sharing Your Information</h4>
                                        <p>We do not sell or trade your personal information. We may share it with Service Providers who assist in operating our website, as long as they agree to keep it confidential, or for Legal Requirements.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Data Security & Cookies</h4>
                                        <p>We implement security measures to maintain safety, but no electronic storage is 100% secure. We use cookies to enhance your browsing experience.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
                                        <p>If you have any questions, email us at <strong className="text-brand-light">alittlemorealtitude25@gmail.com</strong></p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Visa Procedures */}
                        <motion.section id="visa" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Visa Procedures</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-lg">Tourists flying to Nepal can obtain visas on arrival at Tribhuvan International Airport. The process is quick and straightforward.</p>

                                <div className="bg-brand-light/5 border border-brand-light/20 rounded-3xl p-8 lg:p-10 mb-8 relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <h3 className="text-2xl font-bold text-brand-light mt-0 mb-6">Steps for On-Arrival Visa</h3>
                                    <ol className="list-decimal pl-5 space-y-4 font-medium text-white/90 relative z-10">
                                        <li>Fill out an Arrival Card.</li>
                                        <li>Complete the Online 'Tourist Visa' Form prior to arrival via <a href="https://nepaliport.immigration.gov.np/on-arrival/IO01" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline hover:text-white transition-colors">nepaliport.immigration.gov.np</a> or using kiosk machines at the airport. (Bring the printed barcode receipt!)</li>
                                        <li>Pay the Visa Fee (Cash recommended).</li>
                                        <li>Submit Documents to the immigration officer.</li>
                                    </ol>
                                </div>

                                <div className="grid sm:grid-cols-3 gap-6">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-3xl font-bold text-white mb-2">15 Days</div>
                                        <div className="text-brand-light font-semibold text-xl">$30</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-3xl font-bold text-white mb-2">30 Days</div>
                                        <div className="text-brand-light font-semibold text-xl">$50</div>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-3xl font-bold text-white mb-2">90 Days</div>
                                        <div className="text-brand-light font-semibold text-xl">$125</div>
                                    </div>
                                </div>

                                <div className="mt-8 space-y-6 bg-brand-dark/50 p-6 rounded-2xl border border-white/5">
                                    <div className="flex gap-4">
                                        <div className="w-1.5 rounded-full bg-brand-medium"></div>
                                        <div>
                                            <strong className="block text-white mb-1">Visa Extension:</strong>
                                            $45 for minimum 15 days, plus $3 per additional day. Late fee is $5 per day.
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-1.5 rounded-full bg-brand-medium"></div>
                                        <div>
                                            <strong className="block text-white mb-1">Gratis Visa (Free Visa):</strong>
                                            Issued to children under 10 (except US citizens), SAARC citizens (first 30 days), NRN cardholders, and Chinese nationals (up to 150 days).
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Terms of Service */}
                        <motion.section id="service" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">Terms of Service</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-6">
                                <p className="text-lg">Welcome to Little more altitude treks! By accessing our website, you agree to these terms.</p>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">1. User Conduct</h4>
                                        <p className="text-sm">You agree to use our Service only for lawful purposes. You must not infringe on rights, transmit malicious code, disrupt performance, or attempt unauthorized access.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">2. Intellectual Property</h4>
                                        <p className="text-sm">All content, trademarks, and logos are property of littlemorealtitudetreks. You may not reproduce or distribute content without written permission.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">3. Limitation of Liability</h4>
                                        <p className="text-sm">We shall not be liable for any direct, indirect, incidental, or consequential damages arising out of your use of our Service.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">4. Governing Law</h4>
                                        <p className="text-sm">These Terms shall be governed by the laws of Nepal. Disputes shall be resolved through binding arbitration in Kathmandu, Nepal.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* B2B & Partners */}
                        <motion.section id="b2b" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">B2B & Partners</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-2xl font-medium text-brand-light leading-snug">Little More Altitude: Your Premier Adventure Tourism Partner in Nepal.</p>
                                <p className="text-lg">We are a leading adventure tourism company dedicated to providing exceptional outdoor experiences and promoting sustainable tourism practices. We offer a diverse range of outdoor activities and educational programs, making us a preferred choice for both outdoor enthusiasts and educational institutions.</p>

                                <div className="bg-gradient-to-br from-brand-medium/30 to-brand-dark border border-brand-light/20 rounded-[2rem] p-8 lg:p-12 my-12 relative overflow-hidden shadow-2xl">
                                    <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <h3 className="text-3xl font-bold text-white mt-0 mb-10 relative z-10">Why Partner with Us?</h3>

                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Shield size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">High Safety Standards</h4>
                                                <p className="text-sm leading-relaxed text-brand-white/70">Safety is our utmost priority. Strict protocols and comprehensive policies are in place. All guides are certified in AWFA.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Handshake size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Sustainability Commitment</h4>
                                                <p className="text-sm leading-relaxed text-brand-white/70">Dedicated to minimizing environmental impact. Carbon Footprint Policy in action and LNT principles promoted.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Remote & Unique</h4>
                                                <p className="text-sm leading-relaxed text-brand-white/70">Extensive experience exploring off-the-beaten-track locations offering exclusive experiences unavailable elsewhere.</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Scale size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Social Responsibility</h4>
                                                <p className="text-sm leading-relaxed text-brand-white/70">Strong commitment through the Freedom Social Foundation, providing outdoor education and enhancing local livelihoods.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/5">
                                    <h3 className="text-2xl font-bold text-white mt-0 mb-4">Our Team: Experienced Professionals</h3>
                                    <p className="mb-0">Our core team is composed of passionate explorers who have personally ventured into Nepal's remote regions. This firsthand experience allows us to craft unique and authentic experiences. As a B2B partner, you can rely on our insights grounded in years of industry experience.</p>
                                </div>

                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
}
