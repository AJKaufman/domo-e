let domoRenderer;
let domoForm;
let DomoFormClass;
let DomoListClass;

const handleDomo = (e) => {
  e.preventDefault();
  
  $("#domoMessage").animate({ width: 'hide' }, 350);
  
  if($("#domoName").val() == '' || $("#domoAge").val() == '') {
    handleError("RAWR! All fields are required");
    return false;
  }
  
  sendAjax('POST', $("#domoForm").attr("action"), $("#domoForm").serialize(), function() {
    domoRenderer.loadDomosFromServer();
  });
  
  return false;
};

//const renderDomo = function() {
//  return (
//  
//  
//  
//  
//  )
//}