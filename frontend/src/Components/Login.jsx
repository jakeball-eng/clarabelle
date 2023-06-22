import LoginLogo from "./LoginLogo";
import TextInput from "./TextInput";
import Button from "./Button";
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
                    <TextInput placeholder="Username" icon={faUser} autoFocus={true} />
                    <TextInput placeholder="Password" icon={faLock} />
                    <div className="text-primary text-xs">
                        <div>Forgot Password?</div>
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-center items-center space-y-4">
                    <div className="inline-block">
                        <div className="flex mb-4">
                            <Button text="Sign In" type="primary" className="flex-grow w-0" />
                        </div>
                        <Button text="Continue as Guest" type="secondary" />
                    </div>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div>New User?</div>
                    <a className="text-primary ml-2">Sign Up</a>
                </div>
            </div>
        </div>
    </>

}