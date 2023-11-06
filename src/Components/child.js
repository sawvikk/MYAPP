import Parent from "./parent";

export default class Child extends Parent {
    // eslint-disable-next-line
    constructor(props){ super(props); } 
    
    render(){
        let t = this.addnt("mahan ","bharat ");
        return super.render(t);
    }
}