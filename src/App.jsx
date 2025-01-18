import Table from "./assets/components/Table"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from "./assets/components/Signup"
import Update from "./assets/components/Update"
import Mailer from "./assets/components/MAiler"
import Login from "./assets/components/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/update/:id" element={<Update/>} />
        </Routes>
        <Mailer/>
        <Login/>
      </Router>
    </>

  )
}

export default App