import axios from 'axios'

const api = axios.create({
  baseURL: 'https://newsapi.org',
})

export default api