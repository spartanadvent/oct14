var github_token = '6635046a910898574e4ab191c0fde105db46e825';
var github_connection;
var repo;
var current_element;
var user_gists;
//bota to encode
//atob to decode

function repos(user_name, repo_in_use) {

     repo = github_connection.getRepo(user_name, repo_in_use);
}





function create_element(element_name) {
    current_element = document.createElement(element_name)
        document.body.appendChild(current_element);

}



function load_javascript(script_url,function_to_run_onload){

    var document_head = document.getElementsByTagName('head')[0];
    var document_script = document.createElement('script');
    
    document_script.type = 'text/javascript';
    document_script.src = script_url;
    document_script.onready = function_to_run_onload;
    document_script.addEventListener('onload',function(event){
        function_to_run_onload;
    });
    
    document_head.appendChild(document_script);

}
function log(message){

  console.log(message);
  alert(message);
  
}


document.addEventListener('DOMContentLoaded', function(){

  
  log(Date.now());
     log('DOMContnetLoaded');
    
    load_javascript('js/github_api.js',function(event){
        
    });

 

});

call_back = function(event){console.log(event)};

document.addEventListener('readystatechange',function(event){
    
    if(document.readyState === 'complete'){
        
        github_connection = new Github({ 
              token: github_token,
              auth: "oauth"
            }),call_back();



    };
    



});