const chroma = require("chroma-js")

let colors = {}

// Basic Colors
colors.white = chroma(255, 255, 255)
colors.black = chroma(0, 0, 0)

// Syntax Colors
colors.syntaxRed = chroma(255, 120, 120) // rgb(255, 120, 120)
colors.syntaxOrange = chroma(255, 180, 130) // rgb(255, 180, 130)
colors.syntaxYellow = chroma(255, 220, 150) // rgb(255, 220, 150)
colors.syntaxBeige = chroma(219, 212, 186) // rgb(219, 212, 186)
colors.syntaxGreen = chroma(170, 230, 130) // rgb(170, 230, 130)
colors.syntaxCyan = chroma(0, 220, 220) // rgb(0, 220, 220)
colors.syntaxBlue = chroma(0, 177, 255) // rgb(0, 177, 255)
colors.syntaxViolet = chroma(150, 150, 255) // rgb(150, 150, 255)
colors.syntaxPurple = chroma(220, 140, 255) // rgb(220, 140, 255)
colors.syntaxMagenta = chroma(255, 80, 255) // rgb(255, 80, 255)

colors.contrast = colors.syntaxMagenta
colors.contrastLight = chroma(255, 190, 255) // rgb(255, 190, 255)
colors.contrastDark = chroma(150, 0, 150) // rgb(150, 0, 150)

colors.comment = chroma(100, 120, 130) // rgb(100, 120, 130)

// Status Colors
colors.infoDark = chroma(40, 72, 100) //rgb(40, 72, 100)
colors.info = chroma(100, 180, 250) // rgb(100, 180, 250)
colors.infoLight = chroma(156, 217, 255) // rgb(156, 217, 255)

colors.succesDark = chroma(44, 72, 32) // rgb(44, 72, 32)
colors.succes = chroma(110, 180, 80) // rgb(110, 180, 80)
colors.succesLight = chroma(161, 216, 132) // rgb(161, 216, 132)

colors.warningDark = chroma(102, 80, 16) // rgb(102, 80, 16)
colors.warning = chroma(255, 200, 40) // rgb(255, 200, 40)
colors.warningLight = chroma(255, 227, 156) // rgb(255, 227, 156)

colors.dangerDark = chroma(71, 32, 32) // rgb(71, 32, 32)
colors.danger = chroma(240, 80, 80) // rgb(240, 80, 80)
colors.dangerLight = chroma(216, 130, 130) // rgb(216, 130, 130)

// Test Colors
colors.testA = chroma(255, 255, 0) // rgb(255, 255, 0)
colors.testB = chroma(0, 255, 0) // rgb(0, 255, 0)
colors.testC = chroma(255, 100, 0) // rgb(255, 100, 0)

colors.principal = chroma(31, 30, 51) // rgb(31, 30, 51)
colors.principal_0 = chroma(47, 46, 78) // rgb(47, 46, 78)
colors.principal_1 = chroma(64, 62, 105) // rgb(64, 62, 105)
colors.principal_2 = chroma(80, 78, 132) // rgb(80, 78, 132)
colors.principal_3 = chroma(97, 94, 159) // rgb(97, 94, 159)
colors.principal_4 = chroma(123, 120, 176) // rgb(123, 120, 176)
colors.principal_5 = chroma(149, 147, 191) // rgb(149, 147, 191)

colors.text = chroma(207, 207, 210) // rgb(207, 207, 210)

colors.gitInsertedBg = chroma(20, 51, 46) // rgb(20, 51, 46)
colors.gitRemovedBg = chroma(30, 19, 28) // rgb(30, 19, 28)
colors.gitIgnoreExplorer = colors.principal.brighten(1.5)

// INTERFACE COLORS
colors.interBackground = colors.principal
colors.interBorder = colors.principal_1
colors.notificationBadge = colors.white

// INTERFACE SELECTIO
colors.selection_0 = colors.principal_5.alpha(.1)
colors.selection_1 = colors.principal_5.alpha(.2)
colors.selection_2 = colors.principal_5.alpha(.3)
colors.selection_3 = colors.principal_5.alpha(.4)
colors.selection_4 = colors.principal_2.alpha(.6)

// Syntax Colors
colors.variable = colors.syntaxYellow
colors.variableProperty = colors.syntaxYellow
colors.contrastText = colors.syntaxRed
colors.variableInstance = colors.syntaxOrange
colors.specialWordA = colors.syntaxBlue
colors.specialWordB = colors.syntaxViolet
colors.specialWordC = colors.syntaxPurple
colors.functionName = colors.syntaxCyan
colors.string = colors.syntaxGreen
colors.operator = colors.contrastText
colors.regularText = colors.text
colors.number = colors.syntaxOrange
colors.boolean = colors.contrastText
colors.nullUnd = colors.contrastText
colors.punctuation = colors.regularText
colors.deprecated = colors.danger

// Markup
colors.htmlTag = colors.contrastText
colors.metaTag = colors.text
colors.tagAttribute = colors.specialWordB
colors.pugClass = colors.variable

// Stylesheets
colors.cssAttribute = colors.syntaxGreen
colors.cssValue = colors.syntaxOrange
colors.cssTag = colors.syntaxRed
colors.cssClass = colors.syntaxYellow
colors.cssId = colors.syntaxBlue
colors.cssProperty = colors.syntaxCyan
colors.cssUnits = colors.number
colors.cssSpecialWord = colors.syntaxViolet
colors.cssPseudoClass = colors.syntaxPurple
colors.sassFunction = colors.syntaxBlue
colors.sassInterpolation = colors.syntaxRed

module.exports = colors
