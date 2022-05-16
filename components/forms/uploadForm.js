import { useState } from "react";
import { PostNewAudio } from "../../helper/api.utils";
export default function UploadForm(props) {
    const [formStatus, setFormStatus] = useState(false);
    const [query, setQuery] = useState({name: "", file: ""});

    const handleChange = () => (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuery((prevState) => ({...prevState,[name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       const res  = await PostNewAudio(query);
    }


    const handleFileChange = () => (e) => {
        setQuery((prevState) => ({...prevState,files:e.target.files[0]}))
    }
    return (
       <div>
           <h2>Select Audio file to upload</h2>
           <form
            acceptCharset="UTF-8"
            method="POST"
            encType="multipart/form-data"
            id="ajaxForm"
            onSubmit={handleSubmit}
           >
               <div className="">
                   <label className="">Enter Username</label>
                   <input 
                        type="text"
                        className=""
                        id="username"
                        placeholder="Enter your name"
                        required
                        name="name"
                        value={query.name}
                        onChange={handleChange()}
                   />
               </div>

               <div className="">
                    <label className="">Upload your CV:</label>
                    <input name="file" type="file" onChange={handleFileChange()}/>
                </div>
                <button type="submit" className="">Submit</button>
           </form>
       </div>
    )
}