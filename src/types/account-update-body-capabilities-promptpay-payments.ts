import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesPromptpayPayments
 */
export type AccountUpdateBodyCapabilitiesPromptpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesPromptpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesPromptpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesPromptpayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesPromptpayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesPromptpayPayments, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesPromptpayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesPromptpayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesPromptpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesPromptpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesPromptpayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesPromptpayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesPromptpayPayments,
};
