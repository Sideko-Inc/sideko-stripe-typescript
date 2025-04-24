import {
  AccountTermsOfService,
  External$AccountTermsOfService,
  Schemas$AccountTermsOfService,
} from "./account-terms-of-service";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountTreasurySettings = {
  tosAcceptance?: AccountTermsOfService | undefined;
};

/**
 * @internal
 * AccountTreasurySettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountTreasurySettings = {
  tos_acceptance?: External$AccountTermsOfService | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountTreasurySettings
 */
const SchemaIn$AccountTreasurySettings: z.ZodType<
  AccountTreasurySettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance: Schemas$AccountTermsOfService.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountTreasurySettings
 */
const SchemaOut$AccountTreasurySettings: z.ZodType<
  External$AccountTreasurySettings, // output type of this zod object
  z.ZodTypeDef,
  AccountTreasurySettings // the object to be transformed
> = z
  .object({
    tosAcceptance: Schemas$AccountTermsOfService.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountTreasurySettings = {
  in: SchemaIn$AccountTreasurySettings,
  out: SchemaOut$AccountTreasurySettings,
};
