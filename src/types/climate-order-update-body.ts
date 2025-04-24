import {
  ClimateOrderUpdateBodyBeneficiaryObj0,
  External$ClimateOrderUpdateBodyBeneficiaryObj0,
  Schemas$ClimateOrderUpdateBodyBeneficiaryObj0,
} from "./climate-order-update-body-beneficiary-obj0";
import {
  ClimateOrderUpdateBodyMetadata,
  External$ClimateOrderUpdateBodyMetadata,
  Schemas$ClimateOrderUpdateBodyMetadata,
} from "./climate-order-update-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ClimateOrderUpdateBody
 */
export type ClimateOrderUpdateBody = {
  /**
   * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
   */
  beneficiary?: (ClimateOrderUpdateBodyBeneficiaryObj0 | string) | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ClimateOrderUpdateBodyMetadata | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | ((ClimateOrderUpdateBodyBeneficiaryObj0 | string) | undefined)
    | (string[] | undefined)
    | (ClimateOrderUpdateBodyMetadata | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ClimateOrderUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrderUpdateBody = {
  beneficiary?:
    | (External$ClimateOrderUpdateBodyBeneficiaryObj0 | string)
    | undefined;
  expand?: string[] | undefined;
  metadata?: External$ClimateOrderUpdateBodyMetadata | undefined;

  [additionalProperty: string]:
    | ((External$ClimateOrderUpdateBodyBeneficiaryObj0 | string) | undefined)
    | (string[] | undefined)
    | (External$ClimateOrderUpdateBodyMetadata | undefined)
    | External$ClimateOrderUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrderUpdateBody
 */
const SchemaIn$ClimateOrderUpdateBody: z.ZodType<
  ClimateOrderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    beneficiary: z
      .union([Schemas$ClimateOrderUpdateBodyBeneficiaryObj0.in, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderUpdateBodyMetadata.in.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      beneficiary: "beneficiary",
      expand: "expand",
      metadata: "metadata",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrderUpdateBody
 */
const SchemaOut$ClimateOrderUpdateBody: z.ZodType<
  External$ClimateOrderUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrderUpdateBody // the object to be transformed
> = z
  .object({
    beneficiary: z
      .union([Schemas$ClimateOrderUpdateBodyBeneficiaryObj0.out, z.string()])
      .optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderUpdateBodyMetadata.out.optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      beneficiary: "beneficiary",
      expand: "expand",
      metadata: "metadata",
    });
  });

export const Schemas$ClimateOrderUpdateBody = {
  in: SchemaIn$ClimateOrderUpdateBody,
  out: SchemaOut$ClimateOrderUpdateBody,
};
