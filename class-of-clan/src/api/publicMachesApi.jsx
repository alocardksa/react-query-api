import axios from 'axios'

export const fetchPublicMatches = async () => {
  const { data } = await axios.get('https://api.opendota.com/api/publicMatches')
  return data
}
