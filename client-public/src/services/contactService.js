import api from './axios'

export const contactService = {
  list: (params = {}) => api.get('/contact', { params }).then((res) => res.data.data),
  updateStatus: (id, status) => api.patch(`/contact/${id}/status`, { status }).then((res) => res.data.data.item || res.data.data.contact),
}
