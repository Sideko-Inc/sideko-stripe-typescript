import {
  External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
  PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./payment-intent-confirm-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * PaymentIntentConfirmBodyPaymentMethodDataBillingDetails
 */
export type PaymentIntentConfirmBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * PaymentIntentConfirmBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object PaymentIntentConfirmBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails: z.ZodType<
  PaymentIntentConfirmBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0.in,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  PaymentIntentConfirmBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0.out,
        z.string(),
      ])
      .optional(),
    email: z.union([z.string(), z.string()]).optional(),
    name: z.union([z.string(), z.string()]).optional(),
    phone: z.union([z.string(), z.string()]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      email: "email",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$PaymentIntentConfirmBodyPaymentMethodDataBillingDetails,
};
