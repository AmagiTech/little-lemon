import Heroes from "../Heroes";
import Specials from '../Specials';
function Main(props) {
   return (
      <main>
         { props.children }
         <Heroes />
         <Specials></Specials>
      </main>
   );
}

export default Main;