const pageBlock = ({children}) =>{
    const mainback = {
        position:"absolute",
        left:"0",
        top:"0",
        bottom:"0",
        right:"0",
        background : "#ffffff"
    };
    return <div style={mainback}>{children}</div>
}

export default pageBlock;