import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
export const Header = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));

        if(darkMode){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])
  return (
    <header>      
        <nav class="bg-white dark:bg-gray-900">
            <div class="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                <Link to="/" class="flex items-center">
                    <img src={Logo} class="mr-3 h-10" alt="CodeBook Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CodeBook</span>
                </Link>
                <div class="flex items-center relative">
                    <span onClick={(() => setDarkMode(!darkMode))} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" class="text-gray-700 dark:text-white mr-5">
                    <span class="text-2xl bi bi-cart-fill relative">
                        <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                    </Link>
                    <span class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                </div>
            </div>
        </nav>
    </header>
  )
}