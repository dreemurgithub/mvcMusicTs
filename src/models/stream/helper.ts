import * as fs from 'fs/promises'
import { idToMusic } from '../index.helper'
const streamMusic = async (id: string)=>{
    const data = await fs.readFile(idToMusic(id))
    return data
}

export {streamMusic}