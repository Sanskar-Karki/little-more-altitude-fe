"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Shield, FileText, FileCheck, Scale, Handshake, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TermsPage() {
    const { t } = useLanguage();
    const [activeSection, setActiveSection] = useState("terms");

    const sections = [
        { id: "terms", title: t('siteCopy.terms.conditions'), icon: <FileText size={20} /> },
        { id: "privacy", title: t('siteCopy.terms.privacy'), icon: <Shield size={20} /> },
        { id: "visa", title: t('siteCopy.terms.visa'), icon: <FileCheck size={20} /> },
        { id: "service", title: t('siteCopy.terms.service'), icon: <Scale size={20} /> },
        { id: "b2b", title: t('siteCopy.terms.partners'), icon: <Handshake size={20} /> },
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
            <div className="container mx-auto px-8 md:px-20 lg:px-32 pb-24 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                    {/* Sidebar Navigation */}
                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="sticky top-32 backdrop-blur-xl bg-brand-medium/10 rounded-3xl p-6 border border-white/5 shadow-2xl">
                            <h3 className="text-sm font-bold text-brand-light/60 uppercase tracking-wider mb-6 pl-4">{t('siteCopy.terms.contents')}</h3>
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
                            <div className="mt-20">
                                <h2 className="text-4xl font-bold text-white mb-4">{t('siteCopy.terms.conditions')}</h2>
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
                                    <p>We are aware that sometimes unfavourable circumstances happen as no one can predict the future in advance and confirming the trip 3 months in advance carries out certain uncertainties. Thus, our cancellation policy is designed to address your issues and cover the occurring expenses of the company. We request you to review the following clauses clearly:</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">(a) Before 60 days</div>
                                            <div className="text-sm">If you choose to cancel your trip 60 days before your trip starting date, the company will charge 10% of the total trip cost as the cancellation fee and the remaining amount will be refunded to you after deducting the processing charge of Nepal Rastra Bank.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">b) 31 to 60 days</div>
                                            <div className="text-sm">If you choose to cancel your trip between 31 to 60 days before your trip starting date, the company will charge 40% of the total trip cost as the cancellation fee and the remaining amount will be refunded to you after deducting the processing charge of Nepal Rastra Bank.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-brand-light font-bold mb-2">(c) 16 to 30 days</div>
                                            <div className="text-sm">The company will charge 80% of the total trip cost as the cancellation fee to the customer for cancelling the trip between 16 to 30 days before the trip starting date and the remaining amount will be refunded to the customer after deducting the processing charge of Nepal Rastra Bank.</div>
                                        </div>
                                        <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5">
                                            <div className="text-red-400 font-bold mb-2">(d) Within 15 days</div>
                                            <div className="text-sm">No refunds will be issued to customers who cancel their trip within 15 days of the trip's start date. Additionally, no refunds will be provided to customers who begin their trip but are unable to continue for any reason. Furthermore, no refunds will be available for any unused services or portions of the trip due to unforeseen circumstances. In such cases, you will be responsible for paying the full amount of the trip.</div>
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
                                        <p>Trekking and peak climbing in the high-altitude regions of the Nepal Himalayas involve significant risks. Therefore, we strongly recommend that our customers purchase a travel insurance package in their own country, as foreign nationals are not permitted to purchase insurance in Nepal under the Government of Nepal's regulations. This insurance must cover medical expenses and helicopter evacuation. Altitude Sickness (AMS, HAPE, HACE), hypothermia, frostbite, landslides, and avalanches are common in these regions, and we want our clients to be protected against any risks that might result in trip cancellations, accidents, injuries, and the need for helicopter evacuation.</p>
                                        <p className="mt-2 text-brand-white/60 text-sm">Please note that little more altitude will assist customers by contacting their insurance providers, supporting helicopter evacuation, completing necessary documentation, and facilitating communication if a rescue is required. Additionally, we will arrange helicopter evacuation if we determine that a customer's life is at risk and their insurance provider is delaying services due to procedural reasons, using our connections to ensure client safety as our top priority. However, little more altitude will not bear any costs or provide compensation if the customer's insurance provider does not cover any portion or all aspects of the trip.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">5.</span> Domestic Flight Cancellation</h3>
                                        <p>Mountain weather is highly unpredictable, which can affect the regular flight schedule and may even result in flight cancellations. In such cases, Freedom Adventures is responsible for arranging accommodations for our customers and rescheduling the flight for the next day. However, if the entire group wishes to use helicopter services (at an additional cost), Freedom Adventures will make every effort to arrange for a helicopter, subject to availability.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">6.</span> Change in Itinerary</h3>
                                        <p>Occasionally, due to unfavorable circumstances such as landslides, avalanches, roadblocks, or flight cancellations, we may need to alter our itinerary. Initially, we will discuss the situation with our customers and select the best alternative route for implementation. The total number of days for the entire trip will remain unchanged. However, rest days or certain sections of the itinerary may be adjusted to compensate for any lost time. Additionally, if we are unable to complete the trip due to unforeseen conditions, Clause No. 2 will apply.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">7.</span> Gears and Equipment</h3>
                                        <p>For peak climbing, little more altitude is responsible for arranging the necessary group gear and equipment as specified in the "Gears and Equipment" section (What will be provided?). Beyond the provided items, customers are required to arrange their personal gear and equipment needed for their trips.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">8.</span> Optional Extras</h3>
                                        <p>Numerous activities are available for those seeking to experience the thrills of Nepal, including heritage tours, rafting, jungle safaris, mountain biking, and mountain flights. To participate in any of these activities, please confirm your interest with us at least 7 days before your arrival in Nepal. Additionally, if you require pre- or post-trip accommodation, we request that you confirm these arrangements with us once your flight tickets have been finalized.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">9.</span> Media Rights</h3>
                                        <p>Little more altitude reserves the right to use the photos and videos taken by the Little more altitude crew during the trip for promotional purposes. Also, the company can request its clients to provide photos and videos taken by them at no cost to use in promotional activities.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-3"><span className="text-brand-light">10.</span> Acceptance of Terms and Conditions</h3>
                                        <p>Booking a trip with little more altitude signifies your acceptance of these terms and conditions.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Privacy Policy */}
                        <motion.section id="privacy" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">{t('siteCopy.terms.privacy')}</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <div>
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-3">Introduction</h3>
                                    <p className="text-lg">Welcome to Little more altitude ("we," "our," "us"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you visit our website, <strong className="text-white">https://littlemorealtitude</strong> ("Website").</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold text-brand-light mb-4">Information We Collect</h3>
                                    <p className="mb-6">We may collect the following types of information:</p>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                            <h4 className="text-xl font-semibold text-white mt-0 mb-4">Personal Information</h4>
                                            <ul className="space-y-4 m-0 p-0 list-none text-sm">
                                                <li><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and mailing address.</li>
                                                <li><strong className="text-white">Payment Information:</strong> Credit card details and billing address.</li>
                                                <li><strong className="text-white">Booking Information:</strong> Travel preferences, dates, and other details related to your trekking and adventure bookings.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                            <h4 className="text-xl font-semibold text-white mt-0 mb-4">Non-Personal Information</h4>
                                            <ul className="space-y-4 m-0 p-0 list-none text-sm">
                                                <li><strong className="text-white">Technical Data:</strong> IP address, browser type, operating system, and device information.</li>
                                                <li><strong className="text-white">Usage Data:</strong> Pages visited, time spent on the website, and other analytical data.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-4">How We Use Your Information</h3>
                                    <p className="mb-4">We use the information we collect for the following purposes:</p>
                                    <ul className="space-y-3 m-0 p-0 list-none text-sm">
                                        <li><strong className="text-white">To Provide Services:</strong> Process bookings, manage payments, and deliver personalized adventure and trekking experiences.</li>
                                        <li><strong className="text-white">To Communicate:</strong> Send booking confirmations, updates, promotional materials, and respond to inquiries.</li>
                                        <li><strong className="text-white">To Improve Our Website:</strong> Analyze usage data to enhance user experience and website functionality.</li>
                                        <li><strong className="text-white">To Ensure Security:</strong> Monitor and protect our website from fraud and other security issues.</li>
                                    </ul>
                                </div>

                                <div className="space-y-6 mt-12">
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Sharing Your Information</h4>
                                        <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:</p>
                                        <ul className="space-y-2 mt-2 list-disc pl-5 text-sm">
                                            <li><strong className="text-white">Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.</li>
                                            <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information when required by law or in response to legal processes.</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Cookies and Tracking Technologies</h4>
                                        <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but this may affect the functionality of our website.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Data Security</h4>
                                        <p>We implement various security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Third-Party Links</h4>
                                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any linked sites you visit.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Children's Privacy</h4>
                                        <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently received personal information from a user under the age of 13, we will delete such information from our records.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Changes to This Privacy Policy</h4>
                                        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
                                        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                                        <p className="mt-2"><strong className="text-white">Email:</strong> <strong className="text-brand-light">alittlemorealtitude25@gmail.com</strong></p>
                                        <p><strong className="text-white">Mailing Address:</strong> little more altitude, Boudha-6</p>
                                        <p className="mt-4 text-brand-white/60 text-sm">Thank you for choosing little more altitude. We are committed to protecting your privacy and providing you with a safe and enjoyable experience.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Visa Procedures */}
                        <motion.section id="visa" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">{t('siteCopy.terms.visa')}</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-lg font-medium text-white">Nepal Tourist Visa Information and Procedures</p>
                                <p className="text-lg">Tourists flying to Nepal can obtain visas on arrival at Tribhuvan International Airport. The process is quick and straightforward, though delays may occur during peak trekking seasons. To avoid waiting, travelers can also secure a visa from a Nepalese Embassy or Consulate before departure.</p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">A. Key Points for Obtaining a Visa</h3>
                                    <ol className="list-decimal pl-5 space-y-3">
                                        <li><strong className="text-white">Visa Validity:</strong> If you obtain your visa from a Nepalese Diplomatic Mission, you must enter Nepal within six months. Your stay duration begins on the day of arrival.</li>
                                        <li><strong className="text-white">Tourist Visas:</strong> Visas issued at the airport are for tourists and permit multiple entries.</li>
                                        <li><strong className="text-white">Pre-Arrival Visa Requirement:</strong> Citizens of the following countries must obtain a visa before arriving in Nepal: Nigeria, Ghana, Zimbabwe, Cameroon, Somalia, Liberia, Ethiopia, Iraq, Palestine, Afghanistan, Syria, and refugees with travel documents.</li>
                                    </ol>
                                </div>

                                <div className="bg-brand-light/5 border border-brand-light/20 rounded-3xl p-8 lg:p-10 mb-8 relative overflow-hidden">
                                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <h3 className="text-2xl font-bold text-brand-light mt-0 mb-6">B. Steps for Getting a Tourist Visa on Arrival</h3>
                                    <ol className="list-decimal pl-5 space-y-4 font-medium text-white/90 relative z-10">
                                        <li><strong>Fill out an Arrival Card.</strong></li>
                                        <li>
                                            <strong>Complete the Online 'Tourist Visa' Form:</strong>
                                            <ul className="list-disc pl-5 mt-2 space-y-2 font-normal text-white/80 text-base">
                                                <li>You can fill out the form online prior to arrival via the official website: <a href="https://nepaliport.immigration.gov.np/on-arrival/IO01" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:underline hover:text-white transition-colors">nepaliport.immigration.gov.np/on-arrival/IO01</a>.</li>
                                                <li>Alternatively, you can complete the form using kiosk machines at the airport upon arrival.</li>
                                                <li>If filled online, print the submission receipt with the barcode and bring it with you. The receipt is valid for 15 days; if expired, you must fill out the form again.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Pay the Visa Fee:</strong>
                                            <div className="grid sm:grid-cols-3 gap-4 mt-4 font-normal">
                                                <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5 text-center">
                                                    <div className="text-2xl font-bold text-white mb-1">15 Days</div>
                                                    <div className="text-brand-light font-semibold text-lg">$30</div>
                                                </div>
                                                <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5 text-center">
                                                    <div className="text-2xl font-bold text-white mb-1">30 Days</div>
                                                    <div className="text-brand-light font-semibold text-lg">$50</div>
                                                </div>
                                                <div className="bg-brand-dark/50 p-5 rounded-xl border border-white/5 text-center">
                                                    <div className="text-2xl font-bold text-white mb-1">90 Days</div>
                                                    <div className="text-brand-light font-semibold text-lg">$125</div>
                                                </div>
                                            </div>
                                            <p className="mt-3 font-normal text-sm text-brand-white/70">Keep the payment receipt. Cash is recommended.</p>
                                        </li>
                                        <li><strong>Submit Documents:</strong> Present your completed online form, payment receipt, and passport to the immigration officer at the desk to receive your visa.</li>
                                    </ol>
                                    <p className="mt-6 text-sm text-brand-white/60 relative z-10"><strong className="text-white">Note:</strong> While multiple payment methods are accepted at the visa fees collection counter, carrying cash is advised for convenience.</p>
                                </div>

                                <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">C. Visa Extension</h3>
                                    <ul className="space-y-2">
                                        <li><strong className="text-white">Minimum 15-day extension:</strong> 15-day extension: $45, plus $3 per additional day.</li>
                                        <li><strong className="text-white">Late fee:</strong> $5 per day if the extension is delayed by less than 150 days.</li>
                                    </ul>
                                </div>

                                <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">D. Gratis Visa (Free Visa)</h3>
                                    <p className="mb-3">Gratis Visas are issued free of charge to the following categories of applicants:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Children under 10 (except US citizens).</li>
                                        <li>SAARC citizens (except Afghanistan) for 30 days on their first visit each visa year.</li>
                                        <li>Non-Resident Nepalese (NRN) cardholders (issued by MoFA/Nepalese diplomatic missions abroad).</li>
                                        <li>Chinese nationals for up to 150 days.</li>
                                    </ul>
                                </div>

                                <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">E. Exemptions for Diplomatic Officials (No Entry Visa Needed)</h3>
                                    <p className="mb-3">Diplomatic officials from the following countries do not require an entry visa:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Thailand, Russia, China, Brazil, Myanmar, Vietnam, Cambodia, Mongolia, Jordan, Israel, Georgia, and Qatar.</li>
                                        <li><strong className="text-white">Duration:</strong> Up to 90 days (except China and Cambodia: 30 days).</li>
                                    </ul>
                                </div>

                                <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/5">
                                    <h3 className="text-xl font-semibold text-brand-light mt-0 mb-4">F. Other Information</h3>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>All visas issued at the airport, including Gratis Visas, are tourist visas.</li>
                                        <li>For visa extensions or changes, contact the Department of Immigration. Extensions are also available in Pokhara (Tourist Visa only).</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* Terms of Service */}
                        <motion.section id="service" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">{t('siteCopy.terms.service')}</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-lg leading-relaxed">Welcome to Little more altitude! These terms and conditions outline the rules and regulations for the use of our platform. By accessing our website, you agree to these terms. Note: The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/[0.07] transition-colors">
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-4">Definitions</h3>
                                    <p className="mb-4">For the purpose of this Terms of Service, we may use these definitions:</p>
                                    <ul className="space-y-3 m-0 p-0 list-none text-sm">
                                        <li><strong className="text-white">Company</strong> (referred to as either "the Company", "We", "Us", or "Our" in this Agreement) refers to LittleMoreAltitude.com website.</li>
                                        <li><strong className="text-white">Content</strong> refers to content such as text, images, or other information that can be posted, uploaded, linked to, or otherwise made available by You, regardless of the form of that content.</li>
                                        <li><strong className="text-white">Country</strong> refers to: Nepal.</li>
                                        <li><strong className="text-white">Device</strong> means any device that can access the Service such as a computer, a smartphone, or a tablet.</li>
                                        <li><strong className="text-white">Service</strong> refers to the adventure travel information and booking services offered by Little More Altitude through Littlemorealtitudetreks.com.</li>
                                        <li><strong className="text-white">You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                        <li><strong className="text-white">Terms and Conditions</strong> (also referred to as "Terms" or "Terms of Use") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.</li>
                                    </ul>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6 mt-8">
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">1. Acceptance of Terms</h4>
                                        <p className="text-sm">By accessing or using our Service, you agree to these Terms. If you do not agree with any part of these Terms, you must not use our Service. We reserve the right to modify these Terms at any time. Your continued use of our Service following the posting of changes constitutes your acceptance of those changes.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">2. Description of Service</h4>
                                        <p className="text-sm">Little more altitude treks provides information and booking services for adventure travel in Nepal, including but not limited to trekking, peak climbing, and rafting. We act as a booking facilitator and tour operator for various travel-related services.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">3. User Conduct</h4>
                                        <p className="text-sm mb-2">You agree to use our Service only for lawful purposes and in accordance with these Terms. You must not:</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm">
                                            <li>Engage in any conduct that violates any applicable law or regulation.</li>
                                            <li>Infringe on the rights of others, including intellectual property rights.</li>
                                            <li>Transmit any harmful or malicious code, viruses, or other harmful content.</li>
                                            <li>Interfere with or disrupt the integrity or performance of our Service or the data contained therein.</li>
                                            <li>Attempt to gain unauthorized access to our Service or any related systems or networks.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">4. Intellectual Property</h4>
                                        <p className="text-sm">All content, trademarks, logos, and other intellectual property used or displayed on our website and Service are the property of little more altitude or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use our Service for your personal, non-commercial use. You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">5. Limitation of Liability</h4>
                                        <p className="text-sm">To the fullest extent permitted by law, Little More Altitude, its affiliates, and their respective directors, officers, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or in connection with your use of our Service.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">6. Indemnification</h4>
                                        <p className="text-sm">You agree to indemnify, defend, and hold harmless Little more altitude, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our Service or your violation of these Terms.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">7. Termination and Suspension</h4>
                                        <p className="text-sm">We may terminate or suspend your access to our Service, in whole or in part, at any time, with or without cause, and with or without notice. Upon termination, your right to use our Service will immediately cease. All provisions of these Terms that by their nature should survive termination will survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">8. Disclaimer of Warranties</h4>
                                        <p className="text-sm">Our Service is provided on an "as is" and "as available" basis. We make no warranties, express or implied, regarding the availability, accuracy, completeness, reliability, or suitability of our Service for any purpose. Your use of our Service is at your own risk. We disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">9. Governing Law and Dispute Resolution</h4>
                                        <p className="text-sm">These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms or our Service shall be resolved through binding arbitration in Kathmandu, Nepal, except that you or we may seek injunctive or other equitable relief in court to prevent the actual or threatened infringement of intellectual property rights.</p>
                                    </div>
                                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors">
                                        <h4 className="text-lg font-bold text-brand-light mb-2">10. Miscellaneous</h4>
                                        <p className="text-sm">If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such right or provision. These Terms constitute the entire agreement between you and little more altitude regarding your use of our Service.</p>
                                    </div>
                                </div>

                                <div className="space-y-6 mt-12">
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Governing Law</h4>
                                        <p>These terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Changes to Terms</h4>
                                        <p>Little more altitude reserves the right to modify these terms at any time. Any changes will be posted on this page, and it is your responsibility to review these terms periodically.</p>
                                    </div>
                                    <div className="border-l-2 border-brand-light/30 pl-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
                                        <p>If you have any questions about these terms, please contact us at <strong className="text-brand-light">alittlemorealtitude25@gmail.com</strong></p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-16"></div>

                        {/* B2B & Partners */}
                        <motion.section id="b2b" className="scroll-mt-32" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
                            <div className="mb-10">
                                <h2 className="text-4xl font-bold text-white mb-4">{t('siteCopy.terms.partners')}</h2>
                                <div className="h-1 w-20 bg-brand-light rounded-full"></div>
                            </div>
                            <div className="prose prose-invert max-w-none text-brand-white/80 space-y-8">
                                <p className="text-2xl font-medium text-brand-light leading-snug">Little more altitude: Your Premier Adventure Tourism Partner in Nepal</p>
                                <p className="text-lg">Little more altitude is a leading adventure tourism company in Nepal, dedicated to providing exceptional outdoor experiences and promoting sustainable tourism practices. We offer a diverse range of outdoor activities and educational programs, making us a preferred choice for both outdoor enthusiasts and educational institutions.</p>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mt-0 mb-3">Our Team: Experienced Professionals and Avid Explorers</h3>
                                    <p>Our core team is composed of highly experienced professionals with extensive knowledge of the adventure tourism industry in Nepal. What truly distinguishes us is that our team members are not just office-based personnel; they are passionate explorers who have personally ventured into Nepal's remote and untouched regions. This firsthand experience with the terrain, culture, and challenges of off-the-beaten-path destinations allows us to craft unique and authentic experiences for our clients that are truly unparalleled.</p>
                                    <p>As a B2B partner, you can rely on our team to provide valuable insights and recommendations grounded in years of industry experience. We are dedicated to building enduring partnerships and delivering exceptional service that consistently surpasses expectations.</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mt-0 mb-3">Why Partner with Little More Altitude?</h3>
                                    <p>At Little more altitude, we believe in the power of partnerships for mutual growth and benefit. By collaborating with us, your organization gains access to our deep expertise in:</p>
                                    <ul className="list-disc pl-5 space-y-1 mt-2">
                                        <li>Adventure tourism</li>
                                        <li>Outdoor education</li>
                                        <li>Sustainability practices</li>
                                    </ul>
                                    <p className="mt-4">Our experienced and certified team of guides, trainers, and instructors are ready to deliver customized services and programs tailored to the specific needs of your organization and customers.</p>
                                </div>

                                <div className="bg-gradient-to-br from-brand-medium/30 to-brand-dark border border-brand-light/20 rounded-[2rem] p-8 lg:p-12 my-12 relative overflow-hidden shadow-2xl">
                                    <div className="absolute -top-10 -right-10 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>
                                    <h3 className="text-3xl font-bold text-white mt-0 mb-10 relative z-10">Our Key Strengths</h3>

                                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Scale size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Expertise</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Over 10 years of experience in the adventure tourism industry and sherpa background.</li>
                                                    <li>Team of highly trained professionals.</li>
                                                    <li>Master Leave No Trace (LNT) trainers and Advance Wilderness First Aid (AWFA) certified guides.</li>
                                                    <li>Deep understanding of B2B partner needs, ensuring seamless experiences.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Shield size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">High Safety Standards</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Safety is our utmost priority.</li>
                                                    <li>Strict safety protocols are rigorously followed.</li>
                                                    <li>Comprehensive safety policy in place.</li>
                                                    <li>All guides are certified in AWFA.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Handshake size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Sustainability Commitment</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Dedicated to promoting sustainable tourism practices and minimizing environmental impact.</li>
                                                    <li>Carbon Footprint Policy in action.</li>
                                                    <li>Actively involved in promoting LNT principles and alternative energies.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <FileText size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Remote and Unique Destinations</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Extensive experience exploring remote and off-the-beaten-track locations in Nepal.</li>
                                                    <li>Ability to offer unique and exclusive experiences unavailable elsewhere.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <FileCheck size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Variety of Activities</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Wide array of adventure activities offered: Trekking, mountaineering, peak climbing, canyoning, rafting, and cultural tours.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <ChevronRight size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Local Knowledge</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Locally-owned company with deep understanding of local culture, customs, and traditions.</li>
                                                    <li>Authentic and immersive experiences for clients.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Shield size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Customer Satisfaction</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Proven history of exceeding customer expectations with high-quality adventures.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Handshake size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Flexibility and Adaptability</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Flexible and adaptable to evolving client needs.</li>
                                                    <li>Accommodate last-minute changes and requests for smooth and enjoyable experiences.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Scale size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Competitive Pricing</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Competitive pricing without compromising quality.</li>
                                                    <li>Transparent pricing structure with no hidden costs.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="mt-1 flex-shrink-0 text-brand-light bg-brand-medium/30 p-2 rounded-xl h-fit">
                                                <Handshake size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-2">Social Responsibility</h4>
                                                <ul className="text-sm leading-relaxed text-brand-white/70 list-disc pl-4 space-y-1">
                                                    <li>Strong commitment to social responsibility through the Freedom Social Foundation.</li>
                                                    <li>Provides outdoor education to young Nepalese and promotes sustainable tourism.</li>
                                                    <li>Partnering with us demonstrates a B2B partner's commitment to social and environmental responsibility.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <p>Partnering with little more altitude provides your organization with unparalleled access to expertise in adventure tourism, outdoor education, and sustainability practices. Our customized programs, experienced team, social responsibility efforts, and competitive pricing position us as the preferred B2B partner in Nepal.</p>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                    <h3 className="text-2xl font-semibold text-brand-light mt-0 mb-4">Why Little More Altitude?</h3>
                                    <p className="mb-4">Little More Altitude Treks are delivered by a dedicated team of guiding professionals. We prioritize:</p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Excellent logistical preparation</li>
                                        <li>Understanding and meeting client needs</li>
                                        <li>Utilizing available local resources</li>
                                        <li>Passion for environmental stewardship in our working environment.</li>
                                    </ul>
                                </div>

                                <div className="mt-12 bg-white/5 p-8 rounded-3xl border border-white/5">
                                    <h3 className="text-2xl font-bold text-white mt-0 mb-4">How We Give Back</h3>
                                    <p className="mb-4">Little more altitude has launched an initiative to enhance livelihoods in the trekking regions where we operate. Our work focuses on remote areas with limited services and access. We aim to create a positive impact through:</p>
                                    <ul className="list-disc pl-5 space-y-2 mb-0">
                                        <li>Education</li>
                                        <li>Training</li>
                                        <li>Awareness programs</li>
                                        <li>Health initiatives</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </main>
    );
}
