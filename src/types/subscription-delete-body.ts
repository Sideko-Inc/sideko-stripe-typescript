import {
  External$SubscriptionDeleteBodyCancellationDetails,
  Schemas$SubscriptionDeleteBodyCancellationDetails,
  SubscriptionDeleteBodyCancellationDetails,
} from "./subscription-delete-body-cancellation-details";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SubscriptionDeleteBody
 */
export type SubscriptionDeleteBody = {
  /**
   * Details about why this subscription was cancelled
   */
  cancellationDetails?: SubscriptionDeleteBodyCancellationDetails | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Will generate a final invoice that invoices for any un-invoiced metered usage and new/pending proration invoice items. Defaults to `false`.
   */
  invoiceNow?: boolean | undefined;
  /**
   * Will generate a proration invoice item that credits remaining unused time until the subscription period end. Defaults to `false`.
   */
  prorate?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (SubscriptionDeleteBodyCancellationDetails | undefined)
    | (string[] | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * SubscriptionDeleteBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SubscriptionDeleteBody = {
  cancellation_details?:
    | External$SubscriptionDeleteBodyCancellationDetails
    | undefined;
  expand?: string[] | undefined;
  invoice_now?: boolean | undefined;
  prorate?: boolean | undefined;

  [additionalProperty: string]:
    | (External$SubscriptionDeleteBodyCancellationDetails | undefined)
    | (string[] | undefined)
    | (boolean | undefined)
    | (boolean | undefined)
    | External$SubscriptionDeleteBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SubscriptionDeleteBody
 */
const SchemaIn$SubscriptionDeleteBody: z.ZodType<
  SubscriptionDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_details:
      Schemas$SubscriptionDeleteBodyCancellationDetails.in.optional(),
    expand: z.array(z.string()).optional(),
    invoice_now: z.boolean().optional(),
    prorate: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellation_details: "cancellationDetails",
      expand: "expand",
      invoice_now: "invoiceNow",
      prorate: "prorate",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SubscriptionDeleteBody
 */
const SchemaOut$SubscriptionDeleteBody: z.ZodType<
  External$SubscriptionDeleteBody, // output type of this zod object
  z.ZodTypeDef,
  SubscriptionDeleteBody // the object to be transformed
> = z
  .object({
    cancellationDetails:
      Schemas$SubscriptionDeleteBodyCancellationDetails.out.optional(),
    expand: z.array(z.string()).optional(),
    invoiceNow: z.boolean().optional(),
    prorate: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationDetails: "cancellation_details",
      expand: "expand",
      invoiceNow: "invoice_now",
      prorate: "prorate",
    });
  });

export const Schemas$SubscriptionDeleteBody = {
  in: SchemaIn$SubscriptionDeleteBody,
  out: SchemaOut$SubscriptionDeleteBody,
};
