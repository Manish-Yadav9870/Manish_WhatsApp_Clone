import './SideBar.css'
import { BiMessageAdd } from "react-icons/bi";

const Sidebar=()=>{
    return(
        <aside classname='aside'>
   <h1>Chats</h1>
   <div>
    <BiMessageAdd className="BiMessageAdd"/>
     
   </div>
        </aside>
    )
};
export default Sidebar;