export function Register(){

    return <div class = "container-fluid">
        <div class = "row">
            <div class = "col-md-4 offset-4">
                <form role="form">
                    
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
                        <button type="button" class="btn btn-primary" onClick={function(){ console.log('hi')}}>
                            Registrarse
                        </button>
                    </div>
                    
                </form>            
            </div>
        </div>

    </div>

}