export default function Child2({sawvik}){
    const text = "I am a hunter . "; 
    return <div>{sawvik ? sawvik(text,':purple'):text+text+text}</div>;

}