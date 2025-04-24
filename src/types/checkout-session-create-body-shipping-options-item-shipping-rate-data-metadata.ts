import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
 */
export type CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata =
  {
    [additionalProperty: string]: string | null | undefined;
  };

/**
 * @internal
 * CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata =
  {
    [additionalProperty: string]:
      | External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
      | null
      | undefined;
  };

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
 */
const SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata: z.ZodType<
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata
 */
const SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata: z.ZodType<
  External$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata // the object to be transformed
> = z
  .object({})
  .catchall(z.string())
  .transform((obj) => {
    return zodTransform(obj, {});
  });

export const Schemas$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata =
  {
    in: SchemaIn$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata,
    out: SchemaOut$CheckoutSessionCreateBodyShippingOptionsItemShippingRateDataMetadata,
  };
