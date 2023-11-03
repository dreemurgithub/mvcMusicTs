import { musicSearch } from "./helper"
const musicYoutubeSearch = async(search: string)=>{
    const data = await musicSearch(search)
    return data
}

export {musicYoutubeSearch}