import axios from "axios"
import { BASE_URL } from "../../constants"

export const GetImageCats = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search?limit=2`)
      return response.data
    } catch(error){
      console.log(error.response)
    } 
  }