import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSubscriptionDeleteBody
 */
export type CustomerSubscriptionDeleteBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Can be set to `true` if `at_period_end` is not set to `true`. Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items.
   */
  invoiceNow?: boolean | undefined;
  /**
   * Can be set to `true` if `at_period_end` is not set to `true`. Will generate a proration invoice item that credits remaining unused time until the subscription period end.
   */
  prorate?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CustomerSubscriptionDeleteBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSubscriptionDeleteBody = {
  expand?: string[] | undefined;
  invoice_now?: boolean | undefined;
  prorate?: boolean | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | External$CustomerSubscriptionDeleteBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSubscriptionDeleteBody
 */
const SchemaIn$CustomerSubscriptionDeleteBody: z.ZodType<
  CustomerSubscriptionDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoice_now: z.boolean().optional(),
    prorate: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoice_now: "invoiceNow",
      prorate: "prorate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSubscriptionDeleteBody
 */
const SchemaOut$CustomerSubscriptionDeleteBody: z.ZodType<
  External$CustomerSubscriptionDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  CustomerSubscriptionDeleteBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    invoiceNow: z.boolean().optional(),
    prorate: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      invoiceNow: "invoice_now",
      prorate: "prorate",
    });
  });

export const Schemas$CustomerSubscriptionDeleteBody = {
  in: SchemaIn$CustomerSubscriptionDeleteBody,
  out: SchemaOut$CustomerSubscriptionDeleteBody,
};
