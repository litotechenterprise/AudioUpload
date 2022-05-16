

export function fetcher(url){
    fetch(url).then((res) => res.json())
}