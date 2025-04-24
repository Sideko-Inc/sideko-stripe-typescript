import {
  CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures,
  External$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures,
  Schemas$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures,
} from "./customer-session-resource-components-resource-payment-element-resource-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This hash contains whether the Payment Element is enabled and the features it supports.
 */
export type CustomerSessionResourceComponentsResourcePaymentElement = {
  /**
   * Whether the Payment Element is enabled.
   */
  enabled: boolean;
  /**
   * This hash contains the features the Payment Element supports.
   */
  features?:
    | CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures
    | undefined;
};

/**
 * @internal
 * CustomerSessionResourceComponentsResourcePaymentElement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionResourceComponentsResourcePaymentElement = {
  enabled: boolean;
  features?:
    | External$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionResourceComponentsResourcePaymentElement
 */
const SchemaIn$CustomerSessionResourceComponentsResourcePaymentElement: z.ZodType<
  CustomerSessionResourceComponentsResourcePaymentElement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionResourceComponentsResourcePaymentElement
 */
const SchemaOut$CustomerSessionResourceComponentsResourcePaymentElement: z.ZodType<
  External$CustomerSessionResourceComponentsResourcePaymentElement, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionResourceComponentsResourcePaymentElement // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$CustomerSessionResourceComponentsResourcePaymentElementResourceFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$CustomerSessionResourceComponentsResourcePaymentElement = {
  in: SchemaIn$CustomerSessionResourceComponentsResourcePaymentElement,
  out: SchemaOut$CustomerSessionResourceComponentsResourcePaymentElement,
};
