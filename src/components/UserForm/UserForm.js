const UserForm = () =>{
    return(
        <form>
            <label for="name">Nombre:</label><br/>
            <input type="text" id="name" name="name"/><br/>
            <label for="lastname">Apellido:</label><br/>
            <input type="text" id="lastname" name="lastname"/><br/>
            <label for="email">Correo electrónico:</label><br/>
            <input type="email" id="email" name="email"/><br/>
            <label for="repeat-email">Repetir correo electrónico:</label><br/>
            <input type="email" id="repeat-email" name="repeat-email"/><br/>
            <label for="zip">Código postal:</label><br/>
            <input type="text" id="zip" name="zip"/><br/>
            <label for="address">Dirección:</label><br/>
            <textarea id="address" name="address"></textarea><br/>
            <input type="submit" value="Enviar"/>
        </form> 
    )
}
export default UserForm