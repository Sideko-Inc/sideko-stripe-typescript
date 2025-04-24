import {
  External$TaxProductRegistrationsResourceCountryOptionsCanada,
  Schemas$TaxProductRegistrationsResourceCountryOptionsCanada,
  TaxProductRegistrationsResourceCountryOptionsCanada,
} from "./tax-product-registrations-resource-country-options-canada";
import {
  External$TaxProductRegistrationsResourceCountryOptionsDefault,
  Schemas$TaxProductRegistrationsResourceCountryOptionsDefault,
  TaxProductRegistrationsResourceCountryOptionsDefault,
} from "./tax-product-registrations-resource-country-options-default";
import {
  External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods,
  Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods,
  TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods,
} from "./tax-product-registrations-resource-country-options-default-inbound-goods";
import {
  External$TaxProductRegistrationsResourceCountryOptionsEurope,
  Schemas$TaxProductRegistrationsResourceCountryOptionsEurope,
  TaxProductRegistrationsResourceCountryOptionsEurope,
} from "./tax-product-registrations-resource-country-options-europe";
import {
  External$TaxProductRegistrationsResourceCountryOptionsSimplified,
  Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified,
  TaxProductRegistrationsResourceCountryOptionsSimplified,
} from "./tax-product-registrations-resource-country-options-simplified";
import {
  External$TaxProductRegistrationsResourceCountryOptionsUnitedStates,
  Schemas$TaxProductRegistrationsResourceCountryOptionsUnitedStates,
  TaxProductRegistrationsResourceCountryOptionsUnitedStates,
} from "./tax-product-registrations-resource-country-options-united-states";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductRegistrationsResourceCountryOptions = {
  ae?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  al?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  am?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ao?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  at?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  au?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ba?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  bb?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  be?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  bg?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  bh?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  bs?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  by?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ca?: TaxProductRegistrationsResourceCountryOptionsCanada | undefined;
  cd?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  ch?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  cl?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  co?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  cr?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  cy?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  cz?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  de?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  dk?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ec?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ee?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  eg?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  es?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  fi?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  fr?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  gb?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ge?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  gn?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  gr?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  hr?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  hu?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  id?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ie?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  is?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  it?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  jp?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ke?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  kh?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  kr?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  kz?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  lt?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  lu?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  lv?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ma?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  md?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  me?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  mk?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  mr?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  mt?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  mx?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  my?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ng?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  nl?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  no?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  np?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  nz?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  om?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  pe?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  pl?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  pt?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ro?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  rs?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  ru?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  sa?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  se?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sg?:
    | TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  si?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sk?: TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sn?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  sr?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  th?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  tj?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  tr?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  tz?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  ug?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  us?: TaxProductRegistrationsResourceCountryOptionsUnitedStates | undefined;
  uy?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  uz?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  vn?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  za?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
  zm?: TaxProductRegistrationsResourceCountryOptionsSimplified | undefined;
  zw?: TaxProductRegistrationsResourceCountryOptionsDefault | undefined;
};

/**
 * @internal
 * TaxProductRegistrationsResourceCountryOptions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductRegistrationsResourceCountryOptions = {
  ae?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  al?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  am?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ao?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  at?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  au?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ba?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  bb?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  be?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  bg?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  bh?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  bs?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  by?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ca?: External$TaxProductRegistrationsResourceCountryOptionsCanada | undefined;
  cd?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  ch?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  cl?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  co?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  cr?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  cy?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  cz?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  de?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  dk?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ec?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ee?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  eg?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  es?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  fi?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  fr?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  gb?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ge?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  gn?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  gr?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  hr?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  hu?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  id?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ie?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  is?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  it?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  jp?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  ke?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  kh?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  kr?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  kz?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  lt?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  lu?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  lv?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ma?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  md?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  me?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  mk?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  mr?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  mt?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  mx?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  my?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ng?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  nl?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  no?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  np?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  nz?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  om?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  pe?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  pl?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  pt?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  ro?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  rs?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  ru?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  sa?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  se?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sg?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods
    | undefined;
  si?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sk?: External$TaxProductRegistrationsResourceCountryOptionsEurope | undefined;
  sn?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  sr?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  th?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  tj?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  tr?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  tz?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  ug?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  us?:
    | External$TaxProductRegistrationsResourceCountryOptionsUnitedStates
    | undefined;
  uy?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  uz?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  vn?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  za?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
  zm?:
    | External$TaxProductRegistrationsResourceCountryOptionsSimplified
    | undefined;
  zw?:
    | External$TaxProductRegistrationsResourceCountryOptionsDefault
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductRegistrationsResourceCountryOptions
 */
