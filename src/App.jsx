import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <CollectionGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
