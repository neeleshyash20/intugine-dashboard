

var json_data;
var cs=1;

function fetch_data(){
    // js function to fetch data from api
    fetch(' https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',{
        method:'POST',
        body:'{"email": "mayankmittal@intugine.com" }',
        headers:{
            'Content-type': 'application/json',
            'Authorization': 'Bearer tTU3gFVUdP'
        }
        
    }).then(function(response ){
        if(response.ok) {return response.json();}
        else return Promise.reject(response);
    }).then(function(data){
        json_data=data;
        set_sc1();
        set_sc2();
        set_sc3();
        set_sc4();
        set_sc5();
        set_data();
    }).catch(function(err){
        console.warn('Something went wrong',err);
    });
}
fetch_data();

function set_cs(id){
    // console.log('dsadsa');
    cs=parseInt(id);
    set_data();
}
 

function set_sc1(){
    count=0;
    json_data.forEach(function(entry) {
        if(entry.current_status_code=="DEL") count++;
    });
    document.getElementById("sc1").innerHTML=count;
}
function set_sc2(){
    count=0;
    json_data.forEach(function(entry) {
        if(entry.current_status_code=="INT") count++;
    });
    document.getElementById("sc2").innerHTML=count;
}

 function set_sc3(){
    count=0;
    json_data.forEach(function(entry) {
        if(entry.current_status_code=="OOD") count++;
    });
    document.getElementById("sc3").innerHTML=count;
}

function set_sc4(){
    count=0;
    json_data.forEach(function(entry) {
        if(entry.current_status_code=="DEX") count++;
    });
    document.getElementById("sc4").innerHTML=count;
}

function set_sc5(){
    count=0;
    json_data.forEach(function(entry) {
        if(entry.current_status_code=="NFI") count++;
    });
    document.getElementById("sc5").innerHTML=count;
}
function set_data(){
    json_data.forEach(function(entry) {
        if(entry['current_status_code']=='DEL' && cs==1){
            // console.log(entry);

          let ele=document.createElement("div" );//CHECKING ERROR ATBTID
          ele.setAttribute("id","div1");
          //var ele ="";
            ele.innerHTML='<div class="celldown"><div class="cell1">#'+entry['awbno'] +'</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['from'] +' </div><div class="cell1">'+entry['to'] + '</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['pickup_date']+'</div><div class="cell1">'+entry['extra_fields']['expected_delivery_date']+'</div><div class="cell1">'+entry['current_status']+' </div></div>';
            // ele.class="celldown";
            document.getElementById("timeline").appendChild(ele);
        }
        else if(entry['current_status_code']=='INT' && cs==2){
            // console.log(entry);
            let ele=document.createElement("div");
            ele.setAttribute("id","div1");
            //var ele ="";
            ele.innerHTML='<div class="celldown"><div class="cell1">#'+entry['awbno'] +'</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['from'] +' </div><div class="cell1">'+entry['to'] + '</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['pickup_date']+'</div><div class="cell1">'+entry['extra_fields']['expected_delivery_date']+'</div><div class="cell1">'+entry['current_status']+' </div></div>';
            // ele.class="celldown";
            document.getElementById("timeline").appendChild(ele);
        }
        else if(entry['current_status_code']=='OOD' && cs==3){
            // console.log(entry);
            removeAllChild();//ERROR CHECKING
            let ele=document.createElement("div");
            ele.setAttribute("id","div1");
            //var ele ="";
            ele.innerHTML='<div class="celldown"><div class="cell1">#'+entry['awbno'] +'</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['from'] +' </div><div class="cell1">'+entry['to'] + '</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['pickup_date']+'</div><div class="cell1">'+entry['extra_fields']['expected_delivery_date']+'</div><div class="cell1">'+entry['current_status']+' </div></div>';
            // ele.class="celldown";
            document.getElementById("timeline").appendChild(ele);
        }
        else if(entry['current_status_code']=='DEX' && cs==4){
            // console.log(entry);
            let ele=document.createElement("div");
            ele.setAttribute("id","div1");
            //var ele ="";
            ele.innerHTML='<div class="celldown"><div class="cell1">#'+entry['awbno'] +'</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['from'] +' </div><div class="cell1">'+entry['to'] + '</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['pickup_date']+'</div><div class="cell1">'+entry['extra_fields']['expected_delivery_date']+'</div><div class="cell1">'+entry['current_status']+' </div></div>';
            // ele.class="celldown";
            document.getElementById("timeline").appendChild(ele);
        }
        else if(entry['current_status_code']=='NFI' && cs==5){
            // console.log(entry);
           let ele=document.createElement("div");
           ele.setAttribute("id","div1");
           // var ele ="";
            ele.innerHTML='<div class="celldown"><div class="cell1">#'+entry['awbno'] +'</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['from'] +' </div><div class="cell1">'+entry['to'] + '</div><div class="cell1">'+entry['carrier'] +'</div><div class="cell1">'+entry['pickup_date']+'</div><div class="cell1">'+entry['extra_fields']['expected_delivery_date']+'</div><div class="cell1">'+entry['current_status']+' </div></div>';
            // ele.class="celldown";
            document.getElementById("timeline").appendChild(ele);
        }
    });
}
function removeAllChild(){
  let e = document.getElementById("div1"); 
   e.innerHTML =" ";
        
}


