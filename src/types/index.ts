export interface Trek {
    title: string;
    image: string;
    days: string;
    difficulty: string;
    price: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    avatar: string;
    rating: number;
    socialHandle?: string;
}

export interface NavLink {
    label: string;
    href: string;
}

export interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    category: string;
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

export interface Destination {
    id: number;
    name: string;
    location: string;
    duration: string;
    difficulty: string;
    rating: number;
    price: string;
    image: string;
    slug?: string;
}
