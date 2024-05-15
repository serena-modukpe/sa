import http from "./http"

class Conseils_medicauxservices {
    index(token){
        return http.get("/api/v01/web/conseils_medicaux/index",{ headers: { 'Authorization': 'Bearer '+token } })
    }

    store(data, token){
        return http.post("/api/v01/web/conseils_medicaux/store", data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    edit(ref, token){
        return http.get(`/api/v01/web/conseils_medicaux/${ref}/edit`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    show(ref, token){
        return http.get(`/api/v01/web/conseils_medicaux/${ref}/show`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    update(ref, data, token){
        return http.put(`/api/v01/web/conseils_medicaux/${ref}/update`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    
    delete(ref, token){
        return http.delete(`/api/v01/web/conseils_medicaux/${ref}/delete`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

}

export default new Conseils_medicauxservices()