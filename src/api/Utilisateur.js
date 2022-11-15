import Api from "./Api";

export default{

    userList(){
        return Api().get("/utilisateur")
    }

}