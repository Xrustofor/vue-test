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
                    <template v-if="showComment">
                        <form action="" @submit="orderSubmit">
                            <div class="textarea_title">
                                <v-container fluid>
                                    <v-textarea
                                    counter
                                    label="Title"
                                    no-resize
                                    auto-grow
                                    :value="commentStore.title"
                                    @input="pushTitle"
                                    :prepend-icon="validTitleClass"
                                    row-height="1"
                                    ></v-textarea>
                                </v-container>
                            </div>
                            <div class="textarea_text">
                                <v-container fluid>
                                    <v-textarea
                                        counter
                                        label="Text"
                                        no-resize
                                        auto-grow
                                        :value="commentStore.body"
                                        @input="pushText"
                                        :prepend-icon="validBodyClass"
                                        row-height="1"
                                    ></v-textarea>
                                </v-container>
                            </div>
                            <button class="btn_update_comment" :disabled="updateStatus">update</button>
                        </form>
                        
                    </template>
                    <template v-else>
                        <h1>Not selected comment for editing, please select the comment you are interested in.</h1>
                    </template>
                    
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

import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import {mapMutations} from 'vuex';

export default {
    data(){
        return{
            comment:{
                title: "",
                body: ""
            }
        }
    },
    created(){
        this.$store.dispatch('comment/loadComment', this.id);
    },
    computed:{
        id(){
            return parseInt(this.$route.params.id);
        },
        showComment(){
            return  this.id ?  true : false;
        },

        ...mapGetters('comment', {
            paramsValidTitle: 'validTitle',
            paramsValidBody: 'validBody',
            listClass: 'class',
            statusTitle: 'statusTitle',
            statusBody: 'statusBody',
            commentStore: 'item',
            updateStatus: 'updateStatus'
        }),
         validTitleClass(){
			return this.paramsValidTitle.status ?
			this.listClass.ok :
			this.listClass.error;
		},
		validBodyClass(){
			return this.paramsValidBody.status ?
			this.listClass.ok :
			this.listClass.error;
		}
    },
    methods:{
        pushTitle(value){
            
            let title = value.replace(/\d/, '');
            this.$store.dispatch('comment/pushTitle', title);

 			if(this.paramsValidTitle.pattern.test(value) && value != ''){
                this.$store.dispatch('comment/changeStatusTitle', true);
			}else{
                this.$store.dispatch('comment/changeStatusTitle', false);
			}
        },
        
        pushText(value){

            this.$store.dispatch('comment/pushBody', value);

 			if(this.paramsValidBody.pattern.test(value) && value != ''){
                this.$store.dispatch('comment/changeStatusBody', true);
			}else{
                this.$store.dispatch('comment/changeStatusBody', false);
			}
        },

        orderSubmit(e){
            e.preventDefault();
          
            if(!this.statusTitle && !this.statusBody){
                console.log(false);
            }else{
                this.$store.dispatch('comment/updateStatus', true);
                let dataTime = new Date();
                this.$store.dispatch('comment/createdAt', dataTime.getTime());
                this.$store.dispatch('comment/UpdateComment', this.commentStore);
            }
		}
    },
}
</script>

<style>
    .textarea_title,
    .textarea_text{
        width: 100%;
    }
    .textarea_title .v-textarea textarea{
        font-weight: 600;
        font-style: normal;
        font-size: 60px;
        color: #101417;
        min-height: 80px;
        line-height: 1
    }
    .textarea_text .v-textarea textarea{
        font-weight: normal;
        font-style: normal;
        color: #101417 !important;
        font-size: 16px;
    }
    .btn_update_comment{
        padding: 15px 24px;
        border: 1px solid #60e3a1;
        -webkit-border-radius: 4px;
        border-radius: 4px;
        background: #fff;
        color: #1d1e25;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        margin: auto;
        text-transform: uppercase
    }
    .btn_update_comment:hover{
        background: #60e3a1;
        color: #fff;
    }
    .btn_update_comment[disabled]{
        background: silver;
    }
    .btn_update_comment[disabled]:hover{
        background: silver;
    }

    
</style>