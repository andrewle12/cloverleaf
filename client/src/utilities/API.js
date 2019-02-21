import axios from "axios";

export default {
    getYardSales: function() {
        return axios.get("/api/posts");
    },
    saveYardSale: function(data) {
        return axios.post("/api/posts", data);
    }
}