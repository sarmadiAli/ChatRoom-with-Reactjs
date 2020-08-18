function AppReducer(state, action) {
    let { name, gender, propsLogin } = action.paylode

    switch (action.type) {

        case 'add_profile':
            if(!name){
                return 
            }
            else if(gender === '0'){
                return
            }
            return inputHander({ name, gender, propsLogin })
        case 'add_text':
            return action.paylode



        default:
            return state
    }
}

export default AppReducer;




let inputHander = ({ name, gender, propsLogin }) => {
   
    propsLogin.history.push({
        pathname: "chatroom",
        state: {
            name,
            gender,
        }
    });


}


