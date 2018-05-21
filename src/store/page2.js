import axios from 'axios';

export default {
    state: {
        tableData: []
    },
    mutations: {
        getTableData(state,tableData) {
            state.tableData = tableData;
        }
    },
    actions: {
        getTableData(context) {
            axios.post('http://192.168.0.107:3000/listdata', {
                name: "renyimantianfei"
            }).then(function (res) {
                context.commit('getTableData',res.data)
            });
        }
    }
}