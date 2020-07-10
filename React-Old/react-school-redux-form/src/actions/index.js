import axios from 'axios'

export const INITIAL_FETCH = 'INITIAL_FETCH'
export const SEND_SERVER = 'SEND_SERVER'

export function getInitialFetch() {
  return {
    type: INITIAL_FETCH,
    payload: { name: 'Emerson Oliveira' }
  }
}

export function sendServer(data) {
  const request = axios.post('http://localhost:3000/', { data })
  return{
    type: SEND_SERVER,
    payload: request
  }
}