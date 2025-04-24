import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesPromptpayPayments
 */
export type AccountCreateBodyCapabilitiesPromptpayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesPromptpayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesPromptpayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesPromptpayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesPromptpayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesPromptpayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesPromptpayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesPromptpayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesPromptpayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesPromptpayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesPromptpayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesPromptpayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesPromptpayPayments,
};
