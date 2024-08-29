class User{
    static Userscount =0;
    constructor(username){
        this.username=username;
        User.Userscount ++;
    }
}   
const user1 =new User("Abdul");
console.log(user1.username);
console.log(User.Userscount);