import http from "./http"

class Heuresservices {
    index(token){
        return http.get("/api/v01/web/heures/index",{ headers: { 'Authorization': 'Bearer '+token } })
    }

    store(data, token){
        return http.post("/api/v01/web/heures/store", data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    edit(ref, token){
        return http.get(`/api/v01/web/heures/${ref}/edit`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    show(ref, token){
        return http.get(`/api/v01/web/heures/${ref}/show`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    update(ref, data, token){
        return http.put(`/api/v01/web/heures/${ref}/update`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    
    delete(ref, token){
        return http.delete(`/api/v01/web/heures/${ref}/delete`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

}

export default new Heuresservices()