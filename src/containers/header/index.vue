.<template>
    <div id="homeHeader">
        <div id="logoHeader">
         <img draggable="false" src="@/assets/logo-Compass-preta.png" alt="Loga Compass Preta"> 
        </div>   
        <Clock/>
        <Weather/>
    </div>
</template>

<script>

import Clock from '@/components/clock/index.vue';
import Weather from '@/components/weather/index.vue';

export default {
    name: 'LoginLeftScreen',
    components: {
    Clock,
    Weather,
},
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>