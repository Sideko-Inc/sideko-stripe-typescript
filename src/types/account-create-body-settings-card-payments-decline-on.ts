import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodySettingsCardPaymentsDeclineOn
 */
export type AccountCreateBodySettingsCardPaymentsDeclineOn = {
  avsFailure?: boolean | undefined;
  cvcFailure?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodySettingsCardPaymentsDeclineOn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodySettingsCardPaymentsDeclineOn = {
  avs_failure?: boolean | undefined;
  cvc_failure?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodySettingsCardPaymentsDeclineOn
 */
const SchemaIn$AccountCreateBodySettingsCardPaymentsDeclineOn: z.ZodType<
  AccountCreateBodySettingsCardPaymentsDeclineOn, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    avs_failure: z.boolean().optional(),
    cvc_failure: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avs_failure: "avsFailure",
      cvc_failure: "cvcFailure",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodySettingsCardPaymentsDeclineOn
 */
const SchemaOut$AccountCreateBodySettingsCardPaymentsDeclineOn: z.ZodType<
  External$AccountCreateBodySettingsCardPaymentsDeclineOn, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodySettingsCardPaymentsDeclineOn // the object to be transformed
> = z
  .object({
    avsFailure: z.boolean().optional(),
    cvcFailure: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      avsFailure: "avs_failure",
      cvcFailure: "cvc_failure",
    });
  });

export const Schemas$AccountCreateBodySettingsCardPaymentsDeclineOn = {
  in: SchemaIn$AccountCreateBodySettingsCardPaymentsDeclineOn,
  out: SchemaOut$AccountCreateBodySettingsCardPaymentsDeclineOn,
};
