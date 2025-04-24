import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type AccountGroupMembership = {
  /**
   * The group the account is in to determine their payments pricing, and null if the account is on customized pricing. [See the Platform pricing tool documentation](https://stripe.com/docs/connect/platform-pricing-tools) for details.
   */
  paymentsPricing?: string | null | undefined;
};

/**
 * @internal
 * AccountGroupMembership without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$AccountGroupMembership = {
  payments_pricing?: string | null | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object AccountGroupMembership
 */
const SchemaIn$AccountGroupMembership: z.ZodType<
  AccountGroupMembership, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    payments_pricing: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      payments_pricing: "paymentsPricing",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$AccountGroupMembership
 */
const SchemaOut$AccountGroupMembership: z.ZodType<
  External$AccountGroupMembership, // output type of this zod object
  z.ZodTypeDef,
  AccountGroupMembership // the object to be transformed
> = z
  .object({
    paymentsPricing: z.string().nullable().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      paymentsPricing: "payments_pricing",
    });
  });

export const Schemas$AccountGroupMembership = {
  in: SchemaIn$AccountGroupMembership,
  out: SchemaOut$AccountGroupMembership,
};
