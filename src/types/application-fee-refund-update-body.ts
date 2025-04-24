import {
  ApplicationFeeRefundUpdateBodyMetadataObj0,
  External$ApplicationFeeRefundUpdateBodyMetadataObj0,
  Schemas$ApplicationFeeRefundUpdateBodyMetadataObj0,
} from "./application-fee-refund-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ApplicationFeeRefundUpdateBody
 */
export type ApplicationFeeRefundUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (ApplicationFeeRefundUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((ApplicationFeeRefundUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ApplicationFeeRefundUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ApplicationFeeRefundUpdateBody = {
  expand?: string[] | undefined;
  metadata?:
    | (External$ApplicationFeeRefundUpdateBodyMetadataObj0 | string)
    | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | (
        | (External$ApplicationFeeRefundUpdateBodyMetadataObj0 | string)
        | undefined
      )
    | External$ApplicationFeeRefundUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ApplicationFeeRefundUpdateBody
 */
const SchemaIn$ApplicationFeeRefundUpdateBody: z.ZodType<
  ApplicationFeeRefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$ApplicationFeeRefundUpdateBodyMetadataObj0.in,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ApplicationFeeRefundUpdateBody
 */
const SchemaOut$ApplicationFeeRefundUpdateBody: z.ZodType<
  External$ApplicationFeeRefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ApplicationFeeRefundUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([
        Schemas$ApplicationFeeRefundUpdateBodyMetadataObj0.out,
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$ApplicationFeeRefundUpdateBody = {
  in: SchemaIn$ApplicationFeeRefundUpdateBody,
  out: SchemaOut$ApplicationFeeRefundUpdateBody,
};
