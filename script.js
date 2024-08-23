$("#hero").on("mousemove",function(e){
    console.log(e.screenX,e.screenY)
   
    let left = e.screenX
    let top = e.screenY
    
    $("#circle").css({
        top:top+"px",
        left:left+"px"
    })
})