import {
  External$PaymentMethodDomainResourcePaymentMethodStatus,
  PaymentMethodDomainResourcePaymentMethodStatus,
  Schemas$PaymentMethodDomainResourcePaymentMethodStatus,
} from "./payment-method-domain-resource-payment-method-status";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * A payment method domain represents a web domain that you have registered with Stripe.
 * Stripe Elements use registered payment method domains to control where certain payment methods are shown.
 *
 * Related guide: [Payment method domains](https://stripe.com/docs/payments/payment-methods/pmd-registration).
 */
export type PaymentMethodDomain = {
  /**
   * Indicates the status of a specific payment method on a payment method domain.
   */
  amazonPay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Indicates the status of a specific payment method on a payment method domain.
   */
  applePay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The domain name that this payment method domain object represents.
   */
  domainName: string;
  /**
   * Whether this payment method domain is enabled. If the domain is not enabled, payment methods that require a payment method domain will not appear in Elements.
   */
  enabled: boolean;
  /**
   * Indicates the status of a specific payment method on a payment method domain.
   */
  googlePay: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Indicates the status of a specific payment method on a payment method domain.
   */
  link: PaymentMethodDomainResourcePaymentMethodStatus;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "payment_method_domain";
  /**
   * Indicates the status of a specific payment method on a payment method domain.
   */
  paypal: PaymentMethodDomainResourcePaymentMethodStatus;
};

/**
 * @internal
 * PaymentMethodDomain without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDomain = {
  amazon_pay: External$PaymentMethodDomainResourcePaymentMethodStatus;
  apple_pay: External$PaymentMethodDomainResourcePaymentMethodStatus;
  created: number;
  domain_name: string;
  enabled: boolean;
  google_pay: External$PaymentMethodDomainResourcePaymentMethodStatus;
  id: string;
  link: External$PaymentMethodDomainResourcePaymentMethodStatus;
  livemode: boolean;
  object: "payment_method_domain";
  paypal: External$PaymentMethodDomainResourcePaymentMethodStatus;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDomain
 */
const SchemaIn$PaymentMethodDomain: z.ZodType<
  PaymentMethodDomain, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    amazon_pay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.in,
    apple_pay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.in,
    created: z.number().int(),
    domain_name: z.string(),
    enabled: z.boolean(),
    google_pay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.in,
    id: z.string(),
    link: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.in,
    livemode: z.boolean(),
    object: z.enum(["payment_method_domain"]),
    paypal: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amazon_pay: "amazonPay",
      apple_pay: "applePay",
      created: "created",
      domain_name: "domainName",
      enabled: "enabled",
      google_pay: "googlePay",
      id: "id",
      link: "link",
      livemode: "livemode",
      object: "object",
      paypal: "paypal",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDomain
 */
const SchemaOut$PaymentMethodDomain: z.ZodType<
  External$PaymentMethodDomain, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDomain // the object to be transformed
> = z
  .object({
    amazonPay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.out,
    applePay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.out,
    created: z.number().int(),
    domainName: z.string(),
    enabled: z.boolean(),
    googlePay: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.out,
    id: z.string(),
    link: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.out,
    livemode: z.boolean(),
    object: z.enum(["payment_method_domain"]),
    paypal: Schemas$PaymentMethodDomainResourcePaymentMethodStatus.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      amazonPay: "amazon_pay",
      applePay: "apple_pay",
      created: "created",
      domainName: "domain_name",
      enabled: "enabled",
      googlePay: "google_pay",
      id: "id",
      link: "link",
      livemode: "livemode",
      object: "object",
      paypal: "paypal",
    });
  });

export const Schemas$PaymentMethodDomain = {
  in: SchemaIn$PaymentMethodDomain,
  out: SchemaOut$PaymentMethodDomain,
};
