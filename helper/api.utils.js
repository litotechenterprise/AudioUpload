import axios from "axios";

export function fetcher(url){
    fetch(url).then((res) => res.json())
}


export async function PostNewAudio(data){
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
    });

    axios.post("/api/media", formData,{ headers:{Accept: "application/json"}})
}