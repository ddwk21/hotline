const Message = () => {
    return (

        <div className="message owner">
            <div className="messageInfo">
                <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Hello</p>
                {/* <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
            </div>
        </div>
     );
}
 
export default Message;