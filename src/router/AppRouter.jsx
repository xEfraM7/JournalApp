import { Routes,Route } from "react-router-dom"

import { AuthRoutes } from "../auth/Routes/AuthRoutes"
import { JournalRoutes } from "../journal/Routes/JournalRoutes"



export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path='/auth/*' element={<AuthRoutes/>}/>

        {/* JournalApp */}
        <Route path='/*' element={<JournalRoutes/>}/>
        
    </Routes>
  )
}
