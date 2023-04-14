import axios from "axios"

export const GetImg = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/search?limit=25`)
      return response.data
    } catch(error){
      console.log(error.response)
    } 
  }