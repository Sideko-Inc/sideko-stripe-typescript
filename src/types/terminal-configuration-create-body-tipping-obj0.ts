import {
  External$TerminalConfigurationCreateBodyTippingObj0Aud,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Aud,
  TerminalConfigurationCreateBodyTippingObj0Aud,
} from "./terminal-configuration-create-body-tipping-obj0-aud";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Cad,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Cad,
  TerminalConfigurationCreateBodyTippingObj0Cad,
} from "./terminal-configuration-create-body-tipping-obj0-cad";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Chf,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Chf,
  TerminalConfigurationCreateBodyTippingObj0Chf,
} from "./terminal-configuration-create-body-tipping-obj0-chf";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Czk,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Czk,
  TerminalConfigurationCreateBodyTippingObj0Czk,
} from "./terminal-configuration-create-body-tipping-obj0-czk";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Dkk,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Dkk,
  TerminalConfigurationCreateBodyTippingObj0Dkk,
} from "./terminal-configuration-create-body-tipping-obj0-dkk";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Eur,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Eur,
  TerminalConfigurationCreateBodyTippingObj0Eur,
} from "./terminal-configuration-create-body-tipping-obj0-eur";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Gbp,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Gbp,
  TerminalConfigurationCreateBodyTippingObj0Gbp,
} from "./terminal-configuration-create-body-tipping-obj0-gbp";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Hkd,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Hkd,
  TerminalConfigurationCreateBodyTippingObj0Hkd,
} from "./terminal-configuration-create-body-tipping-obj0-hkd";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Jpy,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Jpy,
  TerminalConfigurationCreateBodyTippingObj0Jpy,
} from "./terminal-configuration-create-body-tipping-obj0-jpy";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Myr,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Myr,
  TerminalConfigurationCreateBodyTippingObj0Myr,
} from "./terminal-configuration-create-body-tipping-obj0-myr";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Nok,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Nok,
  TerminalConfigurationCreateBodyTippingObj0Nok,
} from "./terminal-configuration-create-body-tipping-obj0-nok";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Nzd,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Nzd,
  TerminalConfigurationCreateBodyTippingObj0Nzd,
} from "./terminal-configuration-create-body-tipping-obj0-nzd";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Pln,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Pln,
  TerminalConfigurationCreateBodyTippingObj0Pln,
} from "./terminal-configuration-create-body-tipping-obj0-pln";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Sek,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Sek,
  TerminalConfigurationCreateBodyTippingObj0Sek,
} from "./terminal-configuration-create-body-tipping-obj0-sek";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Sgd,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Sgd,
  TerminalConfigurationCreateBodyTippingObj0Sgd,
} from "./terminal-configuration-create-body-tipping-obj0-sgd";
import {
  External$TerminalConfigurationCreateBodyTippingObj0Usd,
  Schemas$TerminalConfigurationCreateBodyTippingObj0Usd,
  TerminalConfigurationCreateBodyTippingObj0Usd,
} from "./terminal-configuration-create-body-tipping-obj0-usd";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TerminalConfigurationCreateBodyTippingObj0
 */
export type TerminalConfigurationCreateBodyTippingObj0 = {
  aud?: TerminalConfigurationCreateBodyTippingObj0Aud | undefined;
  cad?: TerminalConfigurationCreateBodyTippingObj0Cad | undefined;
  chf?: TerminalConfigurationCreateBodyTippingObj0Chf | undefined;
  czk?: TerminalConfigurationCreateBodyTippingObj0Czk | undefined;
  dkk?: TerminalConfigurationCreateBodyTippingObj0Dkk | undefined;
  eur?: TerminalConfigurationCreateBodyTippingObj0Eur | undefined;
  gbp?: TerminalConfigurationCreateBodyTippingObj0Gbp | undefined;
  hkd?: TerminalConfigurationCreateBodyTippingObj0Hkd | undefined;
  jpy?: TerminalConfigurationCreateBodyTippingObj0Jpy | undefined;
  myr?: TerminalConfigurationCreateBodyTippingObj0Myr | undefined;
  nok?: TerminalConfigurationCreateBodyTippingObj0Nok | undefined;
  nzd?: TerminalConfigurationCreateBodyTippingObj0Nzd | undefined;
  pln?: TerminalConfigurationCreateBodyTippingObj0Pln | undefined;
  sek?: TerminalConfigurationCreateBodyTippingObj0Sek | undefined;
  sgd?: TerminalConfigurationCreateBodyTippingObj0Sgd | undefined;
  usd?: TerminalConfigurationCreateBodyTippingObj0Usd | undefined;
};

