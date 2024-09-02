import './SideBar.css'
import { BiMessageAdd } from "react-icons/bi";
import { SlOptionsVertical } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { BiVolumeMute } from "react-icons/bi";

const Chats={
    header:"Chat",
    chat_list:[
{
    id:1,
    name:"Manish Yadav",
    message:"ok",
    time:"12:45",
    image:"https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no",
    span1:" Manish Yadav",
    span2:":",
    span3:<FaCamera className='FaCamera' />,
    span4:" Hii This Is My Whatsapp ",
    span5:"",
},
{
    id:2,
    name:"Sohan",
    message:"ok",
    time:"12:45",
    image:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIKg9ZKmYtjV_t2ZYy5EjMunh1lXwkqWFx_lLTEwowpXQ&oe=66E29F51&_nc_sid=5e03e0&_nc_cat=104",
    span1:"Bhai Yarr Mere Ko Bhi Bta De Code",
    span2:"",
    span3:"",
    span4:" ",
    span5:"",

},
{
    id:3,
    name:"Manoj",
    message:"ok",
    time:"12:45",
    image:"https://media-del1-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaII3Ilkgk0z87njQH99TXh_PsAoGSHPpGH9QBIYMO8Qb3&oe=66E29A29&_nc_sid=5e03e0&_nc_cat=105",
    span1:"~ Manish Yadav",
    span2:":",
    span3:<FaCamera className='FaCamera' />,
    span4:" Manish Yadav ....",
    span5:"",
},
{
    id:4,
    name:"Rohan",
    message:"ok",
    time:"12:45",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe-xozYZ42fj5pRBd3-PTITTlGccpTfbGAA&s",
    span1:"Sohan  ",
    span2:"",
    span3:"",
    span4:"",
    span5:"",
},
{
    id:5,
    name:"Neha",
    message:"ok",
    time:"12:45",
    image:"https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no",
    span1:"~ Manish Yadav",
    span2:":",
    span3:<FaCamera className='FaCamera' />,
    span4:" Manish Yadav ....",
    span5:"",
},
{
    id:6,
    name:"Kavya",
    message:"ok",
    time:"12:45",
    image:"https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no",
    span1:"~ Manish Yadav",
    span2:":",
    span3:"",
    span4:" Manish Yadav ....",
    span5:<BiVolumeMute className='BiVolumeMute' />,
},
{
    id:7,
    name:"Sohan 2",
    message:"ok",
    time:"12:45",
    image:"https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no",
    span1:"~ Manish Yadav",
    span2:":",
    span3:<FaCamera className='FaCamera' />,
    span4:" Manish Yadav ....",
    span5:"",
}
    ]
    }


const Sidebar=()=>{
    return(
        <aside classname='aside'>
            <div className='New_chat_menu_parent'>
   <h1>Chats</h1>
   <div className='New_chat_menu_container'>
   <div className='New_chat_container'>
    <BiMessageAdd className="BiMessageAdd"/>
    </div>
   <div className='New_menu_container'> <SlOptionsVertical className='SlOptionsVertical'/>
   </div>
   </div>
   </div>
   <div className='Search_container'>
   <div className='Search_container_child'>
    <span className='IoIosSearch_span'><IoIosSearch  className='IoIosSearch'/></span>
    <div className='Search_Here_cont'><input className='input' type='text' placeholder='Search'/></div>
   </div>
   </div>
   <div className='Btn_container'>
    <div className='Btn_container_child'>
        <button className='All_button'><div className='All_cont'>All</div></button>
        <button className='All_button'><div className='All_cont'>Unread</div></button>
        <button className='All_button'><div className='All_cont'>Groups</div></button>
        <button className='Empty'></button>
    </div>
   </div>
<div className='chat-container'>
    {Chats.chat_list.map((chat)=>{
        return(
            <div key={chat.id} className='Group_container'>
              <div className='Image_container'>  <img  src={chat.image} alt={chat.name} className='img' ></img></div>
              <div className='Tag_container'>
                <div className='First_group_cont'>
                    <span className='Group_span'>{chat.name}</span>
                    <div className='Time_cont'>{chat.time}</div>
                </div>
             
              <div className='Second_group_cont'>
                <span className='Member_name_span'>{chat.span1}</span>
                <span className='Comma_span'>{chat.span2}</span>
                <span className='FaCamera_sapn'>{chat.span3}</span>
                <span className='Member_Message_span'>{chat.span4}</span>
                <span className='BiVolumeMute_span'>{chat.span5}</span>
              </div>
               
            </div>
            </div>
        )
    })}
</div>













  {/* <div className='Group_container'>
    <div className='Image_container'><img className='img' src='https://lh3.googleusercontent.com/a/ACg8ocJV0Wixoh2nWZ5X1gKs5agrZtOEErfs1Lc60ylC2FcS5Mti6C6Nag=s288-c-no'></img></div>
    <div className='Tag_container'>
        <div className='First_group_cont'>
        <span className='Group_span'>श्री कृष्ण पुलिस टीम-1</span>
        <div className='Time_cont'>12:25</div>
    </div>
    <div className='Second_group_cont'>
        <span className='Member_name_span'>~ Manish Yadav</span>
        <span className='Comma_span'>:</span>
        <span className='FaCamera_sapn'><FaCamera className='FaCamera' /></span>
        <span className='Member_Message_span'> Manish Yadav ....</span>
        <span className='BiVolumeMute_span'><BiVolumeMute className='BiVolumeMute' /></span>
    </div> 
    </div> 
   </div> */}
        </aside>
    )
};
export default Sidebar;