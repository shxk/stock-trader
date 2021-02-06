import Vue from 'vue'

Vue.filter('currency', (value) =>{
  return '£' + value.toLocaleString();
});
