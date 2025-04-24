import {
  ChargeRefundUpdateBodyMetadataObj0,
  External$ChargeRefundUpdateBodyMetadataObj0,
  Schemas$ChargeRefundUpdateBodyMetadataObj0,
} from "./charge-refund-update-body-metadata-obj0";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ChargeRefundUpdateBody
 */
export type ChargeRefundUpdateBody = {
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  metadata?: (ChargeRefundUpdateBodyMetadataObj0 | string) | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string[] | undefined)
    | ((ChargeRefundUpdateBodyMetadataObj0 | string) | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ChargeRefundUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ChargeRefundUpdateBody = {
  expand?: string[] | undefined;
  metadata?: (External$ChargeRefundUpdateBodyMetadataObj0 | string) | undefined;

  [additionalProperty: string]:
    | (string[] | undefined)
    | ((External$ChargeRefundUpdateBodyMetadataObj0 | string) | undefined)
    | External$ChargeRefundUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ChargeRefundUpdateBody
 */
const SchemaIn$ChargeRefundUpdateBody: z.ZodType<
  ChargeRefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeRefundUpdateBodyMetadataObj0.in, z.string()])
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ChargeRefundUpdateBody
 */
const SchemaOut$ChargeRefundUpdateBody: z.ZodType<
  External$ChargeRefundUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ChargeRefundUpdateBody // the object to be transformed
> = z
  .object({
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$ChargeRefundUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$ChargeRefundUpdateBody = {
  in: SchemaIn$ChargeRefundUpdateBody,
  out: SchemaOut$ChargeRefundUpdateBody,
};
