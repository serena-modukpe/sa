import http from "./http"

class Profilsservices {
    index(token){
        return http.get("/api/v01/web/profils/index",{ headers: { 'Authorization': 'Bearer '+token } })
    }

    store(data, token){
        return http.post(`/api/v01/web/profils/store`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    edit(id, token){
        return http.get(`/api/v01/web/profils/${id}/edit`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    show(id, token){
        return http.get(`/api/v01/web/profils/${id}/show`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    update(id, data, token){
        return http.put(`/api/v01/web/profils/${id}/update`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    
    delete(id, token){
        return http.delete(`/api/v01/web/profils/${id}/delete`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

}

export default new Profilsservices()