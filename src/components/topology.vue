<template>
  <div>
    


  </div>

</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      resourceList: []
    }
    
  },
  mounted() {
      axios.get('api/topology')
      .then(response => {
          console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  
  }

}

</script>
