import {
  External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
  Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
  TerminalConfigurationConfigurationResourceCurrencySpecificConfig,
} from "./terminal-configuration-configuration-resource-currency-specific-config";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TerminalConfigurationConfigurationResourceTipping = {
  aud?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  cad?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  chf?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  czk?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  dkk?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  eur?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  gbp?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  hkd?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  jpy?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  myr?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  nok?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  nzd?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  pln?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  sek?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  sgd?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  usd?:
    | TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
};

/**
 * @internal
 * TerminalConfigurationConfigurationResourceTipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TerminalConfigurationConfigurationResourceTipping = {
  aud?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  cad?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  chf?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  czk?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  dkk?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  eur?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  gbp?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  hkd?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  jpy?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  myr?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  nok?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  nzd?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  pln?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  sek?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  sgd?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
  usd?:
    | External$TerminalConfigurationConfigurationResourceCurrencySpecificConfig
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TerminalConfigurationConfigurationResourceTipping
 */
const SchemaIn$TerminalConfigurationConfigurationResourceTipping: z.ZodType<
  TerminalConfigurationConfigurationResourceTipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    aud: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    cad: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    chf: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    czk: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    dkk: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    eur: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    gbp: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    hkd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    jpy: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    myr: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    nok: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    nzd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    pln: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    sek: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    sgd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
    usd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TerminalConfigurationConfigurationResourceTipping
 */
const SchemaOut$TerminalConfigurationConfigurationResourceTipping: z.ZodType<
  External$TerminalConfigurationConfigurationResourceTipping, // output type of this zod object
  z.ZodTypeDef,
  TerminalConfigurationConfigurationResourceTipping // the object to be transformed
> = z
  .object({
    aud: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    cad: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    chf: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    czk: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    dkk: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    eur: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    gbp: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    hkd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    jpy: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    myr: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    nok: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    nzd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    pln: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    sek: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    sgd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
    usd: Schemas$TerminalConfigurationConfigurationResourceCurrencySpecificConfig.out.optional(),
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

export const Schemas$TerminalConfigurationConfigurationResourceTipping = {
  in: SchemaIn$TerminalConfigurationConfigurationResourceTipping,
  out: SchemaOut$TerminalConfigurationConfigurationResourceTipping,
};
