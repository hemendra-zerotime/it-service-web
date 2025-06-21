import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
      "Fully Digital Agency exceeded our expectations. They created a sleek, modern website that perfectly represents our brand. The process was smooth, communication was clear, and the final result speaks for itself!",
      name: "Sarah Chen",
      designation: "R-Tech Solutions",
      rating: 5,
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
"Our website now looks stunning and works flawlessly across all devices. Fully Digital Agency made everything easy for us — from design to going live. We’ve seen a noticeable increase in online inquiries since the launch!",
      name: "Michael Rodriguez",
      designation: "Blossom Beauty Care",
      rating: 4,
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      rating:4,
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
"We needed a fast-loading, mobile-friendly website, and Fully Digital Agency delivered just that. Their creative inputs and timely updates were impressive. We’re now proud to share our website with customers!",
      name: "James Kim",
      designation: "Yatra Cabs",
      rating: 5,
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
      "A big thank you to the team at Fully Digital Agency! They turned our ideas into a beautiful and functional website. Their attention to detail and commitment to quality made all the difference.",
      name: "Lisa Thompson",
      designation: "CraftNest Interiors",
      rating: 4,
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials autoplay={true} testimonials={testimonials} />;
}
