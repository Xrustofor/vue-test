import Vue from 'vue'

export default{
    namespaced: true,
    state: {
        items:[],
        buttonStatus: false,
    },
    getters:{
        items(state){
            return state.items;
        },

        itemsMap(state){
            let itemsMap = {};
            for(let i = 0; i < state.items.length; i++){
                let commet = state.items[i];
                itemsMap[commet.id] = commet;
            }
            return itemsMap;
        },

        item: (state, getters) => (id) => {
            return getters.itemsMap[id];
        },
        buttonStatus(state){
           return state.buttonStatus;
        }
    },
    mutations: {
        loadComments(state, data){
            if(state.items.length === 0){
                state.items = data
            }else{
                state.items = [];
                state.items = data;
            }
        },
        buttonStatus(state, payload){
            state.buttonStatus = payload
        }
    },
    actions: {
        loadComments(store){
            Vue.http.get('comments').
                then(response => response.json()).
                then(data => {
                    store.commit('loadComments', data);
                });
        },
        buttonStatus(store, payload){
            store.commit('buttonStatus', payload);
        },
        sendComment(store, addComment){

            Vue.http.post('https://5cbef81d06a6810014c66193.mockapi.io/api/comments', addComment, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).
            then(function (response) {
                store.commit('buttonStatus', false);
            },function (response) {
               
            });
        },
    },
    
}