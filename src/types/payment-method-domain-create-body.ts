import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentMethodDomainCreateBody
 */
export type PaymentMethodDomainCreateBody = {
  /**
   * The domain name that this payment method domain object represents.
   */
  domainName: string;
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
    | string
    | (boolean | undefined)
    | (string[] | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * PaymentMethodDomainCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDomainCreateBody = {
  domain_name: string;
  enabled?: boolean | undefined;
  expand?: string[] | undefined;

  [additionalProperty: string]:
    | string
    | (boolean | undefined)
    | (string[] | undefined)
    | External$PaymentMethodDomainCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDomainCreateBody
 */
const SchemaIn$PaymentMethodDomainCreateBody: z.ZodType<
  PaymentMethodDomainCreateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    domain_name: z.string(),
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      domain_name: "domainName",
      enabled: "enabled",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDomainCreateBody
 */
const SchemaOut$PaymentMethodDomainCreateBody: z.ZodType<
  External$PaymentMethodDomainCreateBody, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDomainCreateBody // the object to be transformed
> = z
  .object({
    domainName: z.string(),
    enabled: z.boolean().optional(),
    expand: z.array(z.string()).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      domainName: "domain_name",
      enabled: "enabled",
      expand: "expand",
    });
  });

export const Schemas$PaymentMethodDomainCreateBody = {
  in: SchemaIn$PaymentMethodDomainCreateBody,
  out: SchemaOut$PaymentMethodDomainCreateBody,
};
