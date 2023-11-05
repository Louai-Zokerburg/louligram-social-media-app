import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    const isAuthonticated = false;

   

    if (isAuthonticated)
        return <Navigate to='/' />

    return (
        <>
            <section className=" flex flex-1 justify-center flex-col py-10 items-center">
                <Outlet />
            </section>

            <img src="/assets/images/side-img.svg" alt="side img" className="h-screen w-1/2 hidden xl:block object-cover bg-no-repeat" />
        </>
    )
}

export default AuthLayout
