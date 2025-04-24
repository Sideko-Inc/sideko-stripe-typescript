import {
  External$PaymentMethodDomainResourcePaymentMethodStatusDetails,
  PaymentMethodDomainResourcePaymentMethodStatusDetails,
  Schemas$PaymentMethodDomainResourcePaymentMethodStatusDetails,
} from "./payment-method-domain-resource-payment-method-status-details";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Indicates the status of a specific payment method on a payment method domain.
 */
export type PaymentMethodDomainResourcePaymentMethodStatus = {
  /**
   * The status of the payment method on the domain.
   */
  status: "active" | "inactive";
  /**
   * Contains additional details about the status of a payment method for a specific payment method domain.
   */
  statusDetails?:
    | PaymentMethodDomainResourcePaymentMethodStatusDetails
    | undefined;
};

/**
 * @internal
 * PaymentMethodDomainResourcePaymentMethodStatus without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentMethodDomainResourcePaymentMethodStatus = {
  status: "active" | "inactive";
  status_details?:
    | External$PaymentMethodDomainResourcePaymentMethodStatusDetails
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentMethodDomainResourcePaymentMethodStatus
 */
const SchemaIn$PaymentMethodDomainResourcePaymentMethodStatus: z.ZodType<
  PaymentMethodDomainResourcePaymentMethodStatus, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    status: z.enum(["active", "inactive"]),
    status_details:
      Schemas$PaymentMethodDomainResourcePaymentMethodStatusDetails.in.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      status_details: "statusDetails",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentMethodDomainResourcePaymentMethodStatus
 */
const SchemaOut$PaymentMethodDomainResourcePaymentMethodStatus: z.ZodType<
  External$PaymentMethodDomainResourcePaymentMethodStatus, // output type of this zod object
  z.ZodTypeDef,
  PaymentMethodDomainResourcePaymentMethodStatus // the object to be transformed
> = z
  .object({
    status: z.enum(["active", "inactive"]),
    statusDetails:
      Schemas$PaymentMethodDomainResourcePaymentMethodStatusDetails.out.optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      status: "status",
      statusDetails: "status_details",
    });
  });

export const Schemas$PaymentMethodDomainResourcePaymentMethodStatus = {
  in: SchemaIn$PaymentMethodDomainResourcePaymentMethodStatus,
  out: SchemaOut$PaymentMethodDomainResourcePaymentMethodStatus,
};
