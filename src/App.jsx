import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E7F0FA' }}>
      <Header />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;