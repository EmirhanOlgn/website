import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Contributions } from "@/components/sections/contributions";
import { StackSection } from "@/components/sections/stack-section";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="space-y-24 pb-8">
      <Hero />
      <SelectedWork />
      <Contributions />
      <StackSection />
      <Contact />
    </div>
  );
}
