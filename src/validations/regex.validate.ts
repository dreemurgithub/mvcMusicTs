const regex5minLess = /^(1:([0-5][0-9])|(2|3|4):[0-5][0-9])$/;
const regexUserName = /^.{5,32}$/;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9#@$%]{5,}$/; // atleast 6 characters, contain a number, a lowercase and uppercase, '#' or '@' or '$' or '%'

export { regex5minLess, regexPassword, regexUserName };
