import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Contains additional details about the status of a payment method for a specific payment method domain.
 */
export type PaymentMethodDomainResourcePaymentMethodStatusDetails = {
  /**
   * The error message associated with the status of the payment method on the domain.
   */
  errorMessage: string;
};

/**
 * @internal
 * PaymentMethodDomainResourcePaymentMethodStatusDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDomainResourcePaymentMethodStatusDetails = {
  error_message: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDomainResourcePaymentMethodStatusDetails
 */
const SchemaIn$PaymentMethodDomainResourcePaymentMethodStatusDetails: z.ZodType<
  PaymentMethodDomainResourcePaymentMethodStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    error_message: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      error_message: "errorMessage",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDomainResourcePaymentMethodStatusDetails
 */
const SchemaOut$PaymentMethodDomainResourcePaymentMethodStatusDetails: z.ZodType<
  External$PaymentMethodDomainResourcePaymentMethodStatusDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDomainResourcePaymentMethodStatusDetails // the object to be transformed
> = z
  .object({
    errorMessage: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      errorMessage: "error_message",
    });
  });

export const Schemas$PaymentMethodDomainResourcePaymentMethodStatusDetails = {
  in: SchemaIn$PaymentMethodDomainResourcePaymentMethodStatusDetails,
  out: SchemaOut$PaymentMethodDomainResourcePaymentMethodStatusDetails,
};
