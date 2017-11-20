<template>
  <div>
    


  </div>

</template>


<script>
import axios from "axios";


// export const instance = axios.create({
//   baseURL: 'http:/192.168.151.44:5555/'
// });

export default {
  data() {
    return {
      resourceList: []
    }
    
  },
  mounted() {
      axios.get('/cluster/resources/nodes')
      .then(response => {
          console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  
  }

}

</script>
