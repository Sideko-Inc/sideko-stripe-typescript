import {
  External$PromotionCodeUpdateBodyMetadataObj0,
  PromotionCodeUpdateBodyMetadataObj0,
  Schemas$PromotionCodeUpdateBodyMetadataObj0,
} from "./promotion-code-update-body-metadata-obj0";
import {
  External$PromotionCodeUpdateBodyRestrictions,
  PromotionCodeUpdateBodyRestrictions,
  Schemas$PromotionCodeUpdateBodyRestrictions,
} from "./promotion-code-update-body-restrictions";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PromotionCodeUpdateBody
 */
export type PromotionCodeUpdateBody = {
  /**
   * Whether the promotion code is currently active. A promotion code can only be reactivated when the coupon is still valid and the promotion code is otherwise redeemable.
   */
  active?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (PromotionCodeUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * Settings that restrict the redemption of the promotion code.
   */
  restrictions?: PromotionCodeUpdateBodyRestrictions | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((PromotionCodeUpdateBodyMetadataObj0 | string) | undefined)
    | (PromotionCodeUpdateBodyRestrictions | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PromotionCodeUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PromotionCodeUpdateBody = {
  active?: boolean | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$PromotionCodeUpdateBodyMetadataObj0 | string)
    | undefined;
  restrictions?: External$PromotionCodeUpdateBodyRestrictions | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | ((External$PromotionCodeUpdateBodyMetadataObj0 | string) | undefined)
    | (External$PromotionCodeUpdateBodyRestrictions | undefined)
    | External$PromotionCodeUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PromotionCodeUpdateBody
 */
const SchemaIn$PromotionCodeUpdateBody: z.ZodType<
  PromotionCodeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PromotionCodeUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    restrictions: Schemas$PromotionCodeUpdateBodyRestrictions.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      restrictions: "restrictions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PromotionCodeUpdateBody
 */
const SchemaOut$PromotionCodeUpdateBody: z.ZodType<
  External$PromotionCodeUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PromotionCodeUpdateBody // the object to be transformed
> = z
  .object({
    active: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$PromotionCodeUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    restrictions: Schemas$PromotionCodeUpdateBodyRestrictions.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      active: "active",
      expand: "expand",
      metadata: "metadata",
      restrictions: "restrictions",
    });
  });

export const Schemas$PromotionCodeUpdateBody = {
  in: SchemaIn$PromotionCodeUpdateBody,
  out: SchemaOut$PromotionCodeUpdateBody,
};
