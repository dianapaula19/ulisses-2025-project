import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  useEffect(() => {
    document.title = "OPERATION: N.U.R.D.L.E.S";
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [day, setDay] = useState(1);
  const totalDays = 62;
  const duration = 8; // seconds
  const secondsPerDay = duration / totalDays;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDay = parseInt(e.target.value, 10);
    setDay(selectedDay);
    if (videoRef.current) {
      videoRef.current.currentTime = (selectedDay - 1) * secondsPerDay;
    }
  };

  return (
    <div className="bg-black text-green-400 font-mono snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Slide 1 – Title */}
      <section className="h-screen snap-start flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl tracking-widest"
        >
          OPERATION: N.U.R.D.L.E.S
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-xl md:text-2xl max-w-2xl"
        >
          Navigating Uncharted Regions for Dispersed Litter and Environmental Surveillance
        </motion.p>
      </section>

      {/* Slide 2 – Incident Summary */}
      <section className="h-screen snap-start flex flex-col justify-center px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">The Incident</h2>
        <p>
          On December 1, 2025, the cargo vessel <strong>MV Kraken</strong> was en route from the Port of San Antonio in Chile to the Port of Melbourne, Australia, carrying <strong>740 tons of low-density polyethylene (LDPE) nurdles</strong> manufactured by Chilean-based Polymore, LLC. These plastic pellets were destined for Melro Melbourne Rotomould, a water tank manufacturer.
        </p>
        <p className="mt-4">
          To avoid a storm system in the Southern Ocean, the MV Kraken was rerouted through the Ross Sea. There, a catastrophic container failure led to the complete loss of its cargo into the ocean.
        </p>
      </section>

      {/* Slide 3 – Location */}
      <section className="h-screen snap-start flex flex-col justify-center items-center px-10 text-center">
        <h2 className="text-3xl mb-4">Spill Location</h2>
        <p className="max-w-2xl mb-6">
          The spill occurred at:<br />
          📍 Latitude: -72.97<br />
          📍 Longitude: 171.54<br />
          This site lies within the Antarctic Polar Front — a fragile, biodiverse marine zone.
        </p>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=185.289063%2C-77.275843%2C192.289063%2C-72.275843&layer=mapnik&marker=-74.775843%2C171.54"
          className="w-full max-w-4xl h-[400px] border-2 border-green-500 rounded-xl"
          title="Spill Location Map"
        />
        <a
          href="https://www.openstreetmap.org/?mlat=-72.97&mlon=171.54#map=4/-72.97/171.54"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 underline text-green-300"
        >
          View larger map
        </a>
      </section>

      {/* Slide 4 – Environmental Threat */}
      <section className="h-screen snap-start flex flex-col justify-center px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">The Threat</h2>
        <p>
          Now two months later, the nurdles — light and buoyant — have likely spread widely across the Southern Ocean. There is a serious risk that they’ve entered vulnerable ecosystems, ice zones, and Antarctic food chains.
        </p>
        <p className="mt-4">
          These plastic particles pose a direct threat to marine life: from plankton and fish to seabirds and seals.
        </p>
      </section>

      {/* Slide 5 – Our Response */}
      <section className="h-screen snap-start flex flex-col justify-center px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl mb-4">Our Response</h2>
        <p>
          Our team, <strong>CYCLOPS</strong>, has deployed to <strong>Scott Base</strong>, the largest and most advanced research base in Antarctica. From this strategic base, we are preparing to investigate, monitor, and respond to the challenges ahead.
        </p>
      </section>

      {/* Slide 6 – Simulation */}
      <section className="h-screen snap-start flex flex-col justify-center items-center px-10 text-center">
        <h2 className="text-3xl mb-4">Nurdle Drift Simulation</h2>
        <video
          ref={videoRef}
          src="/nurdle_spill.mp4"
          className="w-full aspect-video max-w-5xl max-h-[90vh] border-2 border-green-500 rounded-xl mb-4"
          muted
          playsInline
        />
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label htmlFor="day-input" className="text-sm">Day:</label>
              <input
                id="day-input"
                type="number"
                min="1"
                max={totalDays}
                value={day}
                onChange={handleSliderChange}
                className="w-20 p-1 rounded bg-gray-800 text-white border border-gray-600"
              />
              <span className="text-sm">of {totalDays}</span>
            </div>
            <input
              id="day-slider"
              type="range"
              min="1"
              max={totalDays}
              value={day}
              onChange={handleSliderChange}
              className="w-full max-w-lg accent-green-400"
            />
        </div>
      </section>

      {/* Slide 7 – Join the Mission */}
      <section className="h-screen snap-start flex flex-col justify-center px-10 text-center">
        <h2 className="text-3xl mb-4">Join the Mission</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Spread awareness, support clean-up efforts, or partner with the research team.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:ulisses.cyclop.25@gmail.com"
            className="bg-green-600 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-xl inline-block cursor-pointer"
          >
            Contact Us
          </a>
          <a
            href="https://www.antarcticfund.org/checkout/donate?donatePageId=5566ea04e4b0361ad47a976b"
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-2 px-4 rounded-xl inline-block cursor-pointer"
          >
            Donate
          </a>
        </div>
      </section>
    </div>
  );
}
