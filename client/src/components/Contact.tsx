import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Form submitted:', formData);
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Github, url: "https://github.com/nebaware", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/nebiyu-tsegaye1/", label: "LinkedIn" },
    { icon: Twitter, url: "https://twitter.com", label: "Twitter" },
    { icon: Mail, url: "mailto:nebaware@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl w-full">
        <div
          className={`transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <p className="text-primary font-mono text-sm mb-4" data-testid="text-section-number">
              03. What's Next?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="heading-contact">
              Get In Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto" data-testid="text-contact-intro">
              I'm currently looking for new opportunities and my inbox is always open.
              Whether you have a question or just want to say hi, I'll try my best to
              get back to you!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                data-testid="input-name"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                data-testid="input-email"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                data-testid="input-message"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="px-12"
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="flex justify-center gap-6 mt-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
                onClick={(e) => {
                  e.preventDefault();
                  console.log('Navigate to:', link.url);
                }}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
