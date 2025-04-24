import {
  External$SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
  Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
  SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0,
} from "./setup-intent-confirm-body-payment-method-data-billing-details-address-obj0";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * SetupIntentConfirmBodyPaymentMethodDataBillingDetails
 */
export type SetupIntentConfirmBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * @internal
 * SetupIntentConfirmBodyPaymentMethodDataBillingDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$SetupIntentConfirmBodyPaymentMethodDataBillingDetails = {
  address?:
    | (
        | External$SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0
        | string
      )
    | undefined;
  email?: (string | string) | undefined;
  name?: (string | string) | undefined;
  phone?: (string | string) | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object SetupIntentConfirmBodyPaymentMethodDataBillingDetails
 */
const SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBillingDetails: z.ZodType<
  SetupIntentConfirmBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0.in,
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$SetupIntentConfirmBodyPaymentMethodDataBillingDetails
 */
const SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBillingDetails: z.ZodType<
  External$SetupIntentConfirmBodyPaymentMethodDataBillingDetails, // output type of this zod object
  z.ZodTypeDef,
  SetupIntentConfirmBodyPaymentMethodDataBillingDetails // the object to be transformed
> = z
  .object({
    address: z
      .union([
        Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetailsAddressObj0.out,
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

export const Schemas$SetupIntentConfirmBodyPaymentMethodDataBillingDetails = {
  in: SchemaIn$SetupIntentConfirmBodyPaymentMethodDataBillingDetails,
  out: SchemaOut$SetupIntentConfirmBodyPaymentMethodDataBillingDetails,
};