const SchemaIn$TaxProductRegistrationsResourceCountryOptions: z.ZodType<
  TaxProductRegistrationsResourceCountryOptions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ae: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    al: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    am: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ao: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    at: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    au: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    ba: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    bb: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    be: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    bg: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    bh: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    bs: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    by: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ca: Schemas$TaxProductRegistrationsResourceCountryOptionsCanada.in.optional(),
    cd: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    ch: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    cl: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    co: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    cr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    cy: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    cz: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    de: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    dk: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    ec: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ee: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    eg: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    es: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    fi: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    fr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    gb: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    ge: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    gn: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    gr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    hr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    hu: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    id: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ie: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    is: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    it: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    jp: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    ke: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    kh: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    kr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    kz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    lt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    lu: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    lv: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    ma: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    md: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    me: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    mk: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    mr: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    mt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    mx: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    my: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ng: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    nl: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    no: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    np: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    nz: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    om: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    pe: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    pl: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    pt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    ro: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    rs: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    ru: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    sa: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    se: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    sg: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.in.optional(),
    si: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    sk: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.in.optional(),
    sn: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    sr: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    th: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    tj: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    tr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    tz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    ug: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    us: Schemas$TaxProductRegistrationsResourceCountryOptionsUnitedStates.in.optional(),
    uy: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    uz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    vn: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    za: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
    zm: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.in.optional(),
    zw: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ae: "ae",
      al: "al",
      am: "am",
      ao: "ao",
      at: "at",
      au: "au",
      ba: "ba",
      bb: "bb",
      be: "be",
      bg: "bg",
      bh: "bh",
      bs: "bs",
      by: "by",
      ca: "ca",
      cd: "cd",
      ch: "ch",
      cl: "cl",
      co: "co",
      cr: "cr",
      cy: "cy",
      cz: "cz",
      de: "de",
      dk: "dk",
      ec: "ec",
      ee: "ee",
      eg: "eg",
      es: "es",
      fi: "fi",
      fr: "fr",
      gb: "gb",
      ge: "ge",
      gn: "gn",
      gr: "gr",
      hr: "hr",
      hu: "hu",
      id: "id",
      ie: "ie",
      is: "is",
      it: "it",
      jp: "jp",
      ke: "ke",
      kh: "kh",
      kr: "kr",
      kz: "kz",
      lt: "lt",
      lu: "lu",
      lv: "lv",
      ma: "ma",
      md: "md",
      me: "me",
      mk: "mk",
      mr: "mr",
      mt: "mt",
      mx: "mx",
      my: "my",
      ng: "ng",
      nl: "nl",
      no: "no",
      np: "np",
      nz: "nz",
      om: "om",
      pe: "pe",
      pl: "pl",
      pt: "pt",
      ro: "ro",
      rs: "rs",
      ru: "ru",
      sa: "sa",
      se: "se",
      sg: "sg",
      si: "si",
      sk: "sk",
      sn: "sn",
      sr: "sr",
      th: "th",
      tj: "tj",
      tr: "tr",
      tz: "tz",
      ug: "ug",
      us: "us",
      uy: "uy",
      uz: "uz",
      vn: "vn",
      za: "za",
      zm: "zm",
      zw: "zw",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductRegistrationsResourceCountryOptions
 */
