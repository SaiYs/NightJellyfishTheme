import chroma from "https://esm.sh/chroma-js@2.4.2";

export function semantic_colors(colors: Record<string, chroma.Color>) {
  return {
    "attribute": colors.syntaxCyan.hex(),
    "enum": colors.syntaxOrange.hex(),
    "function": {
      "foreground": colors.syntaxCyan.hex(),
      "italic": false,
    },
    "function.unsafe": colors.danger.hex(),
    "derive": colors.syntaxMagenta.hex(),
    "macro": colors.syntaxCyan.hex(),
    "method": {
      "foreground": colors.syntaxCyan.hex(),
      "italic": false,
    },
    "method.unsafe": colors.danger.hex(),
    "namespace": colors.syntaxViolet.hex(),
    "namespace.crateRoot": {
      "bold": true,
    },
    "struct": colors.syntaxOrange.hex(),
    "trait": colors.syntaxMagenta.hex(),
    "interface": colors.syntaxMagenta.hex(),
    "typeAlias": colors.syntaxOrange.hex(),
    "union": colors.syntaxOrange.hex(),
    "boolean": {
      "foreground": colors.syntaxTeal.hex(),
      "italic": false,
    },
    "number": colors.syntaxTeal.hex(),
    "string": colors.syntaxGreen.hex(),
    "character": colors.syntaxGreen.hex(),
    "escapeSequence": colors.syntaxRed.hex(),
    "formatSpecifier": colors.syntaxRed.hex(),
    "operator": colors.syntaxRed.hex(),
    "arithmetic": colors.syntaxRed.hex(),
    "bitwise": colors.syntaxRed.hex(),
    "comparison": colors.syntaxRed.hex(),
    "logical": colors.syntaxRed.hex(),
    "operator.controlFlow": colors.syntaxRed.hex(),
    "punctuation": colors.text.hex(),
    "attributeBracket": colors.syntaxRed.hex(),
    "angle": colors.syntaxRed.hex(),
    "brace": colors.text.hex(),
    "bracket": colors.text.hex(),
    "parenthesis": colors.text.hex(),
    "colon": colors.syntaxRed.hex(),
    "comma": colors.text.hex(),
    "dot": colors.text.hex(),
    "semicolon": colors.text.hex(),
    "macroBang": colors.text.hex(),
    "builtinAttribute": colors.syntaxCyan.hex(),
    "builtinType": colors.syntaxOrange.hex(),
    "comment": colors.comment.hex(),
    "*.injected": {
      "italic": false,
    },
    "constParameter": {
      "foreground": colors.syntaxYellow.hex(),
      "bold": true,
    },
    "enumMember": colors.syntaxYellow.hex(),
    "generic": colors.text.hex(),
    "keyword": {
      "foreground": colors.syntaxBlue.hex(),
      "italic": true,
    },
    "keyword.controlFlow": {
      "foreground": colors.syntaxRed.hex(),
      "italic": false,
    },
    "keyword.async": colors.syntaxGrass.hex(),
    "keyword.unsafe": colors.danger.hex(),
    "label": colors.syntaxPurple.hex(),
    "lifetime": colors.syntaxPurple.hex(),
    "parameter": colors.syntaxYellow.hex(),
    "property": colors.syntaxYellow.hex(),
    "selfKeyword": {
      "foreground": colors.syntaxYellow.hex(),
      "bold": true,
      "italic": false,
    },
    "selfTypeKeyword": {
      "foreground": colors.syntaxOrange.hex(),
      "bold": true,
      "italic": false,
    },
    "typeParameter": {
      "foreground": colors.syntaxOrange.hex(),
      "bold": true,
    },
    "variable": colors.syntaxYellow.hex(),
    "variable.mutable": {
      "underline": true,
    },
    "variable.constant": {
      "bold": true,
    },
    "variable.static": {
      "bold": true,
    },
    "variable.static.mutable": {
      "foreground": colors.danger.hex(),
      "underline": true,
      "bold": true,
    },
    "variable.callable": colors.syntaxCyan.hex(),

    "unresolvedReference": colors.white.hex(),
  };
}
