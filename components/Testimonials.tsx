import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
  {
    quote:
      "Fully Digital Agency exceeded our expectations. They created a sleek, modern website that perfectly represents our brand. The process was smooth, communication was clear, and the final result speaks for itself!",
    name: "Palak Jain",
    designation: "R-Tech Solutions",
    rating: 5,
    src: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1750686182/nextjs-gallery/qhm6bsmngxu7hksrjpmn.jpg",
  },
  {
    quote:
      "Our website now looks stunning and works flawlessly across all devices. Fully Digital Agency made everything easy for us — from design to going live. We’ve seen a noticeable increase in online inquiries since the launch!",
    name: "Akash Raghuwanshi",
    designation: "CloudScale",
    rating: 4,
    src: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1750686172/nextjs-gallery/njlwb6rrmk9gastejwdg.jpg",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Namrata Solanki",
    designation: "Blossom Beauty Care",
    rating: 4,
    src: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1750686148/nextjs-gallery/vmd2f6fxvmm86js1jot2.jpg",
  },
  {
    quote:
      "We needed a fast-loading, mobile-friendly website, and Fully Digital Agency delivered just that. Their creative inputs and timely updates were impressive. We’re now proud to share our website with customers!",
    name: "Mohit Gurjar",
    designation: "Yatra Cabs",
    rating: 5,
    src: "https://res.cloudinary.com/dnhtqoroy/image/upload/v1750686164/nextjs-gallery/skkwpar5hlhmpkdwjgs5.jpg",
  },
  
];

  return <AnimatedTestimonials autoplay={true} testimonials={testimonials} />;
}