const SchemaOut$TaxProductRegistrationsResourceCountryOptions: z.ZodType<
  External$TaxProductRegistrationsResourceCountryOptions, // output type of this zod object
  z.ZodTypeDef,
  TaxProductRegistrationsResourceCountryOptions // the object to be transformed
> = z
  .object({
    ae: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    al: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    am: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ao: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    at: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    au: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    ba: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    bb: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    be: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    bg: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    bh: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    bs: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    by: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ca: Schemas$TaxProductRegistrationsResourceCountryOptionsCanada.out.optional(),
    cd: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    ch: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    cl: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    co: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    cr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    cy: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    cz: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    de: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    dk: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    ec: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ee: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    eg: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    es: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    fi: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    fr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    gb: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    ge: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    gn: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    gr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    hr: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    hu: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    id: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ie: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    is: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    it: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    jp: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    ke: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    kh: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    kr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    kz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    lt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    lu: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    lv: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    ma: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    md: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    me: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    mk: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    mr: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    mt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    mx: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    my: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ng: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    nl: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    no: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    np: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    nz: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    om: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    pe: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    pl: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    pt: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    ro: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    rs: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    ru: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    sa: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    se: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    sg: Schemas$TaxProductRegistrationsResourceCountryOptionsDefaultInboundGoods.out.optional(),
    si: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    sk: Schemas$TaxProductRegistrationsResourceCountryOptionsEurope.out.optional(),
    sn: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    sr: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    th: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    tj: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    tr: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    tz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    ug: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    us: Schemas$TaxProductRegistrationsResourceCountryOptionsUnitedStates.out.optional(),
    uy: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    uz: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    vn: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    za: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
    zm: Schemas$TaxProductRegistrationsResourceCountryOptionsSimplified.out.optional(),
    zw: Schemas$TaxProductRegistrationsResourceCountryOptionsDefault.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ae: "ae",
      al: "al",
      am: "am",
      ao: "ao",
      at: "at",
      au: "au",
      ba: "ba",
      bb: "bb",
      be: "be",
      bg: "bg",
      bh: "bh",
      bs: "bs",
      by: "by",
      ca: "ca",
      cd: "cd",
      ch: "ch",
      cl: "cl",
      co: "co",
      cr: "cr",
      cy: "cy",
      cz: "cz",
      de: "de",
      dk: "dk",
      ec: "ec",
      ee: "ee",
      eg: "eg",
      es: "es",
      fi: "fi",
      fr: "fr",
      gb: "gb",
      ge: "ge",
      gn: "gn",
      gr: "gr",
      hr: "hr",
      hu: "hu",
      id: "id",
      ie: "ie",
      is: "is",
      it: "it",
      jp: "jp",
      ke: "ke",
      kh: "kh",
      kr: "kr",
      kz: "kz",
      lt: "lt",
      lu: "lu",
      lv: "lv",
      ma: "ma",
      md: "md",
      me: "me",
      mk: "mk",
      mr: "mr",
      mt: "mt",
      mx: "mx",
      my: "my",
      ng: "ng",
      nl: "nl",
      no: "no",
      np: "np",
      nz: "nz",
      om: "om",
      pe: "pe",
      pl: "pl",
      pt: "pt",
      ro: "ro",
      rs: "rs",
      ru: "ru",
      sa: "sa",
      se: "se",
      sg: "sg",
      si: "si",
      sk: "sk",
      sn: "sn",
      sr: "sr",
      th: "th",
      tj: "tj",
      tr: "tr",
      tz: "tz",
      ug: "ug",
      us: "us",
      uy: "uy",
      uz: "uz",
      vn: "vn",
      za: "za",
      zm: "zm",
      zw: "zw",
    });
  });

export const Schemas$TaxProductRegistrationsResourceCountryOptions = {
  in: SchemaIn$TaxProductRegistrationsResourceCountryOptions,
  out: SchemaOut$TaxProductRegistrationsResourceCountryOptions,
};
