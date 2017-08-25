import { computed, autorun, observable, action } from "mobx"
import axios from 'axios'

class workstore {
  
  @observable example = false

  @computed get profileData() {
   
  }


  @action setProfile = () =>{
    
  }

}

let store = window.store = new workstore

export default store

autorun(() => {
  
})