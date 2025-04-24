import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountCreateBodyCapabilitiesAmazonPayPayments
 */
export type AccountCreateBodyCapabilitiesAmazonPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountCreateBodyCapabilitiesAmazonPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountCreateBodyCapabilitiesAmazonPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountCreateBodyCapabilitiesAmazonPayPayments
 */
const SchemaIn$AccountCreateBodyCapabilitiesAmazonPayPayments: z.ZodType<
  AccountCreateBodyCapabilitiesAmazonPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountCreateBodyCapabilitiesAmazonPayPayments
 */
const SchemaOut$AccountCreateBodyCapabilitiesAmazonPayPayments: z.ZodType<
  External$AccountCreateBodyCapabilitiesAmazonPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountCreateBodyCapabilitiesAmazonPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountCreateBodyCapabilitiesAmazonPayPayments = {
  in: SchemaIn$AccountCreateBodyCapabilitiesAmazonPayPayments,
  out: SchemaOut$AccountCreateBodyCapabilitiesAmazonPayPayments,
};