/**
 * @internal
 * TerminalConfigurationCreateBodyTippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationCreateBodyTippingObj0 = {
  aud?: External$TerminalConfigurationCreateBodyTippingObj0Aud | undefined;
  cad?: External$TerminalConfigurationCreateBodyTippingObj0Cad | undefined;
  chf?: External$TerminalConfigurationCreateBodyTippingObj0Chf | undefined;
  czk?: External$TerminalConfigurationCreateBodyTippingObj0Czk | undefined;
  dkk?: External$TerminalConfigurationCreateBodyTippingObj0Dkk | undefined;
  eur?: External$TerminalConfigurationCreateBodyTippingObj0Eur | undefined;
  gbp?: External$TerminalConfigurationCreateBodyTippingObj0Gbp | undefined;
  hkd?: External$TerminalConfigurationCreateBodyTippingObj0Hkd | undefined;
  jpy?: External$TerminalConfigurationCreateBodyTippingObj0Jpy | undefined;
  myr?: External$TerminalConfigurationCreateBodyTippingObj0Myr | undefined;
  nok?: External$TerminalConfigurationCreateBodyTippingObj0Nok | undefined;
  nzd?: External$TerminalConfigurationCreateBodyTippingObj0Nzd | undefined;
  pln?: External$TerminalConfigurationCreateBodyTippingObj0Pln | undefined;
  sek?: External$TerminalConfigurationCreateBodyTippingObj0Sek | undefined;
  sgd?: External$TerminalConfigurationCreateBodyTippingObj0Sgd | undefined;
  usd?: External$TerminalConfigurationCreateBodyTippingObj0Usd | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationCreateBodyTippingObj0
 */
const SchemaIn$TerminalConfigurationCreateBodyTippingObj0: z.ZodType<
  TerminalConfigurationCreateBodyTippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aud: Schemas$TerminalConfigurationCreateBodyTippingObj0Aud.in.optional(),
    cad: Schemas$TerminalConfigurationCreateBodyTippingObj0Cad.in.optional(),
    chf: Schemas$TerminalConfigurationCreateBodyTippingObj0Chf.in.optional(),
    czk: Schemas$TerminalConfigurationCreateBodyTippingObj0Czk.in.optional(),
    dkk: Schemas$TerminalConfigurationCreateBodyTippingObj0Dkk.in.optional(),
    eur: Schemas$TerminalConfigurationCreateBodyTippingObj0Eur.in.optional(),
    gbp: Schemas$TerminalConfigurationCreateBodyTippingObj0Gbp.in.optional(),
    hkd: Schemas$TerminalConfigurationCreateBodyTippingObj0Hkd.in.optional(),
    jpy: Schemas$TerminalConfigurationCreateBodyTippingObj0Jpy.in.optional(),
    myr: Schemas$TerminalConfigurationCreateBodyTippingObj0Myr.in.optional(),
    nok: Schemas$TerminalConfigurationCreateBodyTippingObj0Nok.in.optional(),
    nzd: Schemas$TerminalConfigurationCreateBodyTippingObj0Nzd.in.optional(),
    pln: Schemas$TerminalConfigurationCreateBodyTippingObj0Pln.in.optional(),
    sek: Schemas$TerminalConfigurationCreateBodyTippingObj0Sek.in.optional(),
    sgd: Schemas$TerminalConfigurationCreateBodyTippingObj0Sgd.in.optional(),
    usd: Schemas$TerminalConfigurationCreateBodyTippingObj0Usd.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationCreateBodyTippingObj0
 */
const SchemaOut$TerminalConfigurationCreateBodyTippingObj0: z.ZodType<
  External$TerminalConfigurationCreateBodyTippingObj0, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationCreateBodyTippingObj0 // the object to be transformed
> = z
  .object({
    aud: Schemas$TerminalConfigurationCreateBodyTippingObj0Aud.out.optional(),
    cad: Schemas$TerminalConfigurationCreateBodyTippingObj0Cad.out.optional(),
    chf: Schemas$TerminalConfigurationCreateBodyTippingObj0Chf.out.optional(),
    czk: Schemas$TerminalConfigurationCreateBodyTippingObj0Czk.out.optional(),
    dkk: Schemas$TerminalConfigurationCreateBodyTippingObj0Dkk.out.optional(),
    eur: Schemas$TerminalConfigurationCreateBodyTippingObj0Eur.out.optional(),
    gbp: Schemas$TerminalConfigurationCreateBodyTippingObj0Gbp.out.optional(),
    hkd: Schemas$TerminalConfigurationCreateBodyTippingObj0Hkd.out.optional(),
    jpy: Schemas$TerminalConfigurationCreateBodyTippingObj0Jpy.out.optional(),
    myr: Schemas$TerminalConfigurationCreateBodyTippingObj0Myr.out.optional(),
    nok: Schemas$TerminalConfigurationCreateBodyTippingObj0Nok.out.optional(),
    nzd: Schemas$TerminalConfigurationCreateBodyTippingObj0Nzd.out.optional(),
    pln: Schemas$TerminalConfigurationCreateBodyTippingObj0Pln.out.optional(),
    sek: Schemas$TerminalConfigurationCreateBodyTippingObj0Sek.out.optional(),
    sgd: Schemas$TerminalConfigurationCreateBodyTippingObj0Sgd.out.optional(),
    usd: Schemas$TerminalConfigurationCreateBodyTippingObj0Usd.out.optional(),
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

export const Schemas$TerminalConfigurationCreateBodyTippingObj0 = {
  in: SchemaIn$TerminalConfigurationCreateBodyTippingObj0,
  out: SchemaOut$TerminalConfigurationCreateBodyTippingObj0,
};
