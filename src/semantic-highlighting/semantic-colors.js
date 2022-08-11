const { syntaxCyan, danger, syntaxPurple, syntaxViolet, syntaxGreen, syntaxRed, syntaxBlue, text, comment, syntaxYellow, syntaxOrange, syntaxMagenta } = require('../colors/colors.js')

const semantic_colors = {
  "attribute": syntaxCyan.hex(),
  "enum": syntaxYellow.hex(),
  "function": {
    "foreground": syntaxCyan.hex(),
    "italic": false,
  },
  "function.unsafe": danger.hex(),
  "derive": syntaxPurple.hex(),
  "macro": syntaxCyan.hex(),
  "method": {
    "foreground": syntaxCyan.hex(),
    "italic": false,
  },
  "method.unsafe": danger.hex(),
  "namespace": syntaxViolet.hex(),
  "namespace.crateRoot": {
    "bold": true
  },
  "struct": syntaxYellow.hex(),
  "trait": syntaxPurple.hex(),
  "interface": syntaxPurple.hex(),
  "typeAlias": syntaxYellow.hex(),
  "union": syntaxYellow.hex(),
  "boolean": {
    "foreground": syntaxOrange.hex(),
    "italic": false
  },
  "character": syntaxGreen.hex(),
  "number": syntaxOrange.hex(),
  "string": syntaxGreen.hex(),
  "escapeSequence": syntaxRed.hex(),
  "formatSpecifier": syntaxRed.hex(),
  "operator": syntaxRed.hex(),
  "arithmetic": syntaxRed.hex(),
  "bitwise": syntaxRed.hex(),
  "comparison": syntaxRed.hex(),
  "logical": syntaxRed.hex(),
  "operator.controlFlow": syntaxRed.hex(),
  "punctuation": text.hex(),
  "attributeBracket": syntaxRed.hex(),
  "angle": syntaxRed.hex(),
  "brace": text.hex(),
  "bracket": text.hex(),
  "parenthesis": text.hex(),
  "colon": syntaxRed.hex(),
  "comma": text.hex(),
  "dot": text.hex(),
  "semicolon": text.hex(),
  "macroBang": text.hex(),
  "builtinAttribute": syntaxCyan.hex(),
  "builtinType": syntaxYellow.hex(),
  "comment": comment.hex(),
  "*.injected": {
    "italic": false,
  },
  "constParameter": {
    "foreground": syntaxYellow.hex(),
    "bold": true
  },
  "enumMember": syntaxYellow.hex(),
  "generic": text.hex(),
  "keyword": {
    "foreground": syntaxBlue.hex(),
    "italic": true,
  },
  "keyword.controlFlow": {
    "foreground": syntaxRed.hex(),
    "italic": false,
  },
  "keyword.async": syntaxMagenta.hex(),
  "keyword.unsafe": danger.hex(),
  "label": syntaxPurple.hex(),
  "lifetime": syntaxPurple.hex(),
  "parameter": syntaxYellow.hex(),
  "property": syntaxYellow.hex(),
  "selfKeyword": {
    "foreground": syntaxYellow.hex(),
    "bold": true,
    "italic": false
  },
  "selfTypeKeyword": {
    "foreground": syntaxYellow.hex(),
    "bold": true,
    "italic": false,
  },
  "typeParameter": {
    "foreground": syntaxYellow.hex(),
    "bold": true
  },
  "unresolvedReference": text.hex(),
  "variable": syntaxYellow.hex(),
  "variable.mutable": {
    "underline": true,
  },
  "variable.constant": {
    "bold": true
  },
  "variable.static": {
    "bold": true
  },
  "variable.static.mutable": {
    "foreground": danger.hex(),
    "underline": true,
    "bold": true,
  },
  "variable.callable": syntaxCyan.hex(),
}

module.exports = semantic_colors;