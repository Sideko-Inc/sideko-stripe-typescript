import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodDomainUpdateBody
 */
export type PaymentMethodDomainUpdateBody = {
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements or Embedded Checkout.
   */
  enabled?: boolean | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodDomainUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDomainUpdateBody = {
  enabled?: boolean | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | (boolean | undefined)
    | (string[] | undefined)
    | External$PaymentMethodDomainUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDomainUpdateBody
 */
const SchemaIn$PaymentMethodDomainUpdateBody: z.ZodType<
  PaymentMethodDomainUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDomainUpdateBody
 */
const SchemaOut$PaymentMethodDomainUpdateBody: z.ZodType<
  External$PaymentMethodDomainUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDomainUpdateBody // the object to be transformed
> = z
  .object({
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      enabled: "enabled",
      expand: "expand",
    });
  });

export const Schemas$PaymentMethodDomainUpdateBody = {
  in: SchemaIn$PaymentMethodDomainUpdateBody,
  out: SchemaOut$PaymentMethodDomainUpdateBody,
};
