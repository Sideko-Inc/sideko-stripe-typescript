import {
  AccountUpdateBodySettingsCardIssuingTosAcceptance,
  External$AccountUpdateBodySettingsCardIssuingTosAcceptance,
  Schemas$AccountUpdateBodySettingsCardIssuingTosAcceptance,
} from "./account-update-body-settings-card-issuing-tos-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsCardIssuing
 */
export type AccountUpdateBodySettingsCardIssuing = {
  tosAcceptance?: AccountUpdateBodySettingsCardIssuingTosAcceptance | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsCardIssuing = {
  tos_acceptance?:
    | External$AccountUpdateBodySettingsCardIssuingTosAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsCardIssuing
 */
const SchemaIn$AccountUpdateBodySettingsCardIssuing: z.ZodType<
  AccountUpdateBodySettingsCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance:
      Schemas$AccountUpdateBodySettingsCardIssuingTosAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsCardIssuing
 */
const SchemaOut$AccountUpdateBodySettingsCardIssuing: z.ZodType<
  External$AccountUpdateBodySettingsCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsCardIssuing // the object to be transformed
> = z
  .object({
    tosAcceptance:
      Schemas$AccountUpdateBodySettingsCardIssuingTosAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountUpdateBodySettingsCardIssuing = {
  in: SchemaIn$AccountUpdateBodySettingsCardIssuing,
  out: SchemaOut$AccountUpdateBodySettingsCardIssuing,
};
