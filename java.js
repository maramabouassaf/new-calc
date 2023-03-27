let inp=$('#inp')
function test(type){
    let inp1=inp.val(inp.val()+type)
}
let eq=$('#eq')
eq.click(function(){
    let result=inp.val(eval(inp.val()))
})
let d=$('#d')
d.click(function(){
   let del=inp.val("")
})