export default{
    namespaced: true,
    state:{
        items:[
            {
                url:'/about-us',
                text: 'about us'
            },
            {
                url:'/write-comment',
                text: 'write comment'
            },
            {
                url:'/comments',
                text: 'comments'
            }
        ]
    },
    getters:{
        items(store){
            return store.items;
        }
    }
}