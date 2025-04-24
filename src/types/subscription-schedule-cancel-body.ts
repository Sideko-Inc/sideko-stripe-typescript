import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionScheduleCancelBody
 */
export type SubscriptionScheduleCancelBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * If the subscription schedule is `active`, indicates if a final invoice will be generated that contains any un-invoiced metered usage and new/pending proration invoice items. Defaults to `true`.
   */
  invoiceNow?: boolean | undefined;
  /**
   * If the subscription schedule is `active`, indicates if the cancellation should be prorated. Defaults to `true`.
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
 * SubscriptionScheduleCancelBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionScheduleCancelBody = {
  expand?: string[] | undefined;
  invoice_now?: boolean | undefined;
  prorate?: boolean | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | External$SubscriptionScheduleCancelBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionScheduleCancelBody
 */
const SchemaIn$SubscriptionScheduleCancelBody: z.ZodType<
  SubscriptionScheduleCancelBody, // output type of this zod object
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionScheduleCancelBody
 */
const SchemaOut$SubscriptionScheduleCancelBody: z.ZodType<
  External$SubscriptionScheduleCancelBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionScheduleCancelBody // the object to be transformed
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

export const Schemas$SubscriptionScheduleCancelBody = {
  in: SchemaIn$SubscriptionScheduleCancelBody,
  out: SchemaOut$SubscriptionScheduleCancelBody,
};
