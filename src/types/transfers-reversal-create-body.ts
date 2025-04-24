import {
  External$TransfersReversalCreateBodyMetadataObj0,
  Schemas$TransfersReversalCreateBodyMetadataObj0,
  TransfersReversalCreateBodyMetadataObj0,
} from "./transfers-reversal-create-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * TransfersReversalCreateBody
 */
export type TransfersReversalCreateBody = {
  /**
   * A positive integer in cents (or local equivalent) representing how much of this transfer to reverse. Can only reverse up to the unreversed amount remaining of the transfer. Partial transfer reversals are only allowed for transfers to Stripe Accounts. Defaults to the entire transfer amount.
   */
  amount?: number | undefined;
  /**
   * An arbitrary string which you can attach to a reversal object. This will be unset if you POST an empty value.
   */
  description?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (TransfersReversalCreateBodyMetadataObj0 | string) | undefined;
  /**
   * Boolean indicating whether the application fee should be refunded when reversing this transfer. If a full transfer reversal is given, the full application fee will be refunded. Otherwise, the application fee will be refunded with an amount proportional to the amount of the transfer reversed.
   */
  refundApplicationFee?: boolean | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((TransfersReversalCreateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * TransfersReversalCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TransfersReversalCreateBody = {
  amount?: number | undefined;
  description?: string | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$TransfersReversalCreateBodyMetadataObj0 | string)
    | undefined;
  refund_application_fee?: boolean | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | ((External$TransfersReversalCreateBodyMetadataObj0 | string) | undefined)
    | (boolean | undefined)
    | External$TransfersReversalCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TransfersReversalCreateBody
 */
const SchemaIn$TransfersReversalCreateBody: z.ZodType<
  TransfersReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransfersReversalCreateBodyMetadataObj0.in, z.string()])
      .optional(),
    refund_application_fee: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      refund_application_fee: "refundApplicationFee",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TransfersReversalCreateBody
 */
const SchemaOut$TransfersReversalCreateBody: z.ZodType<
  External$TransfersReversalCreateBody, // output type of this zod object
  z.ZodTypeDef,
  TransfersReversalCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    description: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$TransfersReversalCreateBodyMetadataObj0.out, z.string()])
      .optional(),
    refundApplicationFee: z.boolean().optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      description: "description",
      expand: "expand",
      metadata: "metadata",
      refundApplicationFee: "refund_application_fee",
    });
  });

export const Schemas$TransfersReversalCreateBody = {
  in: SchemaIn$TransfersReversalCreateBody,
  out: SchemaOut$TransfersReversalCreateBody,
};
