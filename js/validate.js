  function validate() {      
         if(document.getElementById("field-id").value == "" ) {
            alert( "Укажи id" );
            document.callback.id.focus() ;
            return false;
         } else 
         if(document.getElementById("field-name").value== "" ) {
            alert( "Заполните имя" );
            document.callback.name.focus() ;
            return false;
         } 
          if(document.getElementById("field-lastname").value== "" ) {
            alert( "Заполните фамилию" );
            document.callback.lastname.focus() ;
            return false;
         } 
           if(document.getElementById("field-email").value== ""  ) {
            alert( "Укажите email" );
            document.callback.email.focus() ;
            return false;
         }
         if(document.getElementById("field-selectCompany").value== "" ) {
            alert( "Пожалуйста, выберите компанию" );
            return false;
         }
         if(document.getElementById("field-selectPosition").value== "" ) {
            alert( "Пожалуйста, выберите должность" );
            return false;
         }
         return( 
            document.getElementById("submit").onclick=function(){
            document.getElementById("table");
            const table = document.getElementById("table");
            const row = table.insertRow(-1);
            const id = row.insertCell(0);
            const name = row.insertCell(1);
            const lastname = row.insertCell(2);
            const email = row.insertCell(3);
            const company = row.insertCell(4);
            const position = row.insertCell(5);
            id.innerHTML = document.getElementById("field-id").value;
            id.dataset.label="ID"; 
            name.innerHTML = document.getElementById("field-name").value;
            name.dataset.label="Имя"; 
            lastname.innerHTML = document.getElementById("field-lastname").value;
            lastname.dataset.label="Фамилия";
            email.innerHTML = document.getElementById("field-email").value; 
            email.dataset.label="Email";
            company.innerHTML = document.getElementById("field-selectCompany").value; 
            company.dataset.label="Компания";
            position.innerHTML = document.getElementById("field-selectPosition").value; 
            position.dataset.label="Должность";
            }
         )
      } 