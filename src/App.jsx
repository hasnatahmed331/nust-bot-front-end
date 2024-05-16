import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import { Toaster } from "@/components/ui/sonner"


import Chat from "@/pages/Chat"
import Chat2 from "@/pages/Chat2"
import Admin from "@/pages/Admin"
import Test from "@/pages/Test"
import Test2 from "@/pages/Test2"
import NotFound from '@/pages/NotFound';

function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route exact path="/"         element={<>Hey</>} />
          <Route path="/chat"           element={<Chat></Chat>} />
          <Route path="/chatadvanced"   element={<Chat2></Chat2>} />
          <Route path="/admin"          element={<Admin></Admin>} />
          <Route path="/test"           element={<Test></Test>} />
          <Route path="/test2"          element={<Test2></Test2>} />
          <Route path="*"               element={<NotFound></NotFound>} />     
      </Routes>
    </Router>
    <Toaster />
    </>
  );
}

export default App
