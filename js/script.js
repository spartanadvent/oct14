var github_token ;

var github_connection;
var repo;

var current_element;


function repos(repo_in_use){
    
    return  repo = github_connection.getRepo('spartanadvent', repo_in_use);
    github_connection.content('spartanadvent', repo_in_use);
    
}


function create_element(element_name) {
  current_element = document.createElement(document.appendChild(element_name));

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

  create_element('div');
  log(current_element);

});


document.addEventListener('readystatechange',function(event){
    
    if(document.readyState === 'complete'){
        
        github_connection = new Github({ 
              token: github_token,
              auth: "oauth"
            });
    
    
    }
    
});