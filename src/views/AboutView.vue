<template>
<v-text-field v-model="key"> </v-text-field>
<v-text-field v-model="value"> </v-text-field>
<v-btn @click="post">
  Enviar
</v-btn>
<p>{{ dato }}</p>
</template>

<script>
import axios from 'axios'
export default {
  name: 'pruebaData',

  data(){
    return{
      dato: [],
      key: '',
      value: '',
      date: {}
    }
  },
  methods: {
    post(){
      this.date[this.key]=this.value;
      axios.post('http://localhost:8000/api', this.date).then(res => this.dato = res)
      console.log(this.date)
    }
  },
  created(){

  },
}

</script>