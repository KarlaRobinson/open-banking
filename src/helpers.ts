import axios from 'axios'

export const createHttpBackendServer = () =>
  axios.create({ baseURL: `${process.env.REACT_APP_OPEN_BANKING_SERVER_URL}/` })
