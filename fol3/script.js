// this keyword special key word a q k baki sara keyword ki value ya unki mature sam rhty a lakin thiskeyword ki value ya nature badal jaty ais baat ca ka ap usko kha pa use kr ra o
//aik aisa function jo object ka andr ho us ko ham method kahtay hnn
// tis keyword pora object ko denote krta a jsa agr echay dya hoa function ma agr ma simple this likhu ga to vo pora ka pora objrct e print kr da ga lakin agr ma . agr vghara use krn ga tp vo vsa e mla ga mja

// method
// agr ap function ka ande aik function bnow ga to vo value change kr da ga lakin agr ap andr vala function arrow function bnow ga to vo sai rha ga vo object e value tda ga this ki baat ho ry a
// arrow function hamesha apna this ki value parent ca lata hnn
// ab agr obj ka andr jo function a simple vo apni value myName ca la ga jo aik object a to uski jo value a vo object ho gi laki agr aisa e ham isko arrow function bna dta hnn to vo us ka parent obj ban jay ga ab iis ca  ho ga ka jsa obj ki value jo ha vo window a blkl vsa a iski value b window a jay gi 


let obj = {
    name: "hamza",
    class: 4,
    myName: function(){
        console.log(this.name)
    }


};
obj.myName();

// arrow function ma tis apni vlsue lose kar dta a isi lya ya kbhi nae bnana a or iski value jo ha vo window a jatya a

// let obj = {
//     name: "hamza",
//     class: 4,
//     myName: () => {
//         console.log(this)
//     },


// };
// obj.myName();

// event handler

document.querySelector("h1").addEventListener("click",
    function(){
        // alert();
        console.log((this.style.color= "red"));
    });
