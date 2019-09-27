import Vue from 'vue'

export default{
    namespaced: true,

    state: {
        comment:{
            id: null,
            created_at: null,
            title: "",
            body: ""
        },
        title:{
            pattern: /^[a-zA-Zа-яА-ЯіI' '-]{2,50}$/,
            status: true
        },
        body:{
            pattern: /.+/,
            status: true
        },
        class:{
            ok: 'mdi-check',
            error: 'mdi-cancel'
        },
        buttonStatus: true,
        delayButton: false,
        updateStatus: false,
    },

    getters:{
        item(state){
            return state.comment;
        },
        id(state){
            return state.comment.id;
        },

        validTitle(state){
            return state.title;
        },
        validBody(state){
            return state.body
        },
        class(state){
            return state.class
        },
        statusTitle(state){
            return state.title.status
        },
        statusBody(state){
            return state.body.status
        },
        delayButton(state){
            return state.delayButton;
        },
        updateStatus(state){
            return state.updateStatus;
        }
    },
    mutations:{
        loadComment(state, payload){
            state.comment = payload;
        },
        changeStatusTitle(state, payload){
            state.title.status = payload;
        },
        changeStatusBody(state, payload){
            state.body.status = payload;
        },
        pushTitle(state, payload){
            state.comment.title = payload
        },
        pushBody(state, payload){
            state.comment.body = payload
        },
        id(state){
            return state.comment.id;
        },
        comment(state){
            return state.comment;
        },
        createdAt(state, payload){
            state.comment.created_at = payload
        },
        buttonStatus(state, payload){
            state.status = payload
        },
        delayButton(state, payload){
            state.delayButton = payload
        },
        updateStatus(state, payload){
            state.updateStatus = payload
        }
    },
    actions:{
        loadComment(store, payload){
            let src = 'comments/' + payload;

            Vue.http.get(src).
                then(response => response.json()).
                then(data => {
                    store.commit('loadComment', data);
                });
        },
        delayButton(store, payload){
            store.commit('delayButton', payload)
        },

        
        deleteComment(store, id){
            let src = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments/'+id;

            Vue.http.delete(src).
            then(function (response) {
                store.commit('delayButton', true);
            },function (response) {
                // Error
            });

        },

        createdAt(store, payload){
            store.commit('createdAt', payload);
        },

        UpdateComment(store, obj){
            let id = obj.id;
            let src = 'https://5cbef81d06a6810014c66193.mockapi.io/api/comments/'+id;

            Vue.http.put(src, obj, {
                headers:{
                    'Content-Type': 'application/json'
                }
            }).
            then(function (response) {
                store.commit('updateStatus', false);
            },function (response) {
                // Error
            });
        },

        updateStatus(store, payload){
            store.commit('updateStatus', payload);
        },

        changeStatusTitle(store, payload){
            store.commit('changeStatusTitle', payload);
        },
        changeStatusBody(store, payload){
           store.commit('changeStatusBody', payload);
        },
        pushTitle(store, payload){
            store.commit('pushTitle', payload);
        },
        pushBody(store, payload){
            store.commit('pushBody', payload);
        }
    }
}