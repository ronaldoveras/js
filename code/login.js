function validarEmail(email) {
  if(!email.endsWith('@serpro.gov.br')) {
    throw new Error('Email inválido! Digite novamente!');
  }
}

function validarUsuario(email, senha) {
  validarEmail(email);
  if(!(email === 'admin@serpro.gov.br' && senha === '123456')) {
    throw new Error('Login e/ou senha inválidos!');
  }
}