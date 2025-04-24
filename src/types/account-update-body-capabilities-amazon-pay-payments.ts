import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * AccountUpdateBodyCapabilitiesAmazonPayPayments
 */
export type AccountUpdateBodyCapabilitiesAmazonPayPayments = {
  requested?: boolean | undefined;
};

/**
 * @internal
 * AccountUpdateBodyCapabilitiesAmazonPayPayments without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountUpdateBodyCapabilitiesAmazonPayPayments = {
  requested?: boolean | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountUpdateBodyCapabilitiesAmazonPayPayments
 */
const SchemaIn$AccountUpdateBodyCapabilitiesAmazonPayPayments: z.ZodType<
  AccountUpdateBodyCapabilitiesAmazonPayPayments, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountUpdateBodyCapabilitiesAmazonPayPayments
 */
const SchemaOut$AccountUpdateBodyCapabilitiesAmazonPayPayments: z.ZodType<
  External$AccountUpdateBodyCapabilitiesAmazonPayPayments, // output type of this zod object
  z.ZodTypeDef,
  AccountUpdateBodyCapabilitiesAmazonPayPayments // the object to be transformed
> = z
  .object({
    requested: z.boolean().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      requested: "requested",
    });
  });

export const Schemas$AccountUpdateBodyCapabilitiesAmazonPayPayments = {
  in: SchemaIn$AccountUpdateBodyCapabilitiesAmazonPayPayments,
  out: SchemaOut$AccountUpdateBodyCapabilitiesAmazonPayPayments,
};
