import Table from "./assets/components/Table"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Signup from "./assets/components/Signup"
import Update from "./assets/components/Update"
import Mailer from "./assets/components/MAiler"
import Login from "./assets/components/Login"
import Images from "./assets/components/Images"
import { ToastContainer, Bounce } from "react-toastify"

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Table />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
        <Mailer />
        <Login/>
        <Images/>
      </Router>
    </>

  )
}

export default App