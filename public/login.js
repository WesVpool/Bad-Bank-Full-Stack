function Login(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}

  function userLogin(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    const index1 = ctx.users.findIndex(x => x.email === `${email}`)
    const log = ctx.users.splice(index1, 1)
    ctx.users = [log[0], ...ctx.users]
    console.log(ctx.users)
    //ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }
  //const index = ctx.users.findIndex(x => x.email === `${email}`);

  return (
    <Card
    bgcolor="primary"
    header="Account Login"
    status={status}
    body={show ? (  
            <>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={userLogin}>Login</button>
            </>
          ):(
            <>
            <h5>Success! Welcome {ctx.users[0].name}!</h5>
            <button type="submit" className="btn btn-light" onClick={console.log("email")}>Login To Another Account</button>
            </>
          )}
  />
)
}
