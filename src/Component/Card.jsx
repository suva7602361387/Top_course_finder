import { toast } from "react-toastify";
import { FcLike,FcLikePlaceholder } from "react-icons/fc";


const Card=(props)=>{
    let course=props.course;
    let LikedCourse=props.LikedCourse;
    let setLikedCourse=props.setLikedCourse;
    function clickhandler(){
        //Logic
        if(LikedCourse.includes(course.id)){
            //pehle sa Like hua ha
            setLikedCourse((prev)=>prev.filter((cid)=>(cid!==course.id)));
            toast.warning("Like Remove")
        }
        else{
            //pehle sa Like nahie ha
            if(LikedCourse.length===0){
                setLikedCourse([course.id]);
            }
            else{
                setLikedCourse((prev)=>[...prev,course.id]);
            }
            toast.success("Like Successfully");

        }

    }
    return(
      
        
        
        <div className="w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden ">
              <div className="relative ">
                  <img src={course.image.url} alt="" />
                  <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3
                  grid place-items-center text-red-500
                  ">
                     <button onClick={clickhandler}>
                        {
                            LikedCourse.includes(course.id)? (<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>) 
                        }
                        
                        
                    </button>
                   </div>
              </div>
              
              
              <div className="p-4">
                  <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                  <p className="text-white mt-4">
                    {
                       course.description.length >100?
                       (course.description.substr(0,100))+"...":
                       (course.description)
                    }</p>
              </div>
        
        
        </div>
    )

}
export default Card;