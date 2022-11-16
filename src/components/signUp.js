function SignOut() {
    return (
        <div className="App">
            <div className='logo'>signout</div>
            <div className='input-box'>
                <div className='title-input-box'>
                    <p className='title-input'>
                        Faça o Login:
                    </p>
                </div>
                <div className='input-div'>
                    <input type='text' id='user-input' className='input' required/>
                    <label htmlFor='user-input' className='label'>Usuário:</label>
                </div>
                <div className='input-div'>
                    <input type='text' id='password-input' className='input' required/>
                    <label htmlFor='password-input' className='label'>Senha:</label>
                </div>
            </div>
        </div>
    );
}

export default SignOut;