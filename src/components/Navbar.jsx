const Navbar = () => {
    return ( <div className="navbar">
        <span className="logo">Hotline</span>
        <div className="user">
            <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <span>John</span>
            <button>Logout</button>
        </div>
    </div> );
}
 
export default Navbar;