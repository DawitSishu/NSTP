class SignInData {
  SignInData({this.email = '', this.password = ''});
  String email;
  String password;

  bool checksignIn() => email.isEmpty || password.isEmpty;

  void getCredentials() {
    print({email, password});
  }
}
