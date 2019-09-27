<template>
    <div>
      <app-header></app-header>
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      <app-footer></app-footer>
    </div>
</template>

<script>
import appHeader from './components/Header';
import appFooter from './components/Footer';

export default {
  name: 'App',
  components: {
    appHeader,
    appFooter
  },
  data: () => ({
    //
  }),
};
</script>

<style>
	
	.slide-enter-active{
		animation: slideIn 0.7s;
	}

	.slide-leave-active{
		animation: slideOut 0.7s;
	}


	@keyframes slideIn{
		from{opacity: 0;}
		to{opacity: 1;}
	}

	@keyframes slideOut{
		from{opacity: 1;}
		to{opacity: 0;}
	}
</style>
