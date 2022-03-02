.<template>
    <div id="homeHeader">
        <div id="logoHeader">
         <img draggable="false" src="@/assets/logo-Compass-preta.png" alt="Loga Compass Preta"> 
        </div>   
        <Clock/>
        <div id="areaTempo">
             <div id="local"></div>
                    <div id="climate">
                        <img draggable="false" id="iconTempo" src="@/assets/cloud.png">
                        <div id="grau">22°</div>
                    </div>
            </div>
    </div>
</template>

<script>
import Clock from '@/components/clock/index.vue';

export default {
    name: 'LoginLeftScreen',
    components: {
    Clock,
   }
};

</script>

<style lang="scss" scoped>
@import './index.scss';
</style>