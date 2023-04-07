import {
  aria,
  forms,
  keyboard,
  language,
  nameRoleValue,
  parsing,
  semantics,
  sensoryAndVisualCues,
  structure,
  tables,
  textAlternatives,
  timeAndMedia,
} from "./axe-rules";

/**
 * This is a manually curated list of rules in `axe-core`,
 * separated by their dependence on dynamic content instead
 * of static HTML.
 *
 * Each rule should be placed in one and only one category.
 * Categories are in order of least to most restrictive, so
 * rules should be placed in the earliest category where they
 * are still properly ignored near dynamic content
 */
const rules = {
  /**
   * These rules can be evaluated against any component.
   */
  alwaysAllowed: [
    aria.ariaAllowedAttr,
    aria.ariaAllowedRole,
    aria.ariaHiddenBody,
    aria.ariaRoledescription,
    aria.ariaRoles,
    aria.ariaValidAttrValue,
    aria.presentationRoleConflict,
    forms.autocompleteValid,
    forms.formFieldMultipleLabels,
    keyboard.accesskeys,
    keyboard.focusOrderSemantics,
    keyboard.scrollableRegionFocusable,
    keyboard.tabindex,
    language.htmlLangValid,
    language.htmlXmlLangMismatch,
    language.validLang,
    nameRoleValue.ariaHiddenFocus,
    nameRoleValue.emptyHeading,
    parsing.duplicateIdActive,
    parsing.duplicateIdAria,
    parsing.duplicateId,
    parsing.marquee,
    semantics.identicalLinksSamePurpose,
    semantics.landmarkNoDuplicateBanner,
    semantics.landmarkNoDuplicateContentinfo,
    semantics.landmarkNoDuplicateMain,
    semantics.landmarkUnique,
    semantics.pAsHeading,
    sensoryAndVisualCues.metaViewportLarge,
    sensoryAndVisualCues.metaViewport,
    structure.avoidInlineSpacing,
    structure.cssOrientationLock,
    structure.hiddenContent,
    tables.scopeAttrValid,
    textAlternatives.serverSideImageMap,
    timeAndMedia.blink,
    timeAndMedia.metaRefresh,
    timeAndMedia.noAutoplayAudio,
  ],

  /**
   * These rules can't be resolved with a spread operator
   * in the node's attributes
   */
  requiresAttrs: [
    aria.ariaCommandName,
    aria.ariaDialogName,
    aria.ariaInputFieldName,
    aria.ariaMeterName,
    aria.ariaProgressbarName,
    aria.ariaToggleFieldName,
    aria.ariaTooltipName,
    aria.ariaTreeitemName,
    aria.ariaRequiredAttr,
    forms.labelTitleOnly,
    forms.label,
    forms.selectName,
    language.htmlHasLang,
    textAlternatives.areaAlt,
    textAlternatives.imageAlt,
    textAlternatives.imageRedundantAlt,
    textAlternatives.inputImageAlt,
    textAlternatives.objectAlt,
    textAlternatives.roleImgAlt,
    textAlternatives.svgImgAlt,
  ],

  /**
   * These rules can't be resolved with dynamic content
   * in the body of the node
   */
  requiresChildren: [
    aria.ariaRequiredChildren,
    aria.ariaText,
    aria.emptyTableHeader,
    keyboard.frameFocusableContent,
    keyboard.skipLink,
    nameRoleValue.ariaHiddenFocus,
    semantics.labelContentNameMismatch,
    structure.definitionList,
    structure.list,
    tables.tableDuplicateName,
    tables.tableFakeCaption,
    tables.thHasDataCells,
    textAlternatives.documentTitle,
    textAlternatives.frameTitleUnique,
    textAlternatives.frameTitle,
    textAlternatives.videoCaption,
    timeAndMedia.audioCaption,
  ],

  /**
   * These rules can be resolved by changing content in
   * either the node body or its attributes
   */
  requiresAttrsOrChildren: [
    nameRoleValue.inputButtonName,
    nameRoleValue.linkName,
  ],

  /**
   * These rules cannot be supported until multiple files
   * are analyzed at once. For now they are ignored.
   */
  requiresParent: [
    aria.ariaRequiredParent,
    keyboard.bypass,
    keyboard.nestedInteractive,
    keyboard.region,
    semantics.headingOrder,
    semantics.landmarkBannerIsTopLevel,
    semantics.landmarkComplementaryIsTopLevel,
    semantics.landmarkContentinfoIsTopLevel,
    semantics.landmarkMainIsTopLevel,
    semantics.landmarkOneMain,
    semantics.pageHasHeadingOne,
    structure.dlitem,
    structure.listitem,
    tables.tdHasHeader,
    tables.tdHeadersAttr,
  ],

  /**
   * These rules should not be enforced to all users of
   * the official Marko language server.
   */
  blacklist: [structure.frameTested],
};

export default rules;
