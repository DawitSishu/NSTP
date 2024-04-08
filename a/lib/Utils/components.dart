import 'package:flutter/material.dart';
import 'package:loading_animation_widget/loading_animation_widget.dart';

class InputBox extends StatefulWidget {
  const InputBox({
    Key? key,
    this.inputLabel,
    this.placeHolder,
    this.isPassword = false,
    this.textArea = false,
    this.update,
    this.initialValue,
    this.customController,
    this.isPhone = false,
    this.isCountry = false,
  }) : super(key: key);

  final inputLabel;
  final placeHolder;
  final isPassword;
  final textArea;
  final customController;
  final update; // Change the type of update function
  final isPhone;
  final isCountry;
  final String? initialValue;

  @override
  _InputBoxState createState() => _InputBoxState();
}

class _InputBoxState extends State<InputBox> {
  TextEditingController controller = TextEditingController();
  bool showError = false;
  FocusNode focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    focusNode.addListener(_handleFocusChange);
    if (widget.customController != null) {
      controller.text = widget.customController.text;
    } else {
      controller.text = widget.initialValue ?? '';
    }
  }

  @override
  void dispose() {
    focusNode.removeListener(_handleFocusChange);
    focusNode.dispose();
    controller.dispose();
    super.dispose();
  }

  void _validateInput() {
    final inputValue = controller.text.trim();
    final hasInput = inputValue.isNotEmpty;
    setState(() {
      showError = !hasInput;
    });
  }

  void _handleFocusChange() {
    if (!focusNode.hasFocus) {
      _validateInput();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextField(
          onChanged: (value) {
            if (widget.isCountry) {
              widget.update("+251$value");
            } else {
              widget.update(value);
            }
            _validateInput();
          },
          controller: widget.customController ?? controller,
          focusNode: focusNode,
          obscureText: widget.isPassword,
          keyboardType:
              widget.isPhone ? TextInputType.phone : TextInputType.text,
          decoration: InputDecoration(
            enabledBorder: const OutlineInputBorder(
              borderSide: BorderSide(color: Colors.white),
            ),
            border: const OutlineInputBorder(
              borderSide: BorderSide(width: 16, color: Colors.white),
            ),
            hintText: widget.placeHolder,
            hintStyle: const TextStyle(
              fontWeight: FontWeight.w300,
              fontSize: 14,
              fontFamily: 'Poppins',
            ),
            labelText: widget.inputLabel,
            labelStyle: const TextStyle(
              fontWeight: FontWeight.w300,
              fontSize: 14,
            ),
            errorText:
                showError ? 'Please enter a valid  ${widget.inputLabel}' : null,
            prefixIcon: widget.isCountry
                ? Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text('🇪🇹', style: TextStyle(fontSize: 24)),
                        SizedBox(width: 4),
                        Text('+251', style: TextStyle(fontSize: 14)),
                        SizedBox(width: 8),
                      ],
                    ),
                  )
                : null,
          ),
          minLines: 1,
          maxLines: widget.textArea ? 6 : 1,
        ),
      ],
    );
  }
}

class CustomButton extends StatefulWidget {
  const CustomButton({Key? key, required this.onPressed, this.label = 'Button'})
      : super(key: key);
  final onPressed;
  final String label;

  @override
  State<CustomButton> createState() => _CustomButtonState();
}

class _CustomButtonState extends State<CustomButton> {
  var loading = false;
  @override
  Widget build(BuildContext context) => SizedBox(
        height: 50,
        child: ElevatedButton(
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.transparent,
            padding: EdgeInsets.zero,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(10.0),
            ),
          ),
          onPressed: () async {
            if (!loading) {
              setState(() {
                loading = true;
              });
              await widget.onPressed();
              loading = false;
              setState(() {});
            }
          },
          child: Ink(
            decoration: BoxDecoration(
              gradient: const LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Color.fromARGB(255, 36, 107, 253),
                  Color.fromARGB(255, 80, 137, 255)
                ],
              ),
              borderRadius: BorderRadius.circular(10),
            ),
            child: Container(
              padding: const EdgeInsets.fromLTRB(0, 10, 0, 10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
              ),
              constraints: const BoxConstraints(
                maxWidth: 250,
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    margin: EdgeInsets.only(right: 5),
                    child: loading
                        ? LoadingAnimationWidget.dotsTriangle(
                            color: Colors.white, size: 15)
                        : null,
                  ),
                  Text(
                    widget.label,
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 18,
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      );
}
