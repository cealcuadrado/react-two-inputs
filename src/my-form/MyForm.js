import './MyForm.css';

function MyForm() {
    return (
      <div className="my-form">
        <form>
          <div class="form-group">
            <label>Username</label>
            <input type="name" class="form-control" name="username"/>        
          </div>
          <div class="form-group mb-2">
            <label>Age</label>
            <input type="number" class="form-control" name="age"/>     
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">
                Enviar
            </button>
          </div>
        </form>
      </div>
    );
}

export default MyForm;