<template>
    <div class="wraper">
        <section class="title">
            <div class="content">
                <div class="row">
                    <h1>Comments</h1>
                </div>
            </div>
        </section>
        <section class="list_2">
            <div class="m-container">
                <div class="row">
                    <div class="list_2_flex">
                        <div  v-for="(item, i) in commentsList"
                              :key="'comment-'+i"
                              class="col-md-6 mrb_pd"
                        >
                            <h3>{{ item.title }}</h3>
                            <p>{{ item.body }}</p>

                            <router-link tag="button"
                                         class="button-green"
                                         :to="'/comment/'+item.id"
                                         
                            >
                                Read more
                            </router-link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="button-linck-text">
                <div class="comment-content">
                    <p>Lorem Ipsum is text of the typesetting industry</p>
                    <button>
                        <span class="point">&#8701</span> <span>Back to Comments</span>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'; 

export default {
    created(){
        
    },
    computed:{
        ...mapGetters('comments', {
            commentsList: 'items'
        })
    },

}
</script>