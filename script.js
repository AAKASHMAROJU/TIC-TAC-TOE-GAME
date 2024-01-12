var player1=true;
const win = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9], 
    [1,5,9], [3,5,7]
];

var isWin=()=>{
    let flag=false;
    win.forEach((arr)=>{
        let ele1=curr_game[arr[0]-1];
        let ele2=curr_game[arr[1]-1];
        let ele3=curr_game[arr[2]-1];
        // console.log(ele1+"  "+ele2+"  "+ele3);
        if(ele1==ele2 && ele2==ele3 && ele3!=-1){
            flag=true;
            
        }
    })
    return (flag==true)?true:false;
    
}
const curr_game=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
function freeze(){
    var btn = document.querySelectorAll('.btn');
    btn.forEach((b)=>b.disabled=true);
}
var moves=0;
function f(n){
    const b = "but"+n;
    const btn = document.getElementById(b);
    if(btn.textContent===""){
        btn.textContent=(player1)?"X":"O";
        // btn.disabled=true;
        if(player1){
            curr_game[Number(n)-1]=1;

        }
        else{
            curr_game[Number(n)-1]=2;
        }
        moves=moves+1;
        // console.log(curr_game);
        if(isWin()===true){
            const display = document.getElementById("display");
            if(player1){
                // console.log("Winner is Player1");
                display.innerHTML="<h1>Winner is Player1</h1>"
                
            }
            else{
                display.innerHTML="<h1>Winner is Player2</h1>"
                // return ;
            
            }
            freeze();
            
        }
        else{
            console.log(moves);
            if(moves===9){
                display.innerHTML="<h1>Its a Draw</h1>"
                freeze();
            }

        }
        player1=(player1)?false:true;
    }

}