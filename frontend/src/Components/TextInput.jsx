
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function TextInput({ icon, placeholder, autoFocus = false }) {
    return <div className="relative flex justify-center">
    <FontAwesomeIcon icon={icon} className="absolute left-20 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input placeholder={placeholder} type="text" className="pl-16 pt-4 pb-4 w-3/4 ring-2 focus:ring-primary rounded-3xl ring-secondary focus:outline-none" autoFocus={autoFocus} />
    </div>
}