import axios from '@/plugins/axios'

export const ApplianceService = {
  actions: {
    storeAppliances(body) {
      return axios.post('/api/agenda/criarAgenda', body)
    },
    fetchAppliances(params) {
      return axios.get('/api/agenda', {
        params: params,
      })
    },
    updateAppliances(body) {
      return axios.put(`/agenda/editarRegistro/`, body)
    },
    deleteApplianceId(id) {
      return axios.delete(`/agenda/removerRegistro//${id}`)
    },
  }
}
