.<template>
    <div id="homeHeader">
        <div id="logoHeader">
         <img draggable="false" src="@/assets/logo-Compass-preta.png" alt="Loga Compass Preta"> 
        </div>   
        <div id="areaHorario">
            <div id="hora">11:26</div>
                <div id="data">Terça Feira, 17 de março de 2020</div>
            </div>
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
export default {

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>