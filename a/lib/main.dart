// ignore_for_file: prefer_const_constructors

import 'package:a/Pages/live_room.dart';
import 'package:a/Pages/sign_up.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'App',
      theme: ThemeData(
        brightness: Brightness.dark,
        fontFamily: 'Poppins',
      ),
      initialRoute: '/',
      routes: {"/": (context) => LiveRoom()},
    );
  }
}
