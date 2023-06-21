import LoginLogo from "./LoginLogo";

export default function Login() {
    return <>
        <div className="flex flex-col h-screen">
            <header>
                <LoginLogo />
            </header>
            <main className="flex flex-col flex-grow">
                    <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                        <div className="font-bold text-2xl">Welcome!</div>
                        <div className="">Sign in to continue</div>
                    </div>
                    <div className="flex-1">
                        Inputs
                    </div>
                    <div className="flex-1">
                        Buttons
                    </div>
                    <div className="flex-1">
                        Sign Up
                    </div>
            </main>
        </div>
    </>

}