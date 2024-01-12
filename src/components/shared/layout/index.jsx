import {Link} from "react-router-dom"
import Logo from "../logo"
const Layout = ({children})=>{
    const menus = [
        {
            path: "/",
            label: "Home"
        },
        {
            path: "/product",
            label: "Product"
        },
        {
            path: "/faculty",
            label: "Faculty"
        },
        {
            path: "/login",
            label: "Login"
        }
    ]

    const socials = [
        {
            icon:"fa fa-facebook text-[#BCC8DF]",
            path:"#"
        },
        {
            icon:"fa fa-twitter text-[#3AABDC]",
            path:"#"
        },
        {
            icon:"fa fa-instagram text-[#EBE6EA]",
            path:"#"
        },
        {
            icon:"fa fa-linkedin text-[#207EB4]",
            path:"#"
        }

    ]

    const Companies = [
        {
           label: "About us",
           path: "#"
        },
        {
            label: "Contact us",
            path: "#"
         },
         {
            label: "News and Blogs",
            path: "#"
         },
         {
            label: "Library",
            path: "#"
         },
         {
            label: "Career",
            path: "#"
         }
    ]

    const Comunities = [
        {
           label: "Documentation",
           path: "#"
        },
        {
            label: "Faq",
            path: "#"
         },
         {
            label: "Forum",
            path: "#"
         },
         {
            label: "Sitemap",
            path: "#"
         }
    ]

    const Teachings = [
        {
           label: "Become a teacher",
           path: "#"
        },
        {
            label: "How to guide",
            path: "#"
         },
         {
            label: "Term & Conditions",
            path: "#"
         }
    ]

    return (
        <div>
            <nav className="bg-white shadow-lg flex justify-between px-[40px] items-center">
                <Logo />
                <ul className="flex gap-3 font-semibold">
                    {
                        menus.map((item,index)=>(
                            <li key={index}>
                                <Link to={item.path}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <button className="rounded-full">
                    <img src="./images/avatar.jpg" alt="avatar" className="rounded-full w-[50px]"/>
                </button>
            </nav>
            <section className="p-20">
                {children}
            </section>
            <footer className="flex justify-around bg-white shadow-inner px-[5%]">
                <div className="flex flex-col gap-2">
                    <Logo tagline/>
                    <div className="flex gap-6 font-semibold">
                        {
                            socials.map((social,index)=>(
                                <Link to={social.path} key={index} className="text-xl font-semibold">
                                    <i className={social.icon}></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-6 py-[16px]">
                    <h1 className="text-xl font-semibold">Company</h1>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        {
                            Companies.map((company,index)=>(
                                <li className="hover:text-blue-600">
                                    <Link to={company.path}>{company.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-6 py-[16px]">
                    <h1 className="text-xl font-semibold">Community</h1>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        {
                            Comunities.map((community,index)=>(
                                <li className="hover:text-blue-600">
                                    <Link to={community.path}>{community.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-6 py-[16px]">
                    <h1 className="text-xl font-semibold">Teaching</h1>
                    <ul className="flex flex-col gap-2 text-gray-500">
                        {
                            Teachings.map((teaching,index)=>(
                                <li className="hover:text-blue-600">
                                    <Link to={teaching.path}>{teaching.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex flex-col gap-6 py-[16px]">
                    <h1 className="text-xl font-semibold">Contact</h1>
                    <div className="flex flex-col gap-3 text-gray-500">
                        <span>Toll free:+1234 568 963</span>
                        <span>(9:AM to 8:PM IST)</span>
                        <span>Email:example@gmail.com</span>
                    </div>
                    <div className="flex gap-3">
                        <Link>
                            <img src="./images/google-play.svg" alt="google play" className="w-[150px]" />
                        </Link>
                        <Link>
                            <img src="./images/app-store.svg" alt="app store" className="w-[150px]" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout