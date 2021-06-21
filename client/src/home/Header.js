import {Link} from 'react-router-dom'
import Sidebar from '../components/Student/Sidebar'

const Hero=()=>{
    return(
<header class="text-gray-400 bg-gray-900 body-font" style={{ margin: "15px 0px" }}>
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" class="flex title-font font-medium items-center text-white mb-4 md:mb-0 hover:text-white" style={{ cursor: "pointer" }} to="/">
            
            <span class="ml-3 text-xl " >Edu<span class="text-blue-400">Tracker</span></span>
        </Link>
        <nav class="md:ml-auto flex flex-wrap items-center text-white justify-center ">
            <Link to="/login" class="mr-5 hover:text-blue-400 focus:outline-none" style={{ cursor: "pointer" }}>Login </Link>
            <Link to="/signup" class="mr-5 hover:text-blue-400 focus:outline-none" style={{ cursor: "pointer" }}>SignUp </Link>
            

           

        </nav>

    </div>
</header>
    );
}
export default Hero;