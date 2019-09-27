<template>
    <header class="header">
	<div class="m-container">
		<div class="row">
			<div class="logo_menu">
				<div class="img_logo">
                    <router-link :to="'/'" tag="a">
                        <img :src="logo" alt="">
                    </router-link>
				</div>
				<nav class="menu">
					<ul>
                        <router-link v-for="(item, i) in menuList"
                                     :key="'menu-'+i"
                                     tag = "li"
                                     :to = "item.url"
                                     class="link_hover"
                                     active-class = "active"
                        >   
                        <a>{{item.text}}</a>
                        </router-link>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
</template>
<script>

import { mapGetters } from 'vuex'; 

import logo from '../assets/logo.png';

export default {
    data() {
        return{
           logo
        }
    },
    computed:{
        ...mapGetters('menu', {
            menuList: 'items'
        })
    }
}
</script>
