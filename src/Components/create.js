import Button from "./button";
import ButtonTwo from "./buttontwo";
import Renderprop from "./renderprop";
import ButtonRenderProp from "./buttonRenderProp";

function Create(){
    return <div>
        <Button count={90} increment={()=> this.count+2} />
        <ButtonTwo/>
        {/* <Renderprop render={(bool)=>(bool?"Diya":"Drishty")}/> */}
        <ButtonRenderProp
            render={(count,increment)=>
            (<Button count={count} increment={increment}/>)
            } 
        /> 
    </div>
}

export default Create;