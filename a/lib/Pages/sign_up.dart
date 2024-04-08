import 'package:a/Models/sign_in_data.dart';
import 'package:a/Utils/components.dart';
import 'package:flutter/material.dart';

class SignUP extends StatefulWidget {
  const SignUP({super.key});

  @override
  State<SignUP> createState() => _SignUPState();
}

class _SignUPState extends State<SignUP> {
  SignInData data = SignInData();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(
            Icons.lock,
            size: 100,
          ),
          SizedBox(
            height: 50,
          ),
          SingleChildScrollView(
            child: Padding(
              padding: EdgeInsets.symmetric(horizontal: 20.0),
              child: Column(
                children: [
                  InputBox(
                    inputLabel: "Email",
                    placeHolder: "Enter Email",
                    update: (value) {
                      data.email = value;
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  InputBox(
                    inputLabel: "Password",
                    isPassword: true,
                    placeHolder: "Enter Password",
                    update: (value) {
                      data.password = value;
                    },
                  ),
                  SizedBox(
                    height: 20,
                  ),
                  CustomButton(onPressed: () {}, label: "Log In"),
                  SizedBox(
                    height: 10,
                  ),
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Text(
                      "Don't have an account? ",
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                    TextButton(
                      onPressed: () {},
                      child: Text(
                        "Sign Up",
                        style: TextStyle(
                          color: Colors.blue,
                        ),
                      ),
                    ),
                  ])
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
