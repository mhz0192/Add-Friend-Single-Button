var stat = document.querySelector("h5")

var addFriend = document.querySelector("#add")

var ok = 0

addFriend.addEventListener("click" , function(){
    if(ok == 0){
        stat.innerHTML = "Friends"
        stat.style.color = "green"
        addFriend.innerHTML = "Remove Friend"
        ok = 1
    }else{
        stat.innerHTML = "Stranger"
        stat.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        ok = 0
    }
    
})

