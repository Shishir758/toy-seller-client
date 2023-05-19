import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `Findus Toys | ${title}`;
    }, [title])
}
export default useTitle;