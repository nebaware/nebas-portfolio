import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import codeEditor from "@assets/generated_images/Colorful_code_editor_animation_21c47390.png";
import terminal from "@assets/generated_images/Terminal_hacker_aesthetic_e346965e.png";
import webDev from "@assets/generated_images/Web_development_workspace_63d788ba.png";
import aiNetwork from "@assets/generated_images/AI_neural_network_visualization_71d5a57e.png";

const slides = [
  {
    image: codeEditor,
    alt: "Code Editor with Syntax Highlighting",
    caption: "Clean, Modern Code",
  },
  {
    image: terminal,
    alt: "Terminal Command Line",
    caption: "Terminal Mastery",
  },
  {
    image: webDev,
    alt: "Web Development Workspace",
    caption: "Responsive Design",
  },
  {
    image: aiNetwork,
    alt: "AI & Data Visualization",
    caption: "Data-Driven Solutions",
  },
];

export default function CodeSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      <div className="relative aspect-video overflow-hidden rounded-md border-2 border-primary/30 shadow-xl shadow-primary/10">
        <div
          className="flex transition-transform duration-700 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full h-full relative">
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-2xl font-bold text-primary font-mono drop-shadow-lg" data-testid={`text-slide-caption-${index}`}>
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={goToPrevious}
          data-testid="button-slider-previous"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={goToNext}
          data-testid="button-slider-next"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`button-slide-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
