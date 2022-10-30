import { Link } from "react-router-dom";

export function Login(){

    return <div class = "container-fluid">
        <div class = "row">
            <div class = "col-md-4 offset-4">
                <form role="form">
                    
                    <div class = "form-group">
                        <label for = "exampleInputEmail">
                            Usuario
                        </label>
                        <input type="text" class="form-control" id="exampleInputEmail"></input>
                    </div>

                    <div class = "form-group">
                        <label for="exampleInputPassword1">
                           Contraseña
                        </label>
                        <input type="password" class="form-control" id="exampleInputPassword1"></input>
                    </div>                 
                    <div class ="form-group my-4">
                        <Link to ="/tablero" class="btn btn-primary">
                            Acceder
                            </Link>
                    
                    </div>
                    
                </form>            
            </div>
        </div>

    </div>

}