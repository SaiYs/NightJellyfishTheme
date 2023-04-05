import chroma from "https://esm.sh/chroma-js@2.4.2";

import { semantic_colors } from "./semantic-colors.ts";

export function template(colors: Record<string, chroma.Color>) {
  const themeColors = {
    "editor.background": colors.interBackground.hex(),
    "editor.foreground": colors.text.hex(),
    "editorLineNumber.foreground": colors.principal_2.hex(),
    "editorLineNumber.activeForeground": colors.principal_5.hex(),
    "editorCursor.foreground": colors.contrast.hex(),
    "editorLink.activeForeground": null,

    "editorInlayHint.background": colors.selection_1.hex(),
    "editorInlayHint.foreground": colors.text.hex(),

    "contrastActiveBorder": null,
    "contrastBorder": null,
    "focusBorder": colors.principal_3.hex(),
    "foreground": colors.text.hex(),
    "widget.shadow": colors.black.hex() + "30",
    "selection.background": colors.selection_2.hex(),
    "descriptionForeground": colors.text.hex(),
    "errorForeground": colors.danger.hex(),

    "icon.foreground": colors.text.hex(),

    "editorBracketHighlight.foreground1": colors.syntaxRed.hex(),
    "editorBracketHighlight.foreground2": colors.syntaxMagenta.hex(),
    "editorBracketHighlight.foreground3": colors.syntaxPurple.hex(),
    "editorBracketHighlight.foreground4": colors.syntaxViolet.hex(),
    "editorBracketHighlight.foreground5": colors.syntaxBlue.hex(),
    "editorBracketHighlight.foreground6": colors.syntaxCyan.hex(),

    "editorBracketPairGuide.activeBackground1": colors.syntaxRed.hex(),
    "editorBracketPairGuide.activeBackground2": colors.syntaxMagenta.hex(),
    "editorBracketPairGuide.activeBackground3": colors.syntaxPurple.hex(),
    "editorBracketPairGuide.activeBackground4": colors.syntaxViolet.hex(),
    "editorBracketPairGuide.activeBackground5": colors.syntaxBlue.hex(),
    "editorBracketPairGuide.activeBackground6": colors.syntaxCyan.hex(),

    "editorBracketHighlight.unexpectedBracket.foreground": colors.danger.hex(),

    "sash.hoverBorder": colors.principal_3.hex(),

    "window.activeBorder": colors.principal.hex(),
    "window.inactiveBorder": colors.principal.hex(),

    "textLink.foreground": colors.syntaxBlue.hex(),
    "textLink.activeForeground": colors.syntaxBlue.darken(0.3).hex(),

    "textBlockQuote.background": colors.principal_0.hex(),
    "textBlockQuote.border": colors.principal_4.hex(),
    "textCodeBlock.background": colors.principal_0.hex(),
    "textPreformat.foreground": colors.text.hex(),
    "textSeparator.foreground": colors.principal_0.hex(),

    "editor.selectionBackground": colors.selection_4.hex(),
    "editor.selectionForeground": colors.text.hex(),
    "editor.wordHighlightStrongBackground": colors.selection_1.hex(),
    "editor.wordHighlightStrongBorder": null,
    "editor.selectionHighlightBackground": colors.selection_0.hex(),
    "editor.selectionHighlightBorder": colors.selection_2.hex(),
    "editor.wordHighlightBackground": colors.selection_1.hex(),
    "editor.wordHighlightBorder": colors.selection_3.hex(),

    "editor.hoverHighlightBackground": colors.selection_1.hex(),

    "editor.inactiveSelectionBackground": colors.selection_1.hex(),

    "editor.lineHighlightBackground": colors.selection_0.hex(),
    "editor.lineHighlightBorder": null,

    "editor.findMatchBackground": colors.selection_0.hex(),
    "editor.findMatchBorder": colors.principal_5.hex(),

    "editor.findMatchHighlightBackground": colors.selection_1.hex(),
    "editor.findRangeHighlightBackground": null,

    "editor.rangeHighlightBackground": colors.selection_0.hex(),
    "editor.rangeHighlightForeground": colors.text.hex(),

    "editorBracketMatch.background": null,
    "editorBracketMatch.border": colors.principal_4.hex(),

    "editorWhitespace.foreground": colors.principal_1.hex(),

    "editorIndentGuide.background": colors.principal_1.hex(),
    "editorIndentGuide.activeBackground": colors.principal_3.hex(),

    "editorRuler.foreground": colors.principal.hex(),

    "editorCodeLens.foreground": colors.infoLight.hex(),

    "editorError.foreground": colors.danger.hex(),
    "editorError.border": null,
    "editorWarning.foreground": colors.warning.hex(),
    "editorWarning.border": null,

    "editorGutter.background": colors.interBackground.hex(),
    "editorGutter.modifiedBackground": colors.warning.hex(),
    "editorGutter.addedBackground": colors.succes.hex(),
    "editorGutter.deletedBackground": colors.danger.hex(),

    "editorWidget.border": colors.principal_2.hex(),
    "editorWidget.background": colors.principal_1.hex(),
    "editorWidget.resizeBorder": colors.infoLight.hex(),

    "editorSuggestWidget.background": colors.principal_0.hex(),
    "editorSuggestWidget.border": colors.principal_1.hex(),
    "editorSuggestWidget.foreground": colors.principal_5.hex(),
    "editorSuggestWidget.highlightForeground": colors.text.hex(),
    "editorSuggestWidget.selectedBackground": colors.principal_1.hex(),

    "editorHoverWidget.background": colors.principal_0.hex(),
    "editorHoverWidget.border": colors.principal_1.hex(),

    "editorMarkerNavigation.background": colors.principal_0.hex(),
    "editorMarkerNavigationInfo.background": colors.info.hex(),
    "editorMarkerNavigationError.background": colors.danger.hex(),
    "editorMarkerNavigationWarning.background": colors.warning.hex(),

    "toolbar.hoverBackground": colors.principal_1.hex(),
    "toolbar.hoverOutline": null,
    "toolbar.activeBackground": colors.principal_3.hex(),

    "button.foreground": colors.white.hex(),
    "button.background": colors.contrast.hex(),
    "button.border": null,
    "button.hoverBackground": colors.contrastDark.hex(),

    "button.secondaryForeground": colors.white.hex(),
    "button.secondaryBackground": colors.info.hex(),
    "button.secondaryHoverBackground": colors.infoDark.hex(),

    "checkbox.background": colors.principal_3.hex(),
    "checkbox.foreground": colors.white.hex(),
    "checkbox.border": null,

    "extensionButton.prominentForeground": colors.white.hex(),
    "extensionButton.prominentBackground": colors.contrast.hex(),
    "extensionButton.prominentHoverBackground": colors.contrastDark.hex(),

    "dropdown.background": colors.principal_0.hex(),
    "dropdown.border": colors.principal_0.hex(),
    "dropdown.foreground": colors.text.hex(),
    "dropdown.listBackground": colors.principal_0.hex(),
    "input.background": colors.principal.hex(),
    "input.border": colors.principal_1.hex(),
    "input.foreground": colors.text.hex(),
    "input.placeholderForeground": colors.principal_3.hex(),
    "inputOption.activeBorder": colors.principal_5.hex(),
    "inputValidation.errorBackground": colors.dangerDark.hex(),
    "inputValidation.errorBorder": colors.danger.hex(),
    "inputValidation.infoBackground": colors.infoDark.hex(),
    "inputValidation.infoBorder": colors.info.hex(),
    "inputValidation.warningBackground": colors.warningDark.hex(),
    "inputValidation.warningBorder": colors.warning.hex(),

    "scrollbar.shadow": colors.black.hex() + "50",
    "scrollbarSlider.activeBackground": colors.principal_3.hex() + "50",
    "scrollbarSlider.background": colors.principal_3.hex() + "50",
    "scrollbarSlider.hoverBackground": colors.principal_3.hex() + "80",

    "badge.background": colors.notificationBadge.hex(),
    "badge.foreground": colors.principal.hex(),

    "progressBar.background": colors.contrast.hex(),

    "breadcrumb.foreground": colors.info.hex(),
    "breadcrumb.focusForeground": colors.infoLight.hex(),
    "breadcrumb.activeSelectionForeground": colors.infoLight.hex(),
    "breadcrumbPicker.background": colors.principal_0.hex(),

    "sideBar.background": colors.interBackground.hex(),
    "sideBar.foreground": colors.principal_5.hex(),
    "sideBar.border": colors.interBorder.hex(),
    "sideBarTitle.foreground": colors.principal_5.hex(),
    "sideBarSectionHeader.background": colors.principal_0.hex(),
    "sideBarSectionHeader.foreground": colors.principal_5.hex(),
    "sideBar.dropBackground": null,

    "list.activeSelectionBackground": colors.principal_2.hex(),
    "list.activeSelectionForeground": colors.text.hex(),
    "list.hoverBackground": colors.principal_0.hex(),
    "list.hoverForeground": colors.principal_5.hex(),
    "list.inactiveSelectionBackground": colors.principal_1.hex(),
    "list.inactiveSelectionForeground": colors.text.hex(),
    "list.focusBackground": colors.principal_0.hex(),
    "list.focusForeground": colors.principal_5.hex(),
    "list.invalidItemForeground": colors.contrastDark.hex(),
    "list.dropBackground": colors.principal_2.hex(),
    "list.highlightForeground": colors.principal_5.hex(),

    "list.inactiveFocusBackground": null,
    "list.errorForeground": colors.danger.hex(),
    "list.warningForeground": colors.warningLight.hex(),
    "listFilterWidget.background": null,
    "listFilterWidget.outline": null,
    "listFilterWidget.noMatchesOutline": null,

    "activityBar.background": colors.interBackground.hex(),
    "activityBar.dropBackground": colors.principal_2.hex(),
    "activityBar.foreground": colors.principal_5.hex(),
    "activityBar.border": null,
    "activityBar.inactiveForeground": colors.principal_3.hex(),
    "activityBarBadge.background": colors.notificationBadge.hex(),
    "activityBarBadge.foreground": colors.principal.hex(),

    "activityBar.activeBorder": colors.contrast.hex(),
    "activityBar.activeBackground": colors.principal_0.hex(),
    "activityBar.activeFocusBorder": colors.contrast.hex(),

    "editorGroup.border": colors.interBorder.hex(),
    "editorGroup.dropBackground": colors.contrast.hex() + "70",
    "editorGroupHeader.noTabsBackground": colors.interBackground.hex(),
    "editorGroupHeader.tabsBackground": colors.interBackground.hex(),
    "editorGroupHeader.tabsBorder": colors.interBorder.hex(),

    "tab.border": colors.interBorder.hex(),
    "tab.hoverBorder": null,
    "tab.hoverBackground": colors.principal_1.hex(),
    "tab.hoverForeground": colors.text.hex(),
    "tab.activeBackground": colors.principal_0.hex(),
    "tab.activeForeground": colors.text.hex(),
    "tab.activeBorder": colors.contrast.hex(),
    "tab.activeModifiedBorder": colors.warningLight.hex(),
    "tab.inactiveBackground": colors.principal.hex(),
    "tab.inactiveForeground": colors.principal_4.hex(),
    "tab.inactiveModifiedBorder": colors.warningLight.hex() + 50,
    "tab.unfocusedHoverBorder": null,
    "tab.unfocusedHoverBackground": colors.principal_1.hex(),
    "tab.unfocusedHoverForeground": colors.principal_4.hex(),
    "tab.unfocusedActiveForeground": colors.principal_4.hex(),
    "tab.unfocusedActiveBackground": colors.principal_1.hex() + 60,
    "tab.unfocusedActiveBorder": colors.interBorder.hex(),
    "tab.unfocusedInactiveForeground": colors.principal_3.hex(),
    "tab.unfocusedInactiveBackground": colors.principal.hex(),
    "tab.unfocusedActiveModifiedBorder": colors.warningLight.hex() + 70,
    "tab.unfocusedInactiveModifiedBorder": colors.warningLight.hex() + 50,
    "editorPane.background": null,

    "menubar.selectionForeground": colors.text.hex(),
    "menubar.selectionBackground": colors.principal_1.hex(),
    "menubar.selectionBorder": null,
    "menu.foreground": colors.principal_5.hex(),
    "menu.background": colors.principal_0.hex(),
    "menu.selectionForeground": colors.text.hex(),
    "menu.selectionBackground": colors.principal_1.hex(),
    "menu.selectionBorder": null,
    "menu.separatorBackground": colors.interBorder.hex(),

    "minimap.findMatchHighlight": colors.succes.hex(),
    "minimap.selectionHighlight": colors.contrast.hex(),
    "minimap.errorHighlight": colors.danger.hex(),
    "minimap.warningHighlight": colors.warning.hex(),
    "minimap.background": colors.principal.hex(),
    "minimapSlider.background": colors.principal_3.hex() + 60,
    "minimapSlider.hoverBackground": colors.principal_2.hex() + 60,
    "minimapSlider.activeBackground": colors.principal_4.hex() + 60,
    "minimapGutter.addedBackground": colors.succes.hex(),
    "minimapGutter.modifiedBackground": colors.warning.hex(),
    "minimapGutter.deletedBackground": colors.danger.hex(),

    "diffEditor.insertedTextBackground": colors.gitInsertedBg.hex(),
    "diffEditor.insertedTextBorder": null,
    "diffEditor.removedTextBackground": colors.gitRemovedBg.hex(),
    "diffEditor.removedTextBorder": null,

    "debugExceptionWidget.background": colors.principal.hex(),
    "debugExceptionWidget.border": colors.interBorder.hex(),

    "peekView.border": colors.infoLight.hex(),
    "peekViewEditor.background": colors.principal.hex(),
    "peekViewEditor.matchHighlightBackground": colors.principal_2.hex(),
    "peekViewResult.background": colors.principal_0.hex(),
    "peekViewResult.fileForeground": colors.text.hex(),
    "peekViewResult.lineForeground": colors.text.hex(),
    "peekViewResult.matchHighlightBackground": colors.principal_2.hex(),
    "peekViewResult.selectionBackground": colors.principal_1.hex(),
    "peekViewResult.selectionForeground": colors.text.hex(),
    "peekViewTitle.background": colors.principal_0.hex(),
    "peekViewTitleDescription.foreground": colors.text.hex(),
    "peekViewTitleLabel.foreground": colors.text.hex(),

    "merge.currentHeaderBackground": colors.succesLight.hex() + "50",
    "merge.currentContentBackground": null,
    "merge.incomingHeaderBackground": colors.infoLight.hex() + "50",
    "merge.incomingContentBackground": null,
    "merge.border": null,
    "merge.commonContentBackground": colors.warningLight.hex() + "50",
    "merge.commonHeaderBackground": null,

    "editorOverviewRuler.currentContentForeground": colors.contrast.hex(),
    "editorOverviewRuler.incomingContentForeground": colors.contrast.hex(),
    "editorOverviewRuler.commonContentForeground": colors.contrast.hex(),

    "editorOverviewRuler.border": null,
    "editorOverviewRuler.findMatchForeground": colors.principal_1.hex(),
    "editorOverviewRuler.rangeHighlightForeground": colors.principal_3.hex(),
    "editorOverviewRuler.selectionHighlightForeground": colors.principal_2
      .hex(),
    "editorOverviewRuler.wordHighlightForeground": colors.principal_4.hex(),
    "editorOverviewRuler.wordHighlightStrongForeground": colors.principal_4
      .hex(),
    "editorOverviewRuler.modifiedForeground": colors.warningLight.hex(),
    "editorOverviewRuler.addedForeground": colors.succesLight.hex(),
    "editorOverviewRuler.deletedForeground": colors.danger.hex(),
    "editorOverviewRuler.errorForeground": colors.danger.hex(),
    "editorOverviewRuler.warningForeground": colors.warning.hex(),
    "editorOverviewRuler.infoForeground": colors.info.hex(),
    "editorOverviewRuler.bracketMatchForeground": colors.principal_2.hex(),

    "panel.background": colors.principal.hex(),
    "panel.border": colors.interBorder.hex(),
    "panelTitle.activeBorder": colors.contrast.hex(),
    "panelTitle.activeForeground": colors.text.hex(),
    "panelTitle.inactiveForeground": colors.principal_4.hex(),

    "panelSection.dropBackground": colors.contrast.hex(),
    "panelSectionHeader.background": colors.principal_0.hex(),
    "panelSectionHeader.foreground": colors.text.hex(),
    "panelSectionHeader.border": colors.interBorder.hex(),

    "statusBar.background": colors.principal.hex(),
    "statusBar.foreground": colors.principal_5.hex(),
    "statusBar.border": colors.interBorder.hex(),

    "statusBar.debuggingBackground": colors.warning.hex(),
    "statusBar.debuggingForeground": colors.principal.hex(),
    "statusBar.debuggingBorder": colors.warning.hex(),

    "statusBar.noFolderForeground": null,
    "statusBar.noFolderBackground": colors.principal.hex(),
    "statusBar.noFolderBorder": colors.interBorder.hex(),

    "statusBarItem.activeBackground": colors.principal_0.hex(),
    "statusBarItem.hoverBackground": colors.principal_1.hex(),
    "statusBarItem.prominentBackground": colors.principal_3.hex(),
    "statusBarItem.prominentForeground": colors.text.hex(),
    "statusBarItem.prominentHoverBackground": colors.principal_3.hex(),

    "titleBar.activeBackground": colors.principal.hex(),
    "titleBar.activeForeground": colors.principal_5.hex(),
    "titleBar.inactiveBackground": colors.principal.hex(),
    "titleBar.inactiveForeground": colors.principal_3.hex(),

    "notificationCenter.border": colors.interBorder.hex(),
    "notificationCenterHeader.foreground": colors.principal_5.hex(),
    "notificationCenterHeader.background": colors.principal_0.hex(),
    "notificationToast.border": colors.interBorder.hex(),

    "notifications.background": colors.principal.hex(),
    "notifications.foreground": colors.text.hex(),
    "notifications.border": colors.interBorder.hex(),
    "notificationLink.foreground": colors.contrast.hex(),

    "pickerGroup.foreground": colors.text.hex(),
    "pickerGroup.border": colors.interBorder.hex(),

    "debugToolBar.background": colors.principal_0.hex(),
    "debugToolBar.border": null,

    "welcomePage.buttonBackground": colors.principal_0.hex(),
    "welcomePage.buttonHoverBackground": colors.principal_1.hex(),
    "walkThrough.embeddedEditorBackground": colors.principal.hex(),

    "gitDecoration.addedResourceForeground": colors.succesLight.hex(),
    "gitDecoration.modifiedResourceForeground": colors.warningLight.hex(),
    "gitDecoration.deletedResourceForeground": colors.dangerLight.hex(),
    "gitDecoration.untrackedResourceForeground": colors.succesLight.hex(),
    "gitDecoration.ignoredResourceForeground": colors.gitignoreExplorer.hex(),
    "gitDecoration.conflictingResourceForeground": colors.danger.hex(),

    "terminal.background": colors.principal.hex(),
    "terminalCursor.foreground": colors.contrast.hex(),

    "terminal.ansiWhite": colors.text.hex(),
    "terminal.ansiBlack": colors.black.hex(),
    "terminal.ansiBlue": colors.syntaxViolet.hex(),
    "terminal.ansiCyan": colors.syntaxCyan.hex(),
    "terminal.ansiGreen": colors.syntaxGreen.hex(),
    "terminal.ansiMagenta": colors.syntaxPurple.hex(),
    "terminal.ansiRed": colors.syntaxRed.hex(),
    "terminal.ansiYellow": colors.syntaxYellow.hex(),

    "terminal.ansiBrightWhite": colors.white.hex(),
    "terminal.ansiBrightBlack": colors.principal_4.hex(),
    "terminal.ansiBrightBlue": colors.syntaxBlue.hex(),
    "terminal.ansiBrightCyan": colors.syntaxTeal.hex(),
    "terminal.ansiBrightGreen": colors.syntaxGrass.hex(),
    "terminal.ansiBrightMagenta": colors.syntaxMagenta.hex(),
    "terminal.ansiBrightRed": colors.syntaxOrange.hex(),
    "terminal.ansiBrightYellow": colors.syntaxLemon.hex(),
  };

  const tcNormalize = [
    {
      name: "normalize font style of certain components",
      scope: [
        "meta.property-list.css meta.property-value.css variable.other.less",
        "meta.property-list.scss variable.scss",
        "meta.property-list.sass variable.sass",
        "meta.brace",
        "keyword.operator.operator",
        "keyword.operator.or.regexp",
        "keyword.operator.expression.in",
        "keyword.operator.relational",
        "keyword.operator.assignment",
        "keyword.operator.comparison",
        "keyword.operator.type",
        "keyword.operator",
        "keyword",
        "punctuation.definintion.string",
        "punctuation",
        "variable.other.readwrite.js",
        "storage.type",
        "source.css",
        "string.quoted",
      ],
      settings: {
        fontStyle: "normal",
      },
    },
  ];

  const tcGlobalSettings = [
    {
      name: "Global settings",
      settings: {
        background: colors.principal.hex(),
        foreground: colors.text.hex(),
      },
    },
  ];

  const tcGit = [
    {
      name: "Changed",
      scope: [
        "markup.changed",
        "meta.diff.header.git",
        "meta.diff.header.from-file",
        "meta.diff.header.to-file",
      ],
      settings: {
        foreground: colors.infoLight.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Deleted",
      scope: "markup.deleted.diff",
      settings: {
        foreground: colors.danger.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Inserted",
      scope: "markup.inserted.diff",
      settings: {
        foreground: colors.succesLight.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcGeneral = [
    {
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      name: "Constant Character Escape",
      scope: "constant.character.escape",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Support Variable Property",
      scope: "support.variable.property",
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: colors.deprecated.hex(),
        background: colors.dangerDark.hex(),
      },
    },
    {
      name: "RegExp String",
      scope: [
        "string.regexp",
        "string.regexp keyword.other",
        "string.regexp punctuation.definition.string",
        "constant.character.escape.backslash.regexp",
        "constant.other.character-class.set.regexp",
        "constant.character.control.regexp",
      ],
      settings: {
        foreground: colors.syntaxLemon.hex(),
      },
    },
    {
      name: "Constant Other Color",
      scope: "constant.other.color",
      settings: {
        foreground: colors.regularText.hex(),
      },
    },

    {
      name: "Italics",
      scope: "italic",
      settings: {
        foreground: "",
        fontStyle: "italic",
      },
    },
    {
      name: "Bold",
      scope: "bold",
      settings: {
        foreground: colors.string.hex(),
        fontStyle: "bold",
      },
    },
    {
      name: "Quote",
      scope: "quote",
      settings: {
        foreground: colors.string.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Invalid",
      scope: "invalid",
      settings: {
        background: colors.danger.hex(),
        foreground: colors.white.hex(),
      },
    },
  ];

  const tcSpecialWords = [
    {
      name: "Library class/type",
      scope: [
        "support.variable",
        "support.type",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },

    {
      name: "Library (function & constant)",
      scope: [
        "support.function",
        "support.constant",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: "italic",
      },
    },

    {
      name: "Variable Property Other object property",
      scope: ["variable.other.object.property"],
      settings: {
        foreground: colors.text.hex(),
        fontStyle: "italic",
      },
    },

    {
      name: "Variable Instances",
      scope: [
        "variable.instance",
        "variable.other.instance",
        "variable.readwrite.instance",
        "variable.other.readwrite.instance",
      ],
      settings: {
        foreground: colors.variableInstance.hex(),
      },
    },

    {
      name: "",
      scope: [
        "variable.other.property",
        "variable.other.property.js",
        "variable.other.property.ts",
        "variable.object.property.ts",
        "	support.variable.property",
      ],
      settings: {
        foreground: colors.variableProperty.hex(),
      },
    },

    {
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },

    {
      name: "Storage type",
      scope: [
        "storage.type",

        "punctuation.definition.block.tag",

        "meta.method.declaration",
        "meta.method.declaration storage.type.js",
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "interface",
      scope: ["storage.type.interface"],
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      name: "Storage",
      scope: [
        "storage",
        "meta.class meta.method.declaration meta.var.expr storage.type.js",
        "storage.type.property.js",
        "storage.type.property.ts",
        "storage.type.property.tsx",
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
        fontStyle: "italic",
      },
    },

    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "Meta Delimiter Period",
      scope: "meta.delimiter.period",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Doctypes",
      scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Keyword Control Conditional",
      scope: [
        "keyword.control.conditional.js",
        "keyword.control.conditional.ts",
        "keyword.control.switch.js",
        "keyword.control.switch.ts",
        "keyword.control.conditional.svelte",
        "keyword.control.svelte",
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "loops",
      scope: ["keyword.control.loop.vue", "keyword.control.conditional.vue"],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "import control keyword",
      scope: "keyword.control",
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },

    {
      name: "Variable Parameter Function",
      scope: "variable.parameter.function",
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "function call",
      scope: "meta.function-call",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "Meta Property Name",
      scope: "meta.property-name",
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "Functions & Classes",
      scope: ["entity.name.function"],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name:
        "Support Constant, `new` keyword, Special Method Keyword, `debugger`, other keywords",
      scope: [
        "support.constant",
        "keyword.other.special-method",
        "keyword.other.new",
        "keyword.other.debugger",
      ],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
  ];

  const tcStorageNames = [
    {
      name: "object key",
      scope: ["meta.var.expr", "meta.object-literal.key"],
      settings: {
        foreground: colors.variableProperty.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: colors.variable.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Built-in constant",
      scope: [
        "constant.language",
        "punctuation.definition.constant",
        "variable.other.constant",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "meta.class entity.name.type.class",

        "meta.class entity.name.type.class.js",
        "entity.other.inherited-class.js",

        "meta.class entity.name.type.class.ts",
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "Inherited class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ];

  const tcStrings = [
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "String Quoted",
      scope: ["string.quoted", "string.quoted.single.js"],
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Backtics(``) in Template Strings",
      scope: "string.template punctuation.definition.string",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Punctuation Definition String",
      scope: "punctuation.definition.string",
      settings: {
        foreground: colors.string.hex(),
      },
    },
  ];

  const tcPunctuation = [
    {
      name: "Punctuation",
      scope: [
        "punctuation",
        "punctuation.separator",
        "meta.property-list.css.sass",
        "punctuation.accessor",

        "punctuation.accessor",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "Punctuation Tweaks",
      scope: [
        "punctuation.terminator.expression",
        "punctuation.definition.arguments",
        "punctuation.definition.array",
        "punctuation.section.array",
        "meta.array",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "More Punctuation Tweaks",
      scope: [
        "punctuation.definition.list.begin",
        "punctuation.definition.list.end",
        "punctuation.separator.arguments",
        "punctuation.definition.list",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "Markdown Punctuation",
      scope: [
        "punctuation.definition.string.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.string.end.markdown",
        "meta.link.inline.markdown punctuation.definition.string",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "TypeScript Import/Export Punctuations",
      scope: [
        "meta.import.ts punctuation.definition.block",
        "meta.import.tsx punctuation.definition.block",
        "meta.export.ts punctuation.definition.block",
        "meta.export.tsx punctuation.definition.block",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "Meta Braces and curly brackets",
      scope: [
        "meta.brace",

        "punctuation.definition",

        "punctuation.definition.parameters",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "Template Literals expressions",
      scope: ["punctuation.definition.template-expression"],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },

    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: colors.operator.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Keyword operator expressions",
      scope: ["keyword.operator.expression"],
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Assignment",
      scope: "keyword.operator.assignment",
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Arithmetic",
      scope: "keyword.operator.arithmetic",
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Increment",
      scope: ["keyword.operator.increment", "keyword.operator.decrement"],
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Ternary",
      scope: "keyword.operator.ternary",
      settings: {
        foreground: colors.operator.hex(),
      },
    },
    {
      name: "Keyword Operator Logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "keyword Operator Comparison",
      scope: ["keyword.operator.comparison"],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "Keyword Operator Relational",
      scope: "keyword.operator.relational",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcSpecialValues = [
    {
      name: "Number",
      scope: ["constant.numeric", "constant.character.numeric"],
      settings: {
        foreground: colors.number.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Null and undefined",
      scope: ["constant.language.null", "constant.language.undefined"],
      settings: {
        foreground: colors.nullUnd.hex(),
      },
    },
    {
      name: "Boolean",
      scope: ["constant.language.boolean"],
      settings: {
        foreground: colors.boolean.hex(),
      },
    },
  ];

  const tcStylesheets = [
    {
      name: "SCSS & SASS Variable",
      scope: [
        "variable.scss",
        "variable.sass",
        "variable.parameter.scss",
        "variable.parameter.sass",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "Keyword !important",
      scope: ["keyword.other.important.css", "keyword.other.important.scss"],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "keyframes rules",
      scope: [
        "meta.at-rule.keyframes.body.css",
        "source.css.scss meta.at-rule.keyframes.scss entity.other.attribute-name.scss",
      ],
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "colon (:) in stylesheets",
      scope: [
        "punctuation.separator.key-value.css",
        "punctuation.separator.key-value.scss",
        "punctuation.separator.key-value.less",
        "punctuation.separator.key-value.css.sass",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "Wildcard(*) selector in Stylesheets",
      scope: [
        "entity.name.tag.wildcard.css",
        "entity.name.tag.wildcard.less",
        "entity.name.tag.wildcard.scss",
        "entity.name.tag.wildcard.sass",
      ],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
  ];

  const tcJavascript = [
    {
      name: "js ts interface & alias",
      scope: [
        "entity.name.type.interface.js",
        "entity.name.type.interface.ts",
        "entity.name.type.alias.js",
        "entity.name.type.alias.ts",
        "entity.name.type.js",
        "entity.name.type.ts",
        "entity.name.type.module.js",
        "entity.name.type.module.ts",
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "javascript portotype methods",
      scope: ["support.variable.property.js", "support.variable.property.ts"],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Storage type",
      scope: [
        "storage.type.function.arrow.js",
        "storage.type.function.arrow.ts",
      ],
      settings: {
        fontStyle: "normal",
      },
    },
    {
      name: "this word in javascript",
      scope: ["variable.language.this.js", "variable.language.this.ts"],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: "Object literal key",
      scope: [
        "meta.objectliteral.js meta.object.member.js meta.object-literal.key.js",
        "variable.other.property.vue",
      ],
      settings: {
        foreground: colors.variableProperty.hex(),
      },
    },
    {
      name: "JavaScript module imports and exports",
      scope: [
        "variable.other.meta.import.js",
        "meta.import.js variable.other",
        "variable.other.meta.export.js",
        "meta.export.js variable.other",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "javascript function execution",
      scope: ["meta.function-call.js entity.name.function.js"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "TypeScript Punctuation Decorators",
      scope: [
        "meta.decorator punctuation.decorator.ts",
        "meta.decorator punctuation.decorator.tsx",
      ],
      settings: {
        foreground: colors.punctuation.hex(),
      },
    },
    {
      name: "TypeScript Variables and Object Properties",
      scope: [
        "variable.other.readwrite.alias.ts",
        "variable.other.readwrite.alias.tsx",
        "variable.other.readwrite.ts",
        "variable.other.readwrite.tsx",
        "variable.other.ts",
        "variable.other.tsx",
        "variable.tsx",
        "variable.ts",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "TypeScript Entity Name Types as Parameters",
      scope: [
        "meta.type.parameters.ts entity.name.type",
        "meta.type.parameters.tsx entity.name.type",
      ],
      settings: {
        foreground: colors.principal_5.hex(),
      },
    },
    {
      name: "JavaScript Variable Other ReadWrite",
      scope: ["variable.other.property", "variable.parameter"],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "Support Class Component",
      scope: ["support.class.component.js", "support.class.component.tsx"],
      settings: {
        foreground: colors.contrastText.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "decorator in javascript",
      scope: ["punctuation.decorator.js"],
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "Text nested in React tags",
      scope: [
        "meta.jsx.children",
        "meta.jsx.children.js",
        "meta.jsx.children.tsx",
      ],
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
    {
      name: "Punctuation Section Embedded",
      scope: "punctuation.section.embedded",
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: "TypeScript Entity Name Type",
      scope: ["entity.name.type.tsx", "entity.name.type.module.tsx"],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "TypeScript Method Declaration e.g. `constructor`",
      scope: [
        "meta.method.declaration storage.type.ts",
        "meta.method.declaration storage.type.tsx",
      ],
      settings: {
        foreground: colors.specialWordA.hex(),
      },
    },
    {
      name: "js & ts Variable Other Object",
      scope: [
        "variable.other.object.js",
        "variable.other.object.jsx",
        "variable.other.object.ts",
        "variable.other.object.tsx",
        "variable.object.property.js",
        "variable.object.property.jsx",
        "support.variable.vue",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "JavaScript Variables",
      scope: ["variable.js", "variable.other.js"],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "JavaScript Entity Name Type",
      scope: ["entity.name.type.js", "entity.name.type.module.js"],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "JavaScript Support Classes",
      scope: "support.class.js",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "Keyword, imports, returns javascript and typescript",
      scope: [
        "keyword.control.flow.js",
        "keyword.control.flow.ts",
        "keyword.control.flow.tsx",
        "keyword.control.import.js",
        "keyword.control.import.ts",
        "keyword.control.import.tsx",
        "keyword.control.from.js",
        "keyword.control.from.ts",
        "keyword.control.from.tsx",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcCoffescript = [
    {
      name: "CoffeScript Variable Assignment",
      scope: "variable.assignment.coffee",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "CoffeScript Parameter Function",
      scope: "variable.parameter.function.coffee",
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "meta arguments",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ];

  const tcCsharp = [
    {
      name: "C# Readwrite Variables",
      scope: "variable.other.readwrite.cs",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "C# Classes & Storage types",
      scope: ["entity.name.type.class.cs", "storage.type.cs"],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: "C# Namespaces",
      scope: "entity.name.type.namespace.cs",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
  ];

  const tcElixir = [
    {
      name: "Elixir Classes",
      scope: [
        "source.elixir support.type.elixir",
        "source.elixir meta.module.elixir entity.name.class.elixir",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: "Elixir Functions",
      scope: "source.elixir entity.name.function",
      settings: {
        foreground: colors.functionName.hex(),
      },
    },
    {
      name: "Elixir Constants",
      scope: [
        "source.elixir constant.other.symbol.elixir",
        "source.elixir constant.other.keywords.elixir",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: "Elixir String Punctuations",
      scope: "source.elixir punctuation.definition.string",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Elixir",
      scope: [
        "source.elixir variable.other.readwrite.module.elixir",
        "source.elixir variable.other.readwrite.module.elixir punctuation.definition.variable.elixir",
      ],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Elixir Binary Punctuations",
      scope: "source.elixir .punctuation.binary.elixir",
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcMarckdown = [
    {
      name: "Markdown Headings",
      scope: "markup.heading.markdown",
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown Italics",
      scope: "markup.italic.markdown",
      settings: {
        foreground: colors.syntaxOrange.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown Bold",
      scope: "markup.bold.markdown",
      settings: {
        foreground: colors.syntaxOrange.hex(),
        fontStyle: "bold",
      },
    },
    {
      name: "Markdown Quote + others",
      scope: "markup.quote.markdown",
      settings: {
        foreground: colors.syntaxGreen.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Markdown Links",
      scope: [
        "markup.underline.link.markdown",
        "markup.underline.link.image.markdown",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "Markdown Link Title and Description",
      scope: [
        "string.other.link.title.markdown",
        "string.other.link.description.markdown",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "Markdown MetaData Punctuation",
      scope: ["punctuation.definition.metadata.markdown"],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: "Markdown List Punctuation",
      scope: ["beginning.punctuation.definition.list.markdown"],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Markdown Inline Raw String",
      scope: "markup.inline.raw.string.markdown",
      settings: {
        foreground: colors.string.hex(),
      },
    },
  ];

  const tcGo = [
    {
      name: "Go Keywords",
      scope: [
        "source.go keyword.package.go",
        "source.go keyword.import.go",
        "source.go keyword.function.go",
        "source.go keyword.type.go",
        "source.go keyword.struct.go",
        "source.go keyword.interface.go",
        "source.go keyword.const.go",
        "source.go keyword.var.go",
        "source.go keyword.map.go",
        "source.go keyword.channel.go",
        "source.go keyword.control.go",
      ],
      settings: {
        foreground: colors.specialWordC.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Go Constants e.g. nil, string format (%s, %d, etc.)",
      scope: [
        "source.go constant.language.go",
        "source.go constant.other.placeholder.go",
      ],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
  ];

  const tcPython = [
    {
      name: "Language Constants in Python",
      scope: "constant.language.python",
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: "Python Function Parameter and Arguments",
      scope: [
        "variable.parameter.function.python",
        "meta.function-call.arguments.python",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Python Function Call",
      scope: ["meta.function-call.python", "meta.function-call.generic.python"],
      settings: {
        foreground: colors.functionName.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Punctuations in Python",
      scope: "punctuation.python",
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
    {
      name: "Decorator Functions in Python",
      scope: "entity.name.function.decorator.python",
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: "Python Language Variable",
      scope: "source.python variable.language.special",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
  ];

  const tcHtml = [
    {
      name: "HTML invalid Tag names",
      scope: [
        "invalid.illegal.unrecognized-tag.html entity.name.tag",
        "meta.tag.other.unrecognized.html entity.name.tag",
      ],
      settings: {
        foreground: colors.regularText.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "@ : = for html",
      scope: [
        "punctuation.separator.key-value.html",
        "punctuation.definition.tag.html",
      ],
      settings: {
        foreground: colors.regularText.hex(),
      },
    },
  ];

  const tcJson = [
    {
      name: "JSON Property Names",
      scope: "support.type.property-name.json",
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "JSON Support Constants",
      scope: "support.constant.json",
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: "JSON Property values (string)",
      scope: "meta.structure.dictionary.value.json string.quoted.double",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Strings in JSON values",
      scope: "string.quoted.double.json punctuation.definition.string.json",
      settings: {
        foreground: colors.string.hex(),
      },
    },
    {
      name: "Specific JSON Property values like null",
      scope:
        "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
  ];

  const tcPhp = [
    {
      name: "PHP tag",
      scope: [
        "punctuation.section.embedded.begin.php",
        "punctuation.section.embedded.end.php",
      ],
      settings: {
        foreground: colors.contrastText.hex(),
      },
    },
    {
      name: "other keywords",
      scope: [
        "keyword.other.namespace.php",
        "keyword.other.use.php",
        "keyword.other.use-as.php",
        "storage.modifier.php",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: "references",
      scope: [
        "meta.use.php",
        "meta.use.php punctuation.separator.inheritance.php",
        "entity.name.type.namespace.php",
        "entity.name.type.namespace.php punctuation.separator.inheritance.php",
      ],
      settings: {
        foreground: colors.variableInstance.hex(),
      },
    },
    {
      name: "PHP Variables",
      scope: [
        "variable.other.php",
        "variable.other.property.php",
        "punctuation.definition.variable.php",
        "support.class.php",
        "entity.other.alias.php",
      ],
      settings: {
        foreground: colors.variable.hex(),
      },
    },
    {
      name: "Punctuations in PHP function calls",
      scope: "meta.function-call.php punctuation",
      settings: {
        foreground: colors.regularText.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "blade keyword",
      scope: ["keyword.blade"],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ];

  const tcCc = [
    {
      name: "punctuation definition directive",
      scope: [
        "keyword.control.directive.include.cpp punctuation.definition.directive.cpp",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
  ];

  const tcRust = [
    {
      name: "Rust ",
      scope: [
        "meta.use.rust",
        "meta.function.definition.rust",
        "keyword.other.rust",
      ],
      settings: {
        foreground: colors.specialWordB.hex(),
      },
    },
    {
      name: "Rust ",
      scope: ["entity.name.namespace.rust"],
      settings: {
        foreground: colors.specialWordC.hex(),
      },
    },
    {
      name: "Rust ",
      scope: [
        "punctuation.definition.attribute.rust",
        "punctuation.brackets.attribute.rust",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
  ];

  const tcComments = [
    {
      name: "Comment",
      scope: [
        "comment",
        "comment.block.documentation punctuation.definition.bracket.curly",
      ],
      settings: {
        foreground: colors.comment.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Double-Slashed Comment",
      scope: [
        "comment.line.double-slash",
        "punctuation.definition.comment",
        "punctuation.whitespace.comment",
        "string.comment.buffered.block.pug",
      ],
      settings: {
        foreground: colors.comment.hex(),
      },
    },

    {
      name: "Data Type in commented documentation",
      scope: [
        "comment.block.documentation entity.name.type.instance.jsdoc",
        "comment.block.documentation entity.name.type.instance.phpdoc",
      ],
      settings: {
        foreground: colors.specialWordB.hex() + "80",
      },
    },
    {
      name: "Variables in commented documentation",
      scope: [
        "comment.block.documentation variable.other.jsdoc",
        "comment.block.documentation variable.other.phpdoc",
      ],
      settings: {
        foreground: colors.variable.hex() + "80",
      },
    },
    {
      name: "@tags in commented documentation",
      scope: [
        "comment.block.documentation storage.type.class.jsdoc",
        "comment.block.documentation punctuation.definition.block.tag.jsdoc",
      ],
      settings: {
        foreground: colors.specialWordA.hex() + "80",
      },
    },
  ];

  return {
    name: "NightJellyfish",
    type: "dark",
    colors: {
      ...themeColors,
    },
    tokenColors: [
      ...tcGlobalSettings,
      ...tcNormalize,
      ...tcGit,

      ...tcGeneral,
      ...tcSpecialWords,
      ...tcStorageNames,
      ...tcStrings,

      ...tcPunctuation,
      ...tcComments,
      ...tcSpecialValues,

      ...tcStylesheets,

      ...tcJavascript,
      ...tcHtml,
      ...tcJson,
      ...tcPython,
      ...tcCoffescript,
      ...tcCsharp,
      ...tcElixir,
      ...tcMarckdown,
      ...tcGo,
      ...tcRust,
      ...tcPhp,
      ...tcCc,
    ],
    semanticHighlighting: true,
    semanticTokenColors: semantic_colors(colors),
  };
}
