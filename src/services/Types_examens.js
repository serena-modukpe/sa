import http from "./http"

class Types_examensservices {
    index(token){
        return http.get("/api/v01/web/types_examens/index",{ headers: { 'Authorization': 'Bearer '+token } })
    }

    store(data, token){
        return http.post("/api/v01/web/types_examens/store", data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    edit(ref, token){
        return http.get(`/api/v01/web/types_examens/${ref}/edit`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    show(ref, token){
        return http.get(`/api/v01/web/types_examens/${ref}/show`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

    update(ref, data, token){
        return http.put(`/api/v01/web/types_examens/${ref}/update`, data,{ headers: { 'Authorization': 'Bearer '+token } })
    }
    
    delete(ref, token){
        return http.delete(`/api/v01/web/types_examens/${ref}/delete`,{ headers: { 'Authorization': 'Bearer '+token } })
    }

}

export default new Types_examensservices()