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
    "widget.shadow": `${colors.black.hex()}30`,
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

    "scrollbar.shadow": `${colors.black.hex()}50`,
    "scrollbarSlider.activeBackground": `${colors.principal_3.hex()}50`,
    "scrollbarSlider.background": `${colors.principal_3.hex()}50`,
    "scrollbarSlider.hoverBackground": `${colors.principal_3.hex()}80`,

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
    "editorGroup.dropBackground": `${colors.contrast.hex()}70`,
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

    "merge.currentHeaderBackground": `${colors.succesLight.hex()}50`,
    "merge.currentContentBackground": null,
    "merge.incomingHeaderBackground": `${colors.infoLight.hex()}50`,
    "merge.incomingContentBackground": null,
    "merge.border": null,
    "merge.commonContentBackground": `${colors.warningLight.hex()}50`,
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
    "statusBar.foreground": colors.text.hex(),
    "statusBar.border": colors.interBorder.hex(),

    "statusBar.debuggingBackground": colors.contrastDark.hex(),
    "statusBar.debuggingForeground": colors.text.hex(),
    "statusBar.debuggingBorder": colors.interBorder.hex(),

    "statusBar.noFolderBackground": colors.principal.hex(),
    "statusBar.noFolderForeground": colors.text.hex(),
    "statusBar.noFolderBorder": colors.interBorder.hex(),

    "statusBarItem.activeBackground": colors.principal_0.hex(),
    "statusBarItem.hoverBackground": colors.principal_1.hex(),
    "statusBarItem.prominentBackground": colors.principal_3.hex(),
    "statusBarItem.prominentForeground": colors.text.hex(),
    "statusBarItem.prominentHoverBackground": colors.principal_3.hex(),

    "statusBarItem.remoteBackground": colors.white.hex(),
    "statusBarItem.remoteForeground": colors.principal.hex(),

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
    // gloabal settings
    {
      name: "Global settings",
      settings: {
        background: colors.principal.hex(),
        foreground: colors.text.hex(),
      },
    },
  ];

  const tcGit = [
    // GIT  colors
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
      // reserved language variables like this, super, self, etc.
      name: "Language Variable",
      scope: "variable.language",
      settings: {
        foreground: colors.syntaxBlue.hex(),
      },
    },
    {
      // escape sequences like \e
      name: "Constant Character Escape",
      scope: "constant.character.escape",
      settings: {
        foreground: colors.syntaxLemon.hex(),
      },
    },
    {
      // the </> of the tag & (,) in pug
      name: "Meta Tag",
      scope: ["punctuation.definition.tag", "meta.tag"],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      // HTML & PUG atributes
      name: "Tag attribute",
      scope: ["entity.other.attribute-name", "entity.name.type.svelte"],
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: "italic",
      },
    },
    {
      // pug classes
      name: "Pug Classes",
      scope: "entity.other.attribute-name.class.pug",
      settings: {
        foreground: colors.syntaxYellow.hex(),
        fontStyle: "italic",
      },
    },
    {
      // function name
      name: "Support Variable Property",
      scope: "support.variable.property",
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Invalid deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: colors.danger.hex(),
        background: colors.dangerDark.hex(),
      },
    },
    {
      name: "RegExp String",
      scope: [
        "string.regexp",
        "string.regexp keyword.other",
        "string.regexp punctuation.definition.string",
        "meta.group.regexp",
        "meta.group.regexp.js",
        "meta.group.regexp.ts",
        "constant.character.escape.backslash.regexp",
        "constant.other.character-class.set.regexp",
        "constant.character.control.regexp",
      ],
      settings: {
        foreground: colors.syntaxLemon.hex(),
      },
    },
    {
      // hex color
      name: "Constant Other Color",
      scope: "constant.other.color",
      settings: {
        foreground: colors.text.hex(),
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
        foreground: colors.syntaxGreen.hex(),
        fontStyle: "bold",
      },
    },
    {
      name: "Quote",
      scope: "quote",
      settings: {
        foreground: colors.syntaxGreen.hex(),
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
      // types provided by the framework/library,
      name: "Library class/type",
      scope: [
        // variables provided by the framework/library. For example global in javascript
        "support.variable",
        // types provided by the framework/library, this is probably only used for
        // languages derived from C, which has typedef (and struct).
        // Most other languages would introduce new types as classes.
        "support.type",
        // when the framework/library provides classes.
        // 'support.class',
        // 'entity.name.type.class',
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
      },
    },
    {
      name: "Library (function & constant)",
      scope: [
        // functions provided by the framework/library
        // like log in console.log()
        "support.function",
        // constants (magic values) provided by the framework/library.
        "support.constant",
        "support.class.promise",
        "storage.modifier.async",
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: "italic",
      },
    },

    // object properties before the last property
    // object.[propertyA.propertyAA].propertyAAA
    {
      name: "Variable Property Other object property",
      scope: ["variable.other.object.property"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
        fontStyle: "italic",
      },
    },

    // Last object property
    // object.propertyA.propertyAA.[propertyAAA]
    {
      name: "Variable Instances",
      scope: [
        "variable.instance",
        "variable.other.instance",
        "variable.readwrite.instance",
        "variable.other.readwrite.instance",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },

    {
      // Math in Math.random() in javascript
      name: "Support Constant Math",
      scope: "support.constant.math",
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },

    {
      name: "Storage type",
      scope: [
        // var let const class function type
        "storage.type",
        // @param, @returns
        "punctuation.definition.block.tag",
        // JavaScript Method Declaration e.g. `constructor`
        "meta.method.declaration",
        "meta.method.declaration storage.type",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Storage",
      scope: [
        "storage",
        "meta.class meta.method.declaration meta.var.expr storage.type",
        "storage.type.property",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
        fontStyle: "italic",
      },
    },

    {
      name: "Entity Name Tag Custom",
      scope: "entity.name.tag.custom",
      settings: {
        foreground: colors.syntaxPurple.hex(),
      },
    },
    {
      name: "Meta Delimiter Period",
      scope: "meta.delimiter.period",
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Meta Selector",
      scope: "meta.selector",
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Doctypes",
      scope: ["entity.name.tag.doctype", "meta.tag.sgml.doctype"],
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Keyword Control Conditional",
      scope: [
        "keyword.control.conditional",
        "keyword.control.switch",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "loops",
      scope: [
        "keyword.control.loop",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "italic",
      },
    },
    {
      // mainly related to flow control like continue, while, return, etc.
      // at rule name in css & scss & sass
      name: "import control keyword",
      scope: "keyword.control",
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "italic",
      },
    },

    {
      name: "Variable Parameter Function",
      scope: "variable.parameter.function",
      settings: {
        foreground: colors.syntaxCyan.hex(),
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
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Keyword Control Operator",
      scope: "keyword.control.operator",
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      // function name in javascript and mixins and function names in sass & scss
      name: "Functions & Classes",
      scope: ["entity.name.function"],
      settings: {
        foreground: colors.syntaxCyan.hex(),
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
        foreground: colors.syntaxCyan.hex(),
      },
    },
  ];

  const tcStorageNames = [
    // Storage names
    {
      name: "object key",
      scope: ["meta.var.expr", "meta.object-literal.key"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Variable",
      scope: "variable",
      settings: {
        foreground: colors.syntaxYellow.hex(),
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
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "User-defined constant",
      scope: ["constant.character", "constant.other"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "Class name",
      scope: [
        "entity.name.class",
        "meta.class entity.name.type.class",
      ],
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Inherited class",
      scope: [
        "entity.other.inherited-class",
      ],
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
  ];

  const tcStrings = [
    {
      name: "String",
      scope: "string",
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "String Quoted",
      scope: ["string.quoted"],
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Backtics(``) in Template Strings",
      scope: "string.template punctuation.definition.string",
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Punctuation Definition String",
      scope: "punctuation.definition.string",
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
  ];

  const tcPunctuation = [
    {
      name: "Punctuation",
      scope: [
        "punctuation",
        "punctuation.separator",
        "punctuation.accessor",
        "meta.property-list.css.sass",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
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
        foreground: colors.text.hex(),
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
        foreground: colors.text.hex(),
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
        foreground: colors.syntaxRed.hex(),
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
        foreground: colors.text.hex(),
      },
    },
    {
      // () [] {}
      name: "Meta Braces and curly brackets",
      scope: [
        // () []
        "meta.brace",
        // {}
        "punctuation.definition",
        // () in function definitions e.g. function fnName()...
        "punctuation.definition.parameters",
      ],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      // ${}
      name: "Template Literals expressions",
      scope: ["punctuation.definition.template-expression"],
      settings: {
        foreground: colors.syntaxLemon.hex(),
      },
    },

    // KEYWORD OPERATORS
    {
      name: "Keyword Operator",
      scope: "keyword.operator",
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Keyword operator expressions",
      scope: ["keyword.operator.expression"],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // += -= *= /= %= &= |= ^= <<= and >>=
      name: "Keyword Operator Assignment",
      scope: "keyword.operator.assignment",
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // + - * / % ** ++ --
      name: "Keyword Operator Arithmetic",
      scope: "keyword.operator.arithmetic",
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // & | ^ ~ << >> >>>
      name: "Keyword Operator Bitwise",
      scope: "keyword.operator.bitwise",
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // ++
      name: "Keyword Operator Increment",
      scope: ["keyword.operator.increment", "keyword.operator.decrement"],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // ? :
      name: "Keyword Operator Ternary",
      scope: "keyword.operator.ternary",
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      name: "Keyword Operator Logical",
      scope: "keyword.operator.logical",
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "normal",
      },
    },
    {
      // <= >=
      name: "keyword Operator Comparison",
      scope: ["keyword.operator.comparison"],
      settings: {
        foreground: colors.syntaxPurple.hex(),
      },
    },
    {
      // =	≠	>	<	≥	≤
      name: "Keyword Operator Relational",
      scope: "keyword.operator.relational",
      settings: {
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcSpecialValues = [
    {
      name: "Number",
      scope: ["constant.numeric", "constant.character.numeric"],
      settings: {
        foreground: colors.syntaxTeal.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Null and undefined",
      scope: ["constant.language.null", "constant.language.undefined"],
      settings: {
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      name: "Boolean",
      scope: ["constant.language.boolean"],
      settings: {
        foreground: colors.syntaxTeal.hex(),
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
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "css and pug ID selector",
      scope: [
        "entity.other.attribute-name.id",
        "entity.other.attribute-name.id.css",
        "entity.other.attribute-name.id.css punctuation.definition.entity.css",
        "entity.other.attribute-name.id.scss",
        "entity.other.attribute-name.id.css.sass",
      ],
      settings: {
        foreground: colors.cssId.hex(),
      },
    },
    {
      name: "function declaration SASS",
      scope: [
        "support.function.name.sass.library",
        "source.sass entity.name.function",
      ],
      settings: {
        foreground: colors.sassFunction.hex(),
      },
    },
    {
      name: "css class selector",
      scope: [
        "entity.other.attribute-name.class.css",
        "entity.other.attribute-name.class.css punctuation.definition.entity.css",
        "entity.other.attribute-name.class.css.sass",
        "entity.other.attribute-name.class.scss",
      ],
      settings: {
        foreground: colors.cssClass.hex(),
      },
    },
    {
      name: "Tag selectors and &",
      scope: [
        "entity.name.tag.css",
        "entity.name.tag.less",
        "entity.name.tag.custom.css",
        "entity.name.tag.reference.scss",
        "entity.name.tag.css.sass",
      ],
      settings: {
        foreground: colors.cssTag.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "CSS Pseudo Class",
      scope: [
        //pseudo-class like :hover, :active, :focus, etc.
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-class.css punctuation.definition.entity.css",
        "entity.other.pseudo-class.css.sass",

        //pseudo-elements like ::-webkit...
        "entity.other.attribute-name.pseudo-element.css",
        "entity.other.attribute-name.pseudo-element.css punctuation.definition.entity.css",
      ],
      settings: {
        foreground: colors.cssPseudoClass.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "Property name stylesheets",
      scope: [
        "support.type.property-name.css",
        "support.type.property-name.css.sass",
      ],
      settings: {
        foreground: colors.cssProperty.hex(),
      },
    },
    {
      name: "Values in css",
      scope: ["support.constant.property-value.css"],
      settings: {
        foreground: colors.cssValue.hex(),
      },
    },
    {
      name: "Stylesheet Numbers and Units",
      scope: [
        "keyword.other.unit",
        "keyword.other.unit.css",
        "keyword.other.unit.scss",
        "keyword.other.unit.css.sass",
        "constant.numeric.css",
        "punctuation.definition.constant.css",
        "constant.numeric.css.sass",
      ],
      settings: {
        foreground: colors.cssUnits.hex(),
      },
    },
    {
      // Stylesheets special words: (orientation),(min-monochrome),(color),
      // (min-aspect-ratio), (min-resolution)
      name: "Support Type Property Name & entity name tags",
      scope: [
        "support.type.vendor.property-name",
        "support.constant.vendor.property-value",
        "support.type.property-name",
        "meta.property-list entity.name.tag",
      ],
      settings: {
        foreground: colors.cssSpecialWord.hex(),
        fontStyle: "normal",
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
      // keywords for sass
      name: "Keyword",
      scope: [
        //@ in at rules
        "punctuation.definition.keyword",
        "entity.name.tag.reference",

        // font-feature-values
        "entity.name.tag.custom.css",
        "entity.name.tag.custom.scss",
        "entity.name.tag.custom.sass",

        // function call
        "support.function.sass",
        "keyword.control.interpolation.sass",

        // operators
        "keyword.operator.css.sass",

        // Sass Reserved Word
        "keyword.other.reserved.sass",

        // @ rules
        "keyword.control.at-rule",
        "keyword.control.at-rule.css.sass",
      ],
      settings: {
        foreground: colors.cssSpecialWord.hex(),
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
        foreground: colors.syntaxRed.hex(),
      },
    },
    {
      // (*, ^ and $)
      name: "Wildcard(*) selector in Stylesheets",
      scope: [
        "entity.name.tag.wildcard.css",
        "entity.name.tag.wildcard.less",
        "entity.name.tag.wildcard.scss",
        "entity.name.tag.wildcard.sass",
      ],
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Attribute Name for CSS, SCSS and LESS",
      scope: [
        "meta.attribute-selector.css entity.other.attribute-name",
        "meta.attribute-selector.less entity.other.attribute-name.attribute",
        "entity.other.attribute-name.css.sass",
        "keyword.operator.attribute-selector.css.sass",
        "meta.attribute-selector",

        // SCSS
        "source.css.scss entity.other.attribute-name.attribute",
        "meta.attribute-selector.scss",
        "meta.attribute-selector.scss keyword.operator.scss",
        "meta.attribute-selector.scss punctuation.definition.string.begin.scss",
        "meta.attribute-selector.scss punctuation.definition.string.end.scss",
        "meta.attribute-selector.scss punctuation.definition.attribute-selector.begin.bracket.square.scss",
        "meta.attribute-selector.scss punctuation.definition.attribute-selector.end.bracket.square.scss",
        // SASS
        "entity.other.attribute-selector.sass",
        // CSS
        "meta.attribute-selector.css",
        "meta.attribute-selector.css keyword.operator.pattern.css",
        "meta.attribute-selector.css punctuation.definition.entity.begin.bracket.square.css",
        "meta.attribute-selector.css punctuation.definition.entity.end.bracket.square.css",
      ],
      settings: {
        foreground: colors.cssAttribute.hex(),
      },
    },
    {
      name: "SASS Interpolation",
      scope: [
        "support.function.interpolation.sass",
        "punctuation.definition.interpolation.begin.bracket.curly.scss",
        "punctuation.definition.interpolation.end.bracket.curly.scss",
      ],
      settings: {
        foreground: colors.sassInterpolation.hex(),
      },
    },
  ];

  // languages
  const tcJavascript = [
    {
      name: "js ts interface & alias",
      scope: [
        "entity.name.type.interface",
        "entity.name.type.alias",
      ],
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    // {
    //   name: "javascript portotype methods",
    //   scope: ["support.variable.property"],
    //   settings: {
    //     foreground: colors.syntaxViolet.hex(),
    //     fontStyle: "italic",
    //   },
    // },
    {
      // => of () => {}
      name: "Storage type",
      scope: [
        "storage.type.function.arrow",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "this word in javascript",
      scope: ["variable.language.this", "variable.language.this"],
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    {
      name: "Object literal key",
      scope: [
        "meta.objectliteral meta.object.member meta.object-literal.key",
        "variable.other.property.vue",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "JavaScript module imports and exports",
      scope: [
        "variable.other.meta.import",
        "meta.import variable.other",
        "variable.other.meta.export",
        "meta.export variable.other",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "javascript function execution",
      scope: ["meta.function-call entity.name.function"],
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "TypeScript Punctuation Decorators",
      scope: [
        "meta.decorator punctuation.decorator",
        "meta.decorator variable.other.readwrite",
        "meta.decorator entity.name.function",
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
      },
    },
    {
      name: "TypeScript Variables and Object Properties",
      scope: [
        "variable.other.readwrite.alias",
        "variable.other.readwrite",
        "variable.other",
        "variable",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "TypeScript Entity Name Types as Parameters",
      scope: [
        "meta.type.parameters entity.name.type",
      ],
      settings: {
        foreground: colors.principal_5.hex(),
      },
    },
    {
      name: "JavaScript Variable Other ReadWrite",
      scope: ["variable.other.property", "variable.parameter"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "Support Class Component",
      scope: ["support.class.component", "support.class.component"],
      settings: {
        foreground: colors.syntaxMagenta.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "decorator in javascript",
      scope: ["punctuation.decorator"],
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Text nested in React tags",
      scope: [
        "meta.jsx.children",
        "meta.tsx.children",
      ],
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      // {} jsx react
      name: "Punctuation Section Embedded",
      scope: "punctuation.section.embedded",
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: "TypeScript Method Declaration e.g. `constructor`",
      scope: [
        "meta.method.declaration storage.type",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
      },
    },
    {
      name: "js & ts Variable Other Object",
      scope: [
        "variable.other.object",
        "variable.object.property",
        "support.variable.vue",
      ],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "JavaScript Variables",
      scope: ["variable", "variable.other"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "JavaScript Entity Name Type",
      scope: ["entity.name.type", "entity.name.type.module"],
      settings: {
        foreground: colors.syntaxOrange.hex(),
      },
    },
    {
      name: "JavaScript Support Classes",
      scope: "support.class",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "TypeScript labels",
      scope: ["entity.name.label", "punctuation.separator.label"],
      settings: {
        foreground: colors.syntaxYellow.darken(0.5).hex(),
      },
    },
    {
      name: "returns javascript and typescript",
      scope: [
        "keyword.control.flow",
      ],
      settings: {
        foreground: colors.syntaxRed.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Keyword, imports javascript and typescript",
      scope: [
        "keyword.control.import",
        "keyword.control.from",
        "keyword.control.type",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Keyword, exports, defaults",
      scope: [
        "keyword.control.export",
        "keyword.control.default",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcCoffescript = [
    {
      name: "CoffeScript Variable Assignment",
      scope: "variable.assignment.coffee",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "CoffeScript Parameter Function",
      scope: "variable.parameter.function.coffee",
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "meta arguments",
      scope: ["meta.arguments.coffee", "variable.parameter.function.coffee"],
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
  ];

  const tcCsharp = [
    {
      name: "C# Readwrite Variables",
      scope: "variable.other.readwrite.cs",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "C# Classes & Storage types",
      scope: ["entity.name.type.class.cs", "storage.type.cs"],
      settings: {
        foreground: colors.syntaxViolet.hex(),
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
        foreground: colors.syntaxViolet.hex(),
      },
    },
    {
      name: "Elixir Functions",
      scope: "source.elixir entity.name.function",
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
    {
      name: "Elixir Constants",
      scope: [
        "source.elixir constant.other.symbol.elixir",
        "source.elixir constant.other.keywords.elixir",
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
      },
    },
    {
      name: "Elixir String Punctuations",
      scope: "source.elixir punctuation.definition.string",
      settings: {
        foreground: colors.syntaxGreen.hex(),
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
        foreground: colors.syntaxPurple.hex(),
        fontStyle: "italic",
      },
    },
  ];

  const tcMarkdown = [
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
        foreground: colors.syntaxGreen.hex(),
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
        foreground: colors.syntaxPurple.hex(),
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
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    {
      name: "Functions & Classes",
      scope: ["support.function.go"],
      settings: {
        foreground: colors.syntaxCyan.hex(),
      },
    },
  ];

  const tcPython = [
    {
      name: "Language Constants in Python",
      scope: "constant.language.python",
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    {
      name: "Python Function Parameter and Arguments",
      scope: [
        "variable.parameter.function.python",
        "meta.function-call.arguments.python",
      ],
      settings: {
        foreground: colors.syntaxViolet.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Python Function Call",
      scope: ["meta.function-call.python", "meta.function-call.generic.python"],
      settings: {
        foreground: colors.syntaxCyan.hex(),
        fontStyle: "italic",
      },
    },
    {
      name: "Punctuations in Python",
      scope: "punctuation.python",
      settings: {
        foreground: colors.text.hex(),
      },
    },
    {
      name: "Decorator Functions in Python",
      scope: "entity.name.function.decorator.python",
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    {
      name: "Python Language Variable",
      scope: "source.python variable.language.special",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
  ];

  const tcHtml = [
    {
      name: "HTML Tag names",
      scope: [
        "entity.name.tag",
        "meta.tag.other",
        "source.vue entity.name.tag.html invalid.illegal.unrecognized-tag.html",
        "source.vue entity.name.tag.html",
        "source.vue support.class.component.html",
        "meta.tag",
        "meta.tag.start.svelte",
        "meta.tag.end.svelte",
        "meta.tag.start.svelte keyword.control.svelte",
        "meta.tag.end.svelte keyword.control.svelte",
      ],
      settings: {
        foreground: colors.syntaxBlue.hex(),
        fontStyle: "normal",
      },
    },
    {
      name: "HTML invalid Tag names",
      scope: [
        "invalid.illegal.unrecognized-tag.html entity.name.tag",
        "meta.tag.other.unrecognized.html entity.name.tag",
      ],
      settings: {
        foreground: colors.text.hex(),
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
        foreground: colors.syntaxRed.hex(),
      },
    },
  ];

  const tcJson = [
    {
      name: "JSON Property Names",
      scope: "support.type.property-name.json",
      settings: {
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      // also in javascript
      name: "JSON Support Constants",
      scope: "support.constant.json",
      settings: {
        foreground: colors.syntaxMagenta.hex(),
      },
    },
    {
      name: "JSON Property values (string)",
      scope: "meta.structure.dictionary.value.json string.quoted.double",
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Strings in JSON values",
      scope: "string.quoted.double.json punctuation.definition.string.json",
      settings: {
        foreground: colors.syntaxGreen.hex(),
      },
    },
    {
      name: "Specific JSON Property values like null",
      scope:
        "meta.structure.dictionary.json meta.structure.dictionary.value constant.language",
      settings: {
        foreground: colors.syntaxRed.hex(),
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
        foreground: colors.syntaxMagenta.hex(),
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
        foreground: colors.syntaxViolet.hex(),
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
        foreground: colors.syntaxYellow.hex(),
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
        foreground: colors.syntaxYellow.hex(),
      },
    },
    {
      name: "Punctuations in PHP function calls",
      scope: "meta.function-call.php punctuation",
      settings: {
        foreground: colors.text.hex(),
        fontStyle: "italic",
      },
    },
    // BLADE
    {
      name: "blade keyword",
      scope: ["keyword.blade"],
      settings: {
        foreground: colors.syntaxViolet.hex(),
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
        foreground: colors.syntaxViolet.hex(),
      },
    },
  ];

  // const tcRust = [
  //   {
  //     name: "Rust ",
  //     scope: [
  //       "meta.use.rust",
  //       "meta.function.definition.rust",
  //       "keyword.other.rust",
  //     ],
  //     settings: {
  //       foreground: colors.syntaxViolet.hex(),
  //     },
  //   },
  //   {
  //     name: "Rust ",
  //     scope: ["entity.name.namespace.rust"],
  //     settings: {
  //       foreground: colors.syntaxPurple.hex(),
  //     },
  //   },
  //   {
  //     name: "Rust ",
  //     scope: ["entity.name.namespace.rust"],
  //     settings: {
  //       foreground: colors.syntaxPurple.hex(),
  //     },
  //   },
  //   {
  //     name: "Rust ",
  //     scope: [
  //       "punctuation.definition.attribute.rust",
  //       "punctuation.brackets.attribute.rust",
  //       // 'meta.attribute.rust'
  //     ],
  //     settings: {
  //       foreground: colors.syntaxRed.hex(),
  //     },
  //   },
  // ];

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

    //documentation inside comments
    {
      name: "Data Type in commented documentation",
      scope: [
        "comment.block.documentation entity.name.type.instance.jsdoc",
        "comment.block.documentation entity.name.type.instance.phpdoc",
      ],
      settings: {
        foreground: `${colors.syntaxViolet.hex()}80`,
      },
    },
    {
      name: "Variables in commented documentation",
      scope: [
        "comment.block.documentation variable.other.jsdoc",
        "comment.block.documentation variable.other.phpdoc",
      ],
      settings: {
        foreground: `${colors.syntaxYellow.hex()}80`,
      },
    },
    {
      name: "@tags in commented documentation",
      scope: [
        "comment.block.documentation storage.type.class.jsdoc",
        "comment.block.documentation punctuation.definition.block.tag.jsdoc",
      ],
      settings: {
        foreground: `${colors.syntaxBlue.hex()}80`,
      },
    },
  ];

  // const semanticTokenColors = {
  //   variable: colors.syntaxYellow.hex(),
  //   parameter: colors.syntaxYellow.hex(),
  //   type: colors.syntaxPurple.hex(),
  //   function: colors.syntaxCyan.hex(),
  //   'function.declaration': {
  //     fontStyle: 'bold',
  //   },
  //   method: colors.syntaxCyan.hex(),
  //   class: colors.syntaxCyan.hex(),
  //   'class.declaration': {
  //     fontStyle: 'bold',
  //   },
  //   'class.defaultLibrary': colors.syntaxViolet.hex(),
  //   property: colors.text.hex(),
  //   string: colors.syntaxGreen.hex(),
  //   number: colors.syntaxTeal.hex(),
  //   regexp: colors.syntaxLemon.hex(),
  //   comment: colors.comment.hex(),
  //   keyword: colors.syntaxRed.hex(),
  //   interface: colors.syntaxPurple.hex(),
  // }

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
      ...tcMarkdown,
      ...tcGo,
      // ...tcRust,
      ...tcPhp,
      ...tcCc,
    ],
    semanticHighlighting: true,
    semanticTokenColors: semantic_colors(colors),
  };
}
