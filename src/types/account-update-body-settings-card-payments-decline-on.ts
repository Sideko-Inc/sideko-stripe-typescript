import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodySettingsCardPaymentsDeclineOn
 */
export type AccountUpdateBodySettingsCardPaymentsDeclineOn = {
  avsFailure?: boolean | undefined;
  cvcFailure?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodySettingsCardPaymentsDeclineOn without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodySettingsCardPaymentsDeclineOn = {
  avs_failure?: boolean | undefined;
  cvc_failure?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodySettingsCardPaymentsDeclineOn
 */
const SchemaIn$AccountUpdateBodySettingsCardPaymentsDeclineOn: z.ZodType<
  AccountUpdateBodySettingsCardPaymentsDeclineOn, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodySettingsCardPaymentsDeclineOn
 */
const SchemaOut$AccountUpdateBodySettingsCardPaymentsDeclineOn: z.ZodType<
  External$AccountUpdateBodySettingsCardPaymentsDeclineOn, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodySettingsCardPaymentsDeclineOn // the object to be transformed
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

export const Schemas$AccountUpdateBodySettingsCardPaymentsDeclineOn = {
  in: SchemaIn$AccountUpdateBodySettingsCardPaymentsDeclineOn,
  out: SchemaOut$AccountUpdateBodySettingsCardPaymentsDeclineOn,
};
