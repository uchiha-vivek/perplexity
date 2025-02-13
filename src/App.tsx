import { Nav } from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Modal } from './components/Modal';
import { useEffect, useState } from 'react';
import React from 'react';
import { Search } from './components/Search';
import { Result } from './pages/Result';
import { Library } from './pages/Library';

export const AppContext = React.createContext<any>({});

const SearchModal = () => {
  return (
    <div className="p-4 w-full h-full">
      <Search />
    </div>
  );
};

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      // ctrl + I
      if (e.ctrlKey && e.key == "i") {
        setShowModal(true);
      }
    });

    return () => {
      window.removeEventListener("keydown", () => {});
    };
  }, []);

  return (
    <AppContext.Provider value={{ showModal, setShowModal }}>
      <BrowserRouter>
        <section className="flex h-screen w-screen">
          <Modal title="" isOpen={showModal} closeModal={() => setShowModal(false)}>
            <SearchModal />
          </Modal>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/result" element={<Result />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </section>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
