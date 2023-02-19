import "../styles/Hamberg.css"
const Hamberg = ({onClick})=>{
    return(
    <div className="menu" onClick={onClick}>
        <div class="rect"><br /></div>
        <div class="rect"><br /></div>
        <div class="rect"><br /></div>
    </div>
    )
};
export default Hamberg;