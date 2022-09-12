const chroma = require("chroma-js");
const theme = require('./common/base.js')

let colors = {};

// Basic Colors
colors.white = chroma(255, 255, 255);
colors.black = chroma(0, 0, 0);

// Syntax Colors
colors.syntaxRed = chroma("#ff96b9");
colors.syntaxOrange = chroma("#ffa896");
colors.syntaxYellow = chroma("#ffdc96");
colors.syntaxLemon = chroma("#eeff96");
colors.syntaxGreen = chroma("#b9ff96");
colors.syntaxGrass = chroma("#96ffa8");
colors.syntaxTeal = chroma("#96ffdc");
colors.syntaxCyan = chroma("#96edff");
colors.syntaxBlue = chroma("#96b9ff");
colors.syntaxViolet = chroma("#a896ff");
colors.syntaxPurple = chroma("#dc96ff");
colors.syntaxMagenta = chroma("#ff96ed");

colors.contrast = chroma(255, 80, 255); // rgb(255, 80, 255)
colors.contrastLight = chroma(255, 190, 255); // rgb(255, 190, 255)
colors.contrastDark = chroma(150, 0, 150); // rgb(150, 0, 150)

colors.comment = chroma("#78909c");

// Status Colors
colors.info = chroma(100, 180, 250); // rgb(100, 180, 250)
colors.infoLight = chroma(156, 217, 255); // rgb(156, 217, 255)
colors.infoDark = chroma(40, 72, 100); //rgb(40, 72, 100)

colors.succes = chroma(110, 180, 80); // rgb(110, 180, 80)
colors.succesLight = chroma(161, 216, 132); // rgb(161, 216, 132)
colors.succesDark = chroma(44, 72, 32); // rgb(44, 72, 32)

colors.warning = chroma(255, 200, 40); // rgb(255, 200, 40)
colors.warningLight = chroma(255, 227, 156); // rgb(255, 227, 156)
colors.warningDark = chroma(102, 80, 16); // rgb(102, 80, 16)

colors.danger = chroma(240, 80, 80); // rgb(240, 80, 80)
colors.dangerLight = chroma(216, 130, 130); // rgb(216, 130, 130)
colors.dangerDark = chroma(71, 32, 32); // rgb(71, 32, 32)

// Test Colors
colors.testA = chroma(255, 255, 0); // rgb(255, 255, 0)
colors.testB = chroma(0, 255, 0); // rgb(0, 255, 0)
colors.testC = chroma(255, 100, 0); // rgb(255, 100, 0)

colors.principal = chroma("#1f1e33");
colors.principal_0 = chroma("#302f4f");
colors.principal_1 = chroma("#423f6c");
colors.principal_2 = chroma("#535088");
colors.principal_3 = chroma("#6663a3");
colors.principal_4 = chroma("#827fb4");
colors.principal_5 = chroma("#9d9bc4");

colors.text = chroma("#d1d1f7");

colors.gitInsertedBg = chroma("#14332E");
colors.gitRemovedBg = chroma("#1E131C");
colors.gitignoreExplorer = chroma("#635fa1");

// INTERFACE COLORS
colors.interBackground = colors.principal;
colors.interBorder = colors.principal_1;
colors.notificationBadge = colors.white;

// INTERFACE SELECTIO
colors.selection_0 = colors.principal_5.alpha(.1);
colors.selection_1 = colors.principal_5.alpha(.2);
colors.selection_2 = colors.principal_5.alpha(.3);
colors.selection_3 = colors.principal_5.alpha(.4);
colors.selection_4 = colors.principal_2.alpha(.6);

// Syntax Colors
colors.variable = colors.syntaxYellow;
colors.variableProperty = colors.syntaxOrange;
colors.contrastText = colors.syntaxMagenta;
colors.variableInstance = colors.syntaxOrange;
colors.specialWordA = colors.syntaxBlue;
colors.specialWordB = colors.syntaxViolet;
colors.specialWordC = colors.syntaxPurple;
colors.functionName = colors.syntaxCyan;
colors.string = colors.syntaxGreen;
colors.operator = colors.syntaxRed;
colors.regularText = colors.text;
colors.number = colors.syntaxTeal;
colors.boolean = colors.syntaxTeal;
colors.nullUnd = colors.syntaxRed;
colors.punctuation = colors.text;
colors.deprecated = colors.danger;

// Markup
colors.htmlTag = colors.contrastText;
colors.metaTag = colors.text;
colors.tagAttribute = colors.specialWordB;
colors.pugClass = colors.variable;

// Stylesheets
colors.cssAttribute = colors.syntaxGreen;
colors.cssValue = colors.syntaxOrange;
colors.cssTag = colors.syntaxRed;
colors.cssClass = colors.syntaxYellow;
colors.cssId = colors.syntaxBlue;
colors.cssProperty = colors.syntaxCyan;
colors.cssUnits = colors.number;
colors.cssSpecialWord = colors.syntaxViolet;
colors.cssPseudoClass = colors.syntaxPurple;
colors.sassFunction = colors.syntaxBlue;
colors.sassInterpolation = colors.syntaxRed;

module.exports = theme(colors)