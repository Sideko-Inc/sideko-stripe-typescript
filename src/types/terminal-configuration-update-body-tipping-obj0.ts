import {
  External$TerminalConfigurationUpdateBodyTippingObj0Aud,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Aud,
  TerminalConfigurationUpdateBodyTippingObj0Aud,
} from "./terminal-configuration-update-body-tipping-obj0-aud";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Cad,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Cad,
  TerminalConfigurationUpdateBodyTippingObj0Cad,
} from "./terminal-configuration-update-body-tipping-obj0-cad";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Chf,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Chf,
  TerminalConfigurationUpdateBodyTippingObj0Chf,
} from "./terminal-configuration-update-body-tipping-obj0-chf";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Czk,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Czk,
  TerminalConfigurationUpdateBodyTippingObj0Czk,
} from "./terminal-configuration-update-body-tipping-obj0-czk";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Dkk,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Dkk,
  TerminalConfigurationUpdateBodyTippingObj0Dkk,
} from "./terminal-configuration-update-body-tipping-obj0-dkk";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Eur,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Eur,
  TerminalConfigurationUpdateBodyTippingObj0Eur,
} from "./terminal-configuration-update-body-tipping-obj0-eur";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Gbp,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Gbp,
  TerminalConfigurationUpdateBodyTippingObj0Gbp,
} from "./terminal-configuration-update-body-tipping-obj0-gbp";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Hkd,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Hkd,
  TerminalConfigurationUpdateBodyTippingObj0Hkd,
} from "./terminal-configuration-update-body-tipping-obj0-hkd";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Jpy,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Jpy,
  TerminalConfigurationUpdateBodyTippingObj0Jpy,
} from "./terminal-configuration-update-body-tipping-obj0-jpy";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Myr,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Myr,
  TerminalConfigurationUpdateBodyTippingObj0Myr,
} from "./terminal-configuration-update-body-tipping-obj0-myr";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Nok,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Nok,
  TerminalConfigurationUpdateBodyTippingObj0Nok,
} from "./terminal-configuration-update-body-tipping-obj0-nok";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Nzd,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Nzd,
  TerminalConfigurationUpdateBodyTippingObj0Nzd,
} from "./terminal-configuration-update-body-tipping-obj0-nzd";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Pln,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Pln,
  TerminalConfigurationUpdateBodyTippingObj0Pln,
} from "./terminal-configuration-update-body-tipping-obj0-pln";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Sek,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Sek,
  TerminalConfigurationUpdateBodyTippingObj0Sek,
} from "./terminal-configuration-update-body-tipping-obj0-sek";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Sgd,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Sgd,
  TerminalConfigurationUpdateBodyTippingObj0Sgd,
} from "./terminal-configuration-update-body-tipping-obj0-sgd";
import {
  External$TerminalConfigurationUpdateBodyTippingObj0Usd,
  Schemas$TerminalConfigurationUpdateBodyTippingObj0Usd,
  TerminalConfigurationUpdateBodyTippingObj0Usd,
} from "./terminal-configuration-update-body-tipping-obj0-usd";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationUpdateBodyTippingObj0
 */
export type TerminalConfigurationUpdateBodyTippingObj0 = {
  aud?: TerminalConfigurationUpdateBodyTippingObj0Aud | undefined;
  cad?: TerminalConfigurationUpdateBodyTippingObj0Cad | undefined;
  chf?: TerminalConfigurationUpdateBodyTippingObj0Chf | undefined;
  czk?: TerminalConfigurationUpdateBodyTippingObj0Czk | undefined;
  dkk?: TerminalConfigurationUpdateBodyTippingObj0Dkk | undefined;
  eur?: TerminalConfigurationUpdateBodyTippingObj0Eur | undefined;
  gbp?: TerminalConfigurationUpdateBodyTippingObj0Gbp | undefined;
  hkd?: TerminalConfigurationUpdateBodyTippingObj0Hkd | undefined;
  jpy?: TerminalConfigurationUpdateBodyTippingObj0Jpy | undefined;
  myr?: TerminalConfigurationUpdateBodyTippingObj0Myr | undefined;
  nok?: TerminalConfigurationUpdateBodyTippingObj0Nok | undefined;
  nzd?: TerminalConfigurationUpdateBodyTippingObj0Nzd | undefined;
  pln?: TerminalConfigurationUpdateBodyTippingObj0Pln | undefined;
  sek?: TerminalConfigurationUpdateBodyTippingObj0Sek | undefined;
  sgd?: TerminalConfigurationUpdateBodyTippingObj0Sgd | undefined;
  usd?: TerminalConfigurationUpdateBodyTippingObj0Usd | undefined;
};

