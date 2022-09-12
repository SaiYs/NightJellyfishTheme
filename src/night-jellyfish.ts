import chroma from "https://esm.sh/chroma-js@2.4.2";
import { template } from "./common/base.ts";

const white = chroma("#ffffff");
const black = chroma("#000000");

const syntaxRed = chroma("#ff96b9");
const syntaxOrange = chroma("#ffa896");
const syntaxYellow = chroma("#ffdc96");
const syntaxLemon = chroma("#eeff96");
const syntaxGreen = chroma("#b9ff96");
const syntaxGrass = chroma("#96ffa8");
const syntaxTeal = chroma("#96ffdc");
const syntaxCyan = chroma("#96edff");
const syntaxBlue = chroma("#96b9ff");
const syntaxViolet = chroma("#a896ff");
const syntaxPurple = chroma("#dc96ff");
const syntaxMagenta = chroma("#ff96ed");

const text = chroma("#d1d1f7");

const principal = chroma("#1f1e33");
const principal_0 = chroma("#302f4f");
const principal_1 = chroma("#423f6c");
const principal_2 = chroma("#535088");
const principal_3 = chroma("#6663a3");
const principal_4 = chroma("#827fb4");
const principal_5 = chroma("#9d9bc4");

const danger = chroma(240, 80, 80);

const colors: Record<string, chroma.Color> = {
  // Basic Colors
  white,
  black,

  // Syntax Colors
  syntaxRed,
  syntaxOrange,
  syntaxYellow,
  syntaxLemon,
  syntaxGreen,
  syntaxGrass,
  syntaxTeal,
  syntaxCyan,
  syntaxBlue,
  syntaxViolet,
  syntaxPurple,
  syntaxMagenta,

  contrast: chroma(255, 80, 255), // rgb(255, 80, 255)
  contrastLight: chroma(255, 190, 255), // rgb(255, 190, 255)
  contrastDark: chroma(150, 0, 150), // rgb(150, 0, 150)

  comment: chroma("#78909c"),

  // Status Colors
  info: chroma(100, 180, 250), // rgb(100, 180, 250)
  infoLight: chroma(156, 217, 255), // rgb(156, 217, 255)
  infoDark: chroma(40, 72, 100), //rgb(40, 72, 100)

  succes: chroma(110, 180, 80), // rgb(110, 180, 80)
  succesLight: chroma(161, 216, 132), // rgb(161, 216, 132)
  succesDark: chroma(44, 72, 32), // rgb(44, 72, 32)

  warning: chroma(255, 200, 40), // rgb(255, 200, 40)
  warningLight: chroma(255, 227, 156), // rgb(255, 227, 156)
  warningDark: chroma(102, 80, 16), // rgb(102, 80, 16)

  danger: chroma(240, 80, 80), // rgb(240, 80, 80)
  dangerLight: chroma(216, 130, 130), // rgb(216, 130, 130)
  dangerDark: chroma(71, 32, 32), // rgb(71, 32, 32)

  // Test Colors
  testA: chroma(255, 255, 0), // rgb(255, 255, 0)
  testB: chroma(0, 255, 0), // rgb(0, 255, 0)
  testC: chroma(255, 100, 0), // rgb(255, 100, 0)

  principal,
  principal_0,
  principal_1,
  principal_2,
  principal_3,
  principal_4,
  principal_5,

  text,

  gitInsertedBg: chroma("#14332E"),
  gitRemovedBg: chroma("#1E131C"),
  gitignoreExplorer: principal.brighten(1.5),

  // INTERFACE COLORS
  interBackground: principal,
  interBorder: principal_1,
  notificationBadge: white,

  // INTERFACE SELECTIO
  selection_0: principal_5.alpha(.1),
  selection_1: principal_5.alpha(.2),
  selection_2: principal_5.alpha(.3),
  selection_3: principal_5.alpha(.4),
  selection_4: principal_2.alpha(.6),

  // Syntax Colors
  variable: syntaxYellow,
  variableProperty: syntaxOrange,
  contrastText: syntaxMagenta,
  variableInstance: syntaxOrange,
  specialWordA: syntaxBlue,
  specialWordB: syntaxViolet,
  specialWordC: syntaxPurple,
  functionName: syntaxCyan,
  string: syntaxGreen,
  operator: syntaxRed,
  regularText: text,
  number: syntaxTeal,
  boolean: syntaxTeal,
  nullUnd: syntaxRed,
  punctuation: text,
  deprecated: danger,
};

export const theme = template(colors);
