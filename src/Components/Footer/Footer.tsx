import { getYear } from '../../Utilities/getDates.js';

const Footer = () => {
    return (
        <footer className="footer p-20 bg-brandGray text-white flex items-center justify-center">
            &copy; {getYear()} || Dennis Kim
        </footer>
    )
}

export default Footer