const replaceAll = (str,replaceStr,replaceWith)=>{
    const strArray = str.split(' ');
    const idx=[];
    strArray.forEach((elem,index)=>{
        if(elem===replaceStr){
            idx.push(index);
            strArray.splice(index,1,replaceWith);
        };
    });
    const strConverted = strArray.reduce((ac,elem,idx)=>{
        return ac.concat(' '+elem);
    });
    return strConverted;
};


const str = 'This is A and he is A and he wants to be A';
const convert = replaceAll(str,'A','Anuj');
console.log(convert);





