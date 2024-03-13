
function Header(props){
    return (
        <header>
            <div className="">
                <p>{props.Username}</p>
                <p>{props.Email}</p>
            </div>
        </header>
    )
}

export default Header;