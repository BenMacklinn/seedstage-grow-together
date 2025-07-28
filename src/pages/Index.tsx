import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Timeline from "@/components/Timeline";
import FlowingMenu from "@/components/FlowingMenu";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Globe, Workflow, Brain, Eye } from 'lucide-react';

const demoItems = [
  { 
    link: '#', 
    text: 'Website and UI Building', 
    image: 'https://picsum.photos/600/400?random=1', 
    icon: Globe,
    software: [
      { name: 'Loveable', logo: './ai-tool-logos/lovable.jpg' },
      { name: 'Figma', logo: './ai-tool-logos/figma.jpg' },
      { name: 'Cursor', logo: './ai-tool-logos/cursor.jpg' }
    ]
  },
  { 
    link: '#', 
    text: 'Automation & Workflows', 
    image: 'https://picsum.photos/600/400?random=2', 
    icon: Workflow,
    software: [
      { name: 'n8n', logo: './ai-tool-logos/n8n.jpg' },
      { name: 'Zapier', logo: './ai-tool-logos/zapier.jpg' },
      { name: 'Twilio', logo: './ai-tool-logos/twilio.jpg' }
    ]
  },
  { 
    link: '#', 
    text: 'Applied LLMs', 
    image: 'https://picsum.photos/600/400?random=3', 
    icon: Brain,
    software: [
      { name: 'ChatGPT', logo: './ai-tool-logos/chatGPT.jpg' },
      { name: 'Perplexity', logo: './ai-tool-logos/perplexity.jpg' },
      { name: 'NotebookLM', logo: './ai-tool-logos/notebooklm.jpg' },
      { name: 'Cursor', logo: './ai-tool-logos/cursor.jpg' }
    ]
  },
  { 
    link: '#', 
    text: 'Voice & Vision', 
    image: 'https://picsum.photos/600/400?random=4', 
    icon: Eye,
    software: [
      { name: 'ElevenLabs', logo: './ai-tool-logos/elevenlabs.jpg' },
      { name: 'YOLO', logo: './ai-tool-logos/yolo.jpg' },
      { name: 'OpenCV', logo: './ai-tool-logos/openCV.jpg' }
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ValueProposition />
        <div id="timeline">
          <Timeline />
        </div>
        <section id="tool-catalog" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                AI Tool <span className="bg-gradient-growth bg-clip-text text-transparent">Catalog</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Learn about the different AI tools that can transform ideas into reality, no technical experience required.
              </p>
            </div>
            <div style={{ height: '600px', position: 'relative' }}>
              <FlowingMenu items={demoItems} />
            </div>
          </div>
        </section>
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
