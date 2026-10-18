"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Mountain, ChevronDown, ArrowRight, Activity, CheckCircle2, AlertTriangle, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

interface ExpeditionStat {
    label: string;
    value: string;
}

interface ExpeditionDay {
    day: string;
    title: string;
    desc: string;
}

interface ExpeditionDetailData {
    name: string;
    elevation: string;
    location: string;
    duration: string;
    difficulty: string;
    season: string;
    price: string;
    image: string;
    description: string;
    stats: ExpeditionStat[];
    itinerary: ExpeditionDay[];
}

// Mock Data for Demo Purposes (In a real app, fetch based on slug)
const expeditionData: Record<string, ExpeditionDetailData> = {
    "mount-everest": {
        name: "Mount Everest",
        elevation: "8,848m",
        location: "Nepal / Tibet Border",
        duration: "60 Days",
        difficulty: "Extreme",
        season: "April - May",
        price: "$65,000",
        image: "/images/peaks/mera/IMG_6541.jpg",
        description: "The ultimate mountaineering challenge. Standing at the top of the world requires not just physical strength, but mental fortitude and elite logistical support. Our expedition is designed to maximize your chances of success with industry-leading oxygen systems and Sherpa support.",
        stats: [
            { label: "Success Rate", value: "92%" },
            { label: "O2 Assisted", value: "Yes" },
            { label: "Guide Ratio", value: "1:1" },
            { label: "Avg Temp", value: "-25°C" }
        ],
        itinerary: [
            { day: "01-03", title: "Arrival in Kathmandu", desc: "Gear check, briefings, and final preparations." },
            { day: "04-10", title: "Trek to Base Camp", desc: "Acclimatization hike through the Khumbu Valley." },
            { day: "11-40", title: "Acclimatization Rotations", desc: "Camp 1, Camp 2, and Camp 3 rotations." },
            { day: "41-55", title: "Summit Push", desc: "Waiting for the weather window and the final ascent." },
            { day: "56-60", title: "Descent & Departure", desc: "Return to Lukla and fly back to Kathmandu." }
        ]
    },
    "kilimanjaro": {
        name: "Kilimanjaro",
        elevation: "5,895m",
        location: "Tanzania",
        duration: "9 Days",
        difficulty: "Moderate+",
        season: "Jan - Mar",
        price: "$3,850+",
        image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=1600&q=80",
        description: "The Roof of Africa. A non-technical but physically demanding ascent through five unique climate zones. We trust the Lemosho route for the best acclimatization profile and scenic beauty.",
        stats: [
            { label: "Success Rate", value: "98%" },
            { label: "Route", value: "Lemosho" },
            { label: "Guide Ratio", value: "1:3" },
            { label: "Avg Temp", value: "-15°C" }
        ],
        itinerary: [
            { day: "01", title: "Arrival in Moshi", desc: "Transfer to hotel and gear check." },
            { day: "02-07", title: "Ascent", desc: "Climbing through rainforest, moorland, and alpine desert." },
            { day: "08", title: "Summit Night", desc: "Midnight start for a sunrise at Uhuru Peak." },
            { day: "09", title: "Departure", desc: "Celebration and airport transfer." }
        ]
    },
    "manaslu": {
        name: "Manaslu",
        elevation: "8,163m",
        location: "Nepal",
        duration: "45 Days",
        difficulty: "High",
        season: "Sept - Oct",
        price: "$14,500+",
        image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&w=1600&q=80",
        description: "The Mountain of the Spirit. As the world's 8th highest peak, Manaslu offers a true 8000m challenge without the crowds of Everest. It is the perfect stepping stone for higher objectives.",
        stats: [
            { label: "Success Rate", value: "85%" },
            { label: "O2 Assisted", value: "Yes" },
            { label: "Guide Ratio", value: "1:2" },
            { label: "Avg Temp", value: "-20°C" }
        ],
        itinerary: [
            { day: "01-05", title: "Kathmandu & Trek", desc: "Permits and trek to Samagaun." },
            { day: "06-10", title: "Base Camp", desc: "Establishment and Puja ceremony." },
            { day: "11-35", title: "Climbing Period", desc: "Rotations to C1, C2, C3, C4 and Summit." },
            { day: "36-40", title: "Trek Out", desc: "Return to civilization." }
        ]
    },
    "mera-peak": {
        name: "Mera Peak",
        elevation: "6,461m",
        location: "Hinku Valley, Nepal",
        duration: "17 Days",
        difficulty: "Challenging",
        season: "Spring and Autumn",
        price: "Inquire",
        image: "/images/peaks/mera/IMG_6541.jpg",
        description: "Trek into the remote Hinku Valley and climb Nepal's highest trekking peak. The summit rewards climbers with views of Everest, Lhotse, Makalu, Cho Oyu, and Kanchenjunga.",
        stats: [
            { label: "Duration", value: "17 days" },
            { label: "Difficulty", value: "Challenging" },
            { label: "Climb type", value: "Trekking peak" },
            { label: "Summit", value: "6,461m" }
        ],
        itinerary: [
            { day: "01", title: "Arrive in Kathmandu", desc: "Airport pickup, hotel transfer, and time to rest." },
            { day: "02", title: "Sightseeing and expedition preparation", desc: "Visit Kathmandu heritage sites, attend the climb briefing, and check or rent equipment." },
            { day: "03", title: "Fly to Lukla and trek to Chhuthang", desc: "Take a scenic flight to Lukla and continue through forest trails to Chhuthang (3,020m)." },
            { day: "04", title: "Cross Zatrawala Pass to Tuli Kharka", desc: "Climb to Zatrawala Pass (4,600m) before descending to the pastureland of Tuli Kharka (4,300m)." },
            { day: "05", title: "Trek to Kothe", desc: "Descend toward the Hinku River, then follow forested trails into the Hinku Valley." },
            { day: "06", title: "Trek to Thangnak", desc: "Follow the Hinku Khola past Gondishung and the historic Lungsumgba Gumba." },
            { day: "07", title: "Trek to Khare", desc: "Cross the glacial moraines of Dig, Hinku Nup, and Shar Glaciers to reach Khare (5,000m)." },
            { day: "08", title: "Acclimatization at Khare", desc: "Rest, take a light acclimatization walk, and check climbing equipment." },
            { day: "09", title: "Trek to Mera High Camp", desc: "Cross Mera La and continue over snowy and glacial terrain to High Camp (5,700m)." },
            { day: "10", title: "Weather contingency day", desc: "Keep this reserve day available for weather or summit schedule adjustments." },
            { day: "11", title: "Summit Mera Peak and descend to Khare", desc: "Make an early summit attempt, then descend to Khare after taking in the Himalayan panorama." },
            { day: "12", title: "Trek back to Kothe", desc: "Retrace the route past Dig Kharka and Thangnak to Kothe." },
            { day: "13", title: "Trek to Tuli Kharka", desc: "Climb through forest and along Hinku River ridges to Tuli Kharka." },
            { day: "14", title: "Cross Zatrawala Pass to Lukla", desc: "Cross the pass and descend to Lukla (2,800m)." },
            { day: "15", title: "Fly to Kathmandu", desc: "Return to Kathmandu by flight and transfer to your hotel." },
            { day: "16", title: "Leisure day in Kathmandu", desc: "Explore the city, shop for souvenirs, and join a farewell dinner." },
            { day: "17", title: "Departure", desc: "Transfer to the airport for your onward flight." }
        ]
    },
    "yala-peak": {
        name: "Yala Peak",
        elevation: "5,500m",
        location: "Langtang Valley, Nepal",
        duration: "14 Days",
        difficulty: "Moderate",
        season: "Spring and Autumn",
        price: "Inquire",
        image: "/images/peaks/yala/Yala-peak.jpg",
        description: "A beginner-friendly climbing expedition combining cultural trekking through Langtang Valley with a guided snow summit and views of Shishapangma and surrounding peaks.",
        stats: [
            { label: "Duration", value: "14 days" },
            { label: "Difficulty", value: "Moderate" },
            { label: "Climb type", value: "Beginner peak" },
            { label: "Summit", value: "5,500m" }
        ],
        itinerary: [
            { day: "01", title: "Arrive in Kathmandu", desc: "Transfer to your hotel and rest before the expedition." },
            { day: "02", title: "Preparation and sightseeing", desc: "Visit heritage sites, attend the climbing briefing, process permits, and check equipment." },
            { day: "03", title: "Drive to Syabrubesi", desc: "Travel through the hills and river valleys of Rasuwa district (1,460m)." },
            { day: "04", title: "Trek to Lama Hotel", desc: "Enter Langtang National Park and follow forest trails and suspension bridges (2,460m)." },
            { day: "05", title: "Trek to Langtang Village", desc: "Ascend through alpine forest and yak grazing areas to Langtang Village (3,450m)." },
            { day: "06", title: "Trek to Kyanjin Gompa", desc: "Take a short scenic walk to the monastery village (3,870m)." },
            { day: "07", title: "Acclimatization day", desc: "Hike toward Tsergo Ri (4,984m) for panoramic views, then return to Kyanjin Gompa." },
            { day: "08", title: "Trek to Yala Base Camp", desc: "Climb into high alpine terrain near the glaciers and camp at approximately 4,600m." },
            { day: "09", title: "Summit Yala Peak and return", desc: "Make an early ascent over snow slopes and descend to Kyanjin Gompa (3,870m)." },
            { day: "10", title: "Trek to Lama Hotel", desc: "Descend through forests and river valleys to Lama Hotel (2,460m)." },
            { day: "11", title: "Trek to Khanjim", desc: "Continue downhill through peaceful village scenery to Khanjim (2,235m)." },
            { day: "12", title: "Trek to Syabrubesi", desc: "Follow forest trails and rivers on the final trekking day (1,460m)." },
            { day: "13", title: "Drive to Kathmandu", desc: "Return to Kathmandu by road and enjoy a free evening." },
            { day: "14", title: "Departure", desc: "Transfer to the airport for your onward journey." }
        ]
    },
    "lobuche-peak": {
        name: "Lobuche Peak",
        elevation: "6,119m",
        location: "Khumbu, Nepal",
        duration: "15 Days",
        difficulty: "Challenging",
        season: "Spring and Autumn",
        price: "Inquire",
        image: "/images/peaks/lobuche/lobuce.webp",
        description: "Follow the classic Everest Base Camp trail through Sherpa villages and alpine landscapes before climbing Lobuche East, a rewarding trekking peak with sweeping Himalayan views.",
        stats: [
            { label: "Duration", value: "15 days" },
            { label: "Difficulty", value: "Challenging" },
            { label: "Climb type", value: "Trekking peak" },
            { label: "Summit", value: "6,119m" }
        ],
        itinerary: [
            { day: "01", title: "Arrive in Kathmandu", desc: "Airport welcome, hotel transfer, expedition briefing, and time to prepare." },
            { day: "02", title: "Preparation and official briefing", desc: "Meet your climbing guide, complete gear checks, and process permit formalities." },
            { day: "03", title: "Fly to Lukla and trek to Phakding", desc: "Fly to Lukla (2,850m) and follow the Dudh Koshi River to Phakding (2,650m)." },
            { day: "04", title: "Trek to Namche Bazaar", desc: "Cross suspension bridges and enter Sagarmatha National Park before climbing to Namche (3,440m)." },
            { day: "05", title: "Acclimatization in Namche Bazaar", desc: "Rest and take an optional hike to viewpoints above Namche." },
            { day: "06", title: "Trek to Tengboche", desc: "Walk through rhododendron forest and visit Tengboche Monastery (3,855m)." },
            { day: "07", title: "Trek to Dingboche", desc: "Continue through alpine terrain to Dingboche (4,360m), with views of Ama Dablam." },
            { day: "08", title: "Acclimatization in Dingboche", desc: "Take a short hike to higher viewpoints and prepare for the next stages." },
            { day: "09", title: "Trek to Thukla", desc: "Ascend gradually through the Khumbu Valley to Thukla (4,620m)." },
            { day: "10", title: "Trek to Lobuche High Camp", desc: "Leave the main Everest trail, ascend to High Camp (5,400m), and prepare climbing equipment." },
            { day: "11", title: "Summit Lobuche Peak and descend to Thukla", desc: "Start before dawn for the 6,119m summit, then descend to Thukla (4,620m)." },
            { day: "12", title: "Contingency and reserve day", desc: "Keep this day available for bad weather or an adjusted summit attempt." },
            { day: "13", title: "Trek to Namche Bazaar", desc: "Descend through alpine landscapes and retrace the trail to Namche (3,440m)." },
            { day: "14", title: "Trek to Lukla", desc: "Follow the Dudh Koshi River through Sherpa villages to Lukla (2,850m)." },
            { day: "15", title: "Fly to Kathmandu", desc: "Fly back to Kathmandu and transfer to your hotel." }
        ]
    },
    "thorong-peak": {
        name: "Thorong Peak",
        elevation: "6,144m",
        location: "Annapurna, Nepal",
        duration: "15 Days",
        difficulty: "Challenging",
        season: "Spring and Autumn",
        price: "Inquire",
        image: "/images/peaks/thorong/Throng%20peak.jpg",
        description: "An alpine ascent above the Thorong La region, combining the cultural villages and high pastures of the Annapurna region with glacier travel, steep snow slopes, and basic mountaineering techniques.",
        stats: [
            { label: "Duration", value: "15 days" },
            { label: "Difficulty", value: "Challenging" },
            { label: "Climb type", value: "Alpine ascent" },
            { label: "Summit", value: "6,144m" }
        ],
        itinerary: [
            { day: "01", title: "Arrive in Kathmandu", desc: "Airport welcome, hotel transfer, and evening expedition briefing." },
            { day: "02", title: "Briefing and gear check", desc: "Meet your climbing guide, review the route and safety plan, and check or rent equipment." },
            { day: "03", title: "Drive to Besisahar", desc: "Follow the Trishuli and Marsyangdi rivers to Besisahar (760m)." },
            { day: "04", title: "Drive to Lower Pisang", desc: "Travel by jeep on mountain roads to Lower Pisang (3,250m)." },
            { day: "05", title: "Trek to Manang via Upper Pisang", desc: "Climb through Upper Pisang and continue to Manang (3,450m)." },
            { day: "06", title: "Acclimatization at Manang", desc: "Rest or take an optional hike to nearby viewpoints, Gangapurna Lake, or higher ridges." },
            { day: "07", title: "Trek to Yak Kharka", desc: "Ascend into open alpine terrain and reach Yak Kharka (4,000m)." },
            { day: "08", title: "Trek to Thorong Phedi", desc: "Follow rugged mountain slopes to Thorong Phedi (4,560m)." },
            { day: "09", title: "Trek to Thorong Peak Base Camp", desc: "Leave the main route and climb into remote terrain to establish camp at 5,416m." },
            { day: "10", title: "Training and preparation at Base Camp", desc: "Practice crampon, ice axe, and rope skills, and review climbing safety procedures." },
            { day: "11-12", title: "Summit window for Thorong Peak", desc: "Use the weather window for the summit attempt, then descend safely back to camp." },
            { day: "13", title: "Descend and drive to Tatopani", desc: "Descend to the roadhead and drive to Tatopani (1,190m); relax at the hot springs." },
            { day: "14", title: "Drive to Pokhara", desc: "Travel through river valleys and villages to Pokhara (822m)." },
            { day: "15", title: "Fly to Kathmandu", desc: "Take a scenic flight to Kathmandu (1,400m), then transfer to your hotel." }
        ]
    },
    "larke-peak": {
        name: "Larke Peak",
        elevation: "5,135m",
        location: "Manaslu, Nepal",
        duration: "17 Days",
        difficulty: "Challenging",
        season: "Spring and Autumn",
        price: "Inquire",
        image: "/images/peaks/larke/larkey%20peak.jpg",
        description: "Combine the classic Manaslu Circuit with a technical alpine summit at 5,135m. The route crosses Buddhist villages, remote valleys, and high Himalayan terrain with expert guidance and careful altitude management.",
        stats: [
            { label: "Duration", value: "17 days" },
            { label: "Difficulty", value: "Challenging" },
            { label: "Climb type", value: "Technical alpine" },
            { label: "Summit", value: "5,135m" }
        ],
        itinerary: [
            { day: "01", title: "Arrive in Kathmandu", desc: "Transfer to your hotel, meet the team, and receive an expedition briefing." },
            { day: "02", title: "Drive to Machha Khola", desc: "Travel through river valleys, terraced hills, and rural settlements to Machha Khola (930m)." },
            { day: "03", title: "Trek to Jagat", desc: "Follow narrow trails and suspension bridges past Tatopani to Jagat (1,410m)." },
            { day: "04", title: "Trek to Deng", desc: "Climb through bamboo and pine forest and along dramatic river gorges to Deng (1,860m)." },
            { day: "05", title: "Trek to Namrung", desc: "Gain elevation through Tibetan-influenced villages to Namrung (2,660m)." },
            { day: "06", title: "Trek to Syala", desc: "Ascend into alpine terrain and enjoy views of Manaslu's north face (3,500m)." },
            { day: "07", title: "Trek to Sama Gaon", desc: "Walk to the culturally rich Nubri Valley settlement of Sama Gaon (3,530m)." },
            { day: "08", title: "Acclimatization hike to Manaslu Base Camp", desc: "Hike through rocky moraine and glacial terrain to approximately 4,800m, then return to Sama Gaon." },
            { day: "09", title: "Trek to Samdo", desc: "Continue through yak pastures and open landscapes to Samdo (3,875m)." },
            { day: "10", title: "Trek to Dharmasala / Larke Phedi", desc: "Climb into rugged alpine terrain to the final resting point before the high mountain route (4,460m)." },
            { day: "11", title: "Trek to Larke Peak Base Camp", desc: "Ascend rocky and icy terrain to establish the supported base camp at 5,135m." },
            { day: "12", title: "Larke Peak climbing period", desc: "Make the summit attempt when conditions allow, using rope work, glacier navigation, and guide support." },
            { day: "13", title: "Trek to Bimthang", desc: "Descend through glacial valleys to the meadows and camping area of Bimthang (3,800m)." },
            { day: "14", title: "Trek to Tilche", desc: "Continue through rhododendron forests, villages, and river crossings to Tilche (2,300m)." },
            { day: "15", title: "Trek to Tal", desc: "Descend into warmer landscapes and reach Tal (1,700m)." },
            { day: "16", title: "Drive to Besisahar", desc: "Take a rugged jeep ride along the Marsyangdi Valley to Besisahar." },
            { day: "17", title: "Drive to Kathmandu", desc: "Return to Kathmandu by road and conclude the expedition." }
        ]
    },
    // Fallback for other slugs
    "default": {
        name: "Expedition Unknown",
        elevation: "Unknown",
        location: "Unknown",
        duration: "TBD",
        difficulty: "Moderate",
        season: "TBD",
        price: "Inquire",
        image: "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?auto=format&fit=crop&w=1600&q=80",
        description: "An extraordinary journey awaits. Details for this specific expedition are currently being updated by our ground team.",
        stats: [
            { label: "Success Rate", value: "TBD" },
            { label: "O2 Assisted", value: "Optional" },
            { label: "Guide Ratio", value: "1:2" },
            { label: "Avg Temp", value: "-10°C" }
        ],
        itinerary: [
            { day: "01", title: "Arrival", desc: "Meet the team." },
            { day: "02-10", title: "The Climb", desc: "Ascend to the summit." },
            { day: "11", title: "Departure", desc: "Return home." }
        ]
    }
};

