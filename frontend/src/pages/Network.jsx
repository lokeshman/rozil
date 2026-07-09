import Navbar from '../components/layout/Navbar';

import Footer from '../components/layout/Footer';
import Founder from '../components/sections/Founder';

export default function Network() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-x-hidden flex flex-col justify-between">
        <div className="pt-24 flex-grow">
          <Founder />
        </div>
        <Footer />
      </main>
    </>
  );
}
