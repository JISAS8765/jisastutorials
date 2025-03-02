import About from "@/components/AssignmentHelp/About";
import AssignmentHelp1 from "@/components/AssignmentHelp/AssignmentHelp1";
import CardsSection from "@/components/AssignmentHelp/CardSection";
import Features from "@/components/AssignmentHelp/Features";
import HowWeWork from "@/components/AssignmentHelp/HowWeWork";
import KeyHighlights from "@/components/AssignmentHelp/KeyHighlights";
import ScrollingFlags from "@/components/AssignmentHelp/ScroolingFlags";
import ScrollingUniversities from "@/components/AssignmentHelp/ScroolingUniversity";
import StudentReviews from "@/components/AssignmentHelp/StudentReview";
import SubjectsGrid from "@/components/AssignmentHelp/SubjectGrid";
import WhyJT from "@/components/AssignmentHelp/WhyJT";
import Footer from "@/components/Footer";
import NavBar from "@/components/navbar/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <NavBar />
      <AssignmentHelp1 />
      <CardsSection />
      <Features />
      <SubjectsGrid />
      <ScrollingFlags />
      <KeyHighlights />
      <StudentReviews />
      <ScrollingUniversities />
      <WhyJT />
      <HowWeWork />
      <About />
      <Footer />

    </div>
  );
}