export default function ExpeditionDetail() {
    const params = useParams();
    const { t } = useLanguage();
    const slug = params?.slug as string;
    const data = expeditionData[slug] || expeditionData["default"];
    const [showAllItinerary, setShowAllItinerary] = useState(false);
    const visibleItinerary = showAllItinerary ? data.itinerary : data.itinerary.slice(0, 6);
    const includedItems = t('siteCopy.peakDetail.includedItems') as string[];
    const excludedItems = t('siteCopy.peakDetail.excludedItems') as string[];
    const costLists = (
        <div className={showAllItinerary ? "mt-10 space-y-10 border-t border-white/10 pt-8" : "grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mt-28 border-t border-white/10 pt-12"}>
            <section>
                <div className="flex items-center gap-3 mb-5">
                    <CheckCircle2 className="text-brand-light" size={20} />
                    <h3 className="text-xl font-black uppercase tracking-tight">{t('siteCopy.peakDetail.includes')}</h3>
                </div>
                <ul className="divide-y divide-white/5">
                    {includedItems.map((item) => (
                        <li key={item} className="flex items-start gap-3 py-3 text-sm leading-relaxed text-white/60">
                            <CheckCircle2 className="mt-0.5 shrink-0 text-brand-light/70" size={15} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <div className="flex items-center gap-3 mb-5">
                    <AlertTriangle className="text-white/50" size={20} />
                    <h3 className="text-xl font-black uppercase tracking-tight">{t('siteCopy.peakDetail.excludes')}</h3>
                </div>
                <ul className="divide-y divide-white/5">
                    {excludedItems.map((item) => (
                        <li key={item} className="flex items-start gap-3 py-3 text-sm leading-relaxed text-white/60">
                            <Minus className="mt-0.5 shrink-0 text-white/40" size={15} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );

    const containerRef = useRef<HTMLDivElement>(null);
    const itineraryHeadingRef = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <main ref={containerRef} className="bg-brand-dark min-h-screen text-white overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    <Image
                        src={data.image}
                        alt={data.name}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/80 via-transparent to-brand-dark/80" />
                </motion.div>

                <div className="container relative z-10 px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <SectionBadge dark>{t('siteCopy.peakDetail.profile')}</SectionBadge>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                            {data.name}
                        </h1>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 pt-8">
                            <div className="flex items-center gap-3">
                                <Mountain className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest">{data.elevation}</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <MapPin className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest uppercase">{data.location}</span>
                            </div>
                            <div className="w-px h-8 bg-white/20 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <Activity className="text-brand-light" size={24} />
                                <span className="text-xl font-bold tracking-widest uppercase">{data.difficulty}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/50">{t('siteCopy.peakDetail.missionBrief')}</p>
                    <div className="w-px h-16 bg-gradient-to-b from-brand-light to-transparent" />
                </motion.div>
            </section>

            {/* Mission Content */}
            <section className="py-32 relative">
                <div className="container mx-auto max-w-7xl px-6 md:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <SectionHeading dark gradientText={t('siteCopy.peakDetail.objective')}>
                                    {t('siteCopy.peakDetail.overview')}
                                </SectionHeading>
                                <p className="text-lg md:text-xl text-white/60 leading-relaxed font-medium">
                                    {data.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
                                {data.stats.map((stat, i) => (
                                    <div key={i} className="bg-brand-dark/50 p-6 md:p-8 space-y-2 backdrop-blur-sm hover:bg-white/5 transition-colors">
                                        <p className="text-xs uppercase tracking-[0.2em] text-brand-light/70">{stat.label}</p>
                                        <p className="text-2xl md:text-3xl font-black tracking-tight">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-8">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="text-brand-light shrink-0" size={24} />
                                    <div>
                                        <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-5">{t('siteCopy.peakDetail.preparation')}</h3>
                                        <ul className="space-y-4 text-white/60 text-sm">
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                {t('siteCopy.peakDetail.fitness')}
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                {t('siteCopy.peakDetail.briefing')}
                                            </li>
                                            <li className="flex items-center gap-3">
                                                <CheckCircle2 size={14} className="text-brand-light" />
                                                {t('siteCopy.peakDetail.acclimatization')}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {showAllItinerary && costLists}
                        </div>

                        <div className=" ">
                            <h3 ref={itineraryHeadingRef} className="scroll-mt-24 text-3xl font-black uppercase tracking-tight mb-8 mt-2 border-b-1 border-white/30 pb-6 ">{t('siteCopy.peakDetail.itinerary')}</h3>

                            <div className="relative ml-2 border-l border-white/10 pl-8 md:pl-10 space-y-10">
                                {visibleItinerary.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ delay: i * 0.03 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[37px] md:-left-[45px] top-1 w-3 h-3 rounded-full bg-brand-light ring-4 ring-brand-dark" />
                                        <div className="space-y-2">
                                            <span className="text-brand-light font-mono text-xs tracking-widest uppercase">{t('siteCopy.peakDetail.day')} {item.day}</span>
                                            <h4 className="text-xl md:text-2xl font-bold uppercase tracking-wide">{item.title}</h4>
                                            <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {data.itinerary.length > 6 && (
                                <div className="pt-8">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            if (showAllItinerary) {
                                                setShowAllItinerary(false);
                                                requestAnimationFrame(() => {
                                                    itineraryHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                                                });
                                                return;
                                            }
                                            setShowAllItinerary(true);
                                        }}
                                        aria-expanded={showAllItinerary}
                                        className="mt-8 w-full min-h-14 px-6 border border-white/15 rounded-xl text-sm font-bold uppercase tracking-[0.15em] text-brand-light hover:bg-white/5 transition-colors flex items-center justify-between"
                                    >
                                        <span>{showAllItinerary ? t('siteCopy.peakDetail.less') : t('siteCopy.peakDetail.more')}</span>
                                        <ChevronDown size={18} className={`transition-transform ${showAllItinerary ? "rotate-180" : ""}`} />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {!showAllItinerary && costLists}
                </div>
            </section>

            <section aria-labelledby="peak-meeting-title" className="border-t border-white/10 bg-white/[0.02] py-16 md:py-20">
                <div className="container mx-auto flex max-w-7xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
                    <div className="max-w-3xl space-y-4">
                        <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-light">
                            {t('expedition.meeting.badge')}
                        </p>
                        <h2 id="peak-meeting-title" className="text-3xl font-black uppercase leading-tight text-white md:text-5xl">
                            {t('expedition.meeting.heading')}
                        </h2>
                        <p className="max-w-2xl text-base leading-relaxed text-brand-white/60 md:text-lg">
                            {t('expedition.meeting.description')}
                        </p>
                    </div>
                    <Link
                        href="/contact"
                        className="inline-flex min-h-14 shrink-0 items-center justify-center gap-4 rounded-xl bg-brand-light px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-brand-dark transition-colors hover:bg-white"
                    >
                        {t('expedition.meeting.button')}
                        <ArrowRight size={17} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
