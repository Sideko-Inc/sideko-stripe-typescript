import {
  ClimateOrderCreateBodyBeneficiary,
  External$ClimateOrderCreateBodyBeneficiary,
  Schemas$ClimateOrderCreateBodyBeneficiary,
} from "./climate-order-create-body-beneficiary";
import {
  ClimateOrderCreateBodyMetadata,
  External$ClimateOrderCreateBodyMetadata,
  Schemas$ClimateOrderCreateBodyMetadata,
} from "./climate-order-create-body-metadata";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * ClimateOrderCreateBody
 */
export type ClimateOrderCreateBody = {
  /**
   * Requested amount of carbon removal units. Either this or `metric_tons` must be specified.
   */
  amount?: number | undefined;
  /**
   * Publicly sharable reference for the end beneficiary of carbon removal. Assumed to be the Stripe account if not set.
   */
  beneficiary?: ClimateOrderCreateBodyBeneficiary | undefined;
  /**
   * Request currency for the order as a three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a supported [settlement currency for your account](https://stripe.com/docs/currencies). If omitted, the account's default currency will be used.
   */
  currency?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: ClimateOrderCreateBodyMetadata | undefined;
  /**
   * Requested number of tons for the order. Either this or `amount` must be specified.
   */
  metricTons?: string | undefined;
  /**
   * Unique identifier of the Climate product.
   */
  product: string;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (number | undefined)
    | (ClimateOrderCreateBodyBeneficiary | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (ClimateOrderCreateBodyMetadata | undefined)
    | (string | undefined)
    | string
    | any
    | null
    | undefined;
};

/**
 * @internal
 * ClimateOrderCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ClimateOrderCreateBody = {
  amount?: number | undefined;
  beneficiary?: External$ClimateOrderCreateBodyBeneficiary | undefined;
  currency?: string | undefined;
  expand?: string[] | undefined;
  metadata?: External$ClimateOrderCreateBodyMetadata | undefined;
  metric_tons?: string | undefined;
  product: string;

  [additionalProperty: string]:
    | (number | undefined)
    | (External$ClimateOrderCreateBodyBeneficiary | undefined)
    | (string | undefined)
    | (string[] | undefined)
    | (External$ClimateOrderCreateBodyMetadata | undefined)
    | (string | undefined)
    | string
    | External$ClimateOrderCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ClimateOrderCreateBody
 */
const SchemaIn$ClimateOrderCreateBody: z.ZodType<
  ClimateOrderCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amount: z.number().int().optional(),
    beneficiary: Schemas$ClimateOrderCreateBodyBeneficiary.in.optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderCreateBodyMetadata.in.optional(),
    metric_tons: z.string().optional(),
    product: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      beneficiary: "beneficiary",
      currency: "currency",
      expand: "expand",
      metadata: "metadata",
      metric_tons: "metricTons",
      product: "product",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ClimateOrderCreateBody
 */
const SchemaOut$ClimateOrderCreateBody: z.ZodType<
  External$ClimateOrderCreateBody, // output type of this zod object
  z.ZodTypeDef,
  ClimateOrderCreateBody // the object to be transformed
> = z
  .object({
    amount: z.number().int().optional(),
    beneficiary: Schemas$ClimateOrderCreateBodyBeneficiary.out.optional(),
    currency: z.string().optional(),
    expand: z.array(z.string()).optional(),
    metadata: Schemas$ClimateOrderCreateBodyMetadata.out.optional(),
    metricTons: z.string().optional(),
    product: z.string(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      amount: "amount",
      beneficiary: "beneficiary",
      currency: "currency",
      expand: "expand",
      metadata: "metadata",
      metricTons: "metric_tons",
      product: "product",
    });
  });

export const Schemas$ClimateOrderCreateBody = {
  in: SchemaIn$ClimateOrderCreateBody,
  out: SchemaOut$ClimateOrderCreateBody,
};
