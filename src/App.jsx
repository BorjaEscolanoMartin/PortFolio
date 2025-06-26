import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
      <Header />
      <main className="flex-grow pt-16 bg-black">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
