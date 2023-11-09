import { playlistRepository } from "@/config/database/typeorm"
import { PlayList } from "@/config/database/typeorm/playlist"
export const addNewPlaylistHelper = async({playlistName, songList, image, userId} : {playlistName : string, songList : string[], image : string, userId : number})=>{
    const newPlaylist = new PlayList()
    newPlaylist.image = image
    newPlaylist.songList = songList
    newPlaylist.userId = userId
    newPlaylist.playlistName = playlistName
    const data = await playlistRepository.save(newPlaylist)
    return {success: true, data}
}

export const readPlaylistByIdHelper =async (id:number) => {
    const playlist = await playlistRepository.findOne({where: {id}})
    return playlist
}