<template>
    <div class="wraper">
    <section>
		<div class="title_bg_block content">
			<div class="row">
				<h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h1>	
			</div>
		</div>
	</section>
    <template>
        <v-parallax class="full_background" :src="backgroundImg"></v-parallax>
    </template>

	<section class="content list_3">
		<div class="row">
			<div class="col-md-4 col-sm-6">
				<div class="block">
					<div class="icon">
						<img :src="peopleImg" alt="">
					</div>
					<div class="title_text">
						<h2>Who we are</h2>
						<ul>
							<li>&#8226 It is a long established fact that a reader will be distracted</li>
							<li>&#8226 The readable content of a page when looking at its layout</li>
							<li>&#8226 The point of using Lorem Ipsum</li>
							<li>&#8226 As opposed to using 'Content here, content here'.</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="block">
					<div class="icon">
						<img :src="monitorImg" alt="">
					</div>
					<div class="title_text">
						<h2>What we do</h2>
						<ul>
							<li>&#8226 Many desktop publishing packages and web page</li>
							<li>&#8226 There are many variations of passages of Lorem Ipsum available, but the majority have</li>
							<li>&#8226 Various versions have evolved over the years, sometimes by accident</li>
						</ul>
					</div>
				</div>
			</div>

			<div class="col-md-4 col-sm-6">
				<div class="block">
					<div class="icon">
						<img :src="setingsImg" alt="">
					</div>
					<div class="title_text">
						<h2>Technology</h2>
						<ul>
							<li>&#8226 The point of using Lorem Ipsum</li>
							<li>&#8226 As opposed to using 'Content here, content here'</li>
							<li>&#8226 Contrary to popular belief, Lorem Ipsum is not simply random text</li>
							<li>&#8226 A Latin professor at Hampden-Sydney College in Virginia</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section class="form_block">
		<div class="content pt_pb">
			<div class="row">
				<div class="footer_left_block">
				Write </br> comment
				</div>
				<div class="footer_right_block">
					<form action="" @submit="orderSubmit">
						<div class="input_wrup">
							<input type="text" 
								   name="title"
								   placeholder="Title"
								   v-model="comment.title"
								   @input="pushTitle"
								   :class="validTitleClass"
							>
						</div>
						<div class="textarea_wrap">
							<textarea name="textarea" 
									  placeholder="Your comment"
									  v-model="comment.body"
									  @input="pushTextarea"
									  :class="validTextareaClass"
							></textarea>
						</div>
						<div class="form_button">
							<button :disabled="buttonStatus">Send</button>
						</div>
						
					</form>
				</div>
			</div>
		</div>
		<div class="m-container">
			<div class="row">
				<div class="silver_line"></div>
			</div>
		</div>
	</section>
	
    </div>
</template>
<script>

import backgroundImg from '../assets/image_1.jpg';
import peopleImg from '../assets/people.png';
import monitorImg from '../assets/monitor.png';
import setingsImg from '../assets/setings.png';

export default {
	data(){
		return {
			backgroundImg,
			peopleImg,
			monitorImg,
			setingsImg,
			comment:{
				created_at: NaN,
				title: '',
				body: ''
			},
			title:{
				pattern: /^[a-zA-Zа-яА-ЯіI' '-]{2,50}$/,
                status: true
			},
			body:{
				pattern: /.+/,
                status: true
			}
		}
	},
	computed:{
		validTitleClass(){
			return this.title.status ?
			'text-ok' :
			'text-error';
		},
		validTextareaClass(){
			return this.body.status ?
			'text-ok' :
			'text-error';
		},

		buttonStatus(){
			return this.$store.getters['comments/buttonStatus'];
		}
	},
	methods:{
		pushTitle(e){
			let value = e.target.value;
			this.comment.title = value.replace(/\d/, '');
			if(this.title.pattern.test(e.target.value)){
				this.title.status = true;
			}else{
				this.title.status = false
			}
		},
		pushTextarea(e){
			let value = e.target.value;
			if(this.body.pattern.test(e.target.value)){
				this.body.status = true;
			}else{
				this.body.status = false
			}
		},
		orderSubmit(e){
			e.preventDefault();
			if(this.comment.title == ''){
				this.title.status = false;
			};
			if(this.comment.body == ''){
				this.body.status = false;
			}
			if(this.comment.title == '' && this.comment.body == ''){
				this.title.status = false;
				this.body.status = false;
			}
			if(this.title.status == true && this.body.status == true){
				let dataTime = new Date();
				this.comment.created_at = dataTime.getTime();

				this.$store.dispatch('comments/buttonStatus', true);
				this.$store.dispatch('comments/sendComment', this.comment);
			}
		}
	},
	watch:{
        buttonStatus(val){
            if(val === false){
                this.comment.title = '',
				this.comment.body = '',
				this.comment.created_at = NaN
            }
        }
    },
}
</script>

<style scoped>
	.comment_title{
		width: 100%;
	}

	button[disabled]{
		background: silver;
	}
	button[disabled]:hover{
		background: silver;
	}
</style>