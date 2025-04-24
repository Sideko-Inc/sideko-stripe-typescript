import {
  CustomerSessionCreateBodyComponentsPaymentElementFeatures,
  External$CustomerSessionCreateBodyComponentsPaymentElementFeatures,
  Schemas$CustomerSessionCreateBodyComponentsPaymentElementFeatures,
} from "./customer-session-create-body-components-payment-element-features";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerSessionCreateBodyComponentsPaymentElement
 */
export type CustomerSessionCreateBodyComponentsPaymentElement = {
  enabled: boolean;
  features?:
    | CustomerSessionCreateBodyComponentsPaymentElementFeatures
    | undefined;
};

/**
 * @internal
 * CustomerSessionCreateBodyComponentsPaymentElement without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerSessionCreateBodyComponentsPaymentElement = {
  enabled: boolean;
  features?:
    | External$CustomerSessionCreateBodyComponentsPaymentElementFeatures
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerSessionCreateBodyComponentsPaymentElement
 */
const SchemaIn$CustomerSessionCreateBodyComponentsPaymentElement: z.ZodType<
  CustomerSessionCreateBodyComponentsPaymentElement, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$CustomerSessionCreateBodyComponentsPaymentElementFeatures.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerSessionCreateBodyComponentsPaymentElement
 */
const SchemaOut$CustomerSessionCreateBodyComponentsPaymentElement: z.ZodType<
  External$CustomerSessionCreateBodyComponentsPaymentElement, // output type of this zod object
  z.ZodTypeDef,
  CustomerSessionCreateBodyComponentsPaymentElement // the object to be transformed
> = z
  .object({
    enabled: z.boolean(),
    features:
      Schemas$CustomerSessionCreateBodyComponentsPaymentElementFeatures.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      features: "features",
    });
  });

export const Schemas$CustomerSessionCreateBodyComponentsPaymentElement = {
  in: SchemaIn$CustomerSessionCreateBodyComponentsPaymentElement,
  out: SchemaOut$CustomerSessionCreateBodyComponentsPaymentElement,
};
