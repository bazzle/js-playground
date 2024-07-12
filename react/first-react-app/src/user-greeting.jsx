import propTypes from "prop-types";

function UserGreeting({
    isLoggedIn = false,
    userName = 'Friend'
}){
    const welcomeMessage = <p className="user-greeting">Hi there, <span>{userName}</span>. Shift-click to super-like</p>
    const loginMessage = <p className="user-greeting">Please log in</p>
    if(isLoggedIn){
        return welcomeMessage;
    } else {
        return loginMessage;
    }
}

UserGreeting.propTypes = {
    isLoggedIn: propTypes.bool,
    userName: propTypes.string
}

export default UserGreeting;