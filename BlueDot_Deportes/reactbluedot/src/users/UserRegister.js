import React, { useRef } from "react"
import swal from 'sweetalert'


export function UserRegister () {

    const refUser = useRef(null)
    const refPassword = useRef (null)
    const handleSubmit = (ev) =>{
        ev.preventDefault()
    

    if(refUser.current.value == "" ){
        swal({
            title:"Error al registrarse",
            text: "Valide los datos ingresados",
            icon: 'warning'
        })
    }else if (refPassword.current.value == ""){
        swal({
            title:"Error al registrarse",
            text: "Valide los datos ingresados",
            icon: 'warning'
        })
    }


    console.log("Enviando datos")
    const requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "User": refUser.current.value,
            "Password": refPassword.current.value

        })

    }

    fetch('http://localhost:3001/api/user', requestOptions)
     .then(response => response.json)
     .then(data =>{
        console.log(data)
        swal({
            title:'Registrado',
            text: "Usuario Registrado",
            icon: 'success!'
        })
    })

}

return<>

<h3>Registrate</h3>
<div class = "container-fluid">
        <div class = "row">
            <div class = "col-md-4 offset-4">
                <form role="form"  onSubmit={handleSubmit} >
                    
                    <div class = "form-group">
                        <label for = "exampleInputEmail">
                            Usuario
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail" ref={refUser}></input>
                    </div>

                    <div class = "form-group">
                        <label for="exampleInputPassword1">
                           Contraseña
                        </label>
                        <input type="password" class="form-control" id="exampleInputPassword1" ref={refPassword}></input>
                    </div>                 
                    <div class ="form-group my-4">
                        <button type="submit" class="btn btn-primary" >
                            Registrarse
                        </button>
                    </div>
                    
                </form>            
            </div>
        </div>

    </div>



</>




}
