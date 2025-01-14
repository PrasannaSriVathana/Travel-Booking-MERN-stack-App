import {Link} from "react-router-dom";
import {useState} from "react";
import axios from "axios"

export default function LoginPage(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
            await axios.post("/login",{email,password}, {withCredentials: true});
            alert("Login successful")
        }
        catch(e){
            alert("Login failed")
        }
    }
    return(
        <div className="mt=1 grow flex items-center justify-around">
            <div className="-mb-26">
                <h1 className="text-xl text-center">LOGIN</h1>
                <form className=" max-w-lg mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email"
                           placeholder="enter your email"
                           value={email}
                           onChange={ev=>setEmail(ev.target.value)}/>
                    <input type="password"
                           placeholder="password"
                           value={password}
                           onChange={ev=>setPassword(ev.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?<Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}