/**
 * @internal
 * TerminalConfigurationUpdateBodyTippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationUpdateBodyTippingObj0 = {
  aud?: External$TerminalConfigurationUpdateBodyTippingObj0Aud | undefined;
  cad?: External$TerminalConfigurationUpdateBodyTippingObj0Cad | undefined;
  chf?: External$TerminalConfigurationUpdateBodyTippingObj0Chf | undefined;
  czk?: External$TerminalConfigurationUpdateBodyTippingObj0Czk | undefined;
  dkk?: External$TerminalConfigurationUpdateBodyTippingObj0Dkk | undefined;
  eur?: External$TerminalConfigurationUpdateBodyTippingObj0Eur | undefined;
  gbp?: External$TerminalConfigurationUpdateBodyTippingObj0Gbp | undefined;
  hkd?: External$TerminalConfigurationUpdateBodyTippingObj0Hkd | undefined;
  jpy?: External$TerminalConfigurationUpdateBodyTippingObj0Jpy | undefined;
  myr?: External$TerminalConfigurationUpdateBodyTippingObj0Myr | undefined;
  nok?: External$TerminalConfigurationUpdateBodyTippingObj0Nok | undefined;
  nzd?: External$TerminalConfigurationUpdateBodyTippingObj0Nzd | undefined;
  pln?: External$TerminalConfigurationUpdateBodyTippingObj0Pln | undefined;
  sek?: External$TerminalConfigurationUpdateBodyTippingObj0Sek | undefined;
  sgd?: External$TerminalConfigurationUpdateBodyTippingObj0Sgd | undefined;
  usd?: External$TerminalConfigurationUpdateBodyTippingObj0Usd | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationUpdateBodyTippingObj0
 */
const SchemaIn$TerminalConfigurationUpdateBodyTippingObj0: z.ZodType<
  TerminalConfigurationUpdateBodyTippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aud: Schemas$TerminalConfigurationUpdateBodyTippingObj0Aud.in.optional(),
    cad: Schemas$TerminalConfigurationUpdateBodyTippingObj0Cad.in.optional(),
    chf: Schemas$TerminalConfigurationUpdateBodyTippingObj0Chf.in.optional(),
    czk: Schemas$TerminalConfigurationUpdateBodyTippingObj0Czk.in.optional(),
    dkk: Schemas$TerminalConfigurationUpdateBodyTippingObj0Dkk.in.optional(),
    eur: Schemas$TerminalConfigurationUpdateBodyTippingObj0Eur.in.optional(),
    gbp: Schemas$TerminalConfigurationUpdateBodyTippingObj0Gbp.in.optional(),
    hkd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Hkd.in.optional(),
    jpy: Schemas$TerminalConfigurationUpdateBodyTippingObj0Jpy.in.optional(),
    myr: Schemas$TerminalConfigurationUpdateBodyTippingObj0Myr.in.optional(),
    nok: Schemas$TerminalConfigurationUpdateBodyTippingObj0Nok.in.optional(),
    nzd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Nzd.in.optional(),
    pln: Schemas$TerminalConfigurationUpdateBodyTippingObj0Pln.in.optional(),
    sek: Schemas$TerminalConfigurationUpdateBodyTippingObj0Sek.in.optional(),
    sgd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Sgd.in.optional(),
    usd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Usd.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aud: "aud",
      cad: "cad",
      chf: "chf",
      czk: "czk",
      dkk: "dkk",
      eur: "eur",
      gbp: "gbp",
      hkd: "hkd",
      jpy: "jpy",
      myr: "myr",
      nok: "nok",
      nzd: "nzd",
      pln: "pln",
      sek: "sek",
      sgd: "sgd",
      usd: "usd",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationUpdateBodyTippingObj0
 */
const SchemaOut$TerminalConfigurationUpdateBodyTippingObj0: z.ZodType<
  External$TerminalConfigurationUpdateBodyTippingObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationUpdateBodyTippingObj0 // the object to be transformed
> = z
  .object({
    aud: Schemas$TerminalConfigurationUpdateBodyTippingObj0Aud.out.optional(),
    cad: Schemas$TerminalConfigurationUpdateBodyTippingObj0Cad.out.optional(),
    chf: Schemas$TerminalConfigurationUpdateBodyTippingObj0Chf.out.optional(),
    czk: Schemas$TerminalConfigurationUpdateBodyTippingObj0Czk.out.optional(),
    dkk: Schemas$TerminalConfigurationUpdateBodyTippingObj0Dkk.out.optional(),
    eur: Schemas$TerminalConfigurationUpdateBodyTippingObj0Eur.out.optional(),
    gbp: Schemas$TerminalConfigurationUpdateBodyTippingObj0Gbp.out.optional(),
    hkd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Hkd.out.optional(),
    jpy: Schemas$TerminalConfigurationUpdateBodyTippingObj0Jpy.out.optional(),
    myr: Schemas$TerminalConfigurationUpdateBodyTippingObj0Myr.out.optional(),
    nok: Schemas$TerminalConfigurationUpdateBodyTippingObj0Nok.out.optional(),
    nzd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Nzd.out.optional(),
    pln: Schemas$TerminalConfigurationUpdateBodyTippingObj0Pln.out.optional(),
    sek: Schemas$TerminalConfigurationUpdateBodyTippingObj0Sek.out.optional(),
    sgd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Sgd.out.optional(),
    usd: Schemas$TerminalConfigurationUpdateBodyTippingObj0Usd.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      aud: "aud",
      cad: "cad",
      chf: "chf",
      czk: "czk",
      dkk: "dkk",
      eur: "eur",
      gbp: "gbp",
      hkd: "hkd",
      jpy: "jpy",
      myr: "myr",
      nok: "nok",
      nzd: "nzd",
      pln: "pln",
      sek: "sek",
      sgd: "sgd",
      usd: "usd",
    });
  });

export const Schemas$TerminalConfigurationUpdateBodyTippingObj0 = {
  in: SchemaIn$TerminalConfigurationUpdateBodyTippingObj0,
  out: SchemaOut$TerminalConfigurationUpdateBodyTippingObj0,
};
