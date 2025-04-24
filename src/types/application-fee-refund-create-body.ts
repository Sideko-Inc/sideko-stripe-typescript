import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeRefundCreateBody
 */
export type ApplicationFeeRefundCreateBody = {
  amount?: number | undefined;
  directive?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ApplicationFeeRefundCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefundCreateBody = {
  amount?: number | undefined;
  directive?: string | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (number | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | External$ApplicationFeeRefundCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefundCreateBody
 */
const SchemaIn$ApplicationFeeRefundCreateBody: z.ZodType<
  ApplicationFeeRefundCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    directive: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      directive: "directive",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefundCreateBody
 */
const SchemaOut$ApplicationFeeRefundCreateBody: z.ZodType<
  External$ApplicationFeeRefundCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefundCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    directive: z.string().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      directive: "directive",
      expand: "expand",
    });
  });

export const Schemas$ApplicationFeeRefundCreateBody = {
  in: SchemaIn$ApplicationFeeRefundCreateBody,
  out: SchemaOut$ApplicationFeeRefundCreateBody,
};
