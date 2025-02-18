import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CTIPage from './components/CTIPage';
import PcapTutorial from './components/PCAP';
import DocumentParsingTutorial from './components/DocumentParsingTutorial';
import GenAITutorial from './components/GenAITutorial';
import RAGTutorial from './components/RAGTutorial';
import PromptEngineeringTutorial from './components/PromptEngineeringTutorial';
import SplunkAI from './components/SplunkAI';
import AIHub from './components/AIHub';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AI-Hub" element={<AIHub />} />
        <Route path="/modules/cti" element={<CTIPage />} />
        <Route path="/modules/pcap" element={<PcapTutorial />} />
        <Route path="/modules/doc-parsing" element={<DocumentParsingTutorial />} />
        <Route path="/modules/rag" element={<RAGTutorial />} />
        <Route path="/modules/gen-ai" element={<GenAITutorial />} />
        <Route path="/modules/prompt-engineering" element={<PromptEngineeringTutorial />} />
        <Route path="/modules/splunk-ai" element={<SplunkAI />} />
      </Routes>
    </Router>
  );
}

export default App;
