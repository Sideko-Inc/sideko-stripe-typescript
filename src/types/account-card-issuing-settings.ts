import {
  CardIssuingAccountTermsOfService,
  External$CardIssuingAccountTermsOfService,
  Schemas$CardIssuingAccountTermsOfService,
} from "./card-issuing-account-terms-of-service";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountCardIssuingSettings = {
  tosAcceptance?: CardIssuingAccountTermsOfService | undefined;
};

/**
 * @internal
 * AccountCardIssuingSettings without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCardIssuingSettings = {
  tos_acceptance?: External$CardIssuingAccountTermsOfService | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCardIssuingSettings
 */
const SchemaIn$AccountCardIssuingSettings: z.ZodType<
  AccountCardIssuingSettings, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance: Schemas$CardIssuingAccountTermsOfService.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCardIssuingSettings
 */
const SchemaOut$AccountCardIssuingSettings: z.ZodType<
  External$AccountCardIssuingSettings, // output type of this zod object
  z.ZodTypeDef,
  AccountCardIssuingSettings // the object to be transformed
> = z
  .object({
    tosAcceptance: Schemas$CardIssuingAccountTermsOfService.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountCardIssuingSettings = {
  in: SchemaIn$AccountCardIssuingSettings,
  out: SchemaOut$AccountCardIssuingSettings,
};
