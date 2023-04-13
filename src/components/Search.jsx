import React from 'react';

const Search = () => {
    return ( 
    <div className="search">
        <div className="searchForm">
            <input type="text" placeholder='find a user'/>
        </div>
        <div className="userChat">
            <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
            <div className="userChatInfo">
                <span>John</span>
            </div>
        </div>
    </div> 
    );
}
 
export default Search;