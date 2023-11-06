import { Routes, Route } from 'react-router-dom'

import SigninForm from './_auth/froms/SigninForm'
import SignupForm from './_auth/froms/SignupForm'


import './globals.css'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { Toaster } from './components/ui/toaster'

const App = () => {
    return (
        <>
            <main className="flex h-screen">

                <Routes>
                    <Route element={<AuthLayout />}>
                        <Route path='/sign-in' element={<SigninForm />} />
                        <Route path='/sign-up' element={<SignupForm />} />
                    </Route>

                    <Route element={<RootLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </main>
            <Toaster />
        </>
    )
}

export default App
