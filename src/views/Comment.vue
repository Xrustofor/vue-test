<template>
    <div class="wraper">
        <section>
            <div class="comment-content">
                <div class="row">
                    <div class="linck-wrap">
                        <span>&#8701</span>
                        <router-link :to="'/comments'"
                                  class="linck-wrap"
                                  tag="a"
                        >
                            Back to Comments
                        </router-link>
                    </div>
                </div>
            </div>
        </section>
        <section class="comment_wrap">
            <div class="comment-content">
                <div class="row">
                    <div class="title">
                        <h1>{{ comment.title }}</h1>
                    </div>
                    <div>
                        <p>{{ comment.body }}</p>
                    </div>
                    <v-container  class="pa-0">
                        <v-row>
                            <v-col cols="12" sm="6">
                                <div class="text-left">
                                    <div class="my-2">
                                        <v-btn class="btn-edit" 
                                               dark
                                               @click="goPage(comment.id)"
                                        >edit</v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <div class="text-right">
                                <div class="my-2">
                                    <v-btn class="btn-delete"
                                           dark
                                           @click="deleteComment(comment.id)"
                                    >
                                        delete
                                    </v-btn>
                                </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    
                    <div class="silver_line"></div>
                </div>
            </div>
        </section>
        <section>
            <div class="button-linck-text">
                <div class="comment-content">
                    <p>Lorem Ipsum is text of the typesetting industry</p>
                    <router-link :to="'/comments'"
                                  tag="button"
                    >
                        <span class="point">&#8701</span> <span>Back to Comments</span>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {
    created(){
        this.$store.dispatch('comment/loadComment', this.id);
    },
    computed:{
        id(){
            return parseInt(this.$route.params.id);
        },

        comment(){
            return this.$store.getters['comment/item'];
        },

        deleteButton(){
            return this.$store.getters['comment/delayButton'];
        }
    },
    methods:{
        deleteComment(id){
            this.$store.dispatch('comment/deleteComment', id);
        },
        goPage(id){
            this.$router.push({ path: `/write-comment/${id}` });
        }
    },

    watch:{
        deleteButton(val){
            if(val === true){
                this.$store.dispatch('comment/delayButton', false);
                this.$router.push("/comments");
            }
        }
    },
}
</script>

<style scoped>
    .btn-edit{
        background-color: #5cbbf6 !important;
        border-color: #5cbbf6 !important;
    }
    .btn-delete{
        background-color: #fb8c00 !important;
        border-color: #fb8c00 !important;
    }
    
</style>