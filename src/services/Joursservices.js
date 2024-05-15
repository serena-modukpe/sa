import http from "./http"

class Joursservices {
    index(token){
        return http.get("/api/v01/web/jours/index",{ headers: { 'Authorization': 'Bearer '+token } })
    }

    store(data, token){
        return http.post("/api/v01/web/jours/store", data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    edit(ref, token){
        return http.get(`/api/v01/web/jours/${ref}/edit`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    show(ref, token){
        return http.get(`/api/v01/web/jours/${ref}/show`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    update(ref, data, token){
        return http.put(`/api/v01/web/jours/${ref}/update`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    
    delete(ref, token){
        return http.delete(`/api/v01/web/jours/${ref}/delete`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

}

export default new Joursservices()