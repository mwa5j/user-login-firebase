import React from 'react'

const LoginView = ({onSubmit}) => {
    return (
        <div>
            <h1>Login </h1>
            <div style={containerStyle}>
                <form onSubmit={onSubmit}>
                    <div style={containerStyle}>
                        <label style={element}>
                        Email
                        <input style={element}
                            name="email"
                            type="email"
                            placeholder="Email"
                        />
                        </label>
                        <label style={element}>
                        Password
                        <input style={element}
                            name="password"
                            type="password"
                            placeholder="Password"
                        />
                        </label>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: '10px',
}

const element = {
    marginLeft: '10px',
    padding: '5px'
}



export default LoginView;