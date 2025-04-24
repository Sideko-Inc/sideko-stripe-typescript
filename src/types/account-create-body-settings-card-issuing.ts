import {
  AccountCreateBodySettingsCardIssuingTosAcceptance,
  External$AccountCreateBodySettingsCardIssuingTosAcceptance,
  Schemas$AccountCreateBodySettingsCardIssuingTosAcceptance,
} from "./account-create-body-settings-card-issuing-tos-acceptance";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsCardIssuing
 */
export type AccountCreateBodySettingsCardIssuing = {
  tosAcceptance?: AccountCreateBodySettingsCardIssuingTosAcceptance | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsCardIssuing without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsCardIssuing = {
  tos_acceptance?:
    | External$AccountCreateBodySettingsCardIssuingTosAcceptance
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsCardIssuing
 */
const SchemaIn$AccountCreateBodySettingsCardIssuing: z.ZodType<
  AccountCreateBodySettingsCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    tos_acceptance:
      Schemas$AccountCreateBodySettingsCardIssuingTosAcceptance.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tos_acceptance: "tosAcceptance",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsCardIssuing
 */
const SchemaOut$AccountCreateBodySettingsCardIssuing: z.ZodType<
  External$AccountCreateBodySettingsCardIssuing, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsCardIssuing // the object to be transformed
> = z
  .object({
    tosAcceptance:
      Schemas$AccountCreateBodySettingsCardIssuingTosAcceptance.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      tosAcceptance: "tos_acceptance",
    });
  });

export const Schemas$AccountCreateBodySettingsCardIssuing = {
  in: SchemaIn$AccountCreateBodySettingsCardIssuing,
  out: SchemaOut$AccountCreateBodySettingsCardIssuing,
};
