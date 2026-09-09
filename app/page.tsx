import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import WorksWith from "./components/WorksWith";
import ForWhom from "./components/ForWhom";
import Logotherapy from "./components/Logotherapy";
import VideoSection from "./components/VideoSection";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <WorksWith />
        <ForWhom />
        <Logotherapy />
        <VideoSection />
        <Contacts />
      </main>
    </>
  );
}
