import Login from './Login'
import {ProfileProps} from './Profile'
type PrivateProps = {
  isLoggedIn: boolean
  /**this is how you type a component. 
   * the React.Component is for the component 
   * itself and ProfileProps is for any variable
   *  that might be passed in */
  component: React.ComponentType<ProfileProps>
}

export default function Private({isLoggedIn, component: Component}: PrivateProps) {
  if (isLoggedIn){
    return <Component name="Vishwas"/>
  }else{
    return <Login/>
  }
}
