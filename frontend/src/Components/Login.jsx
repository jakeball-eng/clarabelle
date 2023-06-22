import LoginLogo from "./LoginLogo";
import TextInput from "./TextInput";
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons'

export default function Login() {
    return <>
        <div className="flex flex-col h-screen">
            <div>
                <LoginLogo />
            </div>
            <div className="flex flex-col flex-grow">
                    <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                        <div className="font-bold text-2xl">Welcome!</div>
                        <div className="">Sign in to continue</div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                        <TextInput placeholder="Username" icon={faUser} autoFocus="true"/>
                        <TextInput placeholder="Password" icon={faLock}/>
                    </div>
                    <div className="flex-1">
                        Buttons
                    </div>
                    <div className="flex-1">
                        Sign Up
                    </div>
            </div>
        </div>
    </>

}