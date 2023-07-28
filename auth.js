function authenticate(login, password) {
	if (login === 'login' && password === 'password') {
		return 'Weocome!';
	} else {
		return 'Login is not correct';
	}
}