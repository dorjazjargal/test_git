let ab="anhnii utga";
function readFiles()
{
    $.get('./customer.json', function(data) {
        console.log(data);
    }, "json");
}
function read_from_js(){
$(document).ready(function(){
    $.getJSON("./customer.json", function(data){
      console.log("json файлаас уншлаа "+data.value.split(" ")[0]);
       console.log(data.ip+" json файлаас уншсан утга"); 
    ab=data.value.split(" ")[0];
    }).fail(function(){
        console.log("An error has occurred.");
    });
});
}

 read_from_js();
 //энд тайм саатал авмаар бнаа, 
 //тэгэхгүй бол json файлаас уншиж амжаагүй бхад түрүүлж ab хэвлэж бна
//readFiles();
console.log("ab= "+ab);