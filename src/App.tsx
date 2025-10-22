import React, { Suspense, lazy } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
const Services = lazy(() => import('./components/Services'));
const Design = lazy(() => import('./components/Design'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const ElectricLine = lazy(() => import('./components/ElectricLine'));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Suspense fallback={null}>
        <ElectricLine position="bottom" />
        <Services />
        <ElectricLine position="center" />
        <Design />
        <ElectricLine position="center" />
        <About />
        <ElectricLine position="center" />
        <Projects />
        <ElectricLine position="center" />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
