import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Optional parameters for the receiver flow. Can be set only if the source is a receiver (`flow` is `receiver`).
 */
export type SourceCreateBodyReceiver = {
  refundAttributesMethod?: ("email" | "manual" | "none") | undefined;
};

/**
 * @internal
 * SourceCreateBodyReceiver without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SourceCreateBodyReceiver = {
  refund_attributes_method?: ("email" | "manual" | "none") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SourceCreateBodyReceiver
 */
const SchemaIn$SourceCreateBodyReceiver: z.ZodType<
  SourceCreateBodyReceiver, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    refund_attributes_method: z.enum(["email", "manual", "none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refund_attributes_method: "refundAttributesMethod",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SourceCreateBodyReceiver
 */
const SchemaOut$SourceCreateBodyReceiver: z.ZodType<
  External$SourceCreateBodyReceiver, // output type of this zod object
  z.ZodTypeDef,
  SourceCreateBodyReceiver // the object to be transformed
> = z
  .object({
    refundAttributesMethod: z.enum(["email", "manual", "none"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      refundAttributesMethod: "refund_attributes_method",
    });
  });

export const Schemas$SourceCreateBodyReceiver = {
  in: SchemaIn$SourceCreateBodyReceiver,
  out: SchemaOut$SourceCreateBodyReceiver,
};
