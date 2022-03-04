<template>
    <div id="areaTempo">
        <div id="local" v-html="localData"/>
        <div id="climate">
            <img id="iconTempo" draggable="false" :src="require(`@/assets/${iconTempoData}.png`)" alt="Icon Tempo"/>
            <Title :level=1 grauStyle=true :text="`${grauData}°`"/>
        </div>
    </div>
</template>

<script>
import Title from "../title/index.vue";
import axios from "axios";

export default {
    name: "Weather",
    components: {
        Title,
    },

    data() {
        return {
            iconTempoData: "cloud",
            grauData: "NE",
            localData: "Localização N/D",
        };
    },
    methods: {
        weatherLogical() {
                if(navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                        let lat = position.coords.latitude;
                        let long = position.coords.longitude;

                        const locapi = "https://us1.locationiq.com/v1/reverse.php?key=pk.e8b4b142ba161280a30a39b649ca898d&lat="+lat +"&lon=" + long +"&format=json"
                        axios.get(locapi).then((locationData) => {
                        this.city = locationData.data.address.city.replace(/ /g, "-");
                
                        const api = 'https://api.weatherapi.com/v1/current.json?key=1bfd13269e7d4825a7811658221002&q=' + this.city + "a&aqi=no"
                        axios.get(api).then((personalData) => {
                        console.log(personalData);
                        let grau = `${personalData.data.current.temp_c.toFixed()}`
                        this.grauData = grau;

                        const icons = personalData.data.current.condition.text;
                        let addIcons = personalData.data.current.condition.icon;
                        let iconTempo = this.addIconsLogical(icons, addIcons);
                        this.iconTempoData = iconTempo;

                        this.local = personalData.data.location.name;
                        this.state = personalData.data.location.region;
                        const region = personalData.data.location.region;

                        this.stateData = this.regionSiglasLogical(region);

                        let localnovo =  `${this.local} - ${this.stateData}`
                        this.localData = localnovo;
            
                    });
                });
            });
           }
        },

        addIconsLogical(icons, addIcons) {
            if (icons.includes("thunder") && icons.includes("rain")){
                addIcons="storm";

            }else if(icons.includes("thunder")){
                addIcons="thunder";
            
            }else if(icons.includes("Sunny") || icons.includes('Clear')) {
                addIcons="sun";

            }else if(icons.includes("rain") || icons.includes("drizzle")){
                addIcons="raining";

            }else if(icons.includes("Fog") || icons.includes("Mist")){
                addIcons="cloud";

            }else if (icons.includes("Cloudy") || icons.includes("Overcast") || icons.includes("cloudy")
            ) {
               addIcons = "cloudy";

            }
            return addIcons;
        },

        regionSiglasLogical(region) {
        let regionSigla= "";
  
        switch (region) {
            case "Acre":
                regionSigla = "AC";
                break;
            case "Alagoas":
                regionSigla = "AL";
                break;
            case "Amapá":
                regionSigla = "AP";
                break;
            case "Amazonas":
                regionSigla = "AM";
                break;
            case "Bhaia":
                regionSigla = "BA";
                break;
            case "Ceará":
                regionSigla = "CE";
                break;
            case "Espírito Santo":
                regionSigla = "ES";
                break;
            case "Goiás":
                regionSigla = "GO";
                break;
            case "Maranhão":
                regionSigla = "MA";
                break;
            case "Mato Grosso":
                regionSigla = "MT";
                break;
            case "Mato Grosso do Sul":
                regionSigla = "MS";
                break;
            case "Minas Gerais":
                regionSigla = "MG";
                break;
            case "Pará":
                regionSigla = "PA";
                break;
            case "Paraíba":
                regionSigla = "PB";
                break;
            case "Paraná":
                regionSigla = "PR";
                break;
            case "Pernambuco":
                regionSigla = "PE";
                break;
            case "Piauí":
                regionSigla = "PI";
                break;
            case "Rio de Janeiro":
                regionSigla = "RJ";
                break;
            case "Rio Grande do Norte":
                regionSigla = "RN";
                break;
            case "Rio Grande do Sul":
                regionSigla = "RS";
                break;
            case "Rondônia":
                regionSigla = "RO";
                break;
            case "Roraima":
                regionSigla = "RR";
                break;
            case "Santa Catarina":
                regionSigla = "SC";
                break;
            case "São Paulo":
                regionSigla = "SP";
                break;
            case "Sergipe":
                regionSigla = "SE";
                break;
            case "Tocantins":
                regionSigla = "TO";
            break;
            case "Distrito Federal":
                regionSigla = "DF"

        } return regionSigla;
    }

},
     mounted() {
         this.weatherLogical();
    },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>