// https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new
var VueComponent = new Vue({
    el:'#app',
    data:{
        source:[]
    }
});
const blue = 'https://www.random.org/integers/?num=1&min=1&max=35&col=1&base=10&format=plain&rnd=new';
const red = 'https://www.random.org/integers/?num=1&min=1&max=12&col=1&base=10&format=plain&rnd=new';
let blueNum = [];
let redNum = [];


function RandomBlue(){
    console.log('wait...');
    document.querySelector('#ume').setAttribute('onclick','');
    document.querySelector('#ume').setAttribute('value','wait...');
    document.querySelector('.loading').classList.remove('hide');
    axios.get(blue).then(res=>{
        // fs.appendFileSync('random.json',`${res.data},`);
        if(blueNum.indexOf(res.data)<0){
            blueNum.push(res.data);
        };
        if(blueNum.length<5){
            RandomBlue()
        }else{
            RandomRed()
        }
    }).catch(err=>{
        console.log(err)
    })
}

function RandomRed(){
    axios.get(red).then(res=>{
        // fs.appendFileSync('random.json',`${res.data},`);
        if(redNum.indexOf(res.data)<0){
            redNum.push(res.data);
        };
        if(redNum.length<2){
            RandomRed()
        }else{
            let data = {
                blueNum:blueNum,
                redNum:redNum
            };
            VueComponent.source.push(data);
            blueNum = [];
            redNum = [];
            document.querySelector('#ume').setAttribute('onclick','RandomBlue()');
            document.querySelector('#ume').setAttribute('value','获得梦想');
            document.querySelector('.loading').classList.add('hide');

        }
    }).catch(err=>{
        console.log(err)
    })
}
