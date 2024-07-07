function UserGreeting({
    isLoggedIn = false,
    userName = 'Friend'
}){
    const welcomeMessage = <div className="user-greeting">Hi there, <span>{userName}</span></div>
    const loginMessage = <div className="user-greeting">Please log in</div>
    if(isLoggedIn){
        return welcomeMessage;
    } else {
        return loginMessage;
    }
}

export default UserGreeting